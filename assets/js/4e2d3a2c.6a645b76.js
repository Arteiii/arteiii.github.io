"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[2473],{3233:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=i(4848),o=i(8453);const s={id:"conventions",title:"Conventions",sidebar_position:1},r="Conventions",d={id:"windows/programming/conventions",title:"Conventions",description:"Unicode",source:"@site/docs/windows/programming/conventions.md",sourceDirName:"windows/programming",slug:"/windows/programming/conventions",permalink:"/docs/windows/programming/conventions",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/windows/programming/conventions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"conventions",title:"Conventions",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Programming",permalink:"/docs/windows/programming/"},next:{title:"Handles",permalink:"/docs/windows/programming/handles"}},c={},l=[{value:"Unicode",id:"unicode",level:2},{value:"Example",id:"example",level:3},{value:"Ex",id:"ex",level:2},{value:"Example",id:"example-1",level:3}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"conventions",children:"Conventions"})}),"\n",(0,t.jsx)(n.h2,{id:"unicode",children:"Unicode"}),"\n",(0,t.jsx)(n.p,{children:"In the realm of Windows internals, text strings are predominantly stored and processed in the 16-bit wide UNICODE\nformat (UTF-16LE).\nTo accommodate compatibility, many Windows functions accepting string parameters offer two entry\npoints: one for Unicode (wide, 16-bit) and another for ANSI (narrow, 8-bit)."}),"\n",(0,t.jsx)(n.p,{children:"Given that Windows employs Unicode internally, opting for the ANSI (narrow version) may lead to performance issues.\nThis is because Windows would need to convert the narrow input to Unicode,\nprocess it, and then convert the output back to ANSI."}),"\n",(0,t.jsx)(n.p,{children:"For instance, the Windows API function CreateFile is essentially a macro that expands into:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["CreateFile",(0,t.jsx)(n.strong,{children:"A"})," (",(0,t.jsx)(n.strong,{children:"A"}),"NSI)"]}),"\n",(0,t.jsxs)(n.li,{children:["CreateFile",(0,t.jsx)(n.strong,{children:"W"})," (Unicode, where ",(0,t.jsx)(n.strong,{children:"W"})," signifies ",(0,t.jsx)(n.strong,{children:"w"}),"ide)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This pattern is noticeable in many functions, with one version designated for ANSI and another for Unicode, such as\nCreateFileMapping A/W and CreateHardLink A/W."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"It's essential to omit the end (A/W) when referencing these functions in the Microsoft documentation."}),(0,t.jsxs)(n.p,{children:["When referencing these functions without specifying ",(0,t.jsx)(n.code,{children:"A"})," or ",(0,t.jsx)(n.code,{children:"W"}),", the default version is used.\nThis default is determined\nby the ",(0,t.jsx)(n.code,{children:"UNICODE"})," macro.\nIf ",(0,t.jsx)(n.code,{children:"UNICODE"})," is defined, the ",(0,t.jsx)(n.code,{children:"W"})," (wide) version is used; otherwise, the ",(0,t.jsx)(n.code,{children:"A"})," (ANSI) version."]})]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Consider the function ",(0,t.jsx)(n.code,{children:"CreateFile"}),". Here\u2019s how it looks in different formats:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CreateFileA"}),": Uses ANSI encoding for strings."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"CreateFileW"}),": Uses Unicode encoding for strings."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <windows.h>\n\n// ANSI version\nHANDLE hFileA = CreateFileA(\n    "example.txt",\n    GENERIC_READ,\n    0,\n    nullptr,\n    OPEN_EXISTING,\n    FILE_ATTRIBUTE_NORMAL,\n    nullptr\n);\n\n// Unicode version\nHANDLE hFileW = CreateFileW(\n    L"example.txt",\n    GENERIC_READ,\n    0,\n    nullptr,\n    OPEN_EXISTING,\n    FILE_ATTRIBUTE_NORMAL,\n    nullptr\n);\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["By defining ",(0,t.jsx)(n.code,{children:"UNICODE"})," before including ",(0,t.jsx)(n.code,{children:"windows.h"}),", you ensure that the Unicode versions of the functions are used.\nConversely, by not defining ",(0,t.jsx)(n.code,{children:"UNICODE"})," (or by undefining it if it was previously defined), you ensure that the ANSI\nversions are used."]})}),"\n",(0,t.jsx)(n.h2,{id:"ex",children:"Ex"}),"\n",(0,t.jsx)(n.p,{children:'Windows adopts the "Ex" suffix when updating functions that are incompatible with their predecessors.\nThe "Ex" serves as\nan indicator of version 2. Consequently, if a function undergoes further updates, it will bear two "Ex" suffixes.'}),"\n",(0,t.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Consider the ",(0,t.jsx)(n.code,{children:"CreateFile"})," function and its extended version ",(0,t.jsx)(n.code,{children:"CreateFileEx"}),".\nThe original ",(0,t.jsx)(n.code,{children:"CreateFile"})," function might\nhave limitations that are addressed in the extended version:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:'#include <windows.h>\n\n// Original version\nHANDLE hFile = CreateFile(\n    L"example.txt",\n    GENERIC_READ,\n    0,\n    nullptr,\n    OPEN_EXISTING,\n    FILE_ATTRIBUTE_NORMAL,\n    nullptr\n);\n\n// Extended version\nHANDLE hFileEx = CreateFileEx(\n    L"example.txt",\n    GENERIC_READ,\n    0,\n    nullptr,\n    OPEN_EXISTING,\n    FILE_ATTRIBUTE_NORMAL,\n    nullptr,\n    nullptr,\n    FILE_ATTRIBUTE_NORMAL\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, ",(0,t.jsx)(n.code,{children:"CreateFileEx"})," might introduce additional parameters or features not present in ",(0,t.jsx)(n.code,{children:"CreateFile"}),".\nWhen\nfurther enhancements are necessary, Microsoft could introduce another version, such as ",(0,t.jsx)(n.code,{children:"CreateFileExEx"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(6540);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);