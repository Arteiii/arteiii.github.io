---
sidebar_position: 2
---

# Datatypes

## Integers

unlike in other programming languages, integer numbers are unlimited in Python

means they can be of any size, however, no number may begin with 0

```py
very_long = 124039452093423

very_long *= very_long

print(very_long)
```

### Binary

if you want to output/store a binary number you need the 0 or 0b/0B for it
and then the binaries

```py
binarie = 0B101010

print('prints binaie 0B101010:',binarie)
```

### Octa

literal for an octa number: 0o/0O
and then the octa number

```py
okta = 0o10

print('prints okta 0o10:',okta)
```

### Hex

hexadecimal with: 0x/0X
and then the hexa number

```py
hexa = 0x10

print('prints hexa 0x10',hexa)
```

### Convert Hex/Bin/Oct

with the function hex/bin/oct you can convert an integer into a string
which corresponds to the number in the corresponding base
so for example:

```py
x = hex(19)

type(x)

x = bin(65)
```

## Float

numbers like:
2.34, 27.3453453 or 3,215e2

```py
x = 2.34
y = 3.14e2  # = 3.14*10²
```

## Complex

the data type complex
complex numbers extend real numbers in such a way that

the equation x²+1 = 0 becomes solvable
in mathematics these are often represented as
a + b \* _i_ where a and b are the real numbers and _i_ is the imaginary unit

in python one uses for the convention of electrical engineering a "j" as imaginary unit

```py
x = 3 + 4j
y = 2 - 4.5j

x + y   # = (5-0.5j)

x * y   # = (24-5.5j)
```

### Operators

| Operator | Meaning                                           |
| -------- | ------------------------------------------------- |
| x + y    | sum of x and y                                    |
| x - y    | difference of x and y                             |
| x \* y   | product of x and y                                |
| x / y    | quotient of x and y                               |
| x // y   | integer division                                  |
| x % y    | modulo or rest division                           |
| abs(x)   | amount from x                                     |
| x \*\* y | raise to the power of x, i.e. x to the power of y |

with % the rest of an integer division can be determined safely

```py
8 % 3
# 2

9 % 3
# 0

8.0 % 3
# 2.0
```

correlations between the integer and modulo ZeroDivisionError

```py
x = 24
y = 7
x == (x // y) * y + (x % y)
# True
```

## Boolean

a boolean can only pass two values True or False i.e. 0 or 1
IMPORTANT! upper/lower case

```py
x = False
not x   # (True)

x = True
not x   # (False)

y = False
x and y # will be false  because only x is true and y is false

x or y # only one of them need to be true


x and not y # if x is true and y is false this will return true
```

## Type Conversion

the conversion of a datatype is called type conversion/cast
type conversions are needed when you want to express strings and numeric values:

```py
string1 = 'abcd'
string2 = 'dcba'
number = 123

print(string1 + ' ' + string2 + '  number: ' + str(number))
```

here we have specifically converted 'number' to a string using the str function
if we had not converted the integer to a string before, python would have generated a TypeError:

```py
print(string1 + ' ' + string2 + '  number: ' + number)

# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
```

python does not support implicit type conversions as they are possible in php or
perl  
but there are exceptions for example when we mix integer and float values in an
expression  
there the integer value was implicitly converted to a float value  

## Determine Datatypes

to determine which class it is, you can use the built-in type function:

```py
l = [3, 6, 9]
type(l)
# <class 'list'>

x = 4
type(x)
# <class 'int'>

x = 4.5
type(x)
# <class 'float'>

x = 'string'
type(x)
# <class 'str'>
```

isinstance(object, ct)
an alternative to type is: "isinstance" which returns either true or false
object is the object to check and ct is the class to check for

```py
x = (3, 6, 9)
isinstance(x, tuple)
# True
```

if you want to find out if it is a variable or an integer you could:

```py
x = 4
isinstance(x, int ) or isinstance(x, float)
# True

x = 4.8
isinstance(x, int ) or isinstance(x, float)
# True
```

with isinstance, however, this can also be done differently:

```py
x = 4.8
isinstance(x,(int, float))
# True

x = (3, 6, 9)
isinstance(x, (list, tuple))
# True

isinstance(x, (int, float))
# False
```
