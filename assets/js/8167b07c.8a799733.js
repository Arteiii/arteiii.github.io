"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[95],{2629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>D,contentTitle:()=>M,default:()=>H,frontMatter:()=>A,metadata:()=>S,toc:()=>q});var s=t(4848),i=t(8453);const r=t.p+"assets/images/Website-Social-Card-b197809f9d4fc9940657c8f2c93a476a.jpeg";var a=t(6540),l=t(4164),o=t(3104),h=t(6347),d=t(205),c=t(7485),u=t(1682),x=t(679);function m(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:i}}=e;return{value:n,label:t,attributes:s,default:i}}))}(t);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,h.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=p(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[o,h]=b({queryString:t,groupId:s}),[c,u]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,x.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=o??c;return j({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),u(e)}),[h,u,i]),tabValues:i}}var f=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:n,block:t,selectedValue:i,selectValue:r,tabValues:a}=e;const h=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const n=e.currentTarget,t=h.indexOf(n),s=a[t].value;s!==i&&(d(n),r(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;n=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;n=h[t]??h[h.length-1];break}}n?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>h.push(e),onKeyDown:u,onClick:c,...r,className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=g(e);return(0,s.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,s.jsx)(w,{...n,...e}),(0,s.jsx)(y,{...n,...e})]})}function T(e){const n=(0,f.A)();return(0,s.jsx)(k,{...e,children:m(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function C(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.A)(I.tabItem,i),hidden:t,children:n})}const A={slug:"MarkDown",title:"MarkDown Intro",authors:["evantay","arteii"],keywords:["Markdown","MDX","Docusaurus"],date:"2023-07-02T18:00"},M=void 0,S={permalink:"/blog/MarkDown",editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/blog/markdown_intro/markdown_intro.mdx",source:"@site/blog/markdown_intro/markdown_intro.mdx",title:"MarkDown Intro",description:"just a short intro to markdown and mdx",date:"2023-07-02T18:00:00.000Z",tags:[],readingTime:2.5566666666666666,hasTruncateMarker:!0,authors:[{name:"Evan Tay",title:"Final year Computer Science major at NUS",url:"https://github.com/DigiPie",imageURL:"https://avatars2.githubusercontent.com/u/13582874",key:"evantay",page:null},{name:"Arteii",page:{permalink:"/blog/authors/arteii"},title:"Student",url:"https://github.com/arteiii",socials:{github:"https://github.com/arteiii"},imageURL:"https://avatars.githubusercontent.com/u/48642527",key:"arteii"}],frontMatter:{slug:"MarkDown",title:"MarkDown Intro",authors:["evantay","arteii"],keywords:["Markdown","MDX","Docusaurus"],date:"2023-07-02T18:00"},unlisted:!1,prevItem:{title:"Django101 Hello World!",permalink:"/blog/django101"}},D={authorsImageUrls:[void 0,void 0]},q=[{value:"Headers",id:"headers",level:2},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",level:2},{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",level:3},{value:"H4 - Create the best documentation",id:"h4---create-the-best-documentation",level:4},{value:"H5 - Create the best documentation",id:"h5---create-the-best-documentation",level:5},{value:"H6 - Create the best documentation",id:"h6---create-the-best-documentation",level:6},{value:"Emphasis",id:"emphasis",level:2},{value:"Lists",id:"lists",level:2},{value:"Links",id:"links",level:2},{value:"Images",id:"images",level:2},{value:"Code",id:"code",level:2},{value:"Tables",id:"tables",level:2},{value:"Blockquotes",id:"blockquotes",level:2},{value:"Inline HTML",id:"inline-html",level:2},{value:"Line Breaks",id:"line-breaks",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"MDX",id:"mdx",level:2},{value:"Tabs",id:"tabs",level:3}];function L(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"just a short intro to markdown and mdx\nfor docusaurus or different tools / websites"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["You can write content using ",(0,s.jsx)(n.a,{href:"https://github.github.com/gfm/",children:"GitHub-flavored Markdown syntax"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To serve as an example page when styling markdown based Docusaurus sites."}),"\n",(0,s.jsx)(n.h2,{id:"headers",children:"Headers"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h1,{id:"h1---create-the-best-documentation",children:"H1 - Create the best documentation"}),"\n",(0,s.jsx)(n.h2,{id:"h2---create-the-best-documentation",children:"H2 - Create the best documentation"}),"\n",(0,s.jsx)(n.h3,{id:"h3---create-the-best-documentation",children:"H3 - Create the best documentation"}),"\n",(0,s.jsx)(n.h4,{id:"h4---create-the-best-documentation",children:"H4 - Create the best documentation"}),"\n",(0,s.jsx)(n.h5,{id:"h5---create-the-best-documentation",children:"H5 - Create the best documentation"}),"\n",(0,s.jsx)(n.h6,{id:"h6---create-the-best-documentation",children:"H6 - Create the best documentation"}),"\n",(0,s.jsx)(n.h2,{id:"emphasis",children:"Emphasis"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.p,{children:["Emphasis, aka italics, with ",(0,s.jsx)(n.em,{children:"asterisks"})," or ",(0,s.jsx)(n.em,{children:"underscores"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Strong emphasis, aka bold, with ",(0,s.jsx)(n.strong,{children:"asterisks"})," or ",(0,s.jsx)(n.strong,{children:"underscores"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Combined emphasis with ",(0,s.jsxs)(n.strong,{children:["asterisks and ",(0,s.jsx)(n.em,{children:"underscores"})]}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Strikethrough uses two tildes. ",(0,s.jsx)(n.del,{children:"Scratch this."})]}),"\n",(0,s.jsx)(n.h2,{id:"lists",children:"Lists"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"First ordered list item"}),"\n",(0,s.jsx)(n.li,{children:"Another item"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unordered sub-list."}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Actual numbers don't matter, just that it's a number"}),"\n",(0,s.jsx)(n.li,{children:"Ordered sub-list"}),"\n",(0,s.jsx)(n.li,{children:"And another item."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unordered list can use asterisks"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Or minuses"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Or pluses"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.google.com/",children:"I'm an inline-style link"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.google.com/",title:"Google's Homepage",children:"I'm an inline-style link with title"})}),"\n",(0,s.jsx)(n.p,{children:"[I'm a reference-style link][arbitrary case-insensitive reference text]"}),"\n",(0,s.jsx)(n.p,{children:"[You can use numbers for reference-style link definitions][1]"}),"\n",(0,s.jsx)(n.p,{children:"Or leave it empty and use the [link text itself]."}),"\n",(0,s.jsxs)(n.p,{children:["URLs and URLs in angle brackets will automatically get turned into links. ",(0,s.jsx)(n.a,{href:"http://www.example.com/",children:"http://www.example.com/"})," or ",(0,s.jsx)(n.a,{href:"http://www.example.com/",children:"http://www.example.com/"})," and sometimes example.com (but not on GitHub, for example)."]}),"\n",(0,s.jsx)(n.p,{children:"Some text to show that the reference links can follow later."}),"\n",(0,s.jsxs)(n.p,{children:["[arbitrary case-insensitive reference text]  ",(0,s.jsx)(n.a,{href:"https://www.mozilla.org/",children:"https://www.mozilla.org/"}),"\n[1]  ",(0,s.jsx)(n.a,{href:"http://slashdot.org/",children:"http://slashdot.org/"}),"\n[link text itself]  ",(0,s.jsx)(n.a,{href:"http://www.reddit.com/",children:"http://www.reddit.com/"})]}),"\n",(0,s.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"you can import assets and use them like this: (only if you use mdx)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import myImageUrl from "../../static/img/Website-Social-Card.jpeg";\n\n<img src={myImageUrl} width={250} height={250} alt="Example banner" />;\n'})}),"\n","\n",(0,s.jsx)("img",{src:r,width:250,height:250,alt:"Example banner"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Inline-style:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://arteiii.github.io/img/Website-Social-Card.jpeg",alt:"alt text",title:"Logo Title Text 1"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Reference-style: ![alt text][logo]"}),"\n",(0,s.jsxs)(n.p,{children:["[logo]  ",(0,s.jsx)(n.a,{href:"https://arteiii.github.io/img/Website-Social-Card.jpeg",children:"https://arteiii.github.io/img/Website-Social-Card.jpeg"}),' "Logo Title Text 2"']}),"\n",(0,s.jsx)(n.p,{children:"Images from any folder can be used by providing path to file. Path should be relative to markdown file."}),"\n",(0,s.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'var s = "JavaScript syntax highlighting";\nalert(s);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'s = "Python syntax highlighting"\nprint(s)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:"{2}",children:'var highlightMe = function (){\n  console.log("This line can be highlighted!");\n};\n'})}),"\n",(0,s.jsx)(n.p,{children:"you can also set titles"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'```python title="example title"\ns = "Python syntax highligh...\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",metastring:'title="example title"',children:'s = "Python syntax highlighting"\nprint(s)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tables",children:"Tables"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Colons can be used to align columns."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tables"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Are"}),(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Cool"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"col 3 is"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"right-aligned"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"$1600"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"col 2 is"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"centered"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"$12"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zebra stripes"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"are neat"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"$1"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Markdown"}),(0,s.jsx)(n.th,{children:"Less"}),(0,s.jsx)(n.th,{children:"Pretty"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Still"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"renders"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"nicely"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"blockquotes",children:"Blockquotes"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Blockquotes are very handy in email to emulate reply text. This line is part of the same quote."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Quote break."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ",(0,s.jsx)(n.em,{children:"put"})," ",(0,s.jsx)(n.strong,{children:"Markdown"})," into a blockquote."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"inline-html",children:"Inline HTML"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)("dl",{children:[(0,s.jsx)("dt",{children:"Definition list"}),(0,s.jsx)("dd",{children:"Is something people use sometimes."}),(0,s.jsx)("dt",{children:"Markdown in HTML"}),(0,s.jsxs)("dd",{children:["Does ",(0,s.jsx)(n.em,{children:"not"})," work ",(0,s.jsx)(n.strong,{children:"very"})," well. Use HTML ",(0,s.jsx)("em",{children:"tags"}),"."]})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"line-breaks",children:"Line Breaks"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Here's a line for us to start with."}),"\n",(0,s.jsxs)(n.p,{children:["This line is separated from the one above by two newlines, so it will be a ",(0,s.jsx)(n.em,{children:"separate paragraph"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the ",(0,s.jsx)(n.em,{children:"same paragraph"}),"."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.h2,{id:"admonitions",children:"Admonitions"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This is a note"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"This is a tip"})}),"\n",(0,s.jsx)(n.admonition,{type:"important",children:(0,s.jsx)(n.p,{children:"This is important"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"This is a caution"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This is a warning"})}),"\n",(0,s.jsx)(n.h2,{id:"mdx",children:"MDX"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"lets you use jsx in markdown"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://mdxjs.com/",children:"read more"})}),"\n",(0,s.jsx)(n.h3,{id:"tabs",children:"Tabs"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://docusaurus.io/docs/markdown-features/tabs",children:(0,s.jsx)(n.strong,{children:"read docu"})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mdx",children:'import Tabs from "@theme/Tabs";\nimport TabItem from "@theme/TabItem";\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'})}),"\n",(0,s.jsxs)(T,{children:[(0,s.jsx)(C,{value:"apple",label:"Apple",default:!0,children:(0,s.jsx)(n.p,{children:"This is an apple \ud83c\udf4e"})}),(0,s.jsx)(C,{value:"orange",label:"Orange",children:(0,s.jsx)(n.p,{children:"This is an orange \ud83c\udf4a"})}),(0,s.jsx)(C,{value:"banana",label:"Banana",children:(0,s.jsx)(n.p,{children:"This is a banana \ud83c\udf4c"})})]})]})}function H(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(L,{...e})}):L(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var s=t(6540);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);