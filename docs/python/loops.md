---
sidebar_position: 8
---


# Loops

## While

```py
i = 1
while i <= 4:
    print(i, i**2)
    i += 1
    # 1 1
    # 2 4
    # 3 9
    # 4 16


n = 100
sum = 0
i = 1

while i <= n:
    sum = sum + i
    i = i + 1
print("sum from 1 to " + str(n) + " : " + str(sum))
```

alternatively we can:
sum is a python function that calculates the sum of a list or tuple of numeric values

```py
n = 100
sum(range(1, n+1))
    # 5050
```

or: (gaußsche summenformel)

```py
n = 100
sum = n * (n + 1) / 2
sum
    # 5050.0
```

## Break and Continue

there are two important instructions for loops
"break" to terminate the loop prematurely
"continue" to end a run

```py
list = eval(input("enter list of postiiv values: "))
n = len(list)
i = 0
previous = None
erg = []
while i < n:
    current = list[i]
    i += 1
    if current == previous:
        continue
    if current <= 0:
        print("cancel not positiv value")
        break
    erg.append(current)
    previous = current

print(erg)
```

## Else

```py
import random
n = 20
to_be_guessed = random.randint(1, n)
guess = 0
while guess != to_be_guessed:
    guess = int(input("try again: "))
    if guess > 0:
        if guess > to_be_guessed:
            print("to big")
        elif guess < to_be_guessed:
            print("to small try again")
    else:
        print("maybe next time")
        break
else:
    print("correct answer")

```

break will skip the else part of our loop

## For

```py
languages = ["C", "C++", "Perl", "Python"]
for language in languages:
    print(language)
```

like the while loop, the for loop also has an else statement
which is executed once all elements in the sequence have been processed
and no break has been used
