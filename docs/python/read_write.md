---
sidebar_position: 9
---

# Read & Write Files

## Read Files

if you want to read a file you first need to open the file:
open(filename, mode)

the open() function takes two arguments  
filename with a path if necessary  
and the mode "r" for read  
if the mode is missing, read ("r") is automatically used as default argument  

```py
fobj = open("read_and_write_files/read_example.txt")
for line in fobj:
    print(line.rstrip())
fobj.close()
```

## Write Files

for writing files we use the mode "w" instead of "r

```py
fobj_in = open("read_and_write_files/read_example.txt")
fobj_out = open("read_and_write_files/write_example.txt", "w")


counter = 0
for line in fobj_in:
    counter += 1
    out_line = "{0:>3s} {1:s}\n".format(str(counter), line.rstrip())
    fobj_out.write(out_line)


fobj_in.close()
fobj_out.close()
```

## readlines()

```py
textus_readlines = open("read_and_write_files/read_example.txt").readlines()
print("openlines:\n", textus_readlines)


print(".readlines[3]:\n", textus_readlines[3])
```

## read()

```py
textus_read = open("read_and_write_files/read_example.txt").read()
print(".read[20:34]:\n", textus_read[20:34])
```

## with

if with is used in conjunction with open, the file does not need to be explicitly closed

```py
with open("read_and_write_files/read_example.txt") as fobj_in:
    with open("read_and_write_files/write_example.txt2", "w") as fobj_out:
        counter = 0
        for line in fobj_in:
            counter += 1
            out = "{0:>3s} {1:s}\n".format(str(counter), line.rstrip())
            fobj_out.write(out.rstrip())
```

you can open mutiple files:

```py
with open("read_and_write_files/read_example.txt") as fobj_in,\
        open("read_and_write_files/write_example2.txt", "w") as fobj_out:
    counter = 0
    for line in fobj_in:
        counter += 1
        out_line = "{0:>3s} {1:s}\n".format(str(counter), line.rstrip())
        fobj_out.write(out_line)
```
