"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[1650],{2896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(4848),r=t(8453);const s={sidebar_position:2},a="Datatypes",l={id:"python/data_types",title:"Datatypes",description:"Integers",source:"@site/docs/python/data_types.md",sourceDirName:"python",slug:"/python/data_types",permalink:"/docs/python/data_types",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/python/data_types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Variables",permalink:"/docs/python/datatypes_variables"},next:{title:"Sequential Datatypes",permalink:"/docs/python/sequential_datatypes"}},o={},c=[{value:"Integers",id:"integers",level:2},{value:"Binary",id:"binary",level:3},{value:"Octa",id:"octa",level:3},{value:"Hex",id:"hex",level:3},{value:"Convert Hex/Bin/Oct",id:"convert-hexbinoct",level:3},{value:"Float",id:"float",level:2},{value:"Complex",id:"complex",level:2},{value:"Operators",id:"operators",level:3},{value:"Boolean",id:"boolean",level:2},{value:"Type Conversion",id:"type-conversion",level:2},{value:"Determine Datatypes",id:"determine-datatypes",level:2}];function d(e){const n={br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"datatypes",children:"Datatypes"})}),"\n",(0,i.jsx)(n.h2,{id:"integers",children:"Integers"}),"\n",(0,i.jsx)(n.p,{children:"unlike in other programming languages, integer numbers are unlimited in Python"}),"\n",(0,i.jsx)(n.p,{children:"means they can be of any size, however, no number may begin with 0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"very_long = 124039452093423\n\nvery_long *= very_long\n\nprint(very_long)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"binary",children:"Binary"}),"\n",(0,i.jsx)(n.p,{children:"if you want to output/store a binary number you need the 0 or 0b/0B for it\nand then the binaries"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"binarie = 0B101010\n\nprint('prints binaie 0B101010:',binarie)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"octa",children:"Octa"}),"\n",(0,i.jsx)(n.p,{children:"literal for an octa number: 0o/0O\nand then the octa number"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"okta = 0o10\n\nprint('prints okta 0o10:',okta)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"hex",children:"Hex"}),"\n",(0,i.jsx)(n.p,{children:"hexadecimal with: 0x/0X\nand then the hex number"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"hexa = 0x10\n\nprint('prints hexa 0x10',hexa)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"convert-hexbinoct",children:"Convert Hex/Bin/Oct"}),"\n",(0,i.jsx)(n.p,{children:"with the function hex/bin/oct you can convert an integer into a string\nwhich corresponds to the number in the corresponding base\nso for example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = hex(19)\n\ntype(x)\n\nx = bin(65)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"float",children:"Float"}),"\n",(0,i.jsx)(n.p,{children:"numbers like:\n2.34, 27.3453453 or 3,215e2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = 2.34\ny = 3.14e2  # = 3.14*10\xb2\n"})}),"\n",(0,i.jsx)(n.h2,{id:"complex",children:"Complex"}),"\n",(0,i.jsx)(n.p,{children:"the data type complex\ncomplex numbers extend real numbers in such a way that"}),"\n",(0,i.jsxs)(n.p,{children:["the equation x\xb2+1 = 0 becomes solvable\nin mathematics these are often represented as\na + b * ",(0,i.jsx)(n.em,{children:"i"})," where a and b are the real numbers and ",(0,i.jsx)(n.em,{children:"i"})," is the imaginary unit"]}),"\n",(0,i.jsx)(n.p,{children:'in python one uses for the convention of electrical engineering a "j" as imaginary unit'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = 3 + 4j\ny = 2 - 4.5j\n\nx + y   # = (5-0.5j)\n\nx * y   # = (24-5.5j)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"operators",children:"Operators"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Operator"}),(0,i.jsx)(n.th,{children:"Meaning"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x + y"}),(0,i.jsx)(n.td,{children:"sum of x and y"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x - y"}),(0,i.jsx)(n.td,{children:"difference of x and y"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x * y"}),(0,i.jsx)(n.td,{children:"product of x and y"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x / y"}),(0,i.jsx)(n.td,{children:"quotient of x and y"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x // y"}),(0,i.jsx)(n.td,{children:"integer division"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x % y"}),(0,i.jsx)(n.td,{children:"modulo or rest division"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"abs(x)"}),(0,i.jsx)(n.td,{children:"amount from x"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"x ** y"}),(0,i.jsx)(n.td,{children:"raise to the power of x, i.e. x to the power of y"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"with % the rest of an integer division can be determined safely"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"8 % 3\n# 2\n\n9 % 3\n# 0\n\n8.0 % 3\n# 2.0\n"})}),"\n",(0,i.jsx)(n.p,{children:"correlations between the integer and modulo ZeroDivisionError"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = 24\ny = 7\nx == (x // y) * y + (x % y)\n# True\n"})}),"\n",(0,i.jsx)(n.h2,{id:"boolean",children:"Boolean"}),"\n",(0,i.jsx)(n.p,{children:"a boolean can only pass two values True or False i.e. 0 or 1\nIMPORTANT! upper/lower case"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = False\nnot x   # (True)\n\nx = True\nnot x   # (False)\n\ny = False\nx and y # will be false  because only x is true and y is false\n\nx or y # only one of them need to be true\n\n\nx and not y # if x is true and y is false this will return true\n"})}),"\n",(0,i.jsx)(n.h2,{id:"type-conversion",children:"Type Conversion"}),"\n",(0,i.jsx)(n.p,{children:"the conversion of a datatype is called type conversion/cast\ntype conversions are needed when you want to express strings and numeric values:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"string1 = 'abcd'\nstring2 = 'dcba'\nnumber = 123\n\nprint(string1 + ' ' + string2 + '  number: ' + str(number))\n"})}),"\n",(0,i.jsx)(n.p,{children:"here we have specifically converted 'number' to a string using the str function\nif we had not converted the integer to a string before, python would have generated a TypeError:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"print(string1 + ' ' + string2 + '  number: ' + number)\n\n# Traceback (most recent call last):\n#   File \"<stdin>\", line 1, in <module>\n# TypeError: can only concatenate str (not \"int\") to str\n"})}),"\n",(0,i.jsxs)(n.p,{children:["python does not support implicit type conversions as they are possible in php or\nperl,",(0,i.jsx)(n.br,{}),"\n","but there are exceptions, for example; when we mix integer and float values in an\nexpression",(0,i.jsx)(n.br,{}),"\n","there, the integer value was implicitly converted to a float value"]}),"\n",(0,i.jsx)(n.h2,{id:"determine-datatypes",children:"Determine Datatypes"}),"\n",(0,i.jsx)(n.p,{children:"to determine which class it is, you can use the built-in type function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"l = [3, 6, 9]\ntype(l)\n# <class 'list'>\n\nx = 4\ntype(x)\n# <class 'int'>\n\nx = 4.5\ntype(x)\n# <class 'float'>\n\nx = 'string'\ntype(x)\n# <class 'str'>\n"})}),"\n",(0,i.jsx)(n.p,{children:'isinstance(object, ct)\nan alternative to type is: "isinstance" which returns either true or false\nobject is the object to check and ct is the class to check for'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = (3, 6, 9)\nisinstance(x, tuple)\n# True\n"})}),"\n",(0,i.jsx)(n.p,{children:"if you want to find out if it is a variable or an integer you could:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = 4\nisinstance(x, int ) or isinstance(x, float)\n# True\n\nx = 4.8\nisinstance(x, int ) or isinstance(x, float)\n# True\n"})}),"\n",(0,i.jsx)(n.p,{children:"with isinstance, however, this can also be done differently:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-py",children:"x = 4.8\nisinstance(x,(int, float))\n# True\n\nx = (3, 6, 9)\nisinstance(x, (list, tuple))\n# True\n\nisinstance(x, (int, float))\n# False\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);