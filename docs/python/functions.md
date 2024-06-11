---
sidebar_position: 12
---

# Functions

## Introduction

a function is introduced with def and a freely selectable function name

```py
def functionname(parameters):
    statement
```

a function returns one or more return statements
if the return is left empty "None" is returned
the same if there is no return statement

```py
def helloWorld(name):
    return "Hello " + name + " !"

print(helloWorld("John"))
# Hello John !

f = "John"
f = helloWorld(f)
print(f)
# Hello John !
```

## Default Value

you also have the option to assign a default value to a parameter

```py
def helloWorld(name="World"):
    return "Hello " + name + " !"

helloWorld("John")
# 'Hello John !'

helloWorld()
# 'Hello World !'
```

```py
def add(value1=4, value2=2):
    return value1 + value2

add(4)
#6

def add(value1=4, value2=2):
    return value1 + value2

add(4, 4)
#8
```

However, there is a problem,
if we try to use only the second parameter without defining the first one
since the arguments are passed in order.

If only one value is passed it is automatically the first one, so in our case value1

## Key-Word-Parameters

we can easily solve the problem described in the previous chapter
and at the same time improve the readability of the program

```py
def add(value1=4, value2=2):
    return value1 + value2

add(value1=5)
#7

def add(value1=4, value2=2):
    return value1 + value2

add(value2=12)
#16

def add(value1=4, value2=2):
    return value1 + value2

add(value2=12, value1=33)
#45
```

## Docstring

docstrings are used for documentation
they are stored in the \_\_doc\_\_ attribute
and do not influence the execution of the function

they are defined directly under the def line of a function

```py
def heyWorld(name="World"):
    """returns Hey to the parameter name"""
    return "Hey " + name + " !"

heyWorld("John")
# 'Hey John !'
```

docstrings can also be placed at the beginning of a Python file

```py
"""
Voluptate sit proident dolore reprehenderit
enim sunt pariatur irure occaecat anim tempor.
"""


def heyWorld(name="World"):
    """returns Hey to the parameter name"""
    return "Hey " + name + " !"

heyWorld("John")
# 'Hey John !'
```

## Multiple Return Values

a function can only output one object
but also lists or dictionaries for example

```py
def fib_interv(x):
    if x < 0:
        return -1
    old, new = 0,1
    while True:
        if new < x:
            old, new = new, old+new
        else:
            return (old, new)

for i in (0, 1, 2, 3, 4, 5, 7, 8, 9, 12, 13, 14):
    print(i, fib_interv(i))

# 0 (0, 1)
# 1 (0, 1)
# 2 (1, 2)
# 3 (2, 3)
# 4 (3, 5)
# 5 (3, 5)
# 7 (5, 8)
# 8 (5, 8)
# 9 (8, 13)
# 12 (8, 13)
# 13 (8, 13)
# 14 (13, 21)
```

## Local & Global Variables

variables are, by default, local in a functional
but you can also read global variables within a function

```py
def f():
    print(gh)

gh = "Test123"
f()
# Test123
```

```py
def f():
    gh = "no Test"
    print(gh)

gh = "Test123"
f()
# no Test
print(gh)
# Test123
```

the last example shows very easily that the variable _gh_ in _f_ is local

```py
def f():
    print(gh)
    gh = "no Test"
    print(gh)

gh = "Test123"
f()
# UnboundLocalError:
print(gh)
```

the variable _gh_ is now ambiguous in _f()_

if you want to write to a variable within a function,
you have to define it explicitly as global

```py
def f():
    global gh
    print(gh)
    gh = "no Test"
    print(gh)

gh = "Test123"
f()
# Test123
# no Test

print(gh)
# no Test
```

```py
gh
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'gh' is not defined

def f():
    global gh
    gh = 123

gh
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'gh' is not defined

f()

gh
# 123
```

## Command-Line Arguments

when starting a Python program you can transfer so-called start arguments

these are separated from each other by a space

they are available inside the Python script in a list (sys.argv)
in addition to the parameters the file name is stored in the list at the first position (sys.argv[0])

```py
import sys

for Argument in sys.argv:
    print(Argument)
```

## Variadic Functions

variadic functions
allow flexibility in defining functions
where the number of parameters is not fixed at definition

for this, we use `"*"`

```py
def print_args(*args):
    for argument in args:
        print(argument)

print_args(123, "Lorem bli bla blu", "more bli bla")
# 123
# Lorem bli bla blu
# more bli bla
```

```py
def print_args(number, *text):
    print(number, text)

print_args(123, "Lorem bli bla blu", "more bli bla")
# 123 ('Lorem bli bla blu', 'more bli bla')
```

## \* in function calls

when using a `*` in the function call, an argument is unpacked
this can be useful when you want to separate the contents of a list or tuple

```py
def print_args(number1, number2, number3):
    print(number1, number2, number3)

list1 = [3, 6, 9]
print_args(*list1)
# 3 6 9
```

if you want to pass lists you have to unpack them before you pass them
otherwise, this list is only summarized in a tuple

```py
def print_args(number, *text):
    print(number, text)

list1 = [3, 4, 2, 6, 9]
print_args(123, list1)
# 123 ([3, 4, 2, 6, 9],)
```

```py
def print_args(number, *text):
    print(number, text)

list1 = [3, 4, 2, 6, 9]
print_args(123, *list1)
# 123 (3, 4, 2, 6, 9)
```

## Any Keyword Parameter

 With `**` we can generate any number of key-word parameters

which are then stored in dictionaries

```py
def gh(**args):
    print(args)

gh()
# {}

gh(de="German", en="English")
# {'de': 'German', 'en': 'English'}
```

as in the last article, we can also use `**` in the function call

```py
def f(a, b, c, h):
    print(a, b, c, h)

d = {'a':'aaaaaaa', 'b':'bbbbbbb', 'c':'ccccc', 'h':'hhhhh'}
f(**d)
# aaaaaaa bbbbbbb ccccc hhhhh
```
