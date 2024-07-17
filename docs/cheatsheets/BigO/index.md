---
sidebar_position: 6
sidebar_label: Big O
---

# Big O

The concept of Big-O notation was developed to analyze and compare the growth behavior of functions or algorithms.
It was introduced in 1976 by the computer scientist Donald Knuth and later developed by other computer scientists and
mathematicians.

The notation itself is derived from mathematical analysis,
in particular from the Landau symbolism introduced by the German mathematician Edmund Landau.
Landau symbols are used in analysis to describe the behavior of functions at certain points or at infinity.

It is a useful tool for analyzing and comparing the scalability and efficiency of algorithms,
especially when dealing with large input sizes.

It is written:
Large O (the letter and not the number) followed by the time or the number of tasks ($$n$$).

the calculation of the running time might look like this

$$T(n)=4n^2-2n+2$$

We can omit the constants, as they would depend on the hardware used.

$$T(n)=O(n^2)$$

### common functions:

| **notation**  | **name**                                                                                                                                    |
|:-------------:|:--------------------------------------------------------------------------------------------------------------------------------------------|
|   $$O(1)$$    | Constant runtime or constant memory consumption. The algorithm always takes the same amount of time or memory regardless of the input size. |
| $$O(log(n))$$ | Logarithmic growth. The algorithm grows logarithmically with the input size.                                                                |
|   $$O(n)$$    | Linear growth. The runtime or memory consumption of the algorithm grows linearly with the input size.                                       |
|  $$O(n^2)$$   | Quadratic growth. The runtime or memory consumption of the algorithm grows as the square of the input size.                                 |
|  $$O(c^n)$$   | Exponential growth. The algorithm's runtime or memory grows exponentially with the input size.                                              |

<br />
<br />

### Graphs

![Graphs of functions commonly used in the analysis of algorithms](../../../static/img/data_structures/images/1024px-Comparison_computational_complexity.png)

[Source](https://en.wikipedia.org/wiki/Big_O_notation#/media/File:Comparison_computational_complexity.svg)

<br />
<br />

If you want to know more about it, have a look at this:

- [Big O notation - MIT](../../../static/img/data_structures/pdf/big_o_mit.pdf)
