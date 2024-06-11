---
sidebar_position: 11
---


# Shallow & Deep Copy

```py
>>> x = 3
>>> y = 3
```

x and y are assigned to the same object(3)
the proof that this is really so can be provided with the help of the id-function:

```py
>>> print(id(x), id(y))
10861256 10861256
```

so what happens if we assign a different value to one variable

```py
>>> y = 2
>>> print(id(x) == id(y), x, y)
False 3 2
```

y now points to an integer object of its own

## Shallow Copy

the copy-method can be used to create flat copies of lists

```py
>>> list1 = ["3", "6", "9"]
>>> list2 = list1.copy()
>>> list2[1] = "x"
>>> print(list1)
['3', '6', '9']

>>> print(list2)
['3', 'x', '9']
```

<br />
but as soon as there are sublists in the list to be copied,
<br />
only pointers to these sublists are copied

```py
>>> lst1 = ["a", "b",["cd", "dc"]]
>>> lst2 = lst1.copy()
>>> lst2[0] = "c"
>>> lst2[2][0] = "f"
>>> print(lst1)
['a', 'b', ['f', 'dc']]
```

## Deep Copy

one solution for the problem just described is the module copy
which provides the deepcopy function

```py
>>> from copy import deepcopy
>>> lst1 = ["a", "b",["cd", "dc"]]
>>> lst2 = deepcopy(lst1)


>>> lst2[2][1] = "d"
>>> lst2[0] = "c"
>>> print(lst2)
['c', 'b', ['cd', 'd']]

>>> print(lst1)
['a', 'b', ['cd', 'dc']]
```

## Deep Copy Dictionaries

deepcopy from the module copy works for any python object
from copy import deepcopy

```py
>>> d = {"a": 3, "b": 4}
>>> copy_of_d = deepcopy(d)
>>> d["c"] = 1
>>> d
{'a': 3, 'b': 4, 'c': 1}
>>> copy_of_d
{'a': 3, 'b': 4}
```

also the method copy creates only a flat copy

```py
>>> p = {"John": {"weight": 87.8, "Height": 187.5}}
>>> p = {"John": {"weight": 87.8, "Height": 187.5},"Jane":
  {"weight": 60.6, "height": 168.4}}
>>> p2 = p.copy()
>>> p["Jane"]["weight"] -= 0.4
>>> p2
{'John': {'weight': 87.8, 'Height': 187.5},
 'Jane': {'weight': 60.2, 'height': 168.4}}

>>> p2 = deepcopy(p)
>>> p["Jane"]["weight"] -= 0.2
>>> p2["Jane"]["weight"]
60.0

>>> p["Jane"]["weight"]
59.8
```

## Copy Lists

in this example we create a flat copy of a list

```py
>>> colors1 = ["red", "blue"]
>>> colors2 = colors1
>>> print(colors1)
['red', 'blue']

>>> print(colors2)
['red', 'blue']

>>> print(id(colors1), id(colors2))
140535031048896 140535031048896

>>> colors1 = ["blue", "yellow"]
>>> print(colors1)
['blue', 'yellow']

>>> print(colors2)
['red', 'blue']

>>> colors1 = ["red", "blue"]
>>> colors2 = colors1
>>> colors2[1] = "green"
>>> print(colors1)
['red', 'green']

>>> print(colors2)
['red', 'green']
```

as we have already seen, in the assignment colors1 = colors2
only one reference to the same list is created
so changes within the list object apply to colors1 and colors2
since they point to the same object
