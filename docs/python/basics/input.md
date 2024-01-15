---
sidebar_position: 6
---

# Input

if the input function is called, the program sequence is stopped until the user makes an entry.
so that the user also knows what he must enter
you can use "input prompt" this is optional
a string is always the output

```py
text = input("your input? ")
    # your input? 12
text
    # '12'

text = input("your input? ")
    # your input? [3, 6, 9]
text
    # '[3, 6, 9]'
type(text)
    # <class 'str'>
```

<br />

## int & float

if you now want to set a specific datatype you have to use int/float

```py
text = int(input("your input? (float) "))
    # your input? (float) 42
text
    # 42
type(text)
    # <class 'int'>


text = float(input("your input? (float) "))
    # your input? (float) 3.69
text
    # 3.69
type(text)
    # <class 'float'>
```

<br />

## Eval

for lists, dictionaries and tuples eval is used

```py
color = eval(input("Colors? "))
    # Colors? ["red","green","yellow"]
color, type(color)
    # (['red', 'green', 'yellow'], <class 'list'>)


frequency = eval(input("frequency? "))
    # frequency? {"a":5, "b":7, "c":3}
frequency, type(frequency)
    # ({'a': 5, 'b': 7, 'c': 3}, <class 'dict'>)
```
