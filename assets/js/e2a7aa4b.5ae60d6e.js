"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[8842],{8902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var r=n(4848),s=n(8453);const i={title:"Project 5.1: One-way Data Communication - Message Display",sidebar_position:7},o=void 0,d={id:"projects/ESP32-Starter-Kit/Project-5.1",title:"Project 5.1: One-way Data Communication - Message Display",description:"Pin Connections",source:"@site/docs/projects/ESP32-Starter-Kit/Project-5.1.md",sourceDirName:"projects/ESP32-Starter-Kit",slug:"/projects/ESP32-Starter-Kit/Project-5.1",permalink:"/docs/projects/ESP32-Starter-Kit/Project-5.1",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/ESP32-Starter-Kit/Project-5.1.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Project 5.1: One-way Data Communication - Message Display",sidebar_position:7},sidebar:"projectsSidebar",previous:{title:"Project 4: Sensor Data on Screen",permalink:"/docs/projects/ESP32-Starter-Kit/Project-4"},next:{title:"Project 5.2: One-way Data Communication - LED Control",permalink:"/docs/projects/ESP32-Starter-Kit/Project-5.2"}},c={},a=[{value:"Pin Connections",id:"pin-connections",level:2},{value:"Network Diagram:",id:"network-diagram",level:2},{value:"Pseudocode:",id:"pseudocode",level:2},{value:"ESP32:",id:"esp32",level:4},{value:"Client:",id:"client",level:4},{value:"Instructions:",id:"instructions",level:2},{value:"What you should see:",id:"what-you-should-see",level:4}];function l(e){const t={code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"pin-connections",children:"Pin Connections"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"LCD Pin"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"To ESP32 Pin"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"RST"}),(0,r.jsx)(t.td,{children:"Reset"}),(0,r.jsx)(t.td,{children:"P27"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CS"}),(0,r.jsx)(t.td,{children:"Chip Select"}),(0,r.jsx)(t.td,{children:"P5"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"D/C"}),(0,r.jsx)(t.td,{children:"Data/Cmd"}),(0,r.jsx)(t.td,{children:"P32"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"DIN"}),(0,r.jsx)(t.td,{children:"MOSI Slave"}),(0,r.jsx)(t.td,{children:"P23"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"CLK"}),(0,r.jsx)(t.td,{children:"Clock"}),(0,r.jsx)(t.td,{children:"P18"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"VCC"}),(0,r.jsx)(t.td,{children:"Power"}),(0,r.jsx)(t.td,{children:"5V"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"BL"}),(0,r.jsx)(t.td,{children:"Backlight"}),(0,r.jsx)(t.td,{children:"5V"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"GND"}),(0,r.jsx)(t.td,{children:"Ground (0V)"}),(0,r.jsx)(t.td,{children:"GND"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"network-diagram",children:"Network Diagram:"}),"\n",(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/ESP32-10.png",width:"700"}),"\n",(0,r.jsx)(t.h2,{id:"pseudocode",children:"Pseudocode:"}),"\n",(0,r.jsx)(t.h4,{id:"esp32",children:"ESP32:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Include necessary libraries\r\nDefine pin connections for the TFT display\r\nCreate a TFT display object\r\nDefine WiFi credentials\r\nDefine UDP port and packet buffer\r\n \r\nFunction setup:\r\n\tInitialize the TFT display with specific settings\r\n\tStart serial communication for debugging\r\n\tSet up the ESP32 as a WiFi access point with the specified credentials\r\n\tStart the UDP service on the specified port\r\n\tDisplay the IP address and port on the TFT for 5 seconds\r\nFunction loop:\r\n\tCheck if a UDP packet is available\r\n\tIf a packet is available:\r\n    \tRead the packet into the buffer\r\n    \tEnsure the packet is a properly terminated string\r\n    \tDisplay the packet on the TFT display\n"})}),"\n",(0,r.jsx)(t.h4,{id:"client",children:"Client:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'Set BUF_LEN to 255\r\nDeclare is_running as boolean\r\nSet PORT to 4210\r\nSet IP_ADDRESS to "192.168.4.1"\r\nStart\r\n    Declare variables for socket, server address, and buffer\r\n    Create UDP socket\r\n    If socket creation fails Then Print an error message\r\n    Configure server address with AF_INET, PORT, and IP address\r\n    If conversion of IP address fails Then Print an error message\r\n    Connect socket to server address\r\n    If connection fails Then Print an error message\r\n    Set is_running to true\r\n    While is_running\r\n    Read input from standard input into buffer\r\n    If length of input > 0 Then\r\n    Send buffer content to the server via socket\r\n    If send fails Then\r\n    Print an error message\r\n    Else\r\n    Print "message sent: " + buffer content\r\n    EndIf\r\n    If buffer starts with "quit" Then\r\n    Set is_running to false\r\n    EndIf\r\n    Clear buffer\r\n    EndIf\r\n    EndWhile\n'})}),"\n",(0,r.jsx)(t.h2,{id:"instructions",children:"Instructions:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Visit this repo and download two files for this project (client file, project5_1.ino)."}),"\n",(0,r.jsx)(t.li,{children:"In project5_1.ino, you can change the name and password of the access point. Afterward, upload the code into the ESP32. If you don\u2019t have a battery for the ESP32, then you can use your computer as a power source for the ESP32."}),"\n",(0,r.jsx)(t.li,{children:"The IP address of the ESP32 should be there on the TFT screen, so note it down because this will be used as an address of your message to which you want to send"}),"\n",(0,r.jsx)(t.li,{children:"In server.cpp, change IP_ADDRESS and PORT corresponding to the values displayed on the TFT screen. These are IP address and port number of our ESP32."}),"\n",(0,r.jsx)(t.li,{children:"Create a new terminal and go to the client file and run: 'make clean all'."}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"what-you-should-see",children:"What you should see:"}),"\n",(0,r.jsx)("img",{src:"/img/docs/projects/esp32-starter-kit/ESP32-11.png",width:"500"})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);