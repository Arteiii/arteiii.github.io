---
id: broadcast
title: Broadcast
sidebar_position: 1
description: broadcast
---

# Broadcast Data Type in Tokio

The `broadcast` channel in Tokio is a powerful mechanism used to send data to multiple consumers simultaneously.
It is especially useful in scenarios where you need to send the same message to multiple tasks or processes concurrently
without worrying about managing each consumer independently.

## What is a Broadcast Channel?

A `broadcast` channel is a multi-producer,
multi-consumer channel that ensures all active consumers receive each message sent to the channel.
Unlike other channels, such as `mpsc` (multi-producer, single-consumer),
the broadcast channel guarantees that every consumer gets a copy of the message,
even if multiple consumers are listening.

Key properties:

- **Broadcasting**: Every message sent is delivered to all current receivers.
- **Bounded capacity**: The broadcast channel has a bounded capacity,
  and if it exceeds this limit, older messages are dropped.
- **Message cloning**: Messages must implement the `Clone` trait because they are duplicated for each receiver.

## Basic Usage

### Creating a Broadcast Channel

To create a broadcast channel, you use the `broadcast::channel` function, which takes a capacity argument.
This argument defines the number of messages the channel can hold before old messages are discarded.

```rust
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let (tx, _rx) = broadcast::channel(10);
}
```

In this example, the channel can hold up to 10 messages at a time.
When the buffer is full, the oldest messages are dropped to make room for new ones.

### Sending Messages

To send a message to all consumers, you call the `send` method on the transmitter (`tx`).

```rust
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let (tx, _rx) = broadcast::channel(10);

    // Send a message to all consumers
    tx.send(42).unwrap();
}
```

:::info
The `send` function returns a `Result` indicating whether the message was sent successfully.
It returns an error if no receivers are listening.
:::

### Receiving Messages

To receive messages, each consumer spawns a receiver (`rx`).
You can clone the receiver to create multiple consumers.

```rust
use tokio::sync::broadcast;
use tokio::task;

#[tokio::main]
async fn main() {
    let (tx, rx1) = broadcast::channel(10);
    let mut rx2 = tx.subscribe();  // Create a second receiver

    // Task 1: Receive messages
    task::spawn(async move {
        while let Ok(message) = rx1.recv().await {
            println!("Receiver 1 got: {}", message);
        }
    });

    // Task 2: Receive messages
    task::spawn(async move {
        while let Ok(message) = rx2.recv().await {
            println!("Receiver 2 got: {}", message);
        }
    });

    // Send a message
    tx.send(42).unwrap();
}
```

### Handling Message Drops

Since the broadcast channel has a bounded capacity, if a receiver falls behind, it may miss some messages.
In that case, the `recv` function will return an error of type `RecvError::Lagged`,
which tells how many messages were missed.

```rust
use tokio::sync::broadcast;

#[tokio::main]
async fn main() {
    let (tx, mut rx) = broadcast::channel(2);

    tx.send(1).unwrap();
    tx.send(2).unwrap();
    tx.send(3).unwrap();  // This will cause a message drop for any slow receiver

    match rx.recv().await {
        Ok(message) => println!("Received: {}", message),
        Err(broadcast::error::RecvError::Lagged(n)) => {
            println!("Missed {} messages", n);
        }
        Err(_) => println!("Receiver closed"),
    }
}
```

## Unique Features of the Tokio Broadcast Channel

1. **Multi-consumer support**: Unlike `mpsc`, `broadcast` supports multiple consumers listening to the same channel.
   Each receiver gets its own copy of the message, allowing concurrent tasks to process the same data independently.

2. **Bounded channel with backpressure**: The bounded nature of the broadcast channel introduces backpressure. When the
   buffer is full, older messages are dropped, ensuring that the channel remains responsive even under load. This is
   useful for real-time systems where older messages may no longer be relevant.

3. **Cloneable receivers**: You can create multiple receivers from a single transmitter using the `subscribe` method.
   Each receiver operates independently, meaning each can receive messages at its own pace.

4. **Message drops and error handling**: The channel provides useful error information when messages are dropped due to
   slow receivers. This allows you to handle the lagged state appropriately in your application.

5. **Real-time data distribution**: The broadcast channel is ideal for real-time use cases such as live data feeds,
   logging, or event broadcasting, where you want multiple tasks to react to the same set of events.

6. **Zero-copy transmission**: Because the broadcast channel requires messages to implement `Clone`, it allows for
   efficient duplication of data across receivers without modifying the original message.

## Practical Use Cases

- **Logging**: You can broadcast log messages to multiple consumers (e.g., different log processing tasks).
- **Live data feeds**: Ideal for applications where multiple tasks need to consume the same stream of data, such as in
  financial or monitoring systems.
- **Notification systems**: You can notify multiple parts of your system about state changes or events simultaneously.
- **Real-time web applications**: Integrating with WebSocket servers to send updates to multiple connected clients at
  once.
