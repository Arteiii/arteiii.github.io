---
sidebar_position: 1
---

# Variables

here we define a variable (x) and assign it the value 42

```py
x = 42

# "=" non-mathematical equals sign

print('value of x:', x)
# value of x: 42
```

here we output the value x using the print function
now both variables point to the same object (object 42)

```py
xstring = 'stringx'

ystring = 'stringy'

print('id of stringx: ',id(xstring))
    # id of stringx:  140395292848112

print('id of stringy: ',id(ystring))
    # id of stringy:  140395290122992

ystring = xstring

print('id of string x after it has been set to the value of x: ',id(ystring))
    # id of stringx after it has been set to the value of x:  140395292848112
```

<br />

as you can see the id of the ystring is the same after we assigned it to the same object
to add a certain value of a function we use:

```py
x = x + 36
```

<br />
an alternative is also x += 36 the result is the same there are also other operators
like: "-" "*" "/" "**" "//"integer division and "%" (modulo) more in operatoren.py

```py
print(x)
    # 78
```

<br />

## Static & Dynamic Type declarations

in programming languages like c, c++, and java... the variable must be assigned a type before it can be used
so in c for example:

```c
int i, j;
float x;

x = i /3.0 +5.8;
```

<br />
later the values for i, j and x can change <br />
but not the type so x = float and i/j = int <br />
this is called "static type declaration
<br />
<br />

in python, it is a bit different
because in python the variable has no specific type you don't have to declare it

so for example you need a variable i with the value 369:

```py
i = 369
```

thereby an object with the type integer is created automatically
however this type can be changed during the program run

```py
i = 'Hello World!'
i = [3, 6, 9]
```

however, python assigns a special type/class to the object in each case
python automatically detects the data type
even while the program is running

this is called dynamic type declaration

with the function type, you can display the type:

```py
i = 369
type(i)
# <class 'int'>

i = 'Hello World!'
type(i)
# <class 'str'>

i = [3, 6, 9]
type(i)
# <class 'list'>
```

<br />
nevertheless, type conflict can occur
<br />
for example, if you try to add a variable of type int with a variable of type str
<br />
in this case, a TypeError is generated:
<br />

```py
x = 'string'
y = 369
z = x + y
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str
```

<br />
but you can mix integer and float values <br />
the value of the expression then becomes a float

```py
x = 12
y = 3.5
z = x * y
z
# 42.0

type(x)
# <class 'int'>
type(y)
#<class 'float'>
type(z)
# <class 'float'>
```

## Variable names

variables must start with a letter or "\_".
variables are case-sensitive in Python which means that the case must be respected

```py
Test_42 = 'Test42'
test_42 = 'test42 but lower case'

print(Test_42)
# Test42

print(test_42)
# test42 but lower case
```
