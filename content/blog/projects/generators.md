+++
title = "Generators"
description = "A java 24 library that adds stackless coroutines to standard java code by transforming method bytecode into state machines at load time"
date = 2025-05-07

[taxonomies]
tags = ["java", "bytecode"]
category = ["project"]
+++


With the release of Java 24 came the official Class-File API giving a stable and (relatively) ergonomic interface for reading, modifying, and writing java classes/bytecode at runtime with no external dependencies. Seeing this I decided to play around with it and see what fun I could have.



# Bytecode, Stack Machines, and Registers

Java (and other JVM languages) are compiled to a set of [bytecode instructions](https://en.wikipedia.org/wiki/List_of_JVM_bytecode_instructions). 
These instructions primarily operate on a stack (fifo) using 0-n operands from the top and pushing 0-1 values back onto the stack.

An example would be the `iadd` instruction which pops two integers off the stack and pushes the sum of them.  

A more complex example would be something like `invokevirtual <methodref_index>` which calls a method on a class. 
`methodref_index` is an index (in this case a 2 byte index) into the class files `constant_pool`[^1]


[^1]: https://docs.oracle.com/javase/specs/jvms/se23/html/jvms-4.html#jvms-4.1

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.


## Stack manipulation

Sometimes it's 

## Registers

# Stack Machine and Registers

# Decompilation

# Interlude, what's a stack map?

# Tracking everything everywhere

# Putting everything together

# Injection


Take a look at the [GitHub](https://github.com/ParkerTenBroeck/generators)






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