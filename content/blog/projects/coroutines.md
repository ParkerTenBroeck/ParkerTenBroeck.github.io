+++
title = "Coroutines"
description = "A java 24 library that adds stackless coroutines to standard java code by transforming method bytecode into state machines at load time"
date = 2025-05-07
updated = 2026-05-13

[taxonomies]
tags = ["java", "bytecode", "coroutines"]
category = ["project"]
+++


With the release of Java 24 came the official Class-File API giving a stable and (relatively) ergonomic interface for reading, writing, and modifying java bytecode. Seeing this I decided to play around with it and see what fun I could have.

The section [Bytecode, Stack Machines, and Registers](#bytecode-stack-machines-and-registers) is an overview of JVM basics.

Likewise, [Coroutines, Futures, and Generators](#coroutines-futures-and-generators) is an overview of stackless lazy Futures and Generators (essentially Rust's model).

If you are comfortable with those topics feel free to skip to [Project](#project).

# Bytecode, Stack Machines, and Registers

Java (and other JVM languages) are compiled to a set of [bytecode instructions](https://en.wikipedia.org/wiki/List_of_JVM_bytecode_instructions). These instructions almost entirely operate on a stack[^iinc] using `0` to `n` operands from the top and pushing `0` to `1` values back onto the stack. It's important to note that this stack is not the call stack, values on it are local and can only be accessed by the stack frame that created them.  

For example the `iadd` instruction pops two integers off the stack then pushes the sum.  

```
| 5 (int) |       | 8 (int) |
| 3 (int) |  ==>  | ....... |
| ....... |       | ....... |
| ....... |       | ....... |
```

A more complex example `invokevirtual "Bar.foo float(int, String)"` which pops 3 values of the stack and pushes 1.
The third value comes from the need for an instance of `Bar` to call `foo` on.


```
| String (ref) |       | 3.14 (float) |
| 3      (int) |       | ............ |
| Bar    (ref) |  ==>  | ............ | 
| ............ |       | ............ |
| ............ |       | ............ |
```

So how is `Bar.foo float(int, String)` actually stored? The actual bytecode instruction looks like this `invokevirtual <methodref_index>` which has a 2 byte index into the class files [`constant_pool`](https://docs.oracle.com/javase/specs/jvms/se23/html/jvms-4.html#jvms-4.4).
 
... The what now? 

## Constant Pool

Inside every `.class` file lies a pool of constant values (`int`'s, `long`'s, `String`'s, ...) and 'type' info (`Class`'s, `Fieldref`'s, `Methodref`'s, ...). 

The former is how programs store string literals and numeric constants[^load_small_constants]

[^load_small_constants]: There are special instructions for loading small values. 
<br><br>
i.e. -1 to 5 for integers

And the latter is how the JVM knows we want to call `long foo(int, String)` on `baz.Bar` 

## Registers

The JVM also has the notion of "local variables" where function arguments and variables defined "on the stack" go. 
These values are loaded/stored from/to the stack using specific bytecode instructions[^iinc]. 

[^iinc]: there is one notable exception to this which is the `iinc` instruction which increments an integer stored in a local variable slot.

<br>

JVM bytecode operates on a much higher level than assembly so much so the bytecode itself is strongly typed and Object-Oriented. 

# Coroutines, Futures, and Generators

Coroutines, in general, are components of a program which suspend and resume cooperatively. A common example of this pattern would be an `Iterator`. We call `iter.next()` and hand control to the function while it performs *some* computation, with the expectation that it will return the next value in our iterator. Ignoring the mess of `.hasNext()`, we see that each time we call `.next()`, the iterator resumes, computes the next value, suspends its current state, yields our value, and resumes again upon the next `.next()` call.

Both Generators and Futures are specializations of this idea. Generators are a generalized version of iterators, ones which can yield different types for continuation and termination. And Futures are a model for concurrent programming. 

## Generators

Generators

## Futures

Functionally Futures are like Generators which yield nothing (pending) or return (complete) with a value. 


### Await

Futures have some additional syntax sugar for `.await()` which roughly looks like the following

```java,linenos
var bar = baz().await();
```

```java,linenos
var bar_future = baz();
var bar =  bar_future.poll(waker);
while (bar == Pending.INSTANCE){
    yield Pending.INSTANCE;
    bar =  bar_future.poll(waker);
}
```

`waker`?

### Waker

Futures have another quirk, `Waker`. Futures are a model of cooperative concurrent work. 

`Waker`s aren't typically used when composing futures (what most user code does) but are extremely important when hand-writing futures.

For example what if we wanted to add a delay in our async program.

```java,linenos
public static Future<Void, Exception> delay_5s() throws Exception {
    System.out.println("Start");
    Thread.sleep(5000);
    System.out.println("End");
    
    return Future.ret();
}
```

This *will* add a delay of 5 seconds but will block the current thread and any work that can be done for the whole 5 seconds. What we really want is some way to return `Pending` until our time is up.


```java,linenos
class Delay implements Future<Void, RuntimeException> {
    private final long alarm_time;

    protected Delay(int ms) {
        alarm_time = System.currentTimeMillis() + ms;
    }

    public static Future<Void, RuntimeException> delay(int ms){
        return new Delay(ms);
    }

    @Override
    public synchronized Object poll(Waker waker) {
        waker.wake();
        return System.currentTimeMillis() < this.alarm_time 
                    ? Pending.INSTANCE : null;
    }
}

public static Future<Void, Exception> delay_5s() throws Exception {
    System.out.println("Start");
    Delay.delay(5000).await();
    System.out.println("End");
    
    return Future.ret();
}
```

Great now other tasks can run while our delay is waiting for the correct time to elapse... wait why is my CPU at 100%?

As you might have expected we can't just run `waker.wake()` every time we poll. What we get when we do this is an elaborate busy loop constantly checking if the time has elapsed yet. What we need is a smarter way to call wake.

```java,linenos
public class Delay implements Future<Void, RuntimeException> {
    private final static Timer timer = new Timer(true);
    
    private TimerTask task;
    private int delay;
    private boolean ready;

    protected Delay(int ms) {
        delay = ms;
        ready = delay <= 0;
    }

    public static Future<Void, RuntimeException> delay(int ms){
        return new Delay(ms);
    }

    @Override
    public void cancel() {
        if (task != null) task.cancel();
    }

    @Override
    public synchronized Object poll(Waker waker) {
        if (ready) return null;
        if (delay > 0) {
            task = new TimerTask() {
                @Override
                public void run() {
                    ready = true;
                    waker.wake();
                }
            };
            timer.schedule(task, delay);
            delay = -1;
        }

        return Pending.INSTANCE;
    }
}
```

Here we see a full example of what a possible implementation of the `Delay` future could look like. 

### Cancellation



# Project

Before the interesting bits a quick overview of what this project is doing.

We first begin by "launching" our app with a custom class loader. 
```java,linenos
public static void main(String[] args) {
    RT.runWithStateMachines(
        StateMachineClassLoader.Config.builtin(), 
        (Object) args
    ); 
    // after this point all classes loaded will 
    // be loaded through the shim class loader.
}
```
This class loader is responsible for inspecting all loaded classes. Searching through each method defined and determining if it is async, and if so, transforming its body into a state machine.

## Stackless Generators

The generators 

# Decompilation

We first 

# Interlude, what's a stack map?

# Tracking everything everywhere all at once

We know what the current stack looks like, and what types are in each local variable at any given point

# Putting everything together

# Injection



# Building libraries


# Drawbacks

## Synchronized

Unfortunately (or fortunately) the JVM does not allow monitors to be held 

This means that for async/generator functions holding a monitor across await/yield points is not possible. Two approaches can be taken, either we automatically release/acquire monitors across yielding points, or (and what I think is correct) we disallow it completely. 


```java,linenos
public static Future<Void, IOException> echo(
    @Cancellation("close") Socket socket
) throws IOException {
    try(socket){
        var buffer = ByteBuffer.allocate(4096*2);
        while(true){
            bytes_received = socket.read(buffer).await() + bytes_received;
            buffer.flip();
            bytes_sent = socket.write_all(buffer).await() + bytes_sent;
            buffer.clear().limit(buffer.capacity());
        }
    }
}
```


```java,linenos
public static Gen<Long, Void> primes() {
    long number = 1;
    Gen.yield(2L);
    outer: while(true){
        number += 2;
        for(long i=2; i <= Math.sqrt(number); i ++){
            if(number%i==0)continue outer;
        }
        Gen.yield(number);
    }
}
```

# Language Level

So, we've seen its possible for async in java as a library feature. What about as a language feature?

I certainly think it would be a wonderful addition to the language. Type checking and syntax sugar could be improved.

```java,linenos
public @async echo(
    @Cancellation("close") Socket socket
) throws IOException {
    try(socket){
        var buffer = ByteBuffer.allocate(4096*2);
        while(true){
            bytes_received = socket.read(buffer).@await + bytes_received;
            buffer.flip();
            bytes_sent = socket.write_all(buffer).@await + bytes_sent;
            buffer.clear().limit(buffer.capacity());
        }
    }
}
```

I'm not entirely sure what the syntax would be. Perhaps having `.await` could be a keyword in async functions. Or `.await()` on futures could be used as it is in this library.

I would hate to see `await Expr` be the syntax as anyone who's programmed in JS could tell you it becomes cumbersome fast. 

<br>

Take a look at the [GitHub](https://github.com/ParkerTenBroeck/coroutines)

---