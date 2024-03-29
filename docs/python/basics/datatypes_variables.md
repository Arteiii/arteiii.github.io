---
sidebar_position: 1
---

# Variables

In Python, variables serve as symbolic names for values or objects in your program.  
They allow you to store and manipulate data easily.  

## Variable Assignment

```py
x = 42
```

Here, we define a variable x and assign it the value 42.  
The "=" sign is used for assignment, representing a non-mathematical equals sign.

## Outputting the Value of a Variable

```py
print('value of x:', x)
# value of x: 42
```

We use the print function to display the value of x.

## Understanding Object Identity

```py
xstring = 'stringx'
ystring = 'stringy'

print('id of stringx:', id(xstring))
# Output: id of stringx: 140395292848112

print('id of stringy:', id(ystring))
# Output: id of stringy: 140395290122992

ystring = xstring

print('id of string x after it has been set to the value of x:', id(ystring))
# Output: id of stringx after it has been set to the value of x: 140395292848112
```

Variables are references to objects.  
Here, we show that variables can point to the same object.  
The id() function returns the unique identifier of an object, allowing us to observe the identity of variables.

## Modifying Variables

```py
x = x + 36
# Alternative: x += 36
print(x)
# Output: 78
```

Variables can be modified using various operators like "+", "-", "*", "/", "**" (exponentiation), "//" (integer division), and "%" (modulo).  
Here, we demonstrate incrementing the value of x.

## Static & Dynamic Type Declarations

### Variable Immutability

In Python, certain types of variables, like strings and tuples, are immutable. Once assigned, their values cannot be changed.  
This ensures data integrity and stability, particularly in scenarios where constant values are crucial.

### Variable Types

Python is a dynamically-typed language, meaning variable types are assigned at runtime.  
The type of a variable can be determined using the `type()` function.

### Scope of Variables

Variables have a scope, which defines where they can be accessed or modified.  
Understanding variable scope is essential to avoid unexpected behavior in your code.

## Type Declarations in Python

In statically-typed languages like C, variable types must be declared explicitly.  
For example:

```c
int i, j;
float x;

x = i /3.0 +5.8;
```

Later, the values for i, j, and x can change, but not the type.  
This is known as "static type declaration"

In Python, it's different because variables don't need explicit type declarations:

```py
i = 123
```

An object with the type int is created automatically.  
However, this type can change during the program run:

```py
i = 'Hello World!'
i = [1, 2, 3]
```

Python assigns a special type/class to the object in each case, detecting the data type dynamically even while the program is running.  
This is known as "dynamic type declaration."

You can use the type() function to display the type:

```py
i = 123
type(i)
# <class 'int'>

i = 'Hello World!'
type(i)
# <class 'str'>

i = [3, 6, 9]
type(i)
# <class 'list'>
```

However, type conflicts can occur.  
For example, if you try to add a variable of type int with a variable of type str, a TypeError is generated:

```py
x = 'string'
y = 123
z = x + y
# TypeError: can only concatenate str (not "int") to str
```

But you can mix integer and float values, and the value of the expression becomes a float:

```py
x = 12
y = 3.5
z = x * y
z
# 42.0

type(x)
# <class 'int'>
type(y)
# <class 'float'>
type(z)
# <class 'float'>
```

## Variable names

Variables in Python must start with a letter or an underscore (_).  
They are case-sensitive, meaning that the case must be respected:

```py
Test_42 = 'Test42'
test_42 = 'test42 but lower case'

print(Test_42)
# Test42

print(test_42)
# test42 but lower case
```
