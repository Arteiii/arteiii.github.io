"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[1147],{8274:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var s=i(4848),a=i(8453);const l={id:"handles",title:"Handles",sidebar_position:2},r="Handles",t={id:"windows/programming/handles",title:"Handles",description:"In Windows programming, a handle is essentially a reference to an object or resource that is managed by the operating system. Handles are used to uniquely identify and interact with various system resources, such as files, windows, processes, and more.",source:"@site/docs/windows/programming/handles.md",sourceDirName:"windows/programming",slug:"/windows/programming/handles",permalink:"/docs/windows/programming/handles",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/windows/programming/handles.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"handles",title:"Handles",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Conventions",permalink:"/docs/windows/programming/conventions"},next:{title:"Version Numbers",permalink:"/docs/windows/programming/version_numbers"}},o={},d=[{value:"Types",id:"types",level:2},{value:"File Handles",id:"file-handles",level:3},{value:"Window Handles (HWND)",id:"window-handles-hwnd",level:3},{value:"Process and Thread Handles",id:"process-and-thread-handles",level:3},{value:"Process",id:"process",level:4},{value:"Thread",id:"thread",level:4},{value:"GDI Object Handles",id:"gdi-object-handles",level:3},{value:"Lifetime",id:"lifetime",level:2},{value:"Invalidation",id:"invalidation",level:2},{value:"Duplication",id:"duplication",level:2},{value:"Leaks",id:"leaks",level:2},{value:"Closing",id:"closing",level:2},{value:"Identifiers",id:"identifiers",level:2},{value:"Windows Implementation Library (WIL)",id:"windows-implementation-library-wil",level:2},{value:"Installing WIL using NuGet in Visual Studio",id:"installing-wil-using-nuget-in-visual-studio",level:3},{value:"Managing Windows Handles with wil::unique_handle",id:"managing-windows-handles-with-wilunique_handle",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"handles",children:"Handles"})}),"\n",(0,s.jsx)(n.p,{children:"In Windows programming, a handle is essentially a reference to an object or resource that is managed by the operating system. Handles are used to uniquely identify and interact with various system resources, such as files, windows, processes, and more."}),"\n",(0,s.jsx)(n.p,{children:"They act as a way for applications to access and manipulate these resources without needing to know the internal details of how they\u2019re implemented."}),"\n",(0,s.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(n.h3,{id:"file-handles",children:"File Handles"}),"\n",(0,s.jsx)(n.p,{children:"Used for file operations, like reading or writing data to files."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <Windows.h>\n\nint main() {\n  // Create a file handle\n  HANDLE hFile =\n      CreateFile(L"example.txt",  // File name\n                 GENERIC_READ,    // Desired access (read-only in this case)\n                 0,               // Share mode (0 for no sharing)\n                 nullptr,         // Security attributes (default)\n                 OPEN_EXISTING,   // Creation disposition (open existing file)\n                 FILE_ATTRIBUTE_NORMAL,  // File attributes (normal)\n                 nullptr                 // Template file (none in this case)\n      );\n\n  if (hFile != INVALID_HANDLE_VALUE) {\n    // File operations here\n\n    // Close the file handle when done\n    CloseHandle(hFile);\n  }\n\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"window-handles-hwnd",children:"Window Handles (HWND)"}),"\n",(0,s.jsx)(n.p,{children:"Represent windows in graphical user interfaces."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <Windows.h>\n\n// Window procedure for handling window messages\nLRESULT CALLBACK WindowProc(HWND hWnd, UINT uMsg, WPARAM wParam,\n                            LPARAM lParam) {\n  // Window procedure logic\n  return DefWindowProc(hWnd, uMsg, wParam, lParam);\n}\n\nint main() {\n  // Get the instance handle of the current module\n  HINSTANCE hInstance = GetModuleHandle(nullptr);\n\n  // Register the window class\n  WNDCLASS wc = {};\n  wc.lpfnWndProc = WindowProc;\n  wc.hInstance = hInstance;\n  wc.lpszClassName = L"MyWindowClass";\n  RegisterClass(&wc);\n\n  // Create the window\n  HWND hWnd = CreateWindow(L"MyWindowClass",     // Window class name\n                           L"My Window",         // Window title\n                           WS_OVERLAPPEDWINDOW,  // Window style\n                           CW_USEDEFAULT,        // X position\n                           CW_USEDEFAULT,        // Y position\n                           800,                  // Width\n                           600,                  // Height\n                           nullptr,              // Parent window\n                           nullptr,              // Menu\n                           hInstance,            // Instance handle\n                           nullptr               // Additional application data\n  );\n\n  if (hWnd) {\n    // Window operations here\n\n    // Show the window\n    ShowWindow(hWnd, SW_SHOWNORMAL);\n\n    // Message loop\n    MSG msg = {};\n    while (GetMessage(&msg, nullptr, 0, 0)) {\n      TranslateMessage(&msg);\n      DispatchMessage(&msg);\n    }\n  }\n\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"process-and-thread-handles",children:"Process and Thread Handles"}),"\n",(0,s.jsx)(n.p,{children:"Used for managing processes and threads."}),"\n",(0,s.jsx)(n.h4,{id:"process",children:"Process"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <Windows.h>\n\nint main()\n{\n  // Process information structures\n  STARTUPINFO si = {};\n  PROCESS_INFORMATION pi = {};\n\n  // Create a new process\n  if (CreateProcess(\n        L\"example.exe\", // Application name\n        nullptr,       // Command line (none in this case)\n        nullptr,       // Process security attributes (default)\n        nullptr,       // Thread security attributes (default)\n        FALSE,         // Inherit handles from the calling process\n        0,             // Creation flags (0 for no special flags)\n        nullptr, // Environment block (use the calling process's environment)\n        nullptr, // Current directory (use the calling process's directory)\n        &si,     // STARTUPINFO structure\n        &pi      // PROCESS_INFORMATION structure\n        )) {\n    // Process operations here\n\n    // Close process and thread handles when done\n    CloseHandle(pi.hProcess);\n    CloseHandle(pi.hThread);\n  }\n\n  return 0;\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"thread",children:"Thread"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"#include <Windows.h>\n\n// Function to be executed by the new thread\nDWORD WINAPI ThreadFunction(LPVOID lpParam) {\n  // Thread operations here\n  return 0;\n}\n\nint main() {\n  // Create a thread handle\n  HANDLE hThread = CreateThread(\n      nullptr,         // Thread security attributes (default)\n      0,               // Stack size (0 for default size)\n      ThreadFunction,  // Thread function\n      nullptr,         // Thread function parameters (none in this case)\n      0,               // Creation flags (0 for no special flags)\n      nullptr          // Thread ID (receives the thread identifier if non-null)\n  );\n\n  if (hThread != nullptr) {\n    // Thread operations here\n\n    // Wait for the thread to finish\n    WaitForSingleObject(hThread, INFINITE);\n\n    // Close the thread handle when done\n    CloseHandle(hThread);\n  }\n\n  return 0;\n}\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"gdi-object-handles",children:"GDI Object Handles"}),"\n",(0,s.jsx)(n.p,{children:"Graphics Device Interface handles for graphical objects like pens, brushes, and bitmaps."}),"\n",(0,s.jsx)(n.p,{children:"Graphics Device Interface (GDI) object handles in Windows represent graphical elements such as pens, brushes, and bitmaps. While they share similarities with other handles, GDI object handles have unique characteristics:"}),"\n",(0,s.jsx)(n.p,{children:"No Reference Counting:\nUnlike some other handle types, GDI object handles don\u2019t employ reference counting. Therefore, developers must explicitly manage the creation and destruction of GDI objects to prevent resource leaks."}),"\n",(0,s.jsx)(n.p,{children:"Process-Specific Validity:\nGDI object handles are only valid within the process that created them. Attempting to use a GDI object handle in a different process will result in undefined behavior. Developers must ensure that GDI objects are created, used, and destroyed within the same process context."}),"\n",(0,s.jsx)(n.p,{children:"Non-Shared Between Processes:\nGDI object handles can\u2019t be easily shared between processes.\nThis limitation reinforces the importance of creating and managing GDI objects within a single process.\nIf cross-process communication is required, developers should consider alternative IPC mechanisms."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"# include <Windows.h>\n\nint main() {\n  // Example: Creating and using a GDI brush handle\n  HBRUSH hBrush = CreateSolidBrush(RGB(255, 0, 0));\n\n  if (hBrush != nullptr) {\n    // GDI operations using the brush handle here...\n\n    // Deleting the brush handle when done\n    DeleteObject(hBrush);\n  }\n\n  return 0;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lifetime",children:"Lifetime"}),"\n",(0,s.jsx)(n.p,{children:"Handles have a lifetime associated with the object they represent. This means that a handle remains valid as long as the corresponding resource exists. For example, a file handle is valid as long as the file it references is open. It's essential to manage the lifecycle of handles carefully, ensuring they\u2019re released when no longer needed. Failure to do so can result in resource leaks and potential issues with system stability and performance."}),"\n",(0,s.jsx)(n.h2,{id:"invalidation",children:"Invalidation"}),"\n",(0,s.jsx)(n.p,{children:"Handles can become invalid if the associated resource is released or closed. This often occurs when a resource, such as a file or window, is explicitly closed or deleted. It's crucial to check the validity of handles before using them to prevent undefined behavior. Validating handles helps avoid attempting operations on resources that no longer exist, reducing the risk of crashes or unexpected behavior in the application."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <Windows.h>\n\nint main() {\n  // Example: Validating a window handle before usage\n  HWND hWnd = CreateWindow(L"MyWindowClass", L"My Window", WS_OVERLAPPEDWINDOW,\n                           CW_USEDEFAULT, CW_USEDEFAULT, 800, 600, nullptr,\n                           nullptr, nullptr, nullptr);\n\n  if (hWnd != nullptr) {\n    // Window operations here\n\n    // Note: Always check for nullptr to ensure the window creation was\n    // successful\n\n    // Destroying the window when done\n    DestroyWindow(hWnd);\n  }\n\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"duplication",children:"Duplication"}),"\n",(0,s.jsx)(n.p,{children:"Handle duplication is a mechanism to share access to the same resource among multiple processes or threads. This is particularly important when creating new processes that need access to resources owned by another process. Duplicating handles allows multiple entities to interact with the same resource concurrently, and it's done using functions like DuplicateHandle in Windows."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <Windows.h>\n\nint main() {\n  // Example: Duplicating a file handle\n  HANDLE hOriginalFile =\n      CreateFile(L"example.txt", GENERIC_READ, 0, nullptr, OPEN_EXISTING,\n                 FILE_ATTRIBUTE_NORMAL, nullptr);\n\n  if (hOriginalFile != INVALID_HANDLE_VALUE) {\n    HANDLE hDuplicateFile;\n\n    // Duplicating the file handle\n    if (DuplicateHandle(GetCurrentProcess(), hOriginalFile, GetCurrentProcess(),\n                        &hDuplicateFile, 0, FALSE, DUPLICATE_SAME_ACCESS)) {\n      // File operations using the duplicated handle here\n\n      // Note: Always check for success when duplicating a handle\n\n      // Closing the duplicated file handle when done\n      CloseHandle(hDuplicateFile);\n    }\n\n    // Closing the original file handle when done\n    CloseHandle(hOriginalFile);\n  }\n\n  return 0;\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"leaks",children:"Leaks"}),"\n",(0,s.jsx)(n.p,{children:"Failing to release handles properly can lead to handle leaks. This occurs when handles aren\u2019t explicitly closed, preventing the associated system resources from being freed. Handle leaks can accumulate over time, consuming valuable system resources and degrading the performance of both the application and the system. Proper handle management, including timely closure, is essential to prevent handle leaks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <Windows.h>\n\nint main()\n{\n  // Opening a file without closing the handle\n  HANDLE hFile = CreateFile(L"example.txt",\n                            GENERIC_READ,\n                            0,\n                            nullptr,\n                            OPEN_EXISTING,\n                            FILE_ATTRIBUTE_NORMAL,\n                            nullptr);\n\n  // File operations here without closing the handle\n\n  // Resource leak: Closing the handle should be done\n\n  return 0;\n}\n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"closing",children:"Closing"}),"\n",(0,s.jsx)(n.p,{children:"Closing a handle, using functions like CloseHandle in Windows, doesn't always result in the immediate release of the associated resource. Some resources may only be released when the last handle pointing to them is closed. This behavior is common in scenarios where multiple handles reference the same resource. Properly managing the closing of handles ensures that resources are released appropriately, preventing resource leaks and maintaining system efficiency"}),"\n",(0,s.jsx)(n.h2,{id:"identifiers",children:"Identifiers"}),"\n",(0,s.jsx)(n.p,{children:"Handles are typically represented as numeric identifiers, but it's crucial to treat them as opaque values. This means that developers shouldn\u2019t make assumptions about the internal structure or meaning of handle values. Treating handles as opaque ensures compatibility and allows the operating system to change the underlying implementation without affecting application code. Developers should rely on documented APIs and use handles as provided by the system"}),"\n",(0,s.jsx)(n.h2,{id:"windows-implementation-library-wil",children:"Windows Implementation Library (WIL)"}),"\n",(0,s.jsx)(n.p,{children:"The Windows Implementation Library (WIL) is a modern C++ library developed by Microsoft to simplify and improve error handling, as well as provide a more convenient and expressive API for Windows programming. WIL aims to replace older error-handling and COM-related patterns with a cleaner and more consistent approach. It includes features such as Result types, smart pointers, and utilities for working with Windows Runtime (WinRT) components"}),"\n",(0,s.jsxs)(n.p,{children:["Read More:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/wil",children:"GitHub Repository"})]}),"\n",(0,s.jsx)(n.h3,{id:"installing-wil-using-nuget-in-visual-studio",children:"Installing WIL using NuGet in Visual Studio"}),"\n",(0,s.jsx)(n.p,{children:"To use WIL in your Visual Studio project, you can leverage NuGet, a package manager for .NET development. Here's how you can install WIL using NuGet:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Open your Visual Studio project."}),"\n",(0,s.jsxs)(n.li,{children:["Right-click on your project in Solution Explorer and select ",(0,s.jsx)(n.strong,{children:'"Manage NuGet Packages"'})]}),"\n",(0,s.jsxs)(n.li,{children:["In the ",(0,s.jsx)(n.strong,{children:'"Browse"'})," tab, search for ",(0,s.jsx)(n.code,{children:"Microsoft.Windows.ImplementationLibrary"})]}),"\n",(0,s.jsxs)(n.li,{children:["Select the desired version of the package and click ",(0,s.jsx)(n.strong,{children:'"Install"'})]}),"\n",(0,s.jsx)(n.li,{children:"NuGet will download and install the package, and WIL will be ready for use in your project"}),"\n",(0,s.jsx)(n.li,{children:"Once installed, you can include WIL headers in your C++ files and start using its features"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"managing-windows-handles-with-wilunique_handle",children:"Managing Windows Handles with wil::unique_handle"}),"\n",(0,s.jsxs)(n.p,{children:["Let's consider a scenario where we create and manage a file handle using ",(0,s.jsx)(n.code,{children:"wil::unique_handle"}),". This smart handle wrapper ensures proper resource cleanup and provides a safer alternative to raw handle management"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:'#include <wil/resource.h>\n\n#include <iostream>\n\nvoid ProcessFile(wil::unique_handle& fileHandle) {\n  if (fileHandle) {\n    // Perform file operations using fileHandle\n\n    std::cout << "File operations successful." << std::endl;\n  } else {\n    std::cerr << "Failed to open the file." << std::endl;\n  }\n}\n\nint main() {\n  // Use wil::unique_handle to manage file handle\n  wil::unique_handle fileHandle(CreateFile(L"example.txt", GENERIC_READ, 0,\n                                           nullptr, OPEN_EXISTING,\n                                           FILE_ATTRIBUTE_NORMAL, nullptr));\n\n  // Process the file with RAII-managed fileHandle\n  ProcessFile(fileHandle);\n\n  // fileHandle is automatically closed when it goes out of scope\n\n  return 0;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, ",(0,s.jsx)(n.code,{children:"wil::unique_handle"})," is employed to manage the file handle. The handle is automatically closed when the ",(0,s.jsx)(n.code,{children:"wil::unique_handle"})," instance goes out of scope, ensuring proper cleanup and minimizing the risk of resource leaks. This approach simplifies resource management and contributes to safer and more readable code"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>t});var s=i(6540);const a={},l=s.createContext(a);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);