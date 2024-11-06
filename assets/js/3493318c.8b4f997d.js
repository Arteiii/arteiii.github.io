"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[2429],{6101:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=r(4848),c=r(8453);const a={id:"character",title:"Character",sidebar_position:4,description:"char"},t=void 0,i={id:"datatypes/primitives/scalar/character",title:"Character",description:"char",source:"@site/rust-cookbook/datatypes/primitives/scalar/character.md",sourceDirName:"datatypes/primitives/scalar",slug:"/datatypes/primitives/scalar/character",permalink:"/rust-cookbook/datatypes/primitives/scalar/character",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"character",title:"Character",sidebar_position:4,description:"char"},sidebar:"rustCookbookSidebar",previous:{title:"Booleans",permalink:"/rust-cookbook/datatypes/primitives/scalar/booleans"},next:{title:"Compound",permalink:"/rust-cookbook/datatypes/primitives/compound/"}},o={},l=[{value:"Creating and Using\xa0<code>char</code>",id:"creating-and-usingchar",level:2},{value:"Working with\xa0<code>char</code>",id:"working-withchar",level:2},{value:"<code>char</code>\xa0and Strings",id:"charand-strings",level:2},{value:"Example: Checking for Whitespace",id:"example-checking-for-whitespace",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["In Rust, the ",(0,s.jsx)(n.code,{children:"char"})," type represents a single Unicode scalar value, which means it can store more than just ASCII\ncharacters. Unlike many programming languages where a ",(0,s.jsx)(n.code,{children:"char"})," is a byte (8 bits), Rust's ",(0,s.jsx)(n.code,{children:"char"})," is a 32-bit (4 bytes)\nvalue, allowing it to represent any valid Unicode character, from simple letters to complex symbols and emojis."]}),"\n",(0,s.jsxs)(n.h2,{id:"creating-and-usingchar",children:["Creating and Using\xa0",(0,s.jsx)(n.code,{children:"char"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can create a ",(0,s.jsx)(n.code,{children:"char"})," using single quotes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let letter: char = 'A';\nlet emoji: char = '\ud83d\ude0a';\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Rust ensures that each ",(0,s.jsx)(n.code,{children:"char"})," contains exactly one valid Unicode character. It's important to note that a ",(0,s.jsx)(n.code,{children:"char"})," does\nnot equate to a single byte (like in UTF-8), but to a Unicode scalar, which might occupy multiple bytes when encoded."]}),"\n",(0,s.jsxs)(n.h2,{id:"working-withchar",children:["Working with\xa0",(0,s.jsx)(n.code,{children:"char"})]}),"\n",(0,s.jsxs)(n.p,{children:["You can perform various operations on ",(0,s.jsx)(n.code,{children:"char"})," values in Rust. Here are a few common ones:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Checking Character Properties"}),":\nRust provides many methods to check properties of ",(0,s.jsx)(n.code,{children:"char"})," values, such as whether they are alphabetic, numeric,\nuppercase, etc."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let c: char = \'A\';\nprintln!("{}", c.is_alphabetic()); // true\nprintln!("{}", c.is_numeric());    // false\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Converting Between Cases"}),":\nYou can easily convert characters between uppercase and lowercase using ",(0,s.jsx)(n.code,{children:".to_lowercase()"})," or ",(0,s.jsx)(n.code,{children:".to_uppercase()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let lower: char = 'a';\nlet upper = lower.to_uppercase().next().unwrap(); // 'A'\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Escape Sequences"}),":\nSpecial characters (like newline or tab) can be represented using escape sequences:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"let newline: char = '\\n';\nlet tab: char = '\\t';\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Iterating Over a String"}),":\nSince Rust strings (",(0,s.jsx)(n.code,{children:"&str"}),") are sequences of Unicode scalar values, you can iterate over them as a sequence of ",(0,s.jsx)(n.code,{children:"char"}),"\nvalues:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'let word = "hello";\nfor ch in word.chars() {\n    println!("{}", ch);\n}\n// Output: h e l l o\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"charand-strings",children:[(0,s.jsx)(n.code,{children:"char"}),"\xa0and Strings"]}),"\n",(0,s.jsxs)(n.p,{children:["While ",(0,s.jsx)(n.code,{children:"char"})," represents a single Unicode scalar value, a string in Rust (",(0,s.jsx)(n.code,{children:"String"})," or ",(0,s.jsx)(n.code,{children:"&str"}),") is a collection of these\ncharacters, encoded in UTF-8. If you need to extract or manipulate individual characters from a string, the ",(0,s.jsx)(n.code,{children:"chars()"}),"\nmethod can be used, as shown above."]}),"\n",(0,s.jsx)(n.h2,{id:"example-checking-for-whitespace",children:"Example: Checking for Whitespace"}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"char"})," to inspect whether a string contains specific types of characters like whitespace:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'fn contains_whitespace(s: &str) -> bool {\n    s.chars().any(|c| c.is_whitespace())\n}\n\nlet sentence = "Hello, World!";\nprintln!("{}", contains_whitespace(sentence)); // true\n'})})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(6540);const c={},a=s.createContext(c);function t(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);