"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[4655],{6317:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(4848),n=r(8453);const s={title:"Getting Started",sidebar_position:2},d=void 0,o={id:"projects/Ethanol-Detector/Getting-Started",title:"Getting Started",description:"Materials Required",source:"@site/docs/projects/Ethanol-Detector/Getting-Started.md",sourceDirName:"projects/Ethanol-Detector",slug:"/projects/Ethanol-Detector/Getting-Started",permalink:"/docs/projects/Ethanol-Detector/Getting-Started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/Ethanol-Detector/Getting-Started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Getting Started",sidebar_position:2},sidebar:"projectsSidebar",previous:{title:"Introduction to the Ethanol Detector",permalink:"/docs/projects/Ethanol-Detector/Introduction"},next:{title:"Working Principle",permalink:"/docs/projects/Ethanol-Detector/Working-Principle"}},c={},l=[{value:"Materials Required",id:"materials-required",level:2},{value:"Hardware Setup",id:"hardware-setup",level:2},{value:"Software Setup",id:"software-setup",level:2},{value:"Downloading Arduino IDE:",id:"downloading-arduino-ide",level:4},{value:"Connecting the Arduino Board:",id:"connecting-the-arduino-board",level:4},{value:"Installing Required Libraries:",id:"installing-required-libraries",level:4},{value:"Setting Up the Arduino IDE:",id:"setting-up-the-arduino-ide",level:4}];function a(e){const t={a:"a",h2:"h2",h4:"h4",li:"li",ol:"ol",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"materials-required",children:"Materials Required"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Component"}),(0,i.jsx)(t.th,{children:"Image"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/2175",children:"MQ3 Alcohol Sensor Module"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/projects/ethanol-detector/mq3-sensor.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/2006",children:"0.96\u2032 I2C OLED display"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/projects/ethanol-detector/oled-module.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/266",children:"Arduino Mega"})," or ",(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/60",children:"Uno"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/projects/ethanol-detector/arduino-mega.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/223",children:"Small Breadboard"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/projects/ethanol-detector/breadboard.webp",width:"200"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.canadarobotix.com/products/2175",children:"Jumper Wires"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/jumper-wires.png",width:"200"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"hardware-setup",children:"Hardware Setup"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Component"}),(0,i.jsx)(t.th,{children:"Wire"}),(0,i.jsx)(t.th,{children:"To Arduino Pin"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"OLED"}),(0,i.jsx)(t.td,{children:"VCC"}),(0,i.jsx)(t.td,{children:"5V"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"GND"}),(0,i.jsx)(t.td,{children:"GND"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SCL"}),(0,i.jsx)(t.td,{children:"A5"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"SDA"}),(0,i.jsx)(t.td,{children:"A4"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"-------------"}),(0,i.jsx)(t.td,{children:"------"}),(0,i.jsx)(t.td,{children:"----------------"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Gas Sensor"}),(0,i.jsx)(t.td,{children:"VCC"}),(0,i.jsx)(t.td,{children:"5V"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"GND"}),(0,i.jsx)(t.td,{children:"GND"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"AD"}),(0,i.jsx)(t.td,{children:"A0"})]})]})]}),"\n",(0,i.jsx)("img",{src:"/img/docs/projects/ethanol-detector/ethanol-1.png",width:"700"}),"\n",(0,i.jsx)(t.h2,{id:"software-setup",children:"Software Setup"}),"\n",(0,i.jsx)(t.h4,{id:"downloading-arduino-ide",children:"Downloading Arduino IDE:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Visit the Arduino website and download the latest version of the Arduino IDE for your operating system."}),"\n",(0,i.jsx)(t.li,{children:"Follow the installation instructions provided on the website."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"connecting-the-arduino-board",children:"Connecting the Arduino Board:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Connect the Arduino board to your computer using a USB cable."}),"\n",(0,i.jsx)(t.li,{children:"Ensure the connection is secure. Sometimes a loose connection can cause the board to be not recognized. A tight connection resolved this issue for me (thanks to a helpful YouTube comment)."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"installing-required-libraries",children:"Installing Required Libraries:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Open the Arduino IDE."}),"\n",(0,i.jsx)(t.li,{children:"Go to Sketch > Include Library > Manage Libraries."}),"\n",(0,i.jsxs)(t.li,{children:["In the Library Manager, search for and install the following libraries:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Adafruit GFX Library: This core graphics library provides a common set of graphics primitives (points, lines, circles, etc.) and needs to be paired with a hardware-specific library."}),"\n",(0,i.jsx)(t.li,{children:"Adafruit SSD1306 OLED Display Library: This library is specifically for OLED displays based on SSD1306 drivers."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"setting-up-the-arduino-ide",children:"Setting Up the Arduino IDE:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Select your Arduino board model under Tools > Board."}),"\n",(0,i.jsx)(t.li,{children:"Select the correct port under Tools > Port where your Arduino is connected."}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/img/docs/projects/ethanol-detector/ethanol-3.png",width:"700"})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>o});var i=r(6540);const n={},s=i.createContext(n);function d(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);