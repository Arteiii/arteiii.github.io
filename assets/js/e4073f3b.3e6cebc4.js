"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[7835],{7409:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=n(4848),s=n(8453);const l={id:"booleans",title:"Booleans",sidebar_position:3,description:"bool"},a=void 0,o={id:"datatypes/primitives/scalar/booleans",title:"Booleans",description:"bool",source:"@site/rust-cookbook/datatypes/primitives/scalar/booleans.md",sourceDirName:"datatypes/primitives/scalar",slug:"/datatypes/primitives/scalar/booleans",permalink:"/rust-cookbook/datatypes/primitives/scalar/booleans",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"booleans",title:"Booleans",sidebar_position:3,description:"bool"},sidebar:"rustCookbookSidebar",previous:{title:"Scalar",permalink:"/rust-cookbook/datatypes/primitives/scalar/"},next:{title:"Compound",permalink:"/rust-cookbook/datatypes/primitives/compound/"}},r={},d=[{value:"Example:",id:"example",level:3},{value:"Why Rust Booleans Use 1 Byte",id:"why-rust-booleans-use-1-byte",level:2},{value:"Reducing Memory Usage with Bit Packing",id:"reducing-memory-usage-with-bit-packing",level:2},{value:"Bit Fields in Rust Using the <code>bitfield</code> Crate",id:"bit-fields-in-rust-using-the-bitfield-crate",level:2},{value:"Installing the <code>bitfield</code> Crate",id:"installing-the-bitfield-crate",level:3},{value:"Example: Defining a Bit Field with the <code>bitfield</code> Crate",id:"example-defining-a-bit-field-with-the-bitfield-crate",level:3},{value:"Explanation:",id:"explanation",level:3},{value:"Manual Bit Manipulation in Rust",id:"manual-bit-manipulation-in-rust",level:2},{value:"Example: Packing Booleans into a Single Byte",id:"example-packing-booleans-into-a-single-byte",level:3}];function c(e){const i={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["A ",(0,t.jsx)(i.strong,{children:"boolean"})," in Rust is represented by the ",(0,t.jsx)(i.code,{children:"bool"})," type and can only have two possible values: ",(0,t.jsx)(i.code,{children:"true"})," or ",(0,t.jsx)(i.code,{children:"false"}),". At a\nconceptual level, a boolean only needs 1 bit of memory, since it can represent two states (1 or 0, true or false).\nHowever, modern CPUs operate more efficiently when data is aligned to byte boundaries, so Rust chooses to store each\n",(0,t.jsx)(i.code,{children:"bool"})," as ",(0,t.jsx)(i.strong,{children:"1 byte"})," (8 bits) instead of just 1 bit."]}),"\n",(0,t.jsx)(i.h3,{id:"example",children:"Example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:'fn main() {\n    let flag: bool = true;\n    let other_flag: bool = false;\n\n    println!("flag: {}, other_flag: {}", flag, other_flag);\n}\n'})}),"\n",(0,t.jsx)(i.h2,{id:"why-rust-booleans-use-1-byte",children:"Why Rust Booleans Use 1 Byte"}),"\n",(0,t.jsx)(i.p,{children:"While it might seem wasteful to use 1 byte for something that only needs 1 bit, there are important reasons why Rust (\nand many other modern languages) make this choice:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Memory Alignment"}),": CPUs are optimized to read data in chunks of bytes (often 8, 16, or 32 bits at a time). If Rust\nstored booleans as individual bits, it would complicate memory access, leading to slower performance when reading and\nwriting values."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Performance"}),": Storing booleans as 1 byte allows direct access to the data without additional overhead. If Rust were\nto pack multiple booleans into a smaller space, it would need extra bitwise operations to access individual values,\nwhich could degrade performance."]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Atomic Operations and Safety"}),": In multi-threaded programs, operations on ",(0,t.jsx)(i.code,{children:"bool"})," values might need to be atomic (\nnon-interruptible by other threads). Atomic operations are typically only possible on byte or word-aligned values, so\nstoring ",(0,t.jsx)(i.code,{children:"bool"})," as a byte allows for safe concurrent access."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"reducing-memory-usage-with-bit-packing",children:"Reducing Memory Usage with Bit Packing"}),"\n",(0,t.jsxs)(i.p,{children:["When working with a large number of boolean values or flags, storing each ",(0,t.jsx)(i.code,{children:"bool"})," as a full byte can indeed lead to\nmemory inefficiency. For example, if you need to store 100 boolean flags, using Rust\u2019s ",(0,t.jsx)(i.code,{children:"bool"})," type would consume 100\nbytes of memory, even though 100 booleans could theoretically fit in just 13 bytes (100 bits)."]}),"\n",(0,t.jsxs)(i.p,{children:["To solve this, you can manually ",(0,t.jsx)(i.strong,{children:"pack multiple booleans into a single byte"})," or use crates designed for this purpose,\nsuch as the ",(0,t.jsx)(i.code,{children:"bitfield"})," crate."]}),"\n",(0,t.jsxs)(i.h2,{id:"bit-fields-in-rust-using-the-bitfield-crate",children:["Bit Fields in Rust Using the ",(0,t.jsx)(i.code,{children:"bitfield"})," Crate"]}),"\n",(0,t.jsxs)(i.p,{children:["While Rust does not natively support C-style bit fields, where you can define specific numbers of bits for different\nfields in a struct, you can achieve similar functionality using third-party crates like ",(0,t.jsx)(i.code,{children:"bitfield"}),"."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"bitfield"})," crate allows you to define structures where individual bits or groups of bits can be packed together.\nThis helps you save memory by storing multiple booleans or small integers in the same underlying storage, such as a\n",(0,t.jsx)(i.code,{children:"u8"})," (8 bits), ",(0,t.jsx)(i.code,{children:"u16"})," (16 bits), or larger integer types."]}),"\n",(0,t.jsxs)(i.h3,{id:"installing-the-bitfield-crate",children:["Installing the ",(0,t.jsx)(i.code,{children:"bitfield"})," Crate"]}),"\n",(0,t.jsxs)(i.p,{children:["To use the ",(0,t.jsx)(i.code,{children:"bitfield"})," crate, you first need to add it to your ",(0,t.jsx)(i.code,{children:"Cargo.toml"})," file:"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-toml",children:'[dependencies]\nbitfield = "0.13.2"\n'})}),"\n",(0,t.jsx)(i.p,{children:"Once the crate is added, you can use it to create bit-packed structures."}),"\n",(0,t.jsxs)(i.h3,{id:"example-defining-a-bit-field-with-the-bitfield-crate",children:["Example: Defining a Bit Field with the ",(0,t.jsx)(i.code,{children:"bitfield"})," Crate"]}),"\n",(0,t.jsxs)(i.p,{children:["Let\u2019s create a structure where we store multiple flags (booleans) and small integer values within a single byte (",(0,t.jsx)(i.code,{children:"u8"}),")."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:'use bitfield::bitfield;\n\n// Define a structure that holds multiple fields packed into a single byte\nbitfield! {\n    struct Flags(u8);     // We use a single u8 (8 bits) to store all fields\n    impl Debug;\n    u8;                   // Data type of each field\n    flag1, set_flag1: 0;   // 1-bit field at position 0\n    flag2, set_flag2: 1;   // 1-bit field at position 1\n    field3, set_field3: 3, 2;  // 2-bit field spanning positions 2 and 3\n    field4, set_field4: 7, 4;  // 4-bit field spanning positions 4 to 7\n}\n\nfn main() {\n    let mut flags = Flags(0);  // Initialize with all bits set to 0\n\n    // Set the first flag (1st bit)\n    flags.set_flag1(true);\n\n    // Set the 2-bit field to 3 (binary 11, occupies bits 2 and 3)\n    flags.set_field3(3);\n\n    // Set the 4-bit field to 12 (binary 1100, occupies bits 4 to 7)\n    flags.set_field4(12);\n\n    println!("{:?}", flags);  // Output: Flags(205)\n}\n'})}),"\n",(0,t.jsx)(i.h3,{id:"explanation",children:"Explanation:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["We use the ",(0,t.jsx)(i.code,{children:"bitfield!"})," macro to define a struct named ",(0,t.jsx)(i.code,{children:"Flags"}),", which uses a single ",(0,t.jsx)(i.code,{children:"u8"})," (8 bits) for storage."]}),"\n",(0,t.jsxs)(i.li,{children:["We define individual flags and fields within this byte:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"flag1"}),": 1 bit at position 0."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"flag2"}),": 1 bit at position 1."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"field3"}),": A 2-bit field at positions 2 and 3."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"field4"}),": A 4-bit field at positions 4 to 7."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["By using this structure, you can pack multiple boolean flags and small integer fields into a single byte, significantly\nreducing memory usage compared to using standalone ",(0,t.jsx)(i.code,{children:"bool"})," values."]}),"\n",(0,t.jsx)(i.h2,{id:"manual-bit-manipulation-in-rust",children:"Manual Bit Manipulation in Rust"}),"\n",(0,t.jsx)(i.p,{children:"If you prefer not to use an external crate, you can achieve similar bit-packing behavior by manually manipulating bits\nusing bitwise operations."}),"\n",(0,t.jsx)(i.h3,{id:"example-packing-booleans-into-a-single-byte",children:"Example: Packing Booleans into a Single Byte"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-rust",children:'struct PackedFlags {\n    bits: u8,  // 8 bits to store multiple flags\n}\n\nimpl PackedFlags {\n    fn new() -> Self {\n        PackedFlags { bits: 0 }\n    }\n\n    fn set_flag(&mut self, position: u8, value: bool) {\n        if value {\n            self.bits |= 1 << position;  // Set the bit at the given position to 1\n        } else {\n            self.bits &= !(1 << position);  // Set the bit at the given position to 0\n        }\n    }\n\n    fn get_flag(&self, position: u8) -> bool {\n        (self.bits >> position) & 1 == 1  // Check if the bit at the given position is 1\n    }\n}\n\nfn main() {\n    let mut flags = PackedFlags::new();\n\n    // Set the first flag (bit 0)\n    flags.set_flag(0, true);\n\n    // Set the second flag (bit 1)\n    flags.set_flag(1, true);\n\n    // Unset the first flag (bit 0)\n    flags.set_flag(0, false);\n\n    println!("Flag 0: {}", flags.get_flag(0));  // Output: false\n    println!("Flag 1: {}", flags.get_flag(1));  // Output: true\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["This example demonstrates how you can pack and manipulate multiple boolean flags within a single byte using bitwise\nshifts (",(0,t.jsx)(i.code,{children:"<<"}),", ",(0,t.jsx)(i.code,{children:">>"}),") and bitwise operations (",(0,t.jsx)(i.code,{children:"|"}),", ",(0,t.jsx)(i.code,{children:"&"}),", ",(0,t.jsx)(i.code,{children:"~"}),")."]})]})}function u(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(6540);const s={},l=t.createContext(s);function a(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);