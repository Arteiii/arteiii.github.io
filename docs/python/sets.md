---
sidebar_position: 5
---

# Sets

## Introduction

sets are a collection of unique and unchangeable elements

```py
>>> city = {"Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"}

>>> print(city)
# output:
{'Lubbock', 'Corpus Christi', 'Pittsburgh', 'Lincoln'}

>>> "Pittsburgh" in city
True

>>> "Berlin" in city
False


>>> cities = set(("Paris", "Lyon", "London", "Berlin", "Paris"))
>>> cities
{'London', 'Paris', 'Berlin', 'Lyon'}
    # you can see that paris occurs only once


>>> x = set("Python1235123")
>>> x
{'h', 't', '1', '3', '2', '5', 'y', 'P', 'o', 'n'}

>>> type(x)
<class 'set'>
```

sets are implemented in a way that they **do not** allow mutable objects

```py
>>> cities = set((("Python","Perl"), ("Paris", "Berlin", "London")))

>>> cities = set((["Python","Perl"], ["Paris", "Berlin", "London"]))
Traceback (most recent call last):
   File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

even if sets cannot contain mutable objects, a set can be modified:

```py
>>> cities = {"Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"}
>>> cities.add("Frankfurt")
>>> cities
{'Lubbock', 'Corpus Christi', 'Pittsburgh', 'Lincoln', 'Frankfurt'}
```

frozensets are like sets only they can not be changed!!

```py
>>> cities = frozenset(["Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"])
>>> cities.add("Frankfurt")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'frozenset' object has no attribute 'add'
```

## Methods

### Add

an object is only added as a new element if it is not already contained
if it is already contained calling the function has no effect

```py
>>> city = {"Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"}
>>> city.add("Frankfurt")
>>> city
{'Lubbock', 'Corpus Christi', 'Pittsburgh', 'Lincoln', 'Frankfurt'}

>>> city.add(["Frankfurt", "Berlin"])
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

### Clear

removes every element of a list

```py
>>> city = {"Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"}
>>> city.clear()
>>> city
set()
```

### Copy

copy creates a flat copy of the set

```py
>>> city = {"Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"}
>>> cities_backup = city.copy()
>>> city.clear()
>>> cities_backup
{'Lubbock', 'Corpus Christi', 'Pittsburgh', 'Lincoln'}
```

<br />

the next example does not work because: "cities_backup = city"
only creates a pointer (another name for the same object)

```py
>>> city = {"Pittsburgh", "Lincoln", "Lubbock", "Corpus Christi"}
>>> cities_backup = city
>>> city.clear()
>>> cities_backup
set()
```

### Difference Update

the method difference_update removes all elements of another set from a set

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> y = {"b", "c"}
>>> x.difference_update(y)
>>> x
{'e', 'd', 'a'}

>>> x = {"a", "b", "c", "d", "e"}
>>> y = {"b", "c"}
>>> x = x - y
>>> x
{'a', 'e', 'd'}
```

### Difference

the difference of two or more sets

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> y = {"b", "c"}
>>> z = {"c", "d"}
>>> x.difference(y)
{'d', 'a', 'e'}

>>> x.difference(y).difference(z)
{'a', 'e'}
```

<br />
instead of using difference we could also use "-".

```py
>>> x - y
{'d', 'e', 'a'}

>>> x - y - z
{'e', 'a'}
```

### Discard

discard(el)

the element el is removed from a set if it is included
if not nothing happens

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> x.discard("a")
>>> x
{'e', 'b', 'd', 'c'}

>>> x = {"a", "b", "c", "d", "e"}
>>> x.discard("z")
>>> x
{'e', 'b', 'd', 'a', 'c'}
```

### Intersection

.intersection(_s_)

returns the intersection of _s_ and the instance set

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> y = {"c", "d", "e", "f", "g"}
>>> x.intersection(y)
{'d', 'e', 'c'}
```

<br />
alternative can also be used &

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> y = {"c", "d", "e", "f", "g"}
>>> x & y
{'d', 'e', 'c'}
```

### isDisjoint

.isdisjoint()

returns True if two sets have an empty intersection

```py
>>> x = {"a", "b"}
>>> y = {"c", "d"}
>>> z = {"b", "c"}
>>> x.isdisjoint(y)
True

>>> x.isdisjoint(z)
False
```

### isSubset

.issubset()

x.issuperset(y) returns True if x is a superset of y (>=).
a simple greater than sign (>) checks if it is a true superset:
if x > y then x contains at least one element not contained in y

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> y = {"b", "c"}
>>> x.issuperset(y)
True

>>> x > y
True

>>> x >= y
True

>>> x >= x
True

>>> x > x
False

>>> x.issuperset(x)
True
```

### pop

.pop()

returns any element the element is removed from the set

```py
>>> x = {"a", "b", "c"}
>>> x.pop()
'a'
>>> x.pop()
'b'
>>> x.pop()
'c'
```

if there are no elements left py returns an error

```py
>>> x.pop()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'pop from an empty set'
```

### Remove

.remove(_el_)

works like discard only if _el_ is not included an error is generated

```py
>>> x = {"a", "b", "c", "d", "e"}
>>> x.remove("a")
>>> x
{'e', 'b', 'd', 'c'}

>>> x = {"a", "b", "c", "d", "e"}
>>> x.remove("z")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'z'
```
