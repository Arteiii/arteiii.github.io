---
sidebar_position: 7
---

# if else

## if

```py
if condition:
    statement
```

<br />

the code(statement) will only be executed if the condition is true

```py
age = int(input("your age? "))
    # your age? 10

if age < 12:
    print("you are under 12")
        # you are under 12
```

## if & else

```py
age =int(input("what is your age? "))

if age < 4:
    print("film is to complicated for you")
else:
    if age < 12:
        print("have fun!")
    else:
        if age < 16:
            print("are you sure?")
        else:
            print("really?!?!?!?!???")
```

## elif

```py
age =int(input("what is your age? "))

if age < 4:
    print("film is to complicated for you")
elif age < 12:
    print("have fun!")
elif age < 16:
    print("are you sure?")
else:
    print("really?!?!?!?!???")
```

## comparison operators

| operator |                          |
| -------- | ------------------------ |
| x == y   | Equals                   |
| x != y   | Not Equals               |
| x < y    | Less than                |
| x <= y   | Less than or equal to    |
| x > y    | Greater than             |
| x >= y   | Greater than or equal to |

## True and False

python considers everything that is not equal to false as true
but what is false?

- numeric null values (0, 0L, 0.0...)
- the boolean value False
- empty strings
- empty lists/tuples
- empty dictionaries
- and the value None

## Compound Condition

you can also use "and", "or", "not"
example:

```py
a = 42
20 < a and a < 100
    # True

b = 369
20 < b and b < 100
    # False
```
