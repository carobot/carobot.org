"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[2474],{4183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(4848),o=n(8453);const i={title:"Getting Started \u2013 Arduino Uno and Hardware",sidebar_position:1},s="Getting Started \u2013 Arduino Uno and Hardware",a={id:"tutorials/discovery-kit/arduino-hardware",title:"Getting Started \u2013 Arduino Uno and Hardware",description:"First, let\u2019s understand a bit more about the Arduino Uno and some of the components of this kit. The header pins are one of the most important parts for putting our example circuits together. Take a moment and locate the input/output ports of your Arduino Uno.",source:"@site/docs/tutorials/discovery-kit/arduino-hardware.md",sourceDirName:"tutorials/discovery-kit",slug:"/tutorials/discovery-kit/arduino-hardware",permalink:"/docs/tutorials/discovery-kit/arduino-hardware",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/discovery-kit/arduino-hardware.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getting Started \u2013 Arduino Uno and Hardware",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction - What is Arduino?",permalink:"/docs/tutorials/discovery-kit/introduction"},next:{title:"Introduction to C With Arduino",permalink:"/docs/tutorials/intro-to-C/c01-beginning"}},d={},c=[{value:"Arduino Uno",id:"arduino-uno",level:2},{value:"Breadboard",id:"breadboard",level:2},{value:"Other Parts in Your Kit",id:"other-parts-in-your-kit",level:2}];function u(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"getting-started--arduino-uno-and-hardware",children:"Getting Started \u2013 Arduino Uno and Hardware"}),"\n",(0,r.jsx)(t.p,{children:"First, let\u2019s understand a bit more about the Arduino Uno and some of the components of this kit. The header pins are one of the most important parts for putting our example circuits together. Take a moment and locate the input/output ports of your Arduino Uno."}),"\n",(0,r.jsx)(t.h2,{id:"arduino-uno",children:"Arduino Uno"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Power In (5.5x2.1mm Barrel Jack) - Can be used with either a 9V-12V wall-wart or battery."}),"\n",(0,r.jsx)(t.li,{children:"Power In (USB Port) - Provides power and communicates with your board when plugged into your computer via USB."}),"\n",(0,r.jsx)(t.li,{children:"LED (RX: Receiving) - This shows when the Arduino is receiving data (such as when being programmed)."}),"\n",(0,r.jsx)(t.li,{children:"LED (TX: Transmitting) - This shows when your Arduino is transmitting data (such as when running a program)."}),"\n",(0,r.jsx)(t.li,{children:"LED (Pin 13: Troubleshooting) - This LED is incorporated into your sketch to show if your program is running properly."}),"\n",(0,r.jsx)(t.li,{children:"Pins (ARef, Ground, Digital, Rx, Tx) - These various pins can be used for inputs, outputs, power, and ground."}),"\n",(0,r.jsx)(t.li,{children:"Pins 3, 5, 6, 9, 10, and 11 - These six digital pins can be programmed for analog output. The details on how to use these pins are discussed more in Project #4."}),"\n",(0,r.jsx)(t.li,{children:"LED (Indicates Arduino is ON) - This is a simple power indicator LED."}),"\n",(0,r.jsx)(t.li,{children:"Reset Button - This is a way to manually reset your Arduino, which makes your code restart."}),"\n",(0,r.jsx)(t.li,{children:'ICSP Pins (Uploading Code without Bootloader) - This is for "In-Circuit Serial Programming," used if you want to bypass the boot loader.'}),"\n",(0,r.jsx)(t.li,{children:"Pins (Analog In, Power In, Ground, Power Out, Reset) - These various pins can be used for inputs, outputs, power, and ground."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"breadboard",children:"Breadboard"}),"\n",(0,r.jsx)(t.p,{children:"Power Rail - Each + sign runs power anywhere in the vertical column.\r\nGround Rail - Each - sign runs to ground anywhere in the vertical column.\r\nHorizontal Rows \u2013 Each of these rows numbered 1-30 are comprised of five horizontal sockets. Components placed in the same row will be connected in a circuit when power is running.\r\nFor example, \u201ca1\u201d is connected to \u201ce1\u201d but not connected to \u201cf1\u201d, \u201ca2\u201d or \u201cf2\u201d."}),"\n",(0,r.jsx)(t.h2,{id:"other-parts-in-your-kit",children:"Other Parts in Your Kit"}),"\n",(0,r.jsx)(t.p,{children:"Jumper Wires\r\nUse these to connect components to each other on the breadboard, and to the Arduino."}),"\n",(0,r.jsx)(t.p,{children:"Light Emitting Diode (LED)\r\nA type of diode that illuminates when electricity passes through it. Like a diode, electricity only flow in one direction."}),"\n",(0,r.jsx)(t.p,{children:"Buzzer (Piezo)\r\nConverts electrical energy into sound when pulses are applied to it. Depending on the frequency of the pulse, different pitches can be created."}),"\n",(0,r.jsx)(t.p,{children:"Transistor\r\nA three legged device that can operate as an electronics switch. Useful for controlling high current/high voltage components like motors."}),"\n",(0,r.jsx)(t.p,{children:"DC Motor\r\nConverts electrical energy into mechanical energy when electricity is applied to it leads."}),"\n",(0,r.jsx)(t.p,{children:"Push Buttons\r\nMomentary switches that close a circuit when pressed."}),"\n",(0,r.jsx)(t.p,{children:"Resistor\r\nResist the flow of electrical energy in a circuit, changing the voltage and current as a result. Resistor value are measured in ohms (\u03a9). The colour stripe on the side of the resistors indicate their value."}),"\n",(0,r.jsx)(t.p,{children:"Potentiometer (POT)\r\nA variable resistor with three pins. Two of the pins are connected to the ends of a fixed resistor. The middle pin, or wiper, moves across the resistor, dividing it into two halves."}),"\n",(0,r.jsx)(t.p,{children:"Photoresistor\r\nA variable resistor that changes its resistance based on the amount of light that falls on its face."}),"\n",(0,r.jsx)(t.p,{children:"Temperature Sensor\r\nChanges its voltage output depending on the temperature of the component."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);