---
id: conventions
title: Conventions
sidebar_position: 1
---

# Conventions

## Unicode

In the realm of Windows internals, text strings are predominantly stored and processed in the 16-bit wide UNICODE
format (UTF-16LE).
To accommodate compatibility, many Windows functions accepting string parameters offer two entry
points: one for Unicode (wide, 16-bit) and another for ANSI (narrow, 8-bit).

Given that Windows employs Unicode internally, opting for the ANSI (narrow version) may lead to performance issues.
This is because Windows would need to convert the narrow input to Unicode,
process it, and then convert the output back to ANSI.

For instance, the Windows API function CreateFile is essentially a macro that expands into:

- CreateFile**A** (**A**NSI)
- CreateFile**W** (Unicode, where **W** signifies **w**ide)

This pattern is noticeable in many functions, with one version designated for ANSI and another for Unicode, such as
CreateFileMapping A/W and CreateHardLink A/W.

:::note
It's essential to omit the end (A/W) when referencing these functions in the Microsoft documentation.

When referencing these functions without specifying `A` or `W`, the default version is used.
This default is determined
by the `UNICODE` macro.
If `UNICODE` is defined, the `W` (wide) version is used; otherwise, the `A` (ANSI) version.
:::

### Example

Consider the function `CreateFile`. Here’s how it looks in different formats:

- `CreateFileA`: Uses ANSI encoding for strings.
- `CreateFileW`: Uses Unicode encoding for strings.

```cpp
#include <windows.h>

// ANSI version
HANDLE hFileA = CreateFileA(
    "example.txt",
    GENERIC_READ,
    0,
    NULL,
    OPEN_EXISTING,
    FILE_ATTRIBUTE_NORMAL,
    NULL
);

// Unicode version
HANDLE hFileW = CreateFileW(
    L"example.txt",
    GENERIC_READ,
    0,
    NULL,
    OPEN_EXISTING,
    FILE_ATTRIBUTE_NORMAL,
    NULL
);
```

:::tip
By defining `UNICODE` before including `windows.h`, you ensure that the Unicode versions of the functions are used.
Conversely, by not defining `UNICODE` (or by undefining it if it was previously defined), you ensure that the ANSI
versions are used.
:::

## Ex

Windows adopts the "Ex" suffix when updating functions that are incompatible with their predecessors.
The "Ex" serves as
an indicator of version 2. Consequently, if a function undergoes further updates, it will bear two "Ex" suffixes.

### Example

Consider the `CreateFile` function and its extended version `CreateFileEx`.
The original `CreateFile` function might
have limitations that are addressed in the extended version:

```cpp
#include <windows.h>

// Original version
HANDLE hFile = CreateFile(
    L"example.txt",
    GENERIC_READ,
    0,
    NULL,
    OPEN_EXISTING,
    FILE_ATTRIBUTE_NORMAL,
    NULL
);

// Extended version
HANDLE hFileEx = CreateFileEx(
    L"example.txt",
    GENERIC_READ,
    0,
    NULL,
    OPEN_EXISTING,
    FILE_ATTRIBUTE_NORMAL,
    NULL,
    NULL,
    FILE_ATTRIBUTE_NORMAL
);
```

In this example, `CreateFileEx` might introduce additional parameters or features not present in `CreateFile`.
When
further enhancements are necessary, Microsoft could introduce another version, such as `CreateFileExEx`.