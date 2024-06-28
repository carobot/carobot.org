"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[7379],{360:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=i(4848),t=i(8453);const s={title:"Programming Constructs",sidebar_position:5},o="How to Use Programming Constructs in C",l={id:"tutorials/intro-to-C/c05-constructs",title:"Programming Constructs",description:"A construct is a line of code that performs a specific task under a specific condition, this may include if, if/else, elseif statements, while, for loops and many more.",source:"@site/docs/tutorials/intro-to-C/c05-constructs.md",sourceDirName:"tutorials/intro-to-C",slug:"/tutorials/intro-to-C/c05-constructs",permalink:"/docs/tutorials/intro-to-C/c05-constructs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/intro-to-C/c05-constructs.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Programming Constructs",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Programming Operators",permalink:"/docs/tutorials/intro-to-C/c04-operator"},next:{title:"Arrays",permalink:"/docs/tutorials/intro-to-C/c06-arrays"}},c={},d=[{value:"Conditional Statements",id:"conditional-statements",level:2},{value:"If Statement",id:"if-statement",level:3},{value:"Examples",id:"examples",level:4},{value:"If/Else Statement",id:"ifelse-statement",level:3},{value:"Else If Statement",id:"else-if-statement",level:3},{value:"Case-by-Case",id:"case-by-case",level:3},{value:"Loops",id:"loops",level:2},{value:"While Loops",id:"while-loops",level:3},{value:"Do While Loop",id:"do-while-loop",level:3},{value:"For Loop",id:"for-loop",level:3},{value:"Declaring the Variable",id:"declaring-the-variable",level:4},{value:"Condition",id:"condition",level:4},{value:"Increments",id:"increments",level:4},{value:"Conditional Expression",id:"conditional-expression",level:3}];function a(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-use-programming-constructs-in-c",children:"How to Use Programming Constructs in C"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"construct"})," is a line of code that performs a specific task under a specific condition, this may include ",(0,r.jsx)(n.strong,{children:"if"}),", ",(0,r.jsx)(n.strong,{children:"if/else"}),", ",(0,r.jsx)(n.strong,{children:"elseif"})," statements, ",(0,r.jsx)(n.strong,{children:"while"}),", ",(0,r.jsx)(n.strong,{children:"for"})," loops and many more."]}),"\n",(0,r.jsx)(n.h2,{id:"conditional-statements",children:"Conditional Statements"}),"\n",(0,r.jsx)(n.h3,{id:"if-statement",children:"If Statement"}),"\n",(0,r.jsxs)(n.p,{children:["Here is an example of the ",(0,r.jsx)(n.strong,{children:"If Statement:"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int condition = 1;\r\n\r\nif(condition == 1){\r\n    Serial.println(condition);\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code inbetween the parenthesis of ",(0,r.jsx)(n.code,{children:"if()"})," is known as the condition, hence the name ",(0,r.jsx)(n.strong,{children:"Conditional Statement"}),". In order for the code within the statement to be executed, the condition has to be ",(0,r.jsx)(n.code,{children:"true"}),", the condition can range from comparing ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"integers"})}),", ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"booleans"})})," and even ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"characters"})}),"!"]}),"\n",(0,r.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["Here are some examples that ",(0,r.jsx)(n.strong,{children:"will"})," print out ",(0,r.jsx)(n.code,{children:"yes"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int exampleOne = 1;\r\nbool exampleTwo = true;\r\nchar exampleThree = \'a\';\r\n\r\nif(exampleOne == 1){\r\n    Serial.println("yes");\r\n}\r\nif(exampleTwo == true){\r\n    Serial.println("yes");\r\n}\r\nif(exampleThree == \'a\'){\r\n    Serial.println("yes");\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Here are some examples that ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.em,{children:"will not"})})," print out ",(0,r.jsx)(n.code,{children:"yes"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int exampleOne = 1;\r\nbool exampleTwo = true;\r\nchar exampleThree = \'a\';\r\n\r\nif(exampleOne == 3){\r\n    Serial.println("yes");\r\n}\r\nif(exampleTwo == false){\r\n    Serial.println("yes");\r\n}\r\nif(exampleThree == \'y\'){\r\n    Serial.println("yes");\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"ifelse-statement",children:"If/Else Statement"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"If/Else Statement"})," can be dissected into 2 parts, the ",(0,r.jsx)(n.strong,{children:"If Statement"})," and the ",(0,r.jsx)(n.strong,{children:"Else Statement"}),". Here is an example of the ",(0,r.jsx)(n.strong,{children:"If/Else Statement"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'int condition = 1;\r\n\r\nif(condition == 2){\r\n    Serial.println("nothing");\r\n}else{\r\n    Serial.println(condition);\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the code above, the program will not execute the command within the ",(0,r.jsx)(n.strong,{children:"If Statement"})," as ",(0,r.jsx)(n.code,{children:"(condition == 1)"})," is false, however, with the ",(0,r.jsx)(n.strong,{children:"Else Statement"}),", the program will instead execute the code within the ",(0,r.jsx)(n.strong,{children:"Else Statement"}),", printing out ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"else-if-statement",children:"Else If Statement"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Else If Statement"})," is an ",(0,r.jsx)(n.strong,{children:"Else Statement"})," but with another ",(0,r.jsx)(n.strong,{children:"If Statement"}),". Essentially, the ",(0,r.jsx)(n.strong,{children:"Else If Statement"})," adds another condition to the ",(0,r.jsx)(n.strong,{children:"Else Statement"}),". If the condition is false, the program will move on to the next ",(0,r.jsx)(n.strong,{children:"Else Statement"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int condition = 1;\r\nint elsif = 2;\r\nint ans = 3;\r\n\r\nif(condition == 2){\r\n    Serial.println(condition);\r\n}else if(elsif == 3){\r\n    Serial.println(elsif);\r\n}else{\r\n    Serial.println(ans);\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Since the If Statement's ",(0,r.jsx)(n.code,{children:"(condition == 2)"})," and Else If Statement's ",(0,r.jsx)(n.code,{children:"(elsif == 3)"})," are false, the program will print out ",(0,r.jsx)(n.code,{children:"3"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"case-by-case",children:"Case-by-Case"}),"\n",(0,r.jsx)(n.p,{children:"The case-by-case construct starts off by comparing a condition, if the condition matches the constant value or expression, the program will execute the task within the code. Here is an example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"char choice = 'n';\r\n\r\nswitch(choice)\r\n{\r\ncase 'Y':\r\ncase 'y':\r\n       Serial.println(\"yes\");\r\n       break;\r\ncase 'N':\r\ncase 'n':\r\n       Serial.println(\"no\");\r\n       break;\r\ndefault:\r\n       Serial.println(\"neutral\");\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"no\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code above compares the choice of ",(0,r.jsx)(n.code,{children:"'Y'"}),", ",(0,r.jsx)(n.code,{children:"'y'"}),", ",(0,r.jsx)(n.code,{children:"'N'"})," and ",(0,r.jsx)(n.code,{children:"'n'"}),". If ",(0,r.jsx)(n.code,{children:"choice"})," does not follow any of the characters mentioned, the code will execute the code within default."]}),"\n",(0,r.jsx)(n.p,{children:"If the condition type (choice) matches the constant type (char), in this case being character, the code within the case-by-case construct will be executed."}),"\n",(0,r.jsxs)(n.p,{children:["Think of ",(0,r.jsx)(n.code,{children:"case"})," as an ",(0,r.jsx)(n.strong,{children:"If Statement"}),". If the variable given matches with the condition written after ",(0,r.jsx)(n.code,{children:"case"}),", the code within will be executed, if not, the program will skip over the code and go on to the next ",(0,r.jsx)(n.code,{children:"case"}),". If none of the ",(0,r.jsx)(n.code,{children:"case"})," conditions match the given variable, the program will execute the code within ",(0,r.jsx)(n.code,{children:"default:"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"break;"})," that exists at the end of ever block of code is a command that causes the program to skip the case-by-case construct entirely."]}),"\n",(0,r.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,r.jsx)(n.h3,{id:"while-loops",children:"While Loops"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"While Loop"})," is used to repeat a specific block of code until the condition is no longer true. Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int condition = 0;\r\n\r\nwhile(condition <= 5){\r\n    Serial.println(condition);\r\n    condition++;\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"0\r\n1\r\n2\r\n3\r\n4\r\n5\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"While Loop"})," shown above has the condition of ",(0,r.jsx)(n.code,{children:"(condition <= 5)"})," and with every loop, ",(0,r.jsx)(n.code,{children:"condition++;"}),", when ",(0,r.jsx)(n.code,{children:"condition = 6"}),", the condition of ",(0,r.jsx)(n.code,{children:"(condition <= 5)"})," will no longer be true, therefore ending the loop. ",(0,r.jsx)(n.em,{children:"(Note: This is not the only use of the while loop)"})]}),"\n",(0,r.jsx)(n.h3,{id:"do-while-loop",children:"Do While Loop"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Do While Loop"})," executes the code ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"at least once"})})," and will continue executing the code as long as the condition is true. here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int seq = 3;\r\nint condition = 2;\r\n\r\ndo{\r\n    Serial.println(seq);\r\n}while(condition == 1);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"3\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, since ",(0,r.jsx)(n.code,{children:"condition == 1"})," is false, only the code within ",(0,r.jsx)(n.code,{children:"do{}"})," will be executed. If ",(0,r.jsx)(n.code,{children:"condition == 1"})," is true, the code will look like:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Code"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"int seq = 3;\r\nint condition = 2;\r\n\r\ndo{\r\n    Serial.println(seq);\r\n}while(condition == 2);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"3\r\n3\r\n3\r\n3\r\n3\r\n3\r\n3\r\n...\n"})}),"\n",(0,r.jsx)(n.h3,{id:"for-loop",children:"For Loop"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"For Loop"})," is used to repeat a block of code for a certain amount of time, keep in mind, this is different from the Arduino's ",(0,r.jsx)(n.code,{children:"loop()"})," function. Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"for(int i = 0; i<5; i++){\r\n    Serial.println(i);\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"0\r\n1\r\n2\r\n3\r\n4\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's break down the ",(0,r.jsx)(n.strong,{children:"For Loop"})," into 3 parts, each part will be seperated by a ",(0,r.jsx)(n.code,{children:";"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"declaring-the-variable",children:"Declaring the Variable"}),"\n",(0,r.jsxs)(n.p,{children:["The first part of the ",(0,r.jsx)(n.strong,{children:"For Loop"})," is the declaration of a variable, commonly declared as ",(0,r.jsx)(n.code,{children:"i"}),". To declare the variable ",(0,r.jsx)(n.code,{children:"i"}),", the loop must include ",(0,r.jsx)(n.code,{children:"int i = 0;"}),". ",(0,r.jsxs)(n.em,{children:["(Note: The value of ",(0,r.jsx)(n.code,{children:"i"})," can be whatever you want)"]})]}),"\n",(0,r.jsx)(n.h4,{id:"condition",children:"Condition"}),"\n",(0,r.jsxs)(n.p,{children:["The second part of the ",(0,r.jsx)(n.strong,{children:"For Loop"})," is how many times you want the code within the loop to be repeated."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"i=0"}),(0,r.jsxs)(n.th,{children:["i","<","5"]}),(0,r.jsx)(n.th,{children:"i++"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"0"}),"+1 \u2713"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"1"}),"+1 \u2713"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"2"}),"+1 \u2713"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"3"}),"+1 \u2713"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsx)(n.td,{children:"\u2713"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"4"}),"+1 \u2713"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5"}),(0,r.jsx)(n.td,{children:"\u2715"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.strong,{children:"5"}),"+1 \u2715"]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["As seen in the chart above, the loop would continue on until ",(0,r.jsx)(n.code,{children:"i=5"}),", in which case, causes ",(0,r.jsx)(n.code,{children:"i<5"})," to be false, therefore ending the loop."]}),"\n",(0,r.jsx)(n.h4,{id:"increments",children:"Increments"}),"\n",(0,r.jsxs)(n.p,{children:["The third part of the ",(0,r.jsx)(n.strong,{children:"For Loop"})," is what will happen to the variable ",(0,r.jsx)(n.code,{children:"i"})," after a singular loop has finished. As shown in the previous lesson, ",(0,r.jsx)(n.code,{children:"i++;"})," means ",(0,r.jsx)(n.code,{children:"i=i+1"}),". For every time the code within the loop gets executed, the integer ",(0,r.jsx)(n.code,{children:"i"})," will have its value be increased by 1. ",(0,r.jsxs)(n.em,{children:["(Note: The increment of ",(0,r.jsx)(n.code,{children:"i"})," does not have to be ",(0,r.jsx)(n.code,{children:"i++"}),", it could be anything you can do with an integer)"]})]}),"\n",(0,r.jsx)(n.h3,{id:"conditional-expression",children:"Conditional Expression"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Conditional Expression"})," is extremely similar to how the ",(0,r.jsx)(n.strong,{children:"If Else Statement"})," works. Here is an example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"char s = 2 > 1 ? 't' : 'f';\r\nSerial.println(s);\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Serial Monitor"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"t\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Conditional Expression:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-t",children:"condition ? operand : operand\n"})}),"\n",(0,r.jsx)(n.p,{children:"The first operand of the expression is what the code will do if the condition is true, the second operand is what the code will do if the condition is false."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var r=i(6540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);