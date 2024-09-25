"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[6885],{2715:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(4848),i=t(8453);const r={sidebar_position:3},a="Sequential Datatypes",l={id:"python/sequential_datatypes",title:"Sequential Datatypes",description:"In Python, sequential data types are collections that organize and store elements in a specific order.",source:"@site/docs/python/sequential_datatypes.md",sourceDirName:"python",slug:"/python/sequential_datatypes",permalink:"/docs/python/sequential_datatypes",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/python/sequential_datatypes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Datatypes",permalink:"/docs/python/data_types"},next:{title:"Dictionaries",permalink:"/docs/python/dictionaries"}},d={},c=[{value:"Indexing",id:"indexing",level:2},{value:"len Function",id:"len-function",level:2},{value:"Lists",id:"lists",level:2},{value:"Strings",id:"strings",level:2},{value:"subdivision operators",id:"subdivision-operators",level:2},{value:"Tuple",id:"tuple",level:2}];function o(e){const n={admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sequential-datatypes",children:"Sequential Datatypes"})}),"\n",(0,s.jsxs)(n.p,{children:["In Python, sequential data types are collections that organize and store elements in a specific order.",(0,s.jsx)(n.br,{}),"\n","These elements can be accessed and manipulated using indices.",(0,s.jsx)(n.br,{}),"\n","The two primary sequential data types in Python are strings and lists."]}),"\n",(0,s.jsx)(n.h2,{id:"indexing",children:"Indexing"}),"\n",(0,s.jsxs)(n.p,{children:["In Python, the characters of a sequential data type, like a string, are indexed from left to right starting with 0.",(0,s.jsx)(n.br,{}),"\n","When counting from the back (right), you use negative indices, starting with -1.",(0,s.jsx)(n.br,{}),"\n","This indexing convention is implemented using square brackets (",(0,s.jsx)(n.code,{children:"[]"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'>>> text = "Hello World!"\n>>> print(text[0])\nH\n>>> print(text[6])\nW\n\n>>> print(text[-4])\nr\n\n>>> print(text[-1])\n!\n'})}),"\n",(0,s.jsx)(n.p,{children:"This works for all sequential data types, including lists and tuples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> l = [42, 3, [6, 9]]\n>>> l[0]\n42\n>>> l[2]\n[6, 9]\n\n>>> l[2][1]\n9\n\n>>> l[0] = \"new value\"\n>>> l\n['new value', 3, [6, 9]]\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"In Python, tuples are immutable data structures, meaning their elements cannot be changed or modified once the tuple is created. Unlike lists, which allow for item assignments and modifications, tuples offer a fixed and unalterable sequence of elements. This immutability ensures the integrity of the tuple's original values throughout the program's execution."})}),"\n",(0,s.jsx)(n.h2,{id:"len-function",children:"len Function"}),"\n",(0,s.jsx)(n.p,{children:"The len function reproduces the number of elements of a sequential data type"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> string = 'Hello World!'\n>>> len(string)\n12\n\n>>> list = [1, 2, 3, 4, 5, 6, 7]\n>>> len(list)\n7\n"})}),"\n",(0,s.jsx)(n.h2,{id:"lists",children:"Lists"}),"\n",(0,s.jsx)(n.p,{children:"unlike a string, lists consist of a sequence of arbitrary objects\nfor example integer-numbers,float-numbers, strings or again lists"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'>>> x = [3, 6, 9, "der traum ist echt"]\n>>> y = [42, 44, [45, 89], 88]\n'})}),"\n",(0,s.jsx)(n.p,{children:"as you can see lists are generated with the square bracket[] and separated with commas"}),"\n",(0,s.jsx)(n.p,{children:"lists can contain further sub-lists like in example y\nbut also other objects for example tuples and dictionaries"}),"\n",(0,s.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,s.jsx)(n.p,{children:"strings consist of an unchanging sequence of characters"}),"\n",(0,s.jsx)(n.p,{children:"this can be done for example with: '"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"'im a string'\n"})}),"\n",(0,s.jsx)(n.p,{children:'or: "'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'"also a string"\n'})}),"\n",(0,s.jsx)(n.p,{children:"works also \"\"\" or '''"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"'''bli bla blub string \"this works btw\" '''\n"})}),"\n",(0,s.jsx)(n.p,{children:"to create multiline strigns offers: \\"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'>>> s = "string string \\\n  but i go over several lines \\\n  this is the first line \\n\\\n  and this the second"\n>>> print(s)\n'})}),"\n",(0,s.jsx)(n.p,{children:"to create a line feed we use: \\n"}),"\n",(0,s.jsx)(n.p,{children:'an alternative would be to use the """ but here newlines are taken over into the string'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'>>> s = """string string\n  but i go over several lines\n  this is the third line \\\n  i also belong to the third"""\n>>> print(s)\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"//"})}),(0,s.jsx)(n.td,{children:"substitute representation of a backslash"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\'"})}),(0,s.jsx)(n.td,{children:"quotation mark"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'\\"'})}),(0,s.jsx)(n.td,{children:"quotes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\b"})}),(0,s.jsx)(n.td,{children:"backspace"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\f"})}),(0,s.jsx)(n.td,{children:"form feed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\n"})}),(0,s.jsx)(n.td,{children:"line break"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\NNAME"})}),(0,s.jsxs)(n.td,{children:["unicode character name for example: ",(0,s.jsx)(n.code,{children:'print("\\n {GREEK SMALL LETTER PI} ")'}),' prints the greek "pi".']})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\t"})}),(0,s.jsx)(n.td,{children:"horizontal tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\v"})}),(0,s.jsx)(n.td,{children:"vertical tab"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\uXXXX"})}),(0,s.jsx)(n.td,{children:"16-bit-unicode-character"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\uXXXXXXXX"})}),(0,s.jsx)(n.td,{children:"32-bit-unicode-character"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\ooo"})}),(0,s.jsx)(n.td,{children:"ASCII-character okta"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"\\xhh"})}),(0,s.jsx)(n.td,{children:"ASCII-character hexadezimal"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:'sometimes you don\'t want python to express these escape characters\nthis can be done by defining a python string as a "raw" string (r/R)'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> s = \"\\one line\\aandanother one\"\n>>> print(s)\n'one line'\n'andanother one'\n\n>>> s = r\"\\one line\\aandanother one\"\n>>> print(s)\n'\\one line\\aandanother one'\n\n>>> s = R\"\\one line\\aandanother one\"\n>>> print(s)\n'\\one line\\aandanother one'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"subdivision-operators",children:"subdivision operators"}),"\n",(0,s.jsx)(n.p,{children:"As with indexing, the angular clips were used in slicing\nOnly here are at the beginning and end of the value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> txt = 'Hello World'\n>>> txt[1:4]\n'ell'\n>>> txt[0:5]\n'Hello'\n"})}),"\n",(0,s.jsx)(n.p,{children:"you can also leave out the initial or end value"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> txt[:5]\n'Hello'\n\n>>> txt[0:-6]\n'Hello'\n"})}),"\n",(0,s.jsx)(n.p,{children:"of course also works the other way around:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> txt[6:]\n'World'\n"})}),"\n",(0,s.jsx)(n.p,{children:"So it would work with lists:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> liste = [1, 2, 3, 42, 123]\n>>> liste[1:3]\n[2, 3]\n\n>>> liste[2:]\n[3, 42, 123]\n\n>>> liste[:4]\n[1, 2, 3, 42]\n"})}),"\n",(0,s.jsx)(n.p,{children:"the slicing operator also works with 3 arguments\n[Beginning, end, step size]\xb2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> k = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\n>>> k[0:11:3]\n[1, 4, 7, 10]\n\n\n>>> text = 'Python is fun! Hello World!'\n\n>>> text[::3]\n'Ph  nHlWl'\n"})}),"\n",(0,s.jsx)(n.p,{children:"also works:)"}),"\n",(0,s.jsx)(n.p,{children:"works with negative values\nThe meaning of the values changes:\n[End, beginning, negative step size]\nIf no initial and final value has been given, the list with reverse order is issued:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> x = [3, 6, 9, 42, 35]\n>>> x[3:1:-1]\n[42, 9]\n\n>>> x[4:1:-2]\n[35, 9]\n\n>>> l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]\n>>> l[::-1]\n[11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tuple",children:"Tuple"}),"\n",(0,s.jsx)(n.p,{children:"lists and tuples differ only in the way they are parenthesized\nso if we want to use the list example in a tuple notation it looks like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'>>> x = (3, 6, 9, "der traum ist echt")\n>>> y = (42, 44, [45, 89], 88)\n'})}),"\n",(0,s.jsx)(n.p,{children:"The biggest difference is that tuples can no longer be changed!\nso no object can be removed added or changed"}),"\n",(0,s.jsx)(n.p,{children:"the bracket can also be omitted:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> example = 3, 6, 9, \"der traum ist echt\"\n>>> example\n(3, 6, 9, 'der traum ist echt')\n"})}),"\n",(0,s.jsx)(n.p,{children:"multiple assignment\ninstead of one variable name, list as many variable names on the left side of the assignment as the tuple element has"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:">>> minimum, maximum, text = 42, 123, \"der traum ist echt\"\n>>> minimum\n42\n>>> maximum\n123\n>>> text\n'der traum ist echt'\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);