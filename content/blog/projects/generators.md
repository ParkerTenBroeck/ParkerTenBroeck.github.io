+++
title = "Generators"
description = "A java 24 library that adds stackless coroutines to standard java code by transforming method bytecode into state machines at load time"
date = 2025-05-07

[taxonomies]
tags = ["java", "bytecode"]
category = ["project"]
+++

[!WARN]
meow

```java
public static Future<Void, IOException> echo(@Cancellation("close") Socket socket) throws IOException {
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

https://github.com/ParkerTenBroeck/generators