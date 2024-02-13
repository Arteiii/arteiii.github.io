---
sidebar_position: 10
---

# Formated Output

## Print

```py
print( value1, ..., sep=' ', end='\n', file=sys.stdout, flush=False)
```

with print you can output any number of arguments separated by commas

```py
import sys
a = 3.123
print("a =", a)
# a: 3.123
print("a = \n", a)
# a =
#  3.123
```

with the argument sep you can change the separator that is output between the values:

```py
print("a", "b")
# a b

print("a", "b", sep='')
# ab

print(194, 201, 38, 74, sep='.')
# 194.201.38.74

print("a", "b", sep=":)")
# a:)b
```

after the output python ends with a newline:

```py
for i in range(3):
    print(i)
# 0
# 1
# 2
```

you can change the default (`"\n"`) using `end=" "`

```py
for i in range(3):
    print(i, end=" ")
# 0 1 2


for i in range(3):
    print(i, end=" :) ")
# 0 :) 1 :) 2 :)
```

using file you can output in to a file

```py
fh = open("formatted_output/date.txt", "w")
print("42", file=fh)
fh.close()
```

its also possible to output into the default error channel:

```py
print("Error: 42", file=sys.stderr)
# Error: 42
```

## C-Style Formating

:::info
is seen as an deprecated and bad style in python
:::

```py
print("some value: %4d, another: %3.1f" % (123, 1234.042))
```

Output:

`some value:  123, another: 1234.0`

| Placeholder | Meaning                                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| d/i         | signed integer (integer, decimal)                                                                                       |
| o           | unsigned integer in octal format                                                                                        |
| u           | absolete otherwise like a signed integer                                                                                |
| x           | unsigned integer (hexadecimal)                                                                                          |
| X           | unsigned integer (hexadecimal), uppercase                                                                               |
| e           | floating point numbers (exponential format)                                                                             |
| E           | like e but uppercase for exponent "e".                                                                                  |
| f           | fixed point displays the number as a fixed point number                                                                 |
| F           | like f but nan is displayed as NAN                                                                                      |
| g           | g corresponds to either e or f this is decided automatically depending on the size of the value and the given precision |
| G           | G is analogous to g but it corresponds to either E or f                                                                 |
| c           | one character                                                                                                           |
| s           | a string any python elements are converted to a string using str()                                                      |
| %           | no argument conversion takes place, a "% sign" is given                                                                 |

| Flag | Meaning                                                                    |
| ---- | -------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| #    | if this character is used with o,x or X the respective value               | is provided with the corresponding following prefix 0, 0o,0x or 0X |
| 0    | the result of the conversion is padded with zeros                          |
| -    | the result of the conversion is left-justified                             |
|      | if no sign is specified, a blank character is placed in front of the value |
| +    | the result will be signed (+ or -) this flag overwrites a "space" flag     |

## Python-Method

the format syntax looks like this:

```py
template.formate(p0, p1, ..., k0=v0, k1=v1, ...)
```

```py
"first argument: {0}, second: {1}".format(47, 11)
# 'first argument: 47, second: 11'

"first argument: {1}, second: {0}".format(47, 11)
# 'first argument: 11, second: 47'

"first argument: {1:3d}, second: {0:7.2f}".format(47.42, 11)
# 'first argument:  11, second:   47.42'

"first argument: {}, second: {}".format(47, 11)
# 'first argument: 47, second: 11'
```

argumnents can be used multiple times:

```py
"first argument: {0:6.2f}, second: {0:6.3f}".format(1.4148)
# 'first argument:   1.41, second:  1.415'
```

this method also works:

```py
"first argument: {a:5d}, second: {p:8.2f}".format(a=458, p=59.058)
# "first argument: {0:6.2f}, second: {0:6.3f}".format(1.4148)
```

with the .format method you can output data flush left (``<``) or flush right (``>``)

```py
"{0:<20s} {1:6.2f}".format("something and something else:", 3.69)
# "something and something else:            3.69"

"{0:>20s} {1:6.2f}".format("something and something else:", 3.69)
# "         something and something else:   3.69"

"{0:>20s} {1:6.2f}".format("something & lorem ipsum:", 3.99)
# "         something & lorem ipsum:   3.99"

"{0:<20s} {1:6.2f}".format("something & lorem ipsum:", 3.99)
# "something & lorem ipsum:            3.99"

"{0:<20} {1:6.2f}".format("something & lorem ipsum:", 3.99)
# "something & lorem ipsum:            3.99"

"{0:>20} {1:6.2f}".format("something & lorem ipsum:", 3.99)
# "         something & lorem ipsum:   3.99"
```

| Option | Meaning                                                                                                          |
| ------ | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| '``<``'    | field is left-justified within the existing space (strings are left-justified by default)                        |
| '``>``'    | field is output right-justified within the existing space (numeric values are output right-justified by default) |
| '``=``'    | padding characters are introduced between the sign, if a sign is output, and the actual                          | beginning of the digit of a number so that fields of the type '+00000420' can be output (can only be applied to numeric values) |
| '``^``'    | a field is output centered within the available space                                                            |

works only with numerical!!:

| Option | Meaning                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------ |
| '+'    | sign should always be output, regardless of whether the number is positive or negative.                            |
| '-'    | signshould only be used for negative numbers                                                                       |
| space  | instead of a "+", positive numbers are preceded by a " " space. negative numbers are preceded by a minus sign "-". |

### String Literals

formatted string literals are strings preceded by an f
they contain escaping fields that are evaluated for
runtime and formatted according to the format rules

```py
animal = "Dog"
height = 187.4
f"Animal: {animal}, Height: {height:6.2f}"
# 'Animal: Dog, Height: 187.40'

width, precision = 10, 3
x = 123.4238
f"Value: {x:{width}.{precision}}"
# 'Value:   3.69e+02'
```

### Dictionaries

```py
capital_country = {
    "united States": "Washington",
    "canada": "ottawa",
    "germany": "Berlin",
    "France": "Paris",
    "United Kingdom": "london",
    "switzerland": "Bern",
    "austria": "vienna",
}

print("countries and their capitals ")
for c in capital_country:
    print("{country}: {capital}".format(country=c, capital=capital_country[c]))
```

```txt
countries and their capitals
united States: Washington
canada: ottawa
germany: Berlin
France: Paris
United Kingdom: london
switzerland: Bern
austria: vienna
```

you can also use the dictionary directly in the call to the format method
(the ouput is the same)

```py
print("countries and their capitals:")
for c in capital_country:
    format_string = c + ": {" + c +"}"
    print(format_string.format(**capital_country))

```

### Local Variables

locals is a function that returns a dictionary with the locally defined names and their current values

```py
a = 42
b = 123
def f(): return 42


locals()
# a lot of text best use the function yourself


print("a={a}, b={b} and f={f}".format(**locals()))
# a=42, b=123 and f=<function f at 0x…>
```
