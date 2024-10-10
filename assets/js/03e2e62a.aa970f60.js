"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[867],{204:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=s(4848),t=s(8453);const i={id:"string",title:"String",sidebar_position:1},o="String",d={id:"datatypes/string",title:"String",description:"std::str",source:"@site/rust-cookbook/datatypes/strings.md",sourceDirName:"datatypes",slug:"/datatypes/string",permalink:"/rust-cookbook/datatypes/string",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"string",title:"String",sidebar_position:1},sidebar:"rustCookbookSidebar",previous:{title:"Datatypes",permalink:"/rust-cookbook/datatypes/"},next:{title:"Range",permalink:"/rust-cookbook/datatypes/range"}},l={},a=[{value:"<code>str</code>\xa0vs\xa0<code>String</code>\xa0 in Rust",id:"strvsstring-in-rust",level:2},{value:"<code>str</code>: String Slice",id:"str-string-slice",level:3},{value:"<code>String</code>: Growable, Heap-Allocated String",id:"string-growable-heap-allocated-string",level:3},{value:"Differences Between \xa0<code>str</code>\xa0 and \xa0<code>String</code>",id:"differences-between-str-and-string",level:2},{value:"Why is This Different From Other Languages?",id:"why-is-this-different-from-other-languages",level:2},{value:"Key Points on Memory Efficiency",id:"key-points-on-memory-efficiency",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"string",children:"String"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.str.html",children:(0,r.jsx)(n.code,{children:"std::str"})}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/string/struct.String.html",children:(0,r.jsx)(n.code,{children:"std::string::String"})})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Strings in Rust are a fundamental aspect of the language, and mastering them is key to effective programming. Unlike\nmany other system programming languages, Rust enforces strict memory safety guarantees, and this shapes how strings are\nhandled\u2014both on the stack and the heap."}),"\n",(0,r.jsxs)(n.h2,{id:"strvsstring-in-rust",children:[(0,r.jsx)(n.code,{children:"str"}),"\xa0vs\xa0",(0,r.jsx)(n.code,{children:"String"}),"\xa0 in Rust"]}),"\n",(0,r.jsx)(n.p,{children:"In Rust, there are two primary string types:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.str.html",children:(0,r.jsx)(n.code,{children:"str"})})," (string slice)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://doc.rust-lang.org/std/string/struct.String.html",children:(0,r.jsx)(n.code,{children:"String"})})," (heap-allocated, growable string)"]}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"str-string-slice",children:[(0,r.jsx)(n.code,{children:"str"}),": String Slice"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"str"})," represents a borrowed reference to a string, typically a sequence of UTF-8 encoded bytes."]}),"\n",(0,r.jsxs)(n.li,{children:["It is a ",(0,r.jsx)(n.strong,{children:"view"})," into some data, rather than owning the data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"str"})," is ",(0,r.jsx)(n.strong,{children:"immutable"}),"\u2014you cannot change it directly."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"str"})," is typically stored on the ",(0,r.jsx)(n.strong,{children:"stack"})," but references data stored elsewhere, often in the program\u2019s binary (for\nstring literals) or the heap."]}),"\n",(0,r.jsxs)(n.li,{children:["It's always a reference, so you\u2019ll see it in code as ",(0,r.jsx)(n.code,{children:"&str"}),", signifying it\u2019s a borrowed reference to a string."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let hello: &str = "Hello, world!";\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, ",(0,r.jsx)(n.code,{children:'"Hello, world!"'})," is stored in the binary, and ",(0,r.jsx)(n.code,{children:"hello"})," is a reference to this string slice."]}),"\n",(0,r.jsxs)(n.h3,{id:"string-growable-heap-allocated-string",children:[(0,r.jsx)(n.code,{children:"String"}),": Growable, Heap-Allocated String"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"String"})," is an ",(0,r.jsx)(n.strong,{children:"owned"})," string stored on the ",(0,r.jsx)(n.strong,{children:"heap"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Since it's heap-allocated, it can grow in size dynamically."}),"\n",(0,r.jsxs)(n.li,{children:["You can modify a ",(0,r.jsx)(n.code,{children:"String"})," by appending or removing characters."]}),"\n",(0,r.jsxs)(n.li,{children:["Because it owns its data, a ",(0,r.jsx)(n.code,{children:"String"})," can be passed around, transferred between functions, or manipulated in ways a\n",(0,r.jsx)(n.code,{children:"str"})," cannot."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'let mut hello = String::from("Hello");\nhello.push_str(", world!");\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, ",(0,r.jsx)(n.code,{children:"hello"})," starts as a ",(0,r.jsx)(n.code,{children:"String"})," containing ",(0,r.jsx)(n.code,{children:'"Hello"'}),", but it can be modified to append ",(0,r.jsx)(n.code,{children:'", world!"'}),"."]}),"\n",(0,r.jsxs)(n.h2,{id:"differences-between-str-and-string",children:["Differences Between \xa0",(0,r.jsx)(n.code,{children:"str"}),"\xa0 and \xa0",(0,r.jsx)(n.code,{children:"String"})]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Aspect"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"str"})})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"String"})})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Ownership"}),(0,r.jsx)(n.td,{children:"Borrowed (does not own the data)"}),(0,r.jsx)(n.td,{children:"Owns the data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Mutability"}),(0,r.jsx)(n.td,{children:"Immutable"}),(0,r.jsx)(n.td,{children:"Mutable (can grow or shrink)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage Location"}),(0,r.jsx)(n.td,{children:"Stack (but references data elsewhere, often heap or binary)"}),(0,r.jsx)(n.td,{children:"Heap (allocates memory dynamically)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Common Use Cases"}),(0,r.jsx)(n.td,{children:"String literals, borrowed data"}),(0,r.jsx)(n.td,{children:"When ownership or dynamic behavior is needed"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"why-is-this-different-from-other-languages",children:"Why is This Different From Other Languages?"}),"\n",(0,r.jsxs)(n.p,{children:["Rust\u2019s handling of strings is unique due to its ",(0,r.jsx)(n.strong,{children:"ownership model"})," and ",(0,r.jsx)(n.strong,{children:"memory safety guarantees"}),". In languages like\nC or C++, strings are often managed manually, leading to potential memory leaks or segmentation faults. In contrast:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Rust guarantees that all memory is properly cleaned up when it\u2019s no longer needed, using its ownership and borrowing\nsystem."}),"\n",(0,r.jsx)(n.li,{children:"Strings in Rust avoid the problems of dangling pointers and double frees common in manual memory management."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For example, in C you might dynamically allocate memory for a string and need to explicitly free it. In Rust, the\ncompiler ensures that when a ",(0,r.jsx)(n.code,{children:"String"})," goes out of scope, its memory is automatically deallocated."]}),"\n",(0,r.jsx)(n.h2,{id:"key-points-on-memory-efficiency",children:"Key Points on Memory Efficiency"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Heap Allocations"}),": While ",(0,r.jsx)(n.code,{children:"String"})," provides flexibility with dynamic growth, heap allocations are more expensive\nthan stack allocations due to the overhead of managing dynamic memory. For small, fixed-size strings, consider using\n",(0,r.jsx)(n.code,{children:"&str"})," to avoid heap allocation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Copying and Cloning"}),": Cloning a ",(0,r.jsx)(n.code,{children:"String"})," means copying the entire heap-allocated buffer, which can be expensive for\nlarge strings. Cloning a ",(0,r.jsx)(n.code,{children:"&str"})," (or borrowing it) is just copying the reference, which is cheap."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);