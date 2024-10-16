---
id: booleans
title: Booleans
sidebar_position: 3
description: bool
---

A **boolean** in Rust is represented by the `bool` type and can only have two possible values: `true` or `false`. At a
conceptual level, a boolean only needs 1 bit of memory, since it can represent two states (1 or 0, true or false).
However, modern CPUs operate more efficiently when data is aligned to byte boundaries, so Rust chooses to store each
`bool` as **1 byte** (8 bits) instead of just 1 bit.

### Example:

```rust
fn main() {
    let flag: bool = true;
    let other_flag: bool = false;

    println!("flag: {}, other_flag: {}", flag, other_flag);
}
```

## Why Rust Booleans Use 1 Byte

While it might seem wasteful to use 1 byte for something that only needs 1 bit, there are important reasons why Rust (
and many other modern languages) make this choice:

- **Memory Alignment**: CPUs are optimized to read data in chunks of bytes (often 8, 16, or 32 bits at a time). If Rust
  stored booleans as individual bits, it would complicate memory access, leading to slower performance when reading and
  writing values.

- **Performance**: Storing booleans as 1 byte allows direct access to the data without additional overhead. If Rust were
  to pack multiple booleans into a smaller space, it would need extra bitwise operations to access individual values,
  which could degrade performance.

- **Atomic Operations and Safety**: In multi-threaded programs, operations on `bool` values might need to be atomic (
  non-interruptible by other threads). Atomic operations are typically only possible on byte or word-aligned values, so
  storing `bool` as a byte allows for safe concurrent access.

## Reducing Memory Usage with Bit Packing

When working with a large number of boolean values or flags, storing each `bool` as a full byte can indeed lead to
memory inefficiency. For example, if you need to store 100 boolean flags, using Rust’s `bool` type would consume 100
bytes of memory, even though 100 booleans could theoretically fit in just 13 bytes (100 bits).

To solve this, you can manually **pack multiple booleans into a single byte** or use crates designed for this purpose,
such as the `bitfield` crate.

## Bit Fields in Rust Using the `bitfield` Crate

While Rust does not natively support C-style bit fields, where you can define specific numbers of bits for different
fields in a struct, you can achieve similar functionality using third-party crates like `bitfield`.

The `bitfield` crate allows you to define structures where individual bits or groups of bits can be packed together.
This helps you save memory by storing multiple booleans or small integers in the same underlying storage, such as a
`u8` (8 bits), `u16` (16 bits), or larger integer types.

### Installing the `bitfield` Crate

To use the `bitfield` crate, you first need to add it to your `Cargo.toml` file:

```toml
[dependencies]
bitfield = "0.13.2"
```

Once the crate is added, you can use it to create bit-packed structures.

### Example: Defining a Bit Field with the `bitfield` Crate

Let’s create a structure where we store multiple flags (booleans) and small integer values within a single byte (`u8`).

```rust
use bitfield::bitfield;

// Define a structure that holds multiple fields packed into a single byte
bitfield! {
    struct Flags(u8);     // We use a single u8 (8 bits) to store all fields
    impl Debug;
    u8;                   // Data type of each field
    flag1, set_flag1: 0;   // 1-bit field at position 0
    flag2, set_flag2: 1;   // 1-bit field at position 1
    field3, set_field3: 3, 2;  // 2-bit field spanning positions 2 and 3
    field4, set_field4: 7, 4;  // 4-bit field spanning positions 4 to 7
}

fn main() {
    let mut flags = Flags(0);  // Initialize with all bits set to 0

    // Set the first flag (1st bit)
    flags.set_flag1(true);

    // Set the 2-bit field to 3 (binary 11, occupies bits 2 and 3)
    flags.set_field3(3);

    // Set the 4-bit field to 12 (binary 1100, occupies bits 4 to 7)
    flags.set_field4(12);

    println!("{:?}", flags);  // Output: Flags(205)
}
```

### Explanation:

- We use the `bitfield!` macro to define a struct named `Flags`, which uses a single `u8` (8 bits) for storage.
- We define individual flags and fields within this byte:
    - `flag1`: 1 bit at position 0.
    - `flag2`: 1 bit at position 1.
    - `field3`: A 2-bit field at positions 2 and 3.
    - `field4`: A 4-bit field at positions 4 to 7.

By using this structure, you can pack multiple boolean flags and small integer fields into a single byte, significantly
reducing memory usage compared to using standalone `bool` values.

## Manual Bit Manipulation in Rust

If you prefer not to use an external crate, you can achieve similar bit-packing behavior by manually manipulating bits
using bitwise operations.

### Example: Packing Booleans into a Single Byte

```rust
struct PackedFlags {
    bits: u8,  // 8 bits to store multiple flags
}

impl PackedFlags {
    fn new() -> Self {
        PackedFlags { bits: 0 }
    }

    fn set_flag(&mut self, position: u8, value: bool) {
        if value {
            self.bits |= 1 << position;  // Set the bit at the given position to 1
        } else {
            self.bits &= !(1 << position);  // Set the bit at the given position to 0
        }
    }

    fn get_flag(&self, position: u8) -> bool {
        (self.bits >> position) & 1 == 1  // Check if the bit at the given position is 1
    }
}

fn main() {
    let mut flags = PackedFlags::new();

    // Set the first flag (bit 0)
    flags.set_flag(0, true);

    // Set the second flag (bit 1)
    flags.set_flag(1, true);

    // Unset the first flag (bit 0)
    flags.set_flag(0, false);

    println!("Flag 0: {}", flags.get_flag(0));  // Output: false
    println!("Flag 1: {}", flags.get_flag(1));  // Output: true
}
```

This example demonstrates how you can pack and manipulate multiple boolean flags within a single byte using bitwise
shifts (`<<`, `>>`) and bitwise operations (`|`, `&`, `~`).
