---
sidebar_position: 4
---

# Dictionaries

dictionaries are entered with curly brackets
a key value couple is separated with a double point (:)
and the different couples are separated with a comma

```py
food = {"ham":"yes", "egg":"yes", "spam":"no"}
print(food)
    # {'ham': 'yes', 'egg': 'yes', 'spam': 'no'}
    # You can output the full dictionary with print
    # The order can be different

food["ham"]
    # 'yes'
    # In order to get the value of a key (Ham) we use cornery slants as in the example

food["ham"]
    # 'no'

food["spam"] = "yes"
    # Changing an existing key works similarly to lists
    # Only that we use the key here ("spam") to change the value ("no" to "yes")

print(food)
    # {'ham': 'yes', 'egg': 'yes', 'spam': 'yes'}
```

## Define

Let's define a "dictionary"

```py
en_de = {"red":"rot", "green":"grün", "blue":"blau", "yellow":"gelb"}

en_de["red"]
    # 'rot'

en_de["green"]
    # 'grün'
    # The only problem here is that the translation only works in one direction

de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}

de_fr = {"rot":"rouge", "grün":"vert", "blau":"bleu", "gelb":"jaune"}

print("red is in french: " + de_fr[en_de['red']])
    # red is in french: rouge
```

## Errors

If you try on a non defined key (color)

```py
en_de("brown")
    # Traceback (most recent call last):
    #   File "<stdin>", line 1, in <module>
    # TypeError: 'dict' object is not callable
```

## Nested Dictionaries

```py
de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}

de_fr = {"rot":"rouge", "grün":"vert", "blau":"bleu", "gelb":"jaune"}

dictonaries = {"en" : de_en, "fr" : de_fr}

print(dictonaries["fr"]["blau"])
    # bleu
```

## Allowed Types

not only strings but also integers, floats, strings and tuples are allowed
but no lists or dictionaries

```py
ports = {"21":"File Transfer Protocol (FTP)", "22":"Secure Shell (SSH)"}

adressen = {"John":[ ("John" "Doe"), 2063, "Overdrive"]}
```

### Variable Keys

use of variable keys is not possible:

```py
dic = {[1, 2, 3]:"test123"}
    # Traceback (most recent call last):
    #   File "<stdin>", line 1, in <module>
    # TypeError: unhashable type: 'list'
```

### Tupel Is Possible

```py
dic = {(1, 2, 3):"abc", 1.337:"test1337"}
dic
    # {(1, 2, 3): 'abc', 1.337: 'test1337'}

```

### .len

len also works on dictionaries

```py
en_de = {"red":"rot", "green":"grün", "blue":"blau", "yellow":"gelb"}
len(en_de)
    # 4
```

## Error-Free Access

with the keyword "in" you can check if an index occurs in a dictionary

```py
en_de = {"red":"rot", "green":"grün", "blue":"blau", "yellow":"gelb"}
"red" in en_de
    # True

"brown" in en_de
    # False
```

this could be used to first check if the input is valid and if not, output a corresponding
error message:

```py
en_de = {"red":"rot", "green":"grün", "blue":"blau", "yellow":"gelb"}

color = input("farbe?")

if color in en_de:
    print("The color " + color +" is a key")
    print("the german value for: " + color + " is " + en_de[color])

else:
    print("The color: " + color + " is not a key yet")
    color_de = input("german for " + color + " ? ")
    en_de[color] = color_de
    print("The color " + color + " is now available")
    print(en_de)
```

### .get

alternatively you can use .get
however no error message is generated here but the defined default value is output
d.get(key[, default])

```py
en_de = {"red":"rot", "green":"grün", "blue":"blau", "yellow":"gelb"}
en_de.get("brown")
    #

en_de.get("red")
    # 'rot'

en_de.get("brown","default")
    # 'default'
```

## Create From List

dictionaries which consist only of strings which conform to the conventions for variable names
only letters, numbers and underscores can also be simply defined

