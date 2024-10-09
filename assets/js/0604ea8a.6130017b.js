"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[5470],{3120:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var t=n(4848),i=n(8453),s=n(2822);const d={sidebar_position:2,keyword:["Kernel Mode Driver Development","Windows Driver Kit (WDK)","C++ Driver Programming","Windows Kernel Programming"],image:"./img/first_driver_preview.jpg",description:"Start pasting your first kernel driver now!"},a="First Kernel Mode Driver",o={id:"windows/kernel/first_driver",title:"First Kernel Mode Driver",description:"Start pasting your first kernel driver now!",source:"@site/docs/windows/kernel/first_driver.mdx",sourceDirName:"windows/kernel",slug:"/windows/kernel/first_driver",permalink:"/docs/windows/kernel/first_driver",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/windows/kernel/first_driver.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keyword:["Kernel Mode Driver Development","Windows Driver Kit (WDK)","C++ Driver Programming","Windows Kernel Programming"],image:"./img/first_driver_preview.jpg",description:"Start pasting your first kernel driver now!"},sidebar:"docsSidebar",previous:{title:"Kernel Driver",permalink:"/docs/windows/kernel/"},next:{title:"Kernel Debugging",permalink:"/docs/windows/kernel/kernel_debugging"}},l={image:n(1373).A},c=[{value:"Driver Entry",id:"driver-entry",level:2},{value:"Driver Unload",id:"driver-unload",level:2},{value:"Simple Debug Output",id:"simple-debug-output",level:2},{value:"DbgPrint",id:"dbgprint",level:3},{value:"KdPrint",id:"kdprint",level:3},{value:"Download Project",id:"download-project",level:2},{value:"Starting the Driver",id:"starting-the-driver",level:2}];function h(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"first-kernel-mode-driver",children:"First Kernel Mode Driver"})}),"\n",(0,t.jsxs)(r.p,{children:["If you have accurately followed the installation instructions outlined in the ",(0,t.jsx)(r.a,{href:"/docs/windows/kernel/",children:"introduction"}),",",(0,t.jsx)(r.br,{}),"\n",'you should find the "Kernel Mode Driver, Empty" template in Visual Studio',(0,t.jsx)(r.br,{}),"\n","Create a new project using this preset"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Kernel Mode Driver, Empty",src:n(1779).A+"",width:"548",height:"106"})}),"\n",(0,t.jsxs)(r.p,{children:['In the "Driver Files" section, locate the ',(0,t.jsx)(r.code,{children:".inf"})," file and delete it",(0,t.jsx)(r.br,{}),"\n","Afterward, create a new C++ source file with the name of your driver, for example, ",(0,t.jsx)(r.code,{children:"test_driver.cpp"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"ntddk.h"})," header file provides essential functionality and structures required for developing kernel-mode drivers."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"#include <ntddk.h>\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/ntddk/",children:"Learn more about the ntddk.h header file on Microsoft\u2019s documentation"})}),"\n",(0,t.jsx)(r.h2,{id:"driver-entry",children:"Driver Entry"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:'extern "C" NTSTATUS\nDriverEntry(_In_ PDRIVER_OBJECT DriverObject, _In_ PUNICODE_STRING RegistryPath)\n{\n  return STATUS_SUCCESS;\n}\n\n'})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:'extern "C"'})," is a C++ language feature that specifies the function should be treated as if\nit were declared in the C programming language.\n",(0,t.jsxs)(r.a,{href:"https://learn.microsoft.com/en-us/cpp/cpp/extern-cpp#extern-c-and-extern-c-function-declarations",children:["Learn more about ",(0,t.jsx)(r.code,{children:'extern "C"'})," and function declarations"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"NTSTATUS"})," is a data type representing the status of an operation in Windows kernel programming.\nIt is a ",(0,t.jsx)(r.code,{children:"LONG"})," value where zero typically indicates success, and non-zero values indicate various error conditions.\n",(0,t.jsxs)(r.a,{href:"https://learn.microsoft.com/en-us/windows-hardware/drivers/kernel/using-ntstatus-values",children:["See more on ",(0,t.jsx)(r.code,{children:"NTSTATUS"})," values"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"DriverEntry"})," is the entry point for Windows kernel-mode drivers.\nThe operating system calls this function after loading the driver\nto initialize its data structures and perform setup tasks.\n",(0,t.jsxs)(r.a,{href:"https://learn.microsoft.com/en-us/windows-hardware/drivers/wdf/driverentry-for-kmdf-drivers",children:["Read more about the ",(0,t.jsx)(r.code,{children:"DriverEntry"})," function for KMDF drivers"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"PDRIVER_OBJECT"})," is a pointer to a structure that represents a driver in the Windows kernel.\n",(0,t.jsxs)(r.a,{href:"https://learn.microsoft.com/en-us/windows-hardware/drivers/ddi/wdm/ns-wdm-_driver_object",children:["Explore the ",(0,t.jsx)(r.code,{children:"DRIVER_OBJECT"})," structure"]}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"PUNICODE_STRING"})," is a pointer to a structure representing a Unicode string in the Windows kernel,\noften used to reference a registry path relevant to the driver.\n",(0,t.jsxs)(r.a,{href:"https://learn.microsoft.com/en-us/windows/win32/api/ntdef/ns-ntdef-_unicode_string",children:["Learn more about the ",(0,t.jsx)(r.code,{children:"UNICODE_STRING"})," structure"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{title:"The Source Annotation Language (SAL)",type:"info",children:[(0,t.jsxs)(r.p,{children:["annotations like ",(0,t.jsx)(r.code,{children:"_In_"})," and ",(0,t.jsx)(r.code,{children:"_Out_"})," are not strictly required for compilation\nbut are recommended to improve code clarity\nand help static analysis tools understand the intended use of function parameters."]}),(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"_In_"})," indicates that the parameter is an input to the function and shouldn\u2019t be modified by the function."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"_Out_"})," specifies that the parameter is used to return data from the function to the caller."]}),"\n"]}),(0,t.jsxs)(r.p,{children:["These annotations enhance code readability and can help catch potential bugs during development.\n",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/cpp/code-quality/understanding-sal",children:"Learn more about SAL and its uses"}),"."]})]}),"\n",(0,t.jsx)(r.h2,{id:"driver-unload",children:"Driver Unload"}),"\n",(0,t.jsx)(r.p,{children:"To ensure proper memory management, we will define a function that automatically undoes all changes made by the driver\nupon unloading. This will prevent any potential leaks from persisting beyond the driver's use."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"void\nTestUnload(_In_ PDRIVER_OBJECT DriverObject)\n{\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"the pointer to the unload function must be set using the DriverUnload member of the DriverObject"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:"DriverObject->DriverUnload = TestUnload;\n"})}),"\n",(0,t.jsx)(r.h2,{id:"simple-debug-output",children:"Simple Debug Output"}),"\n",(0,t.jsx)(r.h3,{id:"dbgprint",children:"DbgPrint"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:'DbgPrint("Output\\n");\n'})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"DbgPrint"})," It allows you to print messages to the debugger output in both types of builds"]}),"\n",(0,t.jsx)(r.h3,{id:"kdprint",children:"KdPrint"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cpp",children:'KdPrint(("Output\\n"));\n'})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"KdPrint"})," is often implemented as a macro, and it is typically included in debug builds but excluded in release builds"]}),"\n",(0,t.jsx)(r.h2,{id:"download-project",children:"Download Project"}),"\n",(0,t.jsx)(r.p,{children:"You can download the driver example project from here:"}),"\n","\n",(0,t.jsx)("div",{className:"w-full md:max-w-sm",children:(0,t.jsx)("div",{className:"flex flex-col gap-4",children:(0,t.jsx)(s.$,{title:"simpleWinDriver",platform:"",demo:"https://github.com/Arteiii/simpleWinDriver",buttonlabel:"Template",source:"https://github.com/new?template_name=simpleWinDriver&template_owner=Arteiii"})})}),"\n",(0,t.jsx)(r.h2,{id:"starting-the-driver",children:"Starting the Driver"}),"\n",(0,t.jsx)(r.p,{children:"To enable driver testing on your test machine, you\u2019ll need to activate test-signing mode.\nThis allows the installation and running of unsigned drivers:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:"bcdedit /set testsigning on\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Next, create the driver service using the ",(0,t.jsx)(r.code,{children:"sc"})," (Service Control) command:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:'sc create <drivername> type= kernel binpath= "<path to driver.sys>"\n'})}),"\n",(0,t.jsx)(r.p,{children:"To start the driver, use the following command:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:"sc start <drivername>\n"})}),"\n",(0,t.jsx)(r.p,{children:"You can stop the driver with:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:"sc stop <drivername>\n"})}),"\n",(0,t.jsx)(r.p,{children:"If you need to remove the driver, use:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cmd",children:"sc delete <drivername>\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note:"})," Ensure that the driver is stopped before attempting to delete it, as active drivers cannot be removed."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsxs)(r.a,{href:"https://learn.microsoft.com/de-de/windows-server/administration/windows-commands/sc-create",children:["Detailed guide on using ",(0,t.jsx)(r.code,{children:"sc create"})," for service creation"]})}),"\n",(0,t.jsxs)(r.p,{children:["To verify the functionality of your driver and capture debug output, you can\nuse ",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/sysinternals/downloads/debugview",children:"DebugView"})," in administrator mode.",(0,t.jsx)(r.br,{}),"\n","By recording kernel events, you can monitor the messages generated by functions like DbgPrint or KdPrint."]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsx)(r.p,{children:"To enable the capture of debug output from your driver using DebugView, you need to configure the Debug Print Filter in\nthe Windows Registry."}),(0,t.jsxs)(r.p,{children:["Navigate to",(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.code,{children:"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\Session Manager\\Debug Print Filter"}),(0,t.jsx)(r.br,{}),"\n","(you may need to create it)."]}),(0,t.jsxs)(r.p,{children:["Create a ",(0,t.jsx)(r.code,{children:"DWORD"})," value named ",(0,t.jsx)(r.code,{children:"DEFAULT"})," and set its value to ",(0,t.jsx)(r.code,{children:"8"}),".",(0,t.jsx)(r.br,{}),"\n","After making these registry changes, it's necessary to restart the computer for the modifications to take effect."]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Capture kernel in dbgview",src:n(9392).A+"",width:"752",height:"344"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"dbgview output",src:n(9874).A+"",width:"994",height:"366"})}),"\n",(0,t.jsxs)(r.p,{children:["Additionally, you can confirm the successful installation of your driver by checking the Windows Registry.",(0,t.jsx)(r.br,{}),"\n","Specifically, navigate to ",(0,t.jsx)(r.code,{children:"HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services"})," and look for the entry corresponding to\nyour driver name. A valid installation should result in the presence of the driver's registry entry at this location"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"regedit with test_driver key open",src:n(9139).A+"",width:"1212",height:"302"})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},2822:(e,r,n)=>{n.d(r,{$:()=>j,s:()=>v});var t=n(6540),i=n(8774),s=n(3498),d=n(378),a=n(3161),o=n(3894),l=n(7715),c=n(5733),h=n(4164),u=n(4122),p=n(991),A=n(4848);const m=[{title:"Start Windows Kernel Development",icon:s.p2,text:"Create a kernel driver, learn kernel debugging basics.",link:"/docs/windows/kernel/"},{title:"Python",icon:d.PPP,text:"Explore basic Python functionality.",link:"/docs/python/"},{title:"Cheat Sheet's",icon:a.Zww,text:"Some CheatSheets",link:"/docs/cheatsheets/"}],x=[{title:"zenity",platform:"Rust, CLI",source:"https://github.com/Arteiii/zenity",blog:"https://docs.rs/zenity/latest/zenity/",demo:"https://crates.io/crates/zenity"},{title:"membrs",platform:"Rust, Next.js, Discord",blog:"https://github.com/Arteiii/membrs",source:"https://github.com/Arteiii/membrs"},{title:"RegistryHelper",platform:"Windows, Modern C++",source:"https://github.com/Arteiii/RegistryHelper",blog:"https://learn.microsoft.com/en-us/archive/msdn-magazine/authors/giovanni_dicanio"}];function f(e){let{title:r,text:n,icon:t,link:s}=e;return(0,A.jsxs)(i.A,{to:s,className:"group flex cursor-pointer items-start gap-2 rounded-lg border-2 border-transparent p-3 text-inherit transition-colors hover:border-primary hover:text-primary",children:[(0,A.jsx)(t,{className:"h-6 w-6","aria-label":`${r} icon`}),(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("h4",{className:"mb-1 font-semibold",children:r}),(0,A.jsx)("p",{className:"mb-0 text-sm text-text-400",children:n})]}),(0,A.jsx)(u.A,{className:"ml-auto h-5 w-5 self-center opacity-0 transition-opacity group-hover:opacity-100","aria-label":"Right arrow icon"})]})}function j(e){let{title:r,platform:n,blog:t,source:s,demo:d,buttonlabel:a="Clone"}=e;return(0,A.jsxs)("div",{className:"group flex cursor-pointer items-center justify-between rounded-lg border-2 border-transparent p-3 text-text-400/60 transition-colors hover:border-primary hover:text-primary",children:[(0,A.jsxs)("div",{className:"flex flex-col",children:[(0,A.jsx)("h4",{className:"mb-1 text-black group-hover:text-primary dark:text-white",children:r}),(0,A.jsx)("div",{className:"text-sm text-text-400",children:n})]}),(0,A.jsxs)("div",{className:"flex items-center gap-2.5",children:[t&&(0,A.jsx)(i.A,{to:t,className:"text-inherit","aria-label":"Open Blog",children:(0,A.jsx)(o.k9K,{className:"h-5 w-5","aria-label":"Document icon"})}),d&&(0,A.jsx)(i.A,{to:d,className:"text-inherit","aria-label":"Open Demo",children:(0,A.jsx)(l.h7G,{className:"h-5 w-5","aria-label":"Open icon"})}),s&&(0,A.jsxs)(i.A,{to:s,className:"flex items-center gap-1 rounded-lg py-1 px-3 text-inherit transition-colors group-hover:bg-primary group-hover:text-white","aria-label":"Open Repository",children:[(0,A.jsx)(p.A,{className:"h-4 w-4","aria-label":"GitHub icon"}),(0,A.jsx)("span",{className:"font-semibold",children:a})]})]})]})}function v(){return(0,A.jsxs)("section",{className:"no-underline-links mx-auto flex w-full max-w-5xl flex-col p-4 md:flex-row md:gap-0",children:[(0,A.jsxs)("div",{className:"flex-1",children:[(0,A.jsxs)("div",{className:"mb-8 flex items-center justify-between",children:[(0,A.jsx)("h3",{className:"m-0",children:"Docs & Notes"}),(0,A.jsxs)(i.A,{to:"/docs",className:"font-jakarta text-sm font-semibold",children:["View more"," ",(0,A.jsx)(c.Sub,{className:"ml-1","aria-label":"Right arrow icon"})]})]}),(0,A.jsx)("div",{className:"flex flex-col gap-4",children:m.map((e=>(0,t.createElement)(f,{...e,key:e.title})))})]}),(0,A.jsx)("div",{className:(0,h.A)("mx-8 block flex-shrink-0 bg-gradient-to-b from-transparent via-secondary-700 to-transparent","hidden w-px md:block")}),(0,A.jsxs)("div",{className:"w-full md:max-w-sm",children:[(0,A.jsxs)("div",{className:"mb-8 flex items-center justify-between",children:[(0,A.jsx)("h3",{className:"m-0",children:"Repositories"}),(0,A.jsxs)(i.A,{to:"https://github.com/Arteiii?tab=repositories",className:"font-jakarta text-sm font-semibold",children:["All"," ",(0,A.jsx)(c.Sub,{className:"ml-1","aria-label":"Right arrow icon"})]})]}),(0,A.jsx)("div",{className:"flex flex-col gap-4",children:x.map((e=>(0,t.createElement)(j,{...e,key:e.title})))})]})]})}},1373:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/first_driver_preview-080caf959f5112da0ea141d08a6013b2.jpg"},1779:(e,r,n)=>{n.d(r,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAABqCAYAAACMPkpFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABNeSURBVHhe7Z1NjhzFFoXfXrBAGBlmYIwZwgyJGRtgD+zAC2DKnE0gPEHsAol9eNLPx3rHOr7vRmRmdXVlVvU3+JRxf+NGZHbG7ep2+z9Pnjy5AwAAANgTGhIAAADYHRoSAAAA2B0aEgAAANgdGhIAAADYHRoSAAAA2B0aEgAAANgdGhIAAADYHRoSAAAA2B0aEgAAANgdGhIAAADYHRoSAAAA2B0aEgAAANgdGhIAAADYHRoSAAAA2B0aEgAAANgdGhIAAADYnYs2JM+ePbv78ssv716+fPkB0snWxQAAAMDtc5GG5JNPPrl7/vz5/zUiFfnIt8sBAAAAt8uDNyRqMF68ePGu4fjhhx/ufv3117s///zz7u+//36HxtLJJh/50pQAAAA8Lh68IfEnIz/99NMHjUhFNvnIVz/C6XI9BG/evLn78ccf38v//PPP3R9//PGBz0NQ5039aP7ffvttGLfE1jj5J5q78xPKuzX/KdSafvnll9bv0mhvfM/qPuTzJNvae+s1mrr/nV25Z/cJAODIPGhDot8L8Scjs2bEyMeflJxCV8MSepn7ELjkCz3nrXodYiPbKG6JrXHVX/LoML0Up659Lafkl7/ul+XMUZ8n2dbe21qL5Nz/ajej/AAAR+dBGxL/Aqt+JNM1IB3yrY3GWroalvCL3d9hdj4PwehA8cFTGyN9GiD9KG6JrXHVX2Pp0ufSnLr2tZySX/epNh3K0T1Psq29t7UWjaWzXO3GuaoeAODoPGhD4kahfjry6tWru++///4dGqftFO7bkOiAyO9yjQ8BY73GPkAsK4f98sCZ5egOFOvTV/g734yrufNHGGlzbaM4xyTpb1SD55C97oH800do7L0dzatx5hohe63Jes2jq8ej+1F9bbMsVMtsHYl0WZNzdr6yeQ9S7xy2p2/1c02dXUjXzQ0AcHQu0pBk8/D69ev3zYhJ+ynctyERefikzS992fPwqoecvyuVn+S0jXJ0B4r1yuea8pDJOI3TZ2TTnNXmcdaUpI+pB2LdA/nL7r0QuY7RvDXXCPklqff+KK9k57Pc+aoWya4px7N1JJnbshj5Kv/ae+uxqfuf5HySPQYAuBZoSP73Mtc1DwCN/bI3PqCq70jekqOL9UGVB1jaNc5Y+2WsqXGJa+r8U6ec1lV7yhpb7zpm82pc5+oY+VX9TK62bm9tk+xx3U+TPpa758k26cTs3taxme1/kn4AANcCP7L534vdh4j10qWc1MNgJG/J0el1sKiuPAxnubc0JGnryDpEjav2lPXpRCLdbN6aa8TIb1ZLlavNe9zZunVUFFNl5ajPU9o0nt3bOhYaZ75qT9IPAOBaONwvterF7wZjRI2xvqthiXyxa+56QHQHUT0MZvLaHJ3eh1rG19w+TKWTnH62Kb7GdTUl6W/Z+UZ2y7pqH3Mv7bNlLyojv1ktVdbYNUgnufOz3etIfVJtmUPz5B6kbc29rXln+2+kq/sOAHANPGhD8lD/7LfGWd/VsER9setTBr/QpZfdjH7EMJPX5jBVXw+XtNfcGecDT+jQS3uNc01J2kXmtj11VVbdNe9o3oxV3aMDNWOFD/OMX5I11ry6ijzkrc+6NU65ohpGTYVQrNdTbbN7q3GScdU30Xpm9QIAHJUHbUjEKX8YTTFPnz69+/TTTz/AjUeNtb6bH64LHabZJJyb0UE+Yqke5Ro1UHugWrasDwDgKDx4Q3LOPx3vxiObEWF9FwPXhRqGTn8utjQka5sNfUJyhE8lVAOfjgDAtfLgDYlQg3GO/1zPfjQkcCprGxI1Ils/TQEAgNO5SENi9Dsl/kXXRDrZupjE/jQkAAAAt8VFG5L7QkMCAABwm1xFQ1J/5DNqSJZ+5AMAAADH5PANiRqM+kuxtSFZ+0uxAAAAcEwO35D4k5Gt/2y4ywUAAADH5NANyX3+sNqaX5IFAACAY3DohuSUPz0vX8UotssJAAAAx+PQDYkaC1E/HZn953zydVyXcwR/VKpHf4fjCH+P4xJ13Dd/jdffMrnEM7VUt+yjOup/K7CFrXHyT/JP7leUd2v+tWyp41pYu1f5R/xqTD6vsq19ZjRO6n52duVeu+81fs1fcq7PT44rM1ul810TL/uWec7JXvOewmEbko8//vhdU/Hdd9990HC8fv36fTNi0i62NiS6WfpiFEe9cdf0UCVHrrvWdt9aM37LC/e+LNUt++jZlu3UdW+Nq/6SR4feQ3Lqeo/MmjXJrufAcsbU51W2tc9MnVty3tdqN2vftxmvq+Tqs8SohiVbpfPdEr8HR68voSF5i74Qk85nb67poUqOXHet7b61Ol7P0CUP2qW6Ze8aJP9HfKeue2tc9ddYuvS5BKeu98isWVN9vzmme15lW/vM1Lk1ls5ytRvnqvpKjR/lmzGL2ZKv8z2lnkty9PoSfmTzFnfqIr+DELqZ+qLU1eO0G8XaR1ivsb7wrNd4lK/62mZZ6AtYNcrPcRrXuoX8u3y2+cUiudaf+SX7gR6tU6gG63Ne0b14pHfeKtdc1a7xaB+zRvvkPI43rk3j0X5lTmF94pjuXoziNc77oOuadYnMUdeX2J4xQnVa7/g6Rz4Haav7WuMck6S/UQ15f+teyD99hMbe49G8GmeuRLpah/UZ47H16ZfPicZb7ply5Xqkdz26eq4aW2OyVl2dwzb7Gt9vy/JTrd7LxPmc3zhHnS/z2s/1dnYhXTd3JeOVs96LzD2qK8e6Shb1OVY9tuV+m/TtdBqPngX75d4Ijb0PWZvI2LzfXZ222zdja81H5dH/UqsfEMsa583Lm6sbL9m2JG+6/PwgSu/8jret5ktfP5jOmWPF5QOnsXSWzVK++sXiHLO5cyx/59A8mc+k/5LNcl1ftXs8ui8aey2qKeOSqpdc71Xnm+tO5CM8d7V18dJnLsmzdY1ydOsztudzItlrzXiN02dkq/ua46wtSR+jGpxT9roX8pc9n4dcx2jemiuRLRnNn8iWa63PieMsd3GuT9e8x/m1o6vHipVdY+XIXDmnZdlyPyvyqbLo/J1v7TPjsan3Ncn5JHs8osZXW86d8mzsGrSHtkmXz1lH5ul0Gue9lVz96jy5x5lLunwWPN5aZ46PzqEbkkv8s1/d5PzC1jhvdr2Z3c2VLH3iHNV/Jlfb6EG17LFfEpW1+XTNfCNf+yXy6+KN9J5nyWbZ+fK+VP9ZbN2P6jvSz3JqnPj+JtJrz3TNPLP46juS1+SoPl0O783s/jou/TLW1LhktD/yTZ1yWlftKWtsveuYzatxncuMbFXve2mylvQbycKxRvVJX++DZe+HY50zfTWWTT62SVZs/ZpJaj7JXmPmss111FrTXsfG6xjZTfqNyHhdZ3OPbB4Lr6fGCI2X9tA5O121j2wa28f1yCZ90j3P9qt1rn1ej8yhGxLx0H8YLW9gkva8mVUWfkBSZ5biU642PaijF5AexsT6ZG0+XSXbT3Qvn85PjPQi51myVVnrkm7NS9CyGL1wUtfpZzk1tn6E/f1isH4W75gleUuOStr9DOQezebwcyDbaF+7uI6sQ9S4ak+5e95n89Zca2ypr7m1dttq/EiuORLn855WuYtd05D4AOuo+ZyjPq9p01h5R89MHQuNM1+1J+k3osa7ns6WcjcWuY7qJ+p7J1Fs+mosX8s1V8o5PsfznHXW2Kyziz0qh29Iuj8dn42JxtL5k5Etfzq+fpGZtQ98Ir0frKqfxaecOaST3PnZrjrrF0iyJZ9kr3nmq3G3TtWxZv1J7rOuna9yOm+tI32rzXkV2+W13yhHlTXu1pekv3y1vrR18bM5q7w2RyXt3ufMU+eYPQejfdW4qy1Jf8vON7Jb1tXPu+322bonI1vqVZfnki5tNX4ma9zVJ53y26armon0VezsXnRz1hyJ5hvV6Xo6m2qQXGuzPceWZ/fVSDeaM0m9rikr3nO5TttmY8doTWkz0nf7qP3NmiVnE1hzjWrQVXkyl326ebsahevUepxLfqN5j87hGxKhBsOflMyQz5b/x2b0xSudH7J6M0c31w+BWRufsuN0FflFbb3zWpdyZZZPctZR6x/VWP1y/tR7Ls/f1Skf+9tP+VMv7G97HVc543Uvq6+ptVW/lHWVbLr11Hj51JdEja8xM3ltjkq1dy/B0RwZN9vXGjfanyRz2566Kqvumnc0b41NRraq13zS6Spsq34zWVfJxvVZX/0sd7Fpm8mu1zaje5bvu5pDtTmu2mq+tGucZFz1TfQ85f0c+WXu6jN6hziuG4+e49QLz1HRXthnti9VrjbF5vqF7M4tbM/YUZ2uS1cxmvfIXEVDYvR7If5F10S6W/hT8VsfHD2sejg7mzjXg5gP/bWh9V9z/QDnQl8L9QDdkzw0AcRVNSS3zpYGYs3L5RwNiRqeI73EtqKm7ZrrBzgn+kSgfle+B6rhCHXAsaAhORBrGwgdsGt879OQKE7x52hqLo33x3Q+AABwLGhIAAAAYHdoSAAAAGB3aEgAAABgd2hICqPfmfDvVFzq9ynOPdeafP7nZPf5JdBL7hEAANwONCSFoxyoezQk8pn9M+I15DxH2UsAADg+NCSFoxyi565jTb5zzJk5jrKXAABwfB59Q6IDUwenqH99UmP9W3ldLcumH2nkJwn5tzoyn+Mcm7nyn6Z2n0pYbx//hcXZ3MlsXV2NKXsu1yvybwZIdq4qe+w4wd8bAACAJR59Q6ID0wd815D4cLYsm/zzkNXYOTJeOsdnrhrfIf/a5CzNncjf+m5doxqtr4ziZ7ZZPgAAgORRNyQ6LOunC1sOXutr45C4edDYsfbLZqeS/qI2PdaPPh0ZrctzJ12NQvOln23Vb2SrfgAAACNoSE5sSNRMJNLJJh/7J93hrDjpR59wpL/qzE886tyJ4pYakrRVH42rn/LZVmtLeTQGAACYwY9s3h6aedDPDtSUddUh3R38XZNQc5lRU5F5FCfZtpy7yynkP1vXUo2K9do8v23SO7euNXc37mQAAADz6BsSH6iiO7hnB6oO5vx9DiG784nuxyE5p8h441j7uAEwstW5k9m61tQotD7pdBVd/a7RthzbNsoPAABgHn1Dcq3okK9NCgAAwLVCQ3KF6FMGfWLR2QAAAK4RGpIrwz9G4UcfAABwS9CQAAAAwO7QkAAAAMDu0JAAAADA7tCQAAAAwO7QkAAAAMDu0JAAAADA7tCQAAAAwO7QkAAAAMDu0JAAAADA7tCQAAAAwO7QkLzl6dOnd1999dXdN998c/ftt9/uhuZXHZ999llb54yjrOFS3Ppe3Wd9AADXyKNvSD7//PP2QNgb1fXRRx+1NVeOuoZLcet7tWV9AADXyqNvSPRdaHcI7M3XX3/d1ttx1DVcilvfqy3rAwC4Vh59Q3Lkj+27ejsey49pZnT70nGte9WtBQDglnj0DUn38j8KXb0dXexjo9uXji72GujWAgBwS9CQNC//jlevXt29efPmPb///nvrd066eju62OSvv/56V3/qtIaff/75vSz7v//++95m/RZqzkvS7UtHF1vxPTbav87PyKfTn5NuLQAAtwQNSfPyr7gZ6WwPSVdvRxebqP48VN18ZFOl8X2bLO3RrTQkuQ7t1VJT8tB0awEAuCVoSJqXf0UH0tJBq0NedDaxZO/o6u3oYhPV7k8/hA5XNR+pyzXmgayxfHX12DG2C+XUNffJttR77vSxTfvjgz/ntO+Mbl86uthK1tTpNFad3j/bJPse65r7Kx/HpS7zzOjWAgBwS9CQNC//xAdNZ0uWGo4le0dXb0cXW9EafKB6Pb7WNfqA9diHqOqXbD/p3VzY5rhqc37pMp/09suYnGcN3b50dLGVXIdRnb5/srtOy/LPteVaNHas8uTeZp4Z3VoAAG4JGpLm5Z/o8MjDuqIDRQdLkofMkn1GV29HF1vRnELryUNTB6XImlRjHpoen8MmNJbO83t/87DW2HWuoduXji62UmsXqicbktHaurXInozyzOjWAgBwS9CQNC//ypqDwwd7ZxNL9o6u3o4utuLDUo2H69BVh74bA/vmeuvaz2HzYV0Pb8tGtSoudSO6fenoYiu1do2zjqW1aS9zLdV/Sd/RrQUA4JagIWle/hUdjN1hmbIOoTzUK0v2jq7eji62Q2uo65Cch63Ig7Iemikr1vugtaVNTU7acl7vp+26pn8ivzWHdrcvHV1spVtz1jbbEzd46Z9rTWqeGd1aAABuCRqS5uXfoQNFB4jpfM5NV29HF9uhNWRjIHyApi4Pynpopqyr90M5Ol+TejcvbtCqnLG1thHdvnR0sRXPbbIu20d74rWkXWPnEl3cEt1aAABuiUffkLx8+bI9AI5AV2/HkddwKbp96bjWverWAgBwSzz6huT58+ftAbA3L168aOvtOOoaLsWt79WW9QEAXCuPviE56v/+qrq6ejuu8X+wPSe3vldb1gcAcK08+oZEPHv27N13od1hcGlUxxdffNHWOeNIa7gUt75Xp64PAOAaoSEBAACA3aEhAQAAgN2hIQEAAIDdoSEBAACA3aEhAQAAgN2hIQEAAIDdoSEBAACA3aEhAQAAgN2hIQEAAIDdoSEBAACA3aEhAQAAgN2hIQEAAIDdoSEBAACAnXly919PHNHMLO9JLAAAAABJRU5ErkJggg=="},9392:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/vmware_NlskJg3WCa-335d6f49f1d05550215dd358047ada53.png"},9139:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/vmware_W3sK98lXZu-57db8b487840d9a6c39791bbaedccf20.png"},9874:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/vmware_hEfkK08g9P-efdd6fc52dc7d2d71ab7ac5107022a9b.png"},8453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>a});var t=n(6540);const i={},s=t.createContext(i);function d(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);