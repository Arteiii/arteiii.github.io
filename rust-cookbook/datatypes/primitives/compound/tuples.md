---
id: tuples
title: Tuples
sidebar_position: 1
description: (i32, bool)
---

## Tuples in Rust: Compact, Versatile, and Type-Safe Groupings

In Rust, a tuple is a collection of values of different types grouped together into a single compound type. It’s handy
when you want to return multiple values from a function or group data that does not necessarily belong together in a
named structure like a struct.

### Creating and Using Tuples

Tuples are defined using parentheses, and the values are separated by commas. They can store a variety of data types,
and their size is fixed at compile time.

```rust
let tuple: (i32, f64, &str) = (42, 3.14, "hello");
```

Here, `tuple` holds three elements of different types: an `i32`, an `f64`, and a string slice (`&str`).

### Accessing Tuple Elements

You can access the elements of a tuple using dot notation followed by the index of the element (starting at 0).

```rust
let first = tuple.0; // 42
let second = tuple.1; // 3.14
let third = tuple.2; // "hello"
```

If you want to destructure a tuple into individual variables, you can use pattern matching:

```rust
let (x, y, z) = tuple;
```

This assigns `x = 42`, `y = 3.14`, and `z = "hello"`.

### Common Uses of Tuples

1. **Returning Multiple Values from Functions**: Since Rust doesn’t have built-in support for multiple return values,
   tuples can simulate that functionality:
   ```rust
   fn split_point() -> (i32, i32) {
       (10, 20)
   }
   let (x, y) = split_point(); // x = 10, y = 20
   ```

2. **Grouping Data**: Tuples are often used when you need to group data temporarily, without defining a dedicated
   struct.
   ```rust
   let point = (3, 4);
   let distance = (point.0.pow(2) + point.1.pow(2)).sqrt();
   ```

3. **Pairing Iterators**: Tuples are useful in iterators or maps, where you may want to process data as `(key, value)`
   pairs.

### Tuple Size and Homogeneity

While tuples can mix different types, their size is fixed and cannot be changed after initialization. Rust enforces type
safety by ensuring that the tuple type matches its structure. For example, `(i32, i32)` is distinct from `(i32, f64)`.

### Example: Swapping Values

One quick trick with tuples is using them to swap values in place without a temporary variable:

```rust
let mut a = 5;
let mut b = 10;
(a, b) = (b, a); // Now a = 10, b = 5
```
