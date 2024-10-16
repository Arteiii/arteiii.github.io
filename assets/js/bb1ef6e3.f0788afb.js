"use strict";(self.webpackChunkarteiii_github_io=self.webpackChunkarteiii_github_io||[]).push([[2873],{7720:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(4848),o=r(8453),s=r(3514);const i={id:"standard-library",title:"Standard Library",sidebar_position:2},a=void 0,c={id:"datatypes/standard-library/standard-library",title:"Standard Library",description:"",source:"@site/rust-cookbook/datatypes/standard-library/index.mdx",sourceDirName:"datatypes/standard-library",slug:"/datatypes/standard-library/",permalink:"/rust-cookbook/datatypes/standard-library/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"standard-library",title:"Standard Library",sidebar_position:2},sidebar:"rustCookbookSidebar",previous:{title:"Tuples",permalink:"/rust-cookbook/datatypes/primitives/compound/tuples"},next:{title:"String",permalink:"/rust-cookbook/datatypes/standard-library/string"}},l={},d=[];function u(t){return(0,n.jsx)(s.A,{})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(u,{...t})}):u()}},3514:(t,e,r)=>{r.d(e,{A:()=>g});r(6540);var n=r(4164),o=r(6972),s=r(8774),i=r(5846),a=r(6654),c=r(1312),l=r(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=r(4848);function m(t){let{href:e,children:r}=t;return(0,u.jsx)(s.A,{href:e,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(t){let{href:e,icon:r,title:o,description:s}=t;return(0,u.jsxs)(m,{href:e,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:o,children:[r," ",o]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function f(t){let{item:e}=t;const r=(0,o.Nr)(e),n=function(){const{selectMessage:t}=(0,i.W)();return e=>t(e,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return r?(0,u.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:e.description??n(e.items.length)}):null}function h(t){let{item:e}=t;const r=(0,a.A)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,o.cC)(e.docId??void 0);return(0,u.jsx)(p,{href:e.href,icon:r,title:e.label,description:e.description??n?.description})}function b(t){let{item:e}=t;switch(e.type){case"link":return(0,u.jsx)(h,{item:e});case"category":return(0,u.jsx)(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function y(t){let{className:e}=t;const r=(0,o.$S)();return(0,u.jsx)(g,{items:r.items,className:e})}function g(t){const{items:e,className:r}=t;if(!e)return(0,u.jsx)(y,{...t});const s=(0,o.d1)(e);return(0,u.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((t,e)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(b,{item:t})},e)))})}},5846:(t,e,r)=>{r.d(e,{W:()=>l});var n=r(6540),o=r(4586);const s=["zero","one","two","few","many","other"];function i(t){return s.filter((e=>t.includes(e)))}const a={locale:"en",pluralForms:i(["one","other"]),select:t=>1===t?"one":"other"};function c(){const{i18n:{currentLocale:t}}=(0,o.A)();return(0,n.useMemo)((()=>{try{return function(t){const e=new Intl.PluralRules(t);return{locale:t,pluralForms:i(e.resolvedOptions().pluralCategories),select:t=>e.select(t)}}(t)}catch(e){return console.error(`Failed to use Intl.PluralRules for locale "${t}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${e.message}\n`),a}}),[t])}function l(){const t=c();return{selectMessage:(e,r)=>function(t,e,r){const n=t.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${t}`);const o=r.select(e),s=r.pluralForms.indexOf(o);return n[Math.min(s,n.length-1)]}(r,e,t)}}},8453:(t,e,r)=>{r.d(e,{R:()=>i,x:()=>a});var n=r(6540);const o={},s=n.createContext(o);function i(t){const e=n.useContext(s);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),n.createElement(s.Provider,{value:e},t.children)}}}]);