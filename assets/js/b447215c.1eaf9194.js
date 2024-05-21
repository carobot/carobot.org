"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[9117],{627:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=t(4848),s=t(8453);const i={title:"Programming Operators",sidebar_position:4},d="How to Use Programming Operators in C",l={id:"tutorials/intro-to-C/c04-operator",title:"Programming Operators",description:"Operators are symbols that carry out a specific function. For example '*' multiplies two numbers.",source:"@site/docs/tutorials/intro-to-C/c04-operator.md",sourceDirName:"tutorials/intro-to-C",slug:"/tutorials/intro-to-C/c04-operator",permalink:"/docs/tutorials/intro-to-C/c04-operator",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/intro-to-C/c04-operator.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Programming Operators",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Literals",permalink:"/docs/tutorials/intro-to-C/c03-literals"},next:{title:"Programming Constructs",permalink:"/docs/tutorials/intro-to-C/c05-constructs"}},o={},a=[{value:"Arithemtic Operators",id:"arithemtic-operators",level:2},{value:"Assignment Operators",id:"assignment-operators",level:2},{value:"Relational Operators",id:"relational-operators",level:2},{value:"Logical Operators",id:"logical-operators",level:2},{value:"Exercise",id:"exercise",level:2}];function c(e){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"how-to-use-programming-operators-in-c",children:"How to Use Programming Operators in C"}),"\n",(0,n.jsx)(r.p,{children:"Operators are symbols that carry out a specific function. For example '*' multiplies two numbers."}),"\n",(0,n.jsx)(r.h2,{id:"arithemtic-operators",children:"Arithemtic Operators"}),"\n",(0,n.jsx)(r.p,{children:"Arithemetic operators carry out mathematical operations like multiplications, division, addition and subtraction."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Signs"}),(0,n.jsx)(r.th,{children:"Purpose"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"+"}),(0,n.jsx)(r.td,{children:"Addition"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"-"}),(0,n.jsx)(r.td,{children:"Subtraction"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"*"}),(0,n.jsx)(r.td,{children:"Multiplication"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"/"}),(0,n.jsx)(r.td,{children:"Division"})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Let\u2019s try using your Arduino board."})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"In your Arduino IDE try dividing 2 integers whose answer is a decimal (Eg: 9/4, 8/7 and 10/56). What do you notice?"}),"\n",(0,n.jsx)(r.li,{children:"Even though the answer is a floating-point number, it is changed to an integer because the 2 variables used are integers."}),"\n",(0,n.jsx)(r.li,{children:"Try it again using floating points instead."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"assignment-operators",children:"Assignment Operators"}),"\n",(0,n.jsx)(r.p,{children:"Assignment operators are used when assigning a value to a variable. The most commonly used assignment operator is the equal sign (=)."}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Operator"}),(0,n.jsx)(r.th,{children:"Example"}),(0,n.jsx)(r.th,{children:"Meaning"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"="}),(0,n.jsx)(r.td,{children:"a=b"}),(0,n.jsx)(r.td,{children:"a=b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"+="}),(0,n.jsx)(r.td,{children:"a+=b"}),(0,n.jsx)(r.td,{children:"a = a+b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"-="}),(0,n.jsx)(r.td,{children:"a-=b"}),(0,n.jsx)(r.td,{children:"a = a-b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"*="}),(0,n.jsx)(r.td,{children:"a*=b"}),(0,n.jsx)(r.td,{children:"a = a*b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"/="}),(0,n.jsx)(r.td,{children:"a/=b"}),(0,n.jsx)(r.td,{children:"a = a/b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"%="}),(0,n.jsx)(r.td,{children:"a%=b"}),(0,n.jsx)(r.td,{children:"a = a%b"})]})]})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"The symbol '%' returns the remainder of an equation.\r\n\r\nExample:\r\nif a = 11 and b = 5\r\nThen a%=b will return 1 because 11/5 = 2 R 1\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Using your own Arduino board, ",(0,n.jsx)(r.strong,{children:"try the following:"})]}),"\n",(0,n.jsx)(r.p,{children:"Create different expressions using assignment operators."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-c",children:"void setup(){\r\n    int a = 5;\r\n    int c = a;\r\n    //Instead of using variable names such as a, b and c,\r\n    //try using other names such as counter, num and temp\r\n    int num = 5;\r\n    int temp = num;\r\n}\r\n\r\nvoid loop(){\r\n\r\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"relational-operators",children:"Relational Operators"}),"\n",(0,n.jsxs)(r.p,{children:["A relational operator verifies the relationship ",(0,n.jsx)(r.strong,{children:"between two variables"}),". If the statement is proven to be true then the output will be 1, if the statement is false then the output will be 0."]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Operator"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Example"}),(0,n.jsx)(r.th,{children:"Outcome"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"=="}),(0,n.jsx)(r.td,{children:"Equal to"}),(0,n.jsx)(r.td,{children:"22 == 4;"}),(0,n.jsx)(r.td,{children:"false return = 0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:">"}),(0,n.jsx)(r.td,{children:"Greater than"}),(0,n.jsxs)(r.td,{children:["22 ",">"," 4;"]}),(0,n.jsx)(r.td,{children:"true return = 1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"<"}),(0,n.jsx)(r.td,{children:"Less than"}),(0,n.jsxs)(r.td,{children:["22 ","<"," 4;"]}),(0,n.jsx)(r.td,{children:"false return = 0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"!="}),(0,n.jsx)(r.td,{children:"Not equal to"}),(0,n.jsx)(r.td,{children:"22 != 4;"}),(0,n.jsx)(r.td,{children:"true return = 1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:">="}),(0,n.jsx)(r.td,{children:"Greater than or equal to"}),(0,n.jsxs)(r.td,{children:["22 ",">="," 4;"]}),(0,n.jsx)(r.td,{children:"true return = 1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"<="}),(0,n.jsx)(r.td,{children:"Less than or equal to"}),(0,n.jsxs)(r.td,{children:["22 ","<="," 4;"]}),(0,n.jsx)(r.td,{children:"false return = 0"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"logical-operators",children:"Logical Operators"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Operator"}),(0,n.jsx)(r.th,{children:"Meaning"}),(0,n.jsx)(r.th,{children:"Example (c=5, d=3)"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"&&"}),(0,n.jsx)(r.td,{children:"Logical and true only if all operands are true."}),(0,n.jsx)(r.td,{children:"((c==5) && (d==3)); false return = 0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"||"}),(0,n.jsx)(r.td,{children:"Logical and only true if one operand is true"}),(0,n.jsx)(r.td,{children:"((c==5) || (d==3)); true return = 1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"!"}),(0,n.jsx)(r.td,{children:"Not Logical true only if the operand is 0"}),(0,n.jsx)(r.td,{children:"!(c==5); false return = 0"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"AND"})," is a word used to add an additional comment or condition"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"OR"})," is used to describe an alternative choice"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"A"}),(0,n.jsx)(r.th,{children:"B"}),(0,n.jsx)(r.th,{children:"AND(&&)"}),(0,n.jsx)(r.th,{children:"OR(||)"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"0"}),(0,n.jsx)(r.td,{children:"1"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"1"})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"exercise",children:"Exercise"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Start by creating 3 variables with different values. (for more challenges try using three different types, int, float and double)."}),"\n",(0,n.jsxs)(r.li,{children:["Using ",(0,n.jsx)(r.em,{children:"arithmetic operators"})," create an expression where the output will be ",(0,n.jsx)(r.strong,{children:"3"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Then using any ",(0,n.jsx)(r.em,{children:"relational operator"})," create an expression where the output will be ",(0,n.jsx)(r.strong,{children:"1"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["Use any ",(0,n.jsx)(r.em,{children:"logical operator"})," to return the value of ",(0,n.jsx)(r.strong,{children:"0"}),". --\x3e"]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>d,x:()=>l});var n=t(6540);const s={},i=n.createContext(s);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);