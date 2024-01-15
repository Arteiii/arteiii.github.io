---
sidebar_position: 13
---


# Recursive Functions

## Introduction

recursion is a programming technique in which the function calls itself one or more times.<br/>
in general, you can say that in computer science recursion is a method of problem-solving that relies on solving smaller instances of the problem

<br />

## Python Part

```py
def factorial(n):
    print("factori called with n = " + str(n))
    if n == 1:
        return 1
    else:
        res = n * factorial(n-1)
        print("intermediate result for", n, "factorial(" , n-1, "):"
        , res)
        return res

print(factorial(5))

# factori called with n = 5
# factori called with n = 4
# factori called with n = 3
# factori called with n = 2
# factori called with n = 1
# intermediate result for 2 factorial( 1 ): 2
# intermediate result for 3 factorial( 2 ): 6
# intermediate result for 4 factorial( 3 ): 24
# intermediate result for 5 factorial( 4 ): 120
# 120
```

<br />

## Fibonacci Sequence

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.

Leonardo of Pisa, also known as Fibonacci, has created in his book an "artificial rabbit problem".

let's imagine that the initial population is formed by a pair of rabbits, newborn rabbits can mate only at the end of the first month and give birth at the end of the second month. Otherwise, each pair of rabbits will give birth to another pair of rabbits.
(the rabbits are immortal).

[Read More](https://en.wikipedia.org/wiki/Fibonacci_sequence)

<br />

well let's get to the python part

```py
def fibi(n):
    a, b = 0, 1
    for i in range(n):
        a, b = b, a + b
    return a
```

<br />

recursive way

```py
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
```

<br />

if we do it the recursive way the whole program will take much longer because the calculations are done again on each run we can easily solve this by creating a dictionary with the previous calculations

```py
memo = {0:0, 1:1}

def fibm(n):
    if not n in memo:
        memo[n] = fibm(n-1) + fibm(n-2)
    return memo[n]
```