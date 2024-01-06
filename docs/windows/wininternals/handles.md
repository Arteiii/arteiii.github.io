---
sidebar_position: 10
---

# Handles

In Windows programming, a handle is essentially a reference to an object or resource that is managed by the operating system. Handles are used to uniquely identify and interact with various system resources, such as files, windows, processes, and more.

They act as a way for applications to access and manipulate these resources without needing to know the internal details of how they are implemented.

## Types

### File Handles

Used for file operations, like reading or writing data to files.

```cpp
#include <Windows.h>

int main() {
  // Create a file handle
  HANDLE hFile =
      CreateFile(L"example.txt", // File name
                 GENERIC_READ,   // Desired access (read-only in this case)
                 0,              // Share mode (0 for no sharing)
                 nullptr,        // Security attributes (default)
                 OPEN_EXISTING,  // Creation disposition (open existing file)
                 FILE_ATTRIBUTE_NORMAL, // File attributes (normal)
                 nullptr                // Template file (none in this case)
      );

  if (hFile != INVALID_HANDLE_VALUE) {
    // File operations here

    // Close the file handle when done
    CloseHandle(hFile);
  }

  return 0;
}
```

### Window Handles (HWND)

Represent windows in graphical user interfaces.

```cpp
#include <Windows.h>

// Window procedure for handling window messages
LRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam,
                            LPARAM lParam) {
  // Window procedure logic
  return DefWindowProc(hWnd, uMsg, wParam, lParam);
}

int main() {
  // Get the instance handle of the current module
  HINSTANCE hInstance = GetModuleHandle(nullptr);

  // Register the window class
  WNDCLASS wc = {};
  wc.lpfnWndProc = WindowProc;
  wc.hInstance = hInstance;
  wc.lpszClassName = L"MyWindowClass";
  RegisterClass(&wc);

  // Create the window
  HWND hWnd = CreateWindow(L"MyWindowClass",    // Window class name
                           L"My Window",        // Window title
                           WS_OVERLAPPEDWINDOW, // Window style
                           CW_USEDEFAULT,       // X position
                           CW_USEDEFAULT,       // Y position
                           800,                 // Width
                           600,                 // Height
                           nullptr,             // Parent window
                           nullptr,             // Menu
                           hInstance,           // Instance handle
                           nullptr              // Additional application data
  );

  if (hWnd) {
    // Window operations here

    // Show the window
    ShowWindow(hWnd, SW_SHOWNORMAL);

    // Message loop
    MSG msg = {};
    while (GetMessage(&msg, nullptr, 0, 0)) {
      TranslateMessage(&msg);
      DispatchMessage(&msg);
    }
  }

  return 0;
}
```

### Process and Thread Handles

Used for managing processes and threads.

#### Process

```cpp
#include <Windows.h>

int main() {
  // Process information structures
  STARTUPINFO si = {};
  PROCESS_INFORMATION pi = {};

  // Create a new process
  if (CreateProcess(
          L"example.exe", // Application name
          nullptr,        // Command line (none in this case)
          nullptr,        // Process security attributes (default)
          nullptr,        // Thread security attributes (default)
          FALSE,          // Inherit handles from the calling process
          0,              // Creation flags (0 for no special flags)
          nullptr, // Environment block (use the calling process's environment)
          nullptr, // Current directory (use the calling process's directory)
          &si,     // STARTUPINFO structure
          &pi      // PROCESS_INFORMATION structure
          )) {
    // Process operations here

    // Close process and thread handles when done
    CloseHandle(pi.hProcess);
    CloseHandle(pi.hThread);
  }

  return 0;
}
```

#### Thread

```cpp
#include <Windows.h>

// Function to be executed by the new thread
DWORD WINAPI ThreadFunction(LPVOID lpParam) {
  // Thread operations here
  return 0;
}

int main() {
  // Create a thread handle
  HANDLE hThread = CreateThread(
      nullptr,        // Thread security attributes (default)
      0,              // Stack size (0 for default size)
      ThreadFunction, // Thread function
      nullptr,        // Thread function parameters (none in this case)
      0,              // Creation flags (0 for no special flags)
      nullptr         // Thread ID (receives the thread identifier if non-null)
  );

  if (hThread != nullptr) {
    // Thread operations here

    // Wait for the thread to finish
    WaitForSingleObject(hThread, INFINITE);

    // Close the thread handle when done
    CloseHandle(hThread);
  }

  return 0;
}
```

