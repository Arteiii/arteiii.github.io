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
      CreateFile(L"example.txt",  // File name
                 GENERIC_READ,    // Desired access (read-only in this case)
                 0,               // Share mode (0 for no sharing)
                 nullptr,         // Security attributes (default)
                 OPEN_EXISTING,   // Creation disposition (open existing file)
                 FILE_ATTRIBUTE_NORMAL,  // File attributes (normal)
                 nullptr                 // Template file (none in this case)
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
  HWND hWnd = CreateWindow(L"MyWindowClass",     // Window class name
                           L"My Window",         // Window title
                           WS_OVERLAPPEDWINDOW,  // Window style
                           CW_USEDEFAULT,        // X position
                           CW_USEDEFAULT,        // Y position
                           800,                  // Width
                           600,                  // Height
                           nullptr,              // Parent window
                           nullptr,              // Menu
                           hInstance,            // Instance handle
                           nullptr               // Additional application data
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

int main()
{
  // Process information structures
  STARTUPINFO si = {};
  PROCESS_INFORMATION pi = {};

  // Create a new process
  if (CreateProcess(
        L"example.exe", // Application name
        nullptr,       // Command line (none in this case)
        nullptr,       // Process security attributes (default)
        nullptr,       // Thread security attributes (default)
        FALSE,         // Inherit handles from the calling process
        0,             // Creation flags (0 for no special flags)
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
      nullptr,         // Thread security attributes (default)
      0,               // Stack size (0 for default size)
      ThreadFunction,  // Thread function
      nullptr,         // Thread function parameters (none in this case)
      0,               // Creation flags (0 for no special flags)
      nullptr          // Thread ID (receives the thread identifier if non-null)
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

Graphics Device Interface (GDI) object handles in Windows represent graphical elements such as pens, brushes, and bitmaps. While they share similarities with other handles, GDI object handles have unique characteristics:

No Reference Counting:
Unlike some other handle types, GDI object handles do not employ reference counting. Therefore, developers must explicitly manage the creation and destruction of GDI objects to prevent resource leaks.

Process-Specific Validity:
GDI object handles are only valid within the process that created them. Attempting to use a GDI object handle in a different process will result in undefined behavior. Developers must ensure that GDI objects are created, used, and destroyed within the same process context.

Non-Shared Between Processes:
GDI object handles cannot be easily shared between processes. This limitation reinforces the importance of creating and managing GDI objects within a single process. If cross-process communication is required, developers should consider alternative IPC mechanisms.

```cpp
# include <Windows.h>

int main() {
  // Example: Creating and using a GDI brush handle
  HBRUSH hBrush = CreateSolidBrush(RGB(255, 0, 0));

  if (hBrush != nullptr) {
    // GDI operations using the brush handle here...

    // Deleting the brush handle when done
    DeleteObject(hBrush);
  }

  return 0;
}
```

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

int main()
{
  // Opening a file without closing the handle
  HANDLE hFile = CreateFile(L"example.txt",
                            GENERIC_READ,
                            0,
                            nullptr,
                            OPEN_EXISTING,
                            FILE_ATTRIBUTE_NORMAL,
                            nullptr);

  // File operations here without closing the handle

  // Resource leak: Closing the handle should be done

  return 0;
}

```

## Closing

Closing a handle, using functions like CloseHandle in Windows, doesn't always result in the immediate release of the associated resource. Some resources may only be released when the last handle pointing to them is closed. This behavior is common in scenarios where multiple handles reference the same resource. Properly managing the closing of handles ensures that resources are released appropriately, preventing resource leaks and maintaining system efficiency

## Identifiers

Handles are typically represented as numeric identifiers, but it's crucial to treat them as opaque values. This means that developers should not make assumptions about the internal structure or meaning of handle values. Treating handles as opaque ensures compatibility and allows the operating system to change the underlying implementation without affecting application code. Developers should rely on documented APIs and use handles as provided by the system

## Windows Implementation Library (WIL)

The Windows Implementation Library (WIL) is a modern C++ library developed by Microsoft to simplify and improve error handling, as well as provide a more convenient and expressive API for Windows programming. WIL aims to replace older error-handling and COM-related patterns with a cleaner and more consistent approach. It includes features such as Result types, smart pointers, and utilities for working with Windows Runtime (WinRT) components

Read More:  
[GitHub Repository](https://github.com/microsoft/wil)

### Installing WIL using NuGet in Visual Studio

To use WIL in your Visual Studio project, you can leverage NuGet, a package manager for .NET development. Here's how you can install WIL using NuGet:

1. Open your Visual Studio project.
2. Right-click on your project in Solution Explorer and select **"Manage NuGet Packages"**
3. In the **"Browse"** tab, search for `Microsoft.Windows.ImplementationLibrary`
4. Select the desired version of the package and click **"Install"**
5. NuGet will download and install the package, and WIL will be ready for use in your project
6. Once installed, you can include WIL headers in your C++ files and start using its features

### Managing Windows Handles with wil::unique_handle

Let's consider a scenario where we create and manage a file handle using `wil::unique_handle`. This smart handle wrapper ensures proper resource cleanup and provides a safer alternative to raw handle management

```cpp
#include <wil/resource.h>

#include <iostream>

void ProcessFile(wil::unique_handle& fileHandle) {
  if (fileHandle) {
    // Perform file operations using fileHandle

    std::cout << "File operations successful." << std::endl;
  } else {
    std::cerr << "Failed to open the file." << std::endl;
  }
}

int main() {
  // Use wil::unique_handle to manage file handle
  wil::unique_handle fileHandle(CreateFile(L"example.txt", GENERIC_READ, 0,
                                           nullptr, OPEN_EXISTING,
                                           FILE_ATTRIBUTE_NORMAL, nullptr));

  // Process the file with RAII-managed fileHandle
  ProcessFile(fileHandle);

  // fileHandle is automatically closed when it goes out of scope

  return 0;
}
```

In this example, `wil::unique_handle` is employed to manage the file handle. The handle is automatically closed when the `wil::unique_handle` instance goes out of scope, ensuring proper cleanup and minimizing the risk of resource leaks. This approach simplifies resource management and contributes to safer and more readable code
