---
sidebar_position: 16
---


# Global And Local Variables

variables are generally considered local in python  
unless they are explicitly defined as globaly  

however, this is considered a bad programming style

## In Functions

```py
def hello():
    s = "John"
    print("hello " + s)

s = "Jane"
hello()
# hello John

print("Hello2 " + s)
# Hello2 Jane
```

```py
def hello():
    print("hello " + s)
    s = "John"
    print("hello " + s)

s = "Jane"
hello()
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
#   File "<stdin>", line 2, in hello
# UnboundLocalError:
```

a variable cannot be local and gloabl at the same time  

therefore python considers the variable s as local  
but since this variable gets a value only after the call, an error is generated

but you can also write to a global variable, but you have to define it as global with the function global.

```py
def hello():
    global s
    print("Hello1 " + s)
    s = "John"
    print("Hello2 " + s)

s = "Jane"
hello()
# Hello1 Jane
# Hello2 John

print("Hello3 " + s)
# Hello3 John
```
