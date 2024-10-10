"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[984],{4823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var r=n(4848),s=n(8453),i=n(3514);const o={id:"cheatsheet",sidebar_label:"CheatSheet",sidebar_position:6},c="CheatSheet",a={id:"cheatsheets/cheatsheet",title:"CheatSheet",description:"For Personal Reference Only",source:"@site/docs/cheatsheets/index.mdx",sourceDirName:"cheatsheets",slug:"/cheatsheets/",permalink:"/docs/cheatsheets/",draft:!1,unlisted:!1,editUrl:"https://github.com/arteiii/arteiii.github.io/tree/main/docs/cheatsheets/index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"cheatsheet",sidebar_label:"CheatSheet",sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Exception Handling",permalink:"/docs/windows/kernel/exception_handling"},next:{title:"Assembly",permalink:"/docs/cheatsheets/Assembly/"}},l={},h=[{value:"For Personal Reference Only",id:"for-personal-reference-only",level:2},{value:"Content",id:"content",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"cheatsheet",children:"CheatSheet"})}),"\n",(0,r.jsx)(t.h2,{id:"for-personal-reference-only",children:"For Personal Reference Only"}),"\n",(0,r.jsx)(t.p,{children:"This CheatSheet section is primarily a personal reference compiled for my convenience.\nIt may not be entirely self-made, and I acknowledge that some content is sourced from external resources.\nThe intention behind creating this CheatSheet is to have a quick, accessible reminder of concepts and information that I tend to forget."}),"\n",(0,r.jsx)(t.h2,{id:"content",children:"Content"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>b});n(6540);var r=n(4164),s=n(6972),i=n(8774),o=n(5846),c=n(6654),a=n(1312),l=n(1107);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",h.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",h.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",h.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),s=n(4586);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);