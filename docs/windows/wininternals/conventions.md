---
sidebar_position: 3
---

# Conventions

## Unicode

In the realm of Windows internals, text strings are predominantly stored and processed in the 16-bit wide UNICODE format (UTF-16LE). To accommodate compatibility, many Windows functions accepting string parameters offer two entry points: one for Unicode (wide, 16-bit) and another for ANSI (narrow, 8-bit).

Given that Windows employs Unicode internally, opting for the ANSI (narrow version) may lead to performance issues. This is because Windows would need to convert the narrow input to Unicode, process it, and then convert the output back to ANSI.

For instance, the Windows API function CreateFile is essentially a macro that expands into:

- CreateFile**A** (**A**NSI)
- CreateFile**W** (Unicode, where **W** signifies **w**ide)

This pattern is evident in many functions, with one version designated for ANSI and another for Unicode, such as CreateFileMapping A/W and CreateHardLink A/W.

It's essential to omit the end (A/W) when referencing these functions in the Microsoft documentation.

## Ex

Windows adopts the "Ex" suffix when updating functions that are incompatible with their predecessors. The "Ex" serves as an indicator of version 2. Consequently, if a function undergoes further updates, it will bear two "Ex" suffixes.
