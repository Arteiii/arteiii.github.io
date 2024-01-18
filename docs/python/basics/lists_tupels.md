---
sidebar_position: 14
---


# Lists & Tupels

## Stack

a "stack" essentially has 2 functions  
one with which you can put something on the stack  
and one to remove something from the top level of a stack  

| method | meaning                                                                                                                         |
| ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| push   | adds something "on top" to the stack python does not have a function called push but **append** performs the same functionality |
| pop    | return the top object of the stack, removing it in the process                                                                  |
| peek   | allows you to read the "top" value without removing it as with pop                                                              |

## Stacks In Python

- s.append(x)
  > Add an item to the end of the list.
- s.pop(i)
  > prints the i-th element of an lsite and removes it in the process
- s.pop()
  > If i is not specified, the last object is used

```py
colors = ["red", "green"]
colors.append("blue")
colors
# ['red', 'green', 'blue']

c = colors.pop()
c
# 'blue'

colors.append(colors.pop())
colors
# ['red', 'green']
```

## Extend

extend is used to append multiple elements to a list

> s.extend(t)

t must be an iterable object

```py
fib = [0, 1, 1, 2, 3, 5]
fib.extend([8, 13, 21])
fib
# [0, 1, 1, 2, 3, 5, 8, 13, 21]
```

if you pass a string it will be split into its individual letters

```py
list1 = []
list1.extend("Test123")
list1
# ['T', 'e', 's', 't', '1', '2', '3']
```

## "+" Operator

```py
bli = [4, 2]
bli = bli + [123]
bli
# [4, 2, 123]
```

this method is also possible but much slower than the append method

```py
bli = [4, 2]
bli += [123]
bli
# [4, 2, 123]
```

this is better, but still not as fast as the append method

## Remove a Value

> s.remove(x)

with remove the first occurrence of the value x can be removed

if x is not present a ValueError is generated

## Count

if you want to count how many times an element is included in a list you can use .count

```py
bli = [4, 2, 123, 4, 2, 2, 2, 42]
bli.count(2)
# 4

bli.count(123)
#1
```

## Position

with index you get the position of an element within a list

> s.index(x[ , i [, j ] ] )

the index for the x is determined  
if the parameter i is given the search starts at this position and ends at j

```py
bli = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
bli.index(1)
# 0

bli.index(10 , 8)
# 9

bli.index(10 , 6, 8)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ValueError: 10 is not in list
```

## Insert

with append you can append an element to the end of a list but with insert you can insert an element at any place you want

> s.insert(index, object)

```py
bli = [1, 2, 3, 4, 5, 6, 7]
bli.insert(1, 42)
bli
#[1, 42, 2, 3, 4, 5, 6, 7]
```

## Tupels

as we already know tuples are immutable
means methods like append, insert , pop...
do not exist/work

### Empty tuples

empty tuples can be defined with an empty bracket

```py
t = ()
type(t)
# <class 'tuple'>
```

### Single Digit Tuples

let's try to define a tuple with only one element

```py
t = (1)
type(t)
# <class 'int'>
```

does not look good but works

```py
t = (1,)
type(t)
# <class 'tuple'>
```

### Packing & Unpacking

another option to define a tuple goes like this:

```py
f = "test", "test123"
type(f)
# <class 'tuple'>
```

it is called tuple unpacking when you assign the individual values of a tuple to variables

```py
(first, second) = f
print(first, second)
# test test123
```

```py
(first, *everything_else) = 1, 2, 3, 42, 123
print(first)
# 1

print(everything_else)
# [2, 3, 42, 123]
```

## Unchangeable?

tuples cannot be modified  
but we can edit objects like lists  
because the tuple only contains a pointer to this list  

```py
test = ([],)
test[0].append("bli bla")
test
# (['bli bla'],)
```

## Sort Lists

### .sort

.sort will sort the list inplace

```py
test123 = [42, 123, 2, 1, 4, 3,]
test123.sort()
test123
# [1, 2, 3, 4, 42, 123]
```

### sorted

sorted returns a sorted list and the original list remains unchanged

```py
test123 = [42, 123, 2, 1, 4, 3,]
test = sorted(test123)
test123
# [42, 123, 2, 1, 4, 3]

test
# [1, 2, 3, 4, 42, 123]
```

### reverse

to reverse the sort order set the parameter reverse to True (reverse=True)

this works for .sort and sorted

```py
test123 = [42, 123, 2, 1, 4, 3,]
test = sorted(test123, reverse=True)
test
# [123, 42, 4, 3, 2, 1]

test123.sort(reverse=True)
test123
# [123, 42, 4, 3, 2, 1]
```

### Own Sorting Function

if you don't want to sort a list by the standard order relation you can use the parameter key

```py
test = ["Green", "yellow", "blue", "Black", "red"]
sorted(test)
# ['Black', 'Green', 'blue', 'red', 'yellow']
```

```py
test = ["Green", "yellow", "blue", "Black", "red"]
sorted(test, key=str.lower)
# ['Black', 'blue', 'Green', 'red', 'yellow']
```

### itemgetter

if you want to sort lists containing tuples you can use itemgetter

sort by the 0-th index:

```py
from operator import itemgetter

test123 = [("John", "Doe", "1337"),
            ("Maria", "Sigibert", "1230"),
            ("Folcmar", "Kester", "4200"),]

sorted(test123, key=itemgetter(0))
# [('Folcmar', 'Kester', '4200'),
#  ('John', 'Doe', '1337'),
#  ('Maria', 'Sigibert', '1230')]
```

sort after the first index:

```py
sorted(test123, key=itemgetter(1))
# [('John', 'Doe', '1337'),
# ('Folcmar', 'Kester', '4200'),
# ('Maria', 'Sigibert', '1230')]
```

sort after the second index

```py
sorted(test123, key=itemgetter(2))
# [('John', 'Doe', '1337'),
#  ('Maria', 'Sigibert', '1230'),
#  ('Folcmar', 'Kester', '4200')]

```
