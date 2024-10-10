---
id: string
title: String
sidebar_position: 1
---

# String

> [`std::str`][str]  
> [`std::string::String`][string]

Strings in Rust are a fundamental aspect of the language, and mastering them is key to effective programming. Unlike
many other system programming languages, Rust enforces strict memory safety guarantees, and this shapes how strings are
handled—both on the stack and the heap.

## `str`&nbsp;vs&nbsp;`String`&nbsp; in Rust

In Rust, there are two primary string types:

- [`str`][str] (string slice)
- [`String`][string] (heap-allocated, growable string)

### `str`: String Slice

- A `str` represents a borrowed reference to a string, typically a sequence of UTF-8 encoded bytes.
- It is a **view** into some data, rather than owning the data.
- `str` is **immutable**—you cannot change it directly.
- `str` is typically stored on the **stack** but references data stored elsewhere, often in the program’s binary (for
  string literals) or the heap.
- It's always a reference, so you’ll see it in code as `&str`, signifying it’s a borrowed reference to a string.

**Example**:

```rust
let hello: &str = "Hello, world!";
```

In this case, `"Hello, world!"` is stored in the binary, and `hello` is a reference to this string slice.

### `String`: Growable, Heap-Allocated String

- A `String` is an **owned** string stored on the **heap**.
- Since it's heap-allocated, it can grow in size dynamically.
- You can modify a `String` by appending or removing characters.
- Because it owns its data, a `String` can be passed around, transferred between functions, or manipulated in ways a
  `str` cannot.

**Example**:

```rust
let mut hello = String::from("Hello");
hello.push_str(", world!");
```

In this case, `hello` starts as a `String` containing `"Hello"`, but it can be modified to append `", world!"`.

## Differences Between &nbsp;`str`&nbsp; and &nbsp;`String`

| **Aspect**       | **`str`**                                                   | **`String`**                                 |
|------------------|-------------------------------------------------------------|----------------------------------------------|
| Ownership        | Borrowed (does not own the data)                            | Owns the data                                |
| Mutability       | Immutable                                                   | Mutable (can grow or shrink)                 |
| Storage Location | Stack (but references data elsewhere, often heap or binary) | Heap (allocates memory dynamically)          |
| Common Use Cases | String literals, borrowed data                              | When ownership or dynamic behavior is needed |

## Why is This Different From Other Languages?

Rust’s handling of strings is unique due to its **ownership model** and **memory safety guarantees**. In languages like
C or C++, strings are often managed manually, leading to potential memory leaks or segmentation faults. In contrast:

- Rust guarantees that all memory is properly cleaned up when it’s no longer needed, using its ownership and borrowing
  system.
- Strings in Rust avoid the problems of dangling pointers and double frees common in manual memory management.

For example, in C you might dynamically allocate memory for a string and need to explicitly free it. In Rust, the
compiler ensures that when a `String` goes out of scope, its memory is automatically deallocated.

## Key Points on Memory Efficiency

- **Heap Allocations**: While `String` provides flexibility with dynamic growth, heap allocations are more expensive
  than stack allocations due to the overhead of managing dynamic memory. For small, fixed-size strings, consider using
  `&str` to avoid heap allocation.
- **Copying and Cloning**: Cloning a `String` means copying the entire heap-allocated buffer, which can be expensive for
  large strings. Cloning a `&str` (or borrowing it) is just copying the reference, which is cheap.

[str]: https://doc.rust-lang.org/std/primitive.str.html
[string]: https://doc.rust-lang.org/std/string/struct.String.html
