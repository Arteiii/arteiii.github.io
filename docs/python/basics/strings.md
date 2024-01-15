---
sidebar_position: 17
---



# Strings

<br />

## Splitting

python offers several functions for splitting out a string

- [split](#split)
- [rsplit](#rsplit)
- [splitlines](#splitlines)
- [partition](#partition)
- [rpartition](#partition)

<br />

### split

```py
string123 = """Everybody is a genius.
But if you judge a fish by its ability to climb a tree,
it will live its whole life believing that it is stupid."""

string123.split()
# ['Everybody', 'is', 'a', 'genius.', 'But', 'if'…
```

<br />

you can also define the separation character

```py
string123 = """Everybody;is;a;genius.
;But;if you judge;a fish by its ability to climb a tree,
 it will live its whole life believing that it is stupid."""

string123.split(';')
# ['Everybody', 'is', 'a', 'genius.',
# 'But', 'if you judge', 'a fish by its ability…
```

<br />

### maxsplit

with maxsplit you can define how often a string should be split starting from left

you do not want to specify a separating character<br/>
you can put None in the place

```py
string123 = """Everybody is a genius.
But if you judge a fish by its ability"""

string123.split(None, 4)
# ['Everybody', 'is', 'a', 'genius.',
# 'But if you judge a fish by its ability']
```

<br />

### rsplit

rsplit works basically like split with the small difference that it does not start from the left but from the right.

if no parameter is specified for maxsplit the result of split and rsplit do not differ

<br />

### splitlines

splitlines splits a text with line delimiters (\n, \r...)
into a list of lines

```py
s = "line1\nline2\nline3\nline4\nline5\nline6\n"
s.splitlines()
# ['line1', 'line2', 'line3', 'line4', 'line5', 'line6']
```

<br />

### partition

with "partition" a string can be split from left to right at the first partial operator

```py
veni = "Veni, vidi, vici."
veni.partition(",")
# ('Veni', ',', ' vidi, vici.')

veni = "Veni, vidi, vici."
veni.rpartition(",")
# ('Veni, vidi', ',', ' vici.')
```

<br />
<br />

## join

s.join ( iterable )

"iterable" are joined in such a way that the string (s) is placed between the elements.

```py
x = ["veni", "vidi", "vici"]
"-".join(x)
# 'veni-vidi-vici'

x = "1337369"
".".join(x)
# '1.3.3.7.3.6.9'
```

<br />
<br />

## Substring

<br />

### "in" or "not in"

in is well suited to test if a substring occurs

```py
stringus = '“Be the change that you wish to see in the world.” ― Mahatma Gandhi'

"Gandhi" in stringus
# True

"Gandhi" not in stringus
# False
```

<br />

### s.find ( substring [ , start [ , end ] ] )

find returns the value -1 if the substring does not occur<br/>
otherwise it returns the position from which the substring begins

```py
stringus = '“Be the change that you wish to see in the world.” ― Mahatma Gandhi'

stringus.find("ou")
# 21

stringus.find("not")
# -1
```

with the parameters start and end you can specify which area of a string is searched for

### s.rfind ( substring [ , start [ , end ] ] )

rfind works like find only that the search starts from the right side<br/>
however the output is not counted from the right/end of the string

```py
stringus = '“Be the change that you wish to see in the world.”\n ― Mahatma Gandhi you'

stringus.rfind("you")
# 69
```

<br />

### s.index/rindex ( substring [ , start [ , end ] ] )

works exactly like find/rfind only if the substring is not included an error is returned

```py
stringus = '“Be the change that you wish to see in the world.”\n ― Mahatma Gandhi you'

stringus.index("you")
# 20

stringus.rindex("Be", 5)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ValueError: substring not found
```

<br />

### s.count ( substring [ , start [ , end ] ] )

count counts the occurrence of a substring

```py
stringus = '“Be the change that you wish to see in the world.”\n ― Mahatma Gandhi you'

stringus.count("e")
# 6

stringus.count("Mahatma")
# 1
```

<br />
<br />

## Search and Replace

`s.replace ( old , new [ , count ] )`<br/>
without count all occurrences of old are replaced by new

```py
stringus = '“Be the change that you wish to see in the world.”\n ― Mahatma Gandhi you'

stringus.replace("a", "b")
# '“Be the chbnge thbt you …

stringus.replace("e", "123", 1)
# '“B123 the change that you…
```

<br />
<br />

## Lowercase and Uppercase

```py
stringus = '“Be the change that you wish to see in the world.”\n ― Mahatma Gandhi you'

stringus.lower()
# '“be the change that you…

stringus.upper()
# '“BE THE CHANGE THAT YOU…
```

<br />
<br />

## Capitalize & Title

capitalize is a function which converts all letters except the first letter of a string into lowercase letters

title converts all letters that are not the first letters of a word to lowercase letters

```py
stringus = 'hello “Be the change that you wish to see in the world.”\n ― Mahatma Gandhi you'

stringus.capitalize()
# 'Hello “be the change that you…

stringus.title()
# 'Hello “Be The Change That You…
```

<br />
<br />

## Striping Strings

strip can be used to remove whitespaces or unwanted characters at the beginning of a string

```py
stringus = '\n “Be the change”\n ― Gandhi  \n  '

stringus.strip()
# '“Be the change”\n ― Gandhi'

stringus.rstrip()
# '\n “Be the change”\n ― Gandhi'

stringus.lstrip()
# '“Be the change”\n ― Gandhi  \n  '

stringus = "1337Test"
stringus.strip("1337")
# 'Test'
```

<br />
<br />

## Align Strings

`s.center ( length [ , fillchar ] )`
the string(s) will be filled with fillchar if fillchar is not set, blank characters will be used by default

```py
stringus = '1337'

stringus.center(20)
# '        1337        '


stringus.ljust(10)
# '1337      '

stringus.rjust(10)
# '      1337'

stringus = "3.1415926"
stringus.zfill(15)
# '0000003.1415926'
```

zfill is especially for numerical values

<br />
<br />

## String-Test

<br />

### s.isalnum()

True if all characters in s are letters or numbers

<br />

### s.isalpha()

True if all characters are letters

<br />

### s.isdigit()

True if all characters are digits

<br />

### s.islower()

True if all characters are in lowercase letters

<br />

### s.isupper()

True if all characters are in capital letters

<br />

### s.isspace()

True if all characters are whitespaces

<br />

### s.istitle()

True if all words are capitalized
