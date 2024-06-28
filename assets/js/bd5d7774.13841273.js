"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[4065],{8832:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(4848),s=n(8453);const r={title:"Variable Types",sidebar_position:2},o="How to Use Programming Variable Types in C",a={id:"tutorials/intro-to-C/c02-types",title:"Variable Types",description:"Types help define and determine the size of data. It is usually placed in front of a variable to declare its type and data size. Some types that are commonly used in C programming are",source:"@site/docs/tutorials/intro-to-C/c02-types.md",sourceDirName:"tutorials/intro-to-C",slug:"/tutorials/intro-to-C/c02-types",permalink:"/docs/tutorials/intro-to-C/c02-types",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/intro-to-C/c02-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Variable Types",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction to C With Arduino",permalink:"/docs/tutorials/intro-to-C/c01-beginning"},next:{title:"Literals",permalink:"/docs/tutorials/intro-to-C/c03-literals"}},l={},d=[{value:"Type int Size Specifiers",id:"type-int-size-specifiers",level:2},{value:"Type Double Size Specifier",id:"type-double-size-specifier",level:2},{value:"Type Modifiers",id:"type-modifiers",level:2}];function c(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"how-to-use-programming-variable-types-in-c",children:"How to Use Programming Variable Types in C"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Types help define and determine the size of data"}),". It is usually placed in front of a variable to declare its type and data size. Some types that are commonly used in C programming are"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Types"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"int"}),(0,t.jsxs)(i.td,{children:["Occupies ",(0,t.jsx)(i.strong,{children:"4 bytes"})," and can store an integer like, 0, -5, -20 and 40"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"char"}),(0,t.jsxs)(i.td,{children:["Occupies ",(0,t.jsx)(i.strong,{children:"1 byte"})," and can hold a small integer value, a single character or a single symbol"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"float"}),(0,t.jsxs)(i.td,{children:["Occupies ",(0,t.jsx)(i.strong,{children:"4 bytes"})," and is able to store a single-precision (usually 7 decimal digits), floating-point number"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"double"}),(0,t.jsxs)(i.td,{children:["Occupies ",(0,t.jsx)(i.strong,{children:"8 bytes"})," and stores a double-precision (doubly the bytes for a single-precision number), floating-point number"]})]})]})]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsxs)(i.strong,{children:["Try using ",(0,t.jsx)(i.em,{children:"float"})," to write a character"]})}),"\n",(0,t.jsx)(i.p,{children:"If you try using float instead of char on a word like \u201cschool\u201d, it will return as an error. Enter the following entries to see which is and isn\u2019t a valid entry:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"int school = fun;"}),"\n",(0,t.jsx)(i.li,{children:"char age = \u2018a\u2019;"}),"\n",(0,t.jsx)(i.li,{children:"float year = 201.5;"}),"\n",(0,t.jsx)(i.li,{children:"float age = 19"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:'int myAge = 16;\r\nfloat momAge = "school";\r\nvoid setup(){\r\n    int myAge = 21;\r\n    Serial.begin(9600);\r\n    Serial.println(myAge);\r\n    Serial.println(momAge);\r\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"NOTE: sometimes the output will be different from the input. This means it is an error."}),"\r\n",(0,t.jsx)(i.em,{children:"(Eg: float age = \u2018a\u2019 will return 97.00. This means that the wrong type is used.)"})]}),"\n",(0,t.jsx)(i.h1,{id:"what-are-size-specifiers",children:"What are Size Specifiers?"}),"\n",(0,t.jsx)(i.p,{children:"Size specifiers are used to adjust the size of an int and double to fit in larger or smaller variables."}),"\n",(0,t.jsx)(i.h2,{id:"type-int-size-specifiers",children:"Type int Size Specifiers"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A short int contains a minimum of 16 bits which is the same size as a regular int"}),"\n",(0,t.jsx)(i.li,{children:"A long int contains 32 bits"}),"\n",(0,t.jsx)(i.li,{children:"A long long int contains 64 bits."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(125).A+"",width:"480",height:"284"})}),"\n",(0,t.jsx)(i.h2,{id:"type-double-size-specifier",children:"Type Double Size Specifier"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A long double contains typically 64 bits which is the same size as a regular double."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"type-modifiers",children:"Type Modifiers"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["To alter the data storage of type you can also use type modifiers: ",(0,t.jsx)(i.strong,{children:"signed"})," and ",(0,t.jsx)(i.strong,{children:"unsigned"}),"."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Signed"})," is a 32-bit type modifier that can contain any integer from -2147483648 to 2147483648"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Unsigned"})," is also a 32-bit type modifier but can only store a nonnegative integer from 0 to 4294967295."]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"int myAge = 327698545;\r\nlong int yourAge = 327698545;\r\nvoid setup(){\r\n    Serial.begin(9600);\r\n    Serial.println(myAge);\r\n    Serial.println(yourAge);\r\n}\r\nvoid loop(){\r\n    \r\n}\n"})}),"\n",(0,t.jsx)(i.p,{children:"As shown in the picture above, when a number is bigger than what a type can hold it prints out a different number. When 327698545 was assigned to int it was unable to print the same number. When we added the long in front it was able to print out the number."}),"\n",(0,t.jsx)(i.h1,{id:"try-it-yourself",children:"TRY IT YOURSELF"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Use signed and unsigned to see the limit and difference between the 2 keywords."}),"\n",(0,t.jsx)(i.li,{children:"Use different types and size specifiers to see which one can hold \u201c9,223,372,036,854,775,807\u201d."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},125:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/guide2_01-104d0a774c3b6a6bfab394ac5d101a49.png"},8453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(6540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);