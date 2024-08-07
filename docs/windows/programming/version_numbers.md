---
id: version_numbers
title: Version Numbers
sidebar_position: 4
---

Undocumented way of retrieving Windows version numbers using a structure called `KUSER_SHARED_DATA`  
This structure is mapped to the same virtual address (`0x7FFE0000`) for every process


```cpp
#include <Windows.h>
#include <iostream>

int 
main() {
    auto sharedUserData = (BYTE*)0x7FFE0000;  // KUSER_SHARED_DATA
    
    constexpr ULONG majorVersionOffset = 0x26C;  // major version
    constexpr ULONG minorVersionOffset = 0x270;  // minor version
    constexpr ULONG buildNumberOffset = 0x260;   // build number

    printf("Full Version: %d.%d.%d\n",
    *(ULONG*)(sharedUserData + majorVersionOffset),
    *(ULONG*)(sharedUserData + minorVersionOffset),
    *(ULONG*)(sharedUserData + buildNumberOffset));

}
```


## Resources:

- [Microsoft Documentation](https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/ntddk/ns-ntddk-kuser_shared_data):
- [Geoff Chappell's Study](https://www.geoffchappell.com/studies/windows/km/ntoskrnl/inc/api/ntexapi_x/kuser_shared_data/index.htm):