```py
en_de = dict(red="rot", green="grün", blue="blau", yellow="gelb")
en_de
    # {'red': 'rot', 'green': 'grün',
    #  'blue': 'blau', 'yellow': 'gelb'}
```

```py
number  = ["1", "2", "3", "4", "5", "6"]
other   = ["a1", "a2", "a3", "a4", "a5", "a6"]

list(zip(number, other))
    # [('1', 'a1'), ('2', 'a2'),
    #  ('3', 'a3'), ('4', 'a4'),
    #  ('5', 'a5'), ('6', 'a6')]
```

as you can see this method outputs the items in tuples

```py
all = dict(zip(number, other))
all
    # {'1': 'a1', '2': 'a2', '3': 'a3', '4': 'a4', '5': 'a5', '6': 'a6'}
```

## ZIP-Function

zip is applied to strings, lists and tuples
so first a tuple with the first two arguments then a tuple with the second and so on...
this goes on until one of the iterable objects is used up

```py
name = ["Peter", "Sarah", "Maria", "Frank", "Eddie"]
value = ["12", "65", "42", "123", "5632"]

for name, money in zip(name, value):
    print(name + " got " + money)
        # Peter got 12
        # Sarah got 65
        # Maria got 42
        # Frank got 123
        # Eddie got 5632




z1 = [11, 12, 13]
z2 = [21, 22, 23]
z3 = [31, 32, 33]

T = zip(z1, z2, z3)
T
    # <zip object at 0x7feffcf58b00>

list(T)
    # [(11, 21, 31), (12, 22, 32), (13, 23, 33)]
```

from a zip object you can create such a list only once,
after that it is used up
and you get an empty list

```py
list(T)
    # []


    # also possible:
Z = [[11, 12, 13],
     [21, 22, 23],
     [31, 32, 33]]

list(Z)
    # [[11, 12, 13], [21, 22, 23], [31, 32, 33]]
```

### \*

causes the unpacking of the list

```py
TZ = zip(*Z)
list(TZ)
    # [(11, 21, 31), (12, 22, 32), (13, 23, 33)]
```

you can also connect two flat lists or tuples

```py
l1 = [11, 12, 13, 14]
l2 = [21, 22, 23, 24]

list(zip(l1, l2))
    # [(11, 21), (12, 22), (13, 23), (14, 24)]
```

If the arguments of zip are of different length,
only the smallest length is processed, all other elements are ignored

```py
l1 = [11, 12, 13]
l2 = [21, 22, 23, 24, 25]

list(zip(l1, l2))
    # [(11, 21), (12, 22), (13, 23)]
```

## Methods

### .items

```py
D.items()
```

returns set-like object of type dict_item
a view of the key value pairs

```py
de_en = {"rot":"red",
         "grün":"green",
         "blau":"blue",
         "gelb":"yellow"}

x = de_en.items()

type(x)
    # <class 'dict_items'>
x
    # dict_items([('rot', 'red'),
    #             ('grün', 'green'),
    #             ('blau', 'blue'),
    #             ('gelb', 'yellow')])
```

### .copy

copy creates a flat copy ([Shallow & Deep Copy](shallow_deep.md))

```py
de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}
d = de_en
d
    # {'rot': 'red', 'grün': 'green',
    #  'blau': 'blue', 'gelb': 'yellow'}

d["gelblich"] = "yellow'"
d
    # {'rot': 'red', 'grün': 'green',
    #  'blau': 'blue', 'gelb': "yellow'",
    #  'gelblich': "yellow'"}

de_en
    # {'rot': 'red', 'grün': 'green',
    #  'blau': 'blue', 'gelb': 'yellow',
    #  'gelblich': "yellow'"}
```

as you can see this does not work
because the base value is always processed as well

