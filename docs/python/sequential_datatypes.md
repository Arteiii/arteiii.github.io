---
sidebar_position: 3
---

# Sequential Datatypes

In Python, sequential data types are collections that organize and store elements in a specific order.  
These elements can be accessed and manipulated using indices.  
The two primary sequential data types in Python are strings and lists.

## Indexing

In Python, the characters of a sequential data type, like a string, are indexed from left to right starting with 0.  
When counting from the back (right), you use negative indices, starting with -1.  
This indexing convention is implemented using square brackets (`[]`)

```py
>>> text = "Hello World!"
>>> print(text[0])
H
>>> print(text[6])
W

>>> print(text[-4])
r

>>> print(text[-1])
!
```

This works for all sequential data types, including lists and tuples:

```py
>>> l = [42, 3, [6, 9]]
>>> l[0]
42
>>> l[2]
[6, 9]

>>> l[2][1]
9

>>> l[0] = "new value"
>>> l
['new value', 3, [6, 9]]
```

:::caution
In Python, tuples are immutable data structures, meaning their elements cannot be changed or modified once the tuple is created. Unlike lists, which allow for item assignments and modifications, tuples offer a fixed and unalterable sequence of elements. This immutability ensures the integrity of the tuple's original values throughout the program's execution.
:::

## len Function

The len function reproduces the number of elements of a sequential data type

```py
>>> string = 'Hello World!'
>>> len(string)
12

>>> list = [1, 2, 3, 4, 5, 6, 7]
>>> len(list)
7
```

## Lists

unlike a string, lists consist of a sequence of arbitrary objects
for example integer-numbers,float-numbers, strings or again lists

```py
>>> x = [3, 6, 9, "der traum ist echt"]
>>> y = [42, 44, [45, 89], 88]
```

as you can see lists are generated with the square bracket[] and separated with commas

lists can contain further sub-lists like in example y
but also other objects for example tuples and dictionaries

## Strings

strings consist of an unchanging sequence of characters

this can be done for example with: '

```py
'im a string'
```

or: "

```py
"also a string"
```

works also """ or '''

```py
'''bli bla blub string "this works btw" '''
```

to create multiline strigns offers: \

```py
>>> s = "string string \
  but i go over several lines \
  this is the first line \n\
  and this the second"
>>> print(s)
```

to create a line feed we use: \n

an alternative would be to use the """ but here newlines are taken over into the string

```py
>>> s = """string string
  but i go over several lines
  this is the third line \
  i also belong to the third"""
>>> print(s)
```

|                |                                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------- |
| ``//``         | substitute representation of a backslash                                                            |
| ``\'``         | quotation mark                                                                                      |
| ``\"``         | quotes                                                                                              |
| ``\b``         | backspace                                                                                           |
| ``\f``         | form feed                                                                                           |
| ``\n``         | line break                                                                                          |
| `\NNAME`       | unicode character name for example: ``print("\n {GREEK SMALL LETTER PI} ")`` prints the greek "pi". |
| ``\t``         | horizontal tab                                                                                      |
| ``\v``         | vertical tab                                                                                        |
| ``\uXXXX``     | 16-bit-unicode-character                                                                            |
| ``\uXXXXXXXX`` | 32-bit-unicode-character                                                                            |
| ``\ooo``       | ASCII-character okta                                                                                |
| ``\xhh``       | ASCII-character hexadezimal                                                                         |

sometimes you don't want python to express these escape characters
this can be done by defining a python string as a "raw" string (r/R)

```py
>>> s = "\one line\aandanother one"
>>> print(s)
'one line'
'andanother one'

>>> s = r"\one line\aandanother one"
>>> print(s)
'\one line\aandanother one'

>>> s = R"\one line\aandanother one"
>>> print(s)
'\one line\aandanother one'
```

## subdivision operators

As with indexing, the angular clips were used in slicing
Only here are at the beginning and end of the value

```py
>>> txt = 'Hello World'
>>> txt[1:4]
'ell'
>>> txt[0:5]
'Hello'
```

you can also leave out the initial or end value

```py
>>> txt[:5]
'Hello'

>>> txt[0:-6]
'Hello'
```

of course also works the other way around:

```py
>>> txt[6:]
'World'
```

So it would work with lists:

```py
>>> liste = [1, 2, 3, 42, 123]
>>> liste[1:3]
[2, 3]

>>> liste[2:]
[3, 42, 123]

>>> liste[:4]
[1, 2, 3, 42]
```

the slicing operator also works with 3 arguments
[Beginning, end, step size]²

```py
>>> k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
>>> k[0:11:3]
[1, 4, 7, 10]


>>> text = 'Python is fun! Hello World!'

>>> text[::3]
'Ph  nHlWl'
```

also works:)

works with negative values
The meaning of the values changes:
[End, beginning, negative step size]
If no initial and final value has been given, the list with reverse order is issued:

```py
>>> x = [3, 6, 9, 42, 35]
>>> x[3:1:-1]
[42, 9]

>>> x[4:1:-2]
[35, 9]

>>> l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
>>> l[::-1]
[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

## Tuple

lists and tuples differ only in the way they are parenthesized
so if we want to use the list example in a tuple notation it looks like this:

```py
>>> x = (3, 6, 9, "der traum ist echt")
>>> y = (42, 44, [45, 89], 88)
```

The biggest difference is that tuples can no longer be changed!
so no object can be removed added or changed

the bracket can also be omitted:

```py
>>> example = 3, 6, 9, "der traum ist echt"
>>> example
(3, 6, 9, 'der traum ist echt')
```

multiple assignment
instead of one variable name, list as many variable names on the left side of the assignment as the tuple element has

```py
>>> minimum, maximum, text = 42, 123, "der traum ist echt"
>>> minimum
42
>>> maximum
123
>>> text
'der traum ist echt'
```
