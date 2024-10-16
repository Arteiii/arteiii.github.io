---
id: character
title: Character
sidebar_position: 4
description: char
---

In Rust, the `char` type represents a single Unicode scalar value, which means it can store more than just ASCII
characters. Unlike many programming languages where a `char` is a byte (8 bits), Rust's `char` is a 32-bit (4 bytes)
value, allowing it to represent any valid Unicode character, from simple letters to complex symbols and emojis.

## Creating and Using&nbsp;`char`

You can create a `char` using single quotes:

```rust
let letter: char = 'A';
let emoji: char = '😊';
```

Rust ensures that each `char` contains exactly one valid Unicode character. It's important to note that a `char` does
not equate to a single byte (like in UTF-8), but to a Unicode scalar, which might occupy multiple bytes when encoded.

## Working with&nbsp;`char`

You can perform various operations on `char` values in Rust. Here are a few common ones:

1. **Checking Character Properties**:
   Rust provides many methods to check properties of `char` values, such as whether they are alphabetic, numeric,
   uppercase, etc.

   ```rust
   let c: char = 'A';
   println!("{}", c.is_alphabetic()); // true
   println!("{}", c.is_numeric());    // false
   ```

2. **Converting Between Cases**:
   You can easily convert characters between uppercase and lowercase using `.to_lowercase()` or `.to_uppercase()`:

   ```rust
   let lower: char = 'a';
   let upper = lower.to_uppercase().next().unwrap(); // 'A'
   ```

3. **Escape Sequences**:
   Special characters (like newline or tab) can be represented using escape sequences:

   ```rust
   let newline: char = '\n';
   let tab: char = '\t';
   ```

4. **Iterating Over a String**:
   Since Rust strings (`&str`) are sequences of Unicode scalar values, you can iterate over them as a sequence of `char`
   values:

   ```rust
   let word = "hello";
   for ch in word.chars() {
       println!("{}", ch);
   }
   // Output: h e l l o
   ```

## `char`&nbsp;and Strings

While `char` represents a single Unicode scalar value, a string in Rust (`String` or `&str`) is a collection of these
characters, encoded in UTF-8. If you need to extract or manipulate individual characters from a string, the `chars()`
method can be used, as shown above.

## Example: Checking for Whitespace

You can use `char` to inspect whether a string contains specific types of characters like whitespace:

```rust
fn contains_whitespace(s: &str) -> bool {
    s.chars().any(|c| c.is_whitespace())
}

let sentence = "Hello, World!";
println!("{}", contains_whitespace(sentence)); // true
```