```py
de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}
d = de_en.copy()
d
    # {'rot': 'red', 'grün': 'green',
    #  'blau': 'blue', 'gelb': 'yellow'}

d["gelblich"] = "yellow'"
d
    # {'rot': 'red', 'grün': 'green',
    #  'blau': 'blue', 'gelb': "yellow'",
    #  'gelblich': "yellow'"}
```

### .popitem

```py
D.popitem()
```

return any key value pair and remove it from the dictionary
if the dictionary is empty a KeyError is generated

```py
de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}
de_en.popitem()
    #('gelb', 'yellow')
de_en
    # {'rot': 'red', 'grün': 'green', 'blau': 'blue'}

de_en.popitem()
    # ('blau', 'blue')

de_en.popitem()
    # ('grün', 'green')

de_en.popitem()
    # ('rot', 'red')

de_en.popitem()
    # Traceback (most recent call last):
    #   File "<stdin>", line 1, in <module>
    # KeyError: 'popitem(): dictionary is empty'
```

### .fromkeys

```py
dict.fromkeys(S[,v])
```

datatype (s/key) and v thus the value
if this is not assigned all get the value None

```py
food = ("French Fries", "Garden Salad", "Grilled Chicken")
d = dict.fromkeys(food)
d
    # {'French Fries': None,
    #  'Garden Salad': None,
    #  'Grilled Chicken': None}

d = dict.fromkeys(food, "enjoy")
d
    # {'French Fries': 'enjoy',
    #  'Garden Salad': 'enjoy',
    #  'Grilled Chicken': 'enjoy'}
```

### .keys

```py
D.keys()
```

returns set-like object of type dict_item
a view of the keys

```py
de_en = {"rot":"red",
         "grün":"green",
         "blau":"blue",
         "gelb":"yellow"}

x = de_en.keys()

type(x)
    # <class 'dict_keys'>
x
    # dict_keys(['rot', 'grün', 'blau', 'gelb'])
```

### .pop

```py
D.pop(k[,d])
```

removes the specified key(k)
if k is not a key an error is generated unless the value d was used then this is output

```py
de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}

x = de_en.pop("rot")
x
    # 'red'
de_en
    # {'grün': 'green', 'blau': 'blue', 'gelb': 'yellow'}



x = de_en.pop("braun")
    # Traceback (most recent call last):
    #   File "<stdin>", line 1, in <module>
    # KeyError: 'braun'

x = de_en.pop("braun", "error test 123")
x
    # 'error test 123'
```

### .setdefault

```py
D.setdefault(k[,d])
```

set k to the value d if k is already in D this changes nothing
if d was not set the key of k becomes None

1337

```py
de_en   = {"rot":"red",
           "grün":"green",
           "blau":"blue",
           "gelb":"yellow"}

de_en.setdefault("brown", "braun")
    # 'braun'

de_en.setdefault("grün", "verde")
    # 'green'

de_en.setdefault("orange")
de_en
    # {'rot': 'red',
    #  'grün': 'green',
    #  'blau': 'blue',
    #  'gelb': 'yellow',
    #  'brown': 'braun',
    #  'orange': None}
```

### .update

adds another dictionary
and if necessary overwrites the old values/keys

```py
de_en   = {"rot":"red",
           "grün":"green",
           "blau":"blue",
           "gelb":"yellow"}

de_en2  = {"yellow":"gelb", "red":"rötlich"}
de_en.update(de_en2)
de_en
    # {'rot': 'red',
    #  'grün': 'green',
    #  'blau': 'blue',
    #  'gelb': 'yellow',
    #  'yellow': 'gelb',
    #  'red': 'rötlich'}
```

### .clear

clear deletes all entries:

```py
de_en = {"rot":"red", "grün":"green", "blau":"blue", "gelb":"yellow"}
de_en
    # {'rot': 'red', 'grün': 'green',
    #  'blau': 'blue', 'gelb': 'yellow'}

de_en.clear()
de_en
    # {}
```
