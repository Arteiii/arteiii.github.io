---
sidebar_position: 1
---

# Common Dll's

## Windows Dll's

### Kernel32.dll

core functions like read write memory, files and hardware

### Advapi32.dll

more advanced core features like the service manager and the registry

### User32.dll

user-interface (**UI**) features like buttons bars and other components

### GDI32.dll

functions for displaying and manipulating graphics

### NTdll.dll

The DLL serves as the interface for the Windows kernel. It is usually not directly loaded from the application, but indirectly from the Kernel32.dll. If it is directly imported, it could be because the program is attempting to use features that are not typically available for Windows programs. Certain tasks, such as hiding functionalities or manipulating processes, can be accomplished through the DLL.

### WSock32.dll & Ws2_32.dll

These are networking DLLs. A program that uses them is likely to connect to a network or perform network-related tasks.

### Wininet.dll

The DLL provides advanced networking implementations for protocols including FTP, HTTP, and NTP.
