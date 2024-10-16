---
slug: boyer-moore
authors: arteii
date: 2024-10-07T12:38
---

# The Boyer-Moore Algorithm

Pattern matching is a fundamental problem in computer science with applications in text processing, search engines, DNA
sequencing, and more. The [**Boyer-Moore algorithm**][boyer–moore-wikipedia], introduced by [Robert S. Boyer][boyer]
and [J Strother Moore][moore] in 1977,
remains one of the most efficient algorithms for string matching in real-world applications.
It takes advantage of information gleaned during the mismatching process to skip portions of the text,
often achieving sublinear time complexity on average.

<!-- truncate -->

## Problem Statement

Given a text string $$T$$ of length $$n$$ and a pattern string $$P$$ of length $$m$$, the goal of pattern matching is to
find all occurrences of $$P$$ as a substring of $$T$$. The brute-force approach requires checking each possible
alignment of $$P$$ with $$T$$, which results in a time complexity of $$O(n \cdot m)$$. The Boyer-Moore algorithm
improves upon this by skipping unnecessary comparisons.

## The Boyer-Moore Algorithm

The Boyer-Moore algorithm matches the pattern $$P$$ from right to left, starting at the end of the pattern. If a
mismatch occurs, the algorithm shifts the pattern over the text based on two preprocessed heuristics: the **Bad
Character rule** and the **Good Suffix rule**.

### Bad Character Rule

The **Bad Character** rule works by identifying mismatches and using the information to shift the pattern efficiently.
Given a mismatch between the text character $$T[i]$$ and the corresponding pattern character $$P[j]$$, we look for the
rightmost occurrence of $$T[i]$$ in $$P$$.

- If $$T[i]$$ exists in $$P$$, we shift the pattern such that this occurrence aligns with $$T[i]$$.
- If $$T[i]$$ does not exist in $$P$$, we shift the entire pattern past the mismatched character.

Mathematically, let:

$$$
\text{shift}_{\text{bad\_char}}(i, j) = \max(1, j - \text{rightmost}(T[i]))
$$$

where $$\text{rightmost}(T[i])$$ is the rightmost occurrence of $$T[i]$$ in $$P$$, or -1 if it does not appear.

**Example:**

Consider the pattern $$P = \text{ABCA}$$ and text $$T = \text{CBABCA}$$. Suppose a mismatch occurs at
position $$i = 2$$, where $$T[2] = \text{B}$$ and $$P[1] = \text{A}$$. Since $$\text{B}$$ exists in $$P$$ at position 1,
we shift the pattern such that this occurrence aligns with $$T[2]$$.

### Good Suffix Rule

The **Good Suffix** rule leverages suffixes in the pattern to skip unnecessary shifts. When a mismatch occurs after a
suffix of the pattern has been matched, the algorithm shifts the pattern such that the next occurrence of this suffix
aligns with the text.

Mathematically, let:

$$$
\text{shift}_{\text{good\_suffix}}(j) = m - \text{next\_suffix}(j)
$$$

where $$\text{next\_suffix}(j)$$ is the position of the next occurrence of the matched suffix in the pattern.

There are two cases for shifting based on good suffixes:

- **Case 1**: The matched suffix appears elsewhere in the pattern. In this case, we shift the pattern to align the next
  occurrence of the suffix.
- **Case 2**: The matched suffix does not appear in the pattern, but some prefix of the pattern matches a suffix of the
  text. In this case, we shift the pattern such that the prefix aligns with the suffix.

**Example:**

For $$P = \text{ABCA}$$ and $$T = \text{CBABCA}$$, if a mismatch occurs after matching the suffix "BCA", the pattern is
shifted to the next occurrence of "BCA" in $$P$$.

## Proof of Efficiency

The Boyer-Moore algorithm operates in sublinear time on average due to the efficiency of its heuristics. Let $$m$$ be
the length of the pattern and $$n$$ the length of the text. The algorithm's worst-case time complexity
is $$O(n \cdot m)$$, but in practice, the average time complexity is much closer to $$O(n / m)$$, particularly when the
alphabet size is large.

This sublinear performance arises because the pattern shifts more than one character in many cases, especially when
there are frequent mismatches or when the pattern is long relative to the text.

## Performance Comparison Between Bad Character and Good Suffix Heuristics

The [**Bad Character**](#bad-character-rule) rule tends
to perform well when the alphabet is large and when mismatches are common because it
leverages the presence of mismatched characters to skip unnecessary comparisons.
The [**Good Suffix**](#good-suffix-rule) rule is more
effective when the pattern has repeated structures or when mismatches occur near the end of the pattern, allowing it to
skip larger sections of the text.

In practical applications, the combination of these two heuristics provides superior performance over either heuristic
used in isolation.

1. **Bad Character**: More efficient with larger alphabets and random text.
2. **Good Suffix**: More efficient with repetitive patterns and long suffix matches.

In most cases, the Boyer-Moore algorithm uses both heuristics together, allowing the pattern to shift as far as the
larger of the two heuristics suggests.

## Conclusion

The Boyer-Moore algorithm is one of the most efficient string-matching algorithms for practical use due to its ability
to skip portions of the text rather than performing a brute-force search.
By employing both the [**Bad Character**](#1-bad-character-rule) and [**Good Suffix**](#2-good-suffix-rule) heuristics,
the algorithm achieves sublinear time complexity on average.
Its efficiency is particularly notable in scenarios where patterns are long or mismatches occur frequently.

## References

- Robert S. Boyer - [Wikipedia][boyer]
- J Strother Moore - [Wikipedia][moore]
- Boyer–Moore string-search algorithm - [Wikipedia][boyer–moore-wikipedia]
- Boyer-Moore Algorithm - [GeeksforGeeks][boyer–moore-geeks-for-geeks]
- A. V. Aho, and M. J. Corasick, "Efficient String Matching: An Aid to Bibliographic Search," *Communications of the
  ACM*, 1975.
- T. H. Cormen, C. E. Leiserson, R. L. Rivest, and C. Stein, *Introduction to Algorithms*, MIT Press, 2009.


[boyer]: https://en.wikipedia.org/wiki/Robert_S._Boyer
[moore]: https://en.wikipedia.org/wiki/J_Strother_Moore
[boyer–moore-wikipedia]: https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm
[boyer–moore-geeks-for-geeks]: https://www.geeksforgeeks.org/boyer-moore-algorithm-for-pattern-searching/
