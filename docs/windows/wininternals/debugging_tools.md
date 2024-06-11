---
sidebar_position: 2
---

# Debugging Tools for Windows

The package includes advanced debugging tools that can be used to debug user-mode processes as well as the kernel.
The latest version is included as part of the Windows SDK.

The fairly well documented DbgEng.dll implements:

- cdb and ntsd, both user-mode debuggers based on a console interface, the only difference being that ntsd opens a new window.
- KD Console-based kernel-mode debugger
- WinDbg can be used as a user-mode or kernel-mode debugger (not both at the same time) with a GUI for the user.

## Debugging User-Mode Processes

Debugging tools can attach to user-mode processes to examine and modify memory.

### Invasive

_DebugActiveProcess_ establishes a connection between the debugee and debugger. This allows you to examine and change process memory, set breakpoints, and perform other debugging functions. In Windows, you can stop the debugger without killing the process as long as the debugger is detached and not killed.

### Noninvasive

_OpenProcess_ only opens the process without attaching to it. This allows you to examine and modify process memory, but it does not permit setting breakpoints. However, it is feasible to attach both Invasive and noninvasive debuggers simultaneously.

## Kernel-Mode Debugging

There are two debuggers available for kernel-mode debugging: a command-line application (Kd.exe) and one with a GUI (Windbg.exe). Both can be used for three types of kernel mode debugging.

[Read More](/docs/windows/kernel/kernel_debugging.mdx)
