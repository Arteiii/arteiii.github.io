---
id: range
title: Range
sidebar_position: 1
---

# Range

> [`std::ops::Range`][range]

The [`Range`][range] type in Rust represents an interval over a continuous sequence of values, typically numbers,
but can work with any type that implements the [`PartialOrd`][partial-ord] and [`Step`][step] traits (like [
`char`][char] for example).
Ranges are used to iterate over a series of values or to define boundaries for slices and other operations.

Ranges are most commonly used in loops and indexing operations,
and Rust provides multiple forms of ranges depending on the inclusivity or exclusivity of the endpoints.

## Types of Ranges

Rust provides several range types, each represented by a distinct syntax:

### [`Range`][range]: Exclusive Range

```rust
start..end
```

The [`Range`][range] type represents a half-open interval `[start, end)`.
It starts at [`start`][range-start] (inclusive) and goes up to, but does not include, [`end`][range-end].

Example:

```rust
for i in 0..5 {
    println!("{}", i);  // prints 0, 1, 2, 3, 4
}
```

### [`RangeInclusive`][range-inclusive]: Inclusive Range

```rust
start..=end
```

This range includes both the [`start`][range-start] and [`end`][range-end] values.
It represents a fully-closed interval `[start, end]`.

Example:

```rust
for i in 0..=5 {
    println!("{}", i);  // prints 0, 1, 2, 3, 4, 5
}
```

### [`RangeFrom`][range-from]: Unbounded Range (From a start)

```rust
start..
```

This range starts at [`start`][range-start] and continues indefinitely.
It is useful for slicing when you want to include everything after a certain index.

Example:

```rust
let array = [1, 2, 3, 4, 5];
let slice = &array[2..];  // takes from index 2 to the end
assert_eq!(slice, &[3, 4, 5]);
```

### [`RangeTo`][range-to]: Unbounded Range (Up to a point)

```rust
..end
```

This range starts from the beginning and ends before [`end`][range-end]. It is exclusive,
meaning it does not include [`end`][range-end].

Example:

```rust
let array = [1, 2, 3, 4, 5];
let slice = &array[..3];  // takes up to (but not including) index 3
assert_eq!(slice, &[1, 2, 3]);
```

### [`RangeToInclusive`][range-to-inclusive]: Unbounded Range (Up to and including)

```rust
..=end
```

This is similar to [`RangeTo`][range-to], but it includes the [`end`][range-end] value as well.

Example:

```rust
let array = [1, 2, 3, 4, 5];
let slice = &array[..=3];  // takes up to and including index 3
assert_eq!(slice, &[1, 2, 3, 4]);
```

### [`RangeFull`][range-full]: Full Range

```rust
..
```

The [`RangeFull`][range-full] type is used when referring to the entire range of a collection.
It is most often used in slicing.

Example:

```rust
let array = [1, 2, 3, 4, 5];
let slice = &array[..];  // takes the entire array
assert_eq!(slice, &[1, 2, 3, 4, 5]);
```

## Traits and Methods

### [`Iterator`][range-iterator]&nbsp; Trait

All finite ranges implement the [`Iterator`][range-iterator] trait, making it easy to loop over them.

Example:

```rust
let sum: i32 = (1..5).sum();  // sums 1, 2, 3, 4
assert_eq!(sum, 10);
```

### [`contains`][range-contains]&nbsp; Method

You can use the [`contains`][range-contains] method to check whether a value is within a range.

Example:

```rust
let range = 1..5;
assert!(range.contains(&3));  // true
assert!(!range.contains(&5)); // false (because it's exclusive)
```

[partial-ord]: https://doc.rust-lang.org/std/cmp/trait.PartialOrd.html
[char]: https://doc.rust-lang.org/std/primitive.char.html
[step]: https://doc.rust-lang.org/std/iter/trait.Step.html
[range]: https://doc.rust-lang.org/std/ops/struct.Range.html
[range-start]: https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html#method.start
[range-end]: https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html#method.end
[range-contains]: https://doc.rust-lang.org/std/ops/struct.Range.html#method.contains
[range-iterator]: https://doc.rust-lang.org/std/ops/struct.Range.html#impl-Iterator-for-Range%3CA%3E
[range-full]: https://doc.rust-lang.org/std/ops/struct.RangeFull.html
[range-to-inclusive]: https://doc.rust-lang.org/std/ops/struct.RangeToInclusive.html
[range-to]: https://doc.rust-lang.org/std/ops/struct.RangeTo.html
[range-from]: https://doc.rust-lang.org/std/ops/struct.RangeFrom.html
[range-inclusive]: https://doc.rust-lang.org/std/ops/struct.RangeInclusive.html
