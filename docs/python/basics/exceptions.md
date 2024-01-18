---
sidebar_position: 18
---

# Exceptions

a common problem is that when an error occurs within a program,  
the entire program terminates.  

```py
something = int(input("enter a number: "))
# enter a number: 12.5
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ValueError: invalid literal for int() with base 10: '12.5'
```

for problems like this we can use exceptions like in the next example

```py
while True:
    try:
        number = input("enter a number: ")
        number = int(number)
        break
    except ValueError as e:
        print("error message: ", e)
        print("error no number")

# enter a number: 12.5
# error message:  invalid literal for int() with base 10: '12.5'
# error no number
```

the try statement is executed and if no exception occurs the except part is skipped

however, if an exception occurs in the execution of the try-block, the rest of the try-block is skipped

## Multiple Exceptions

several exceptions can be defined

```py
import sys

try:
    f = open('integers.txt')
    s = f.readline()
    i = int(s.strip())

except IOError as err:
    (errno, strerror) = err.args
    print("I/O error({0}): {1}".format(errno, strerror))

except ValueError:
    print("no valid integer in line")

except:
    print("unexpected error", sys.exc_info()[0])
    raise
```

an exception statement can also catch several errors at the same time

the error types are then listed in a tuple

```py
except (IOError, ValueError):
    print("I/O or Value Error occurred")

```

## else

the else part is executed as soon as the try block has been executed error free

```py
while True:
    filename = input("filename: ")
    try:
        f = open(filename, 'r')

    except IOError:
        print("I/O error try again")

    except ValueError:
        print("value error try again")

    else:
        print("file exists")
```