### GDI Object Handles

Graphics Device Interface handles for graphical objects like pens, brushes, and bitmaps.

## Lifetime

Handles have a lifetime associated with the object they represent. This means that a handle remains valid as long as the corresponding resource exists. For example, a file handle is valid as long as the file it references is open. It's essential to manage the lifecycle of handles carefully, ensuring they are released when no longer needed. Failure to do so can result in resource leaks and potential issues with system stability and performance.

## Invalidation

Handles can become invalid if the associated resource is released or closed. This often occurs when a resource, such as a file or window, is explicitly closed or deleted. It's crucial to check the validity of handles before using them to prevent undefined behavior. Validating handles helps avoid attempting operations on resources that no longer exist, reducing the risk of crashes or unexpected behavior in the application.

```cpp
#include <Windows.h>

int main() {
  // Example: Validating a window handle before usage
  HWND hWnd = CreateWindow(L"MyWindowClass", L"My Window", WS_OVERLAPPEDWINDOW,
                           CW_USEDEFAULT, CW_USEDEFAULT, 800, 600, nullptr,
                           nullptr, nullptr, nullptr);

  if (hWnd != nullptr) {
    // Window operations here

    // Note: Always check for nullptr to ensure the window creation was
    // successful

    // Destroying the window when done
    DestroyWindow(hWnd);
  }

  return 0;
}
```

## Duplication

Handle duplication is a mechanism to share access to the same resource among multiple processes or threads. This is particularly important when creating new processes that need access to resources owned by another process. Duplicating handles allows multiple entities to interact with the same resource concurrently, and it's done using functions like DuplicateHandle in Windows.

```cpp
#include <Windows.h>

int main() {
  // Example: Duplicating a file handle
  HANDLE hOriginalFile =
      CreateFile(L"example.txt", GENERIC_READ, 0, nullptr, OPEN_EXISTING,
                 FILE_ATTRIBUTE_NORMAL, nullptr);

  if (hOriginalFile != INVALID_HANDLE_VALUE) {
    HANDLE hDuplicateFile;

    // Duplicating the file handle
    if (DuplicateHandle(GetCurrentProcess(), hOriginalFile, GetCurrentProcess(),
                        &hDuplicateFile, 0, FALSE, DUPLICATE_SAME_ACCESS)) {
      // File operations using the duplicated handle here

      // Note: Always check for success when duplicating a handle

      // Closing the duplicated file handle when done
      CloseHandle(hDuplicateFile);
    }

    // Closing the original file handle when done
    CloseHandle(hOriginalFile);
  }

  return 0;
}

```

## Leaks

Failing to release handles properly can lead to handle leaks. This occurs when handles are not explicitly closed, preventing the associated system resources from being freed. Handle leaks can accumulate over time, consuming valuable system resources and degrading the performance of both the application and the system. Proper handle management, including timely closure, is essential to prevent handle leaks.

```cpp
#include <Windows.h>

int main() {
  // Opening a file without closing the handle
  HANDLE hFile = CreateFile(L"example.txt", GENERIC_READ, 0, nullptr,
                            OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, nullptr);

  // File operations here without closing the handle

  // Resource leak: Closing the handle should be done

  return 0;
}
```

## Table

The operating system maintains a handle table that maps handles to their corresponding objects. This table is part of the system's resource management infrastructure. Understanding how this table works can provide insights into how the operating system tracks and organizes resources. It also highlights the importance of efficient handle usage to minimize the impact on the system's overall performance.

## Closing

Closing a handle, using functions like CloseHandle in Windows, doesn't always result in the immediate release of the associated resource. Some resources may only be released when the last handle pointing to them is closed. This behavior is common in scenarios where multiple handles reference the same resource. Properly managing the closing of handles ensures that resources are released appropriately, preventing resource leaks and maintaining system efficiency.

## Identifiers

Handles are typically represented as numeric identifiers, but it's crucial to treat them as opaque values. This means that developers should not make assumptions about the internal structure or meaning of handle values. Treating handles as opaque ensures compatibility and allows the operating system to change the underlying implementation without affecting application code. Developers should rely on documented APIs and use handles as provided by the system.
