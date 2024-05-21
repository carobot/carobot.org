"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[7656],{6496:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>d});var n=s(4848),o=s(8453);const r={},i="Moth Bot",h={id:"projects/moth-robot",title:"Moth Bot",description:"Objectives",source:"@site/docs/projects/moth-robot.md",sourceDirName:"projects",slug:"/projects/moth-robot",permalink:"/docs/projects/moth-robot",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/moth-robot.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",previous:{title:"Guard Dog Bot",permalink:"/docs/projects/guard-dog-robot"}},l={},d=[{value:"Objectives",id:"objectives",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Bill of Material:",id:"bill-of-material",level:2},{value:"Design",id:"design",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const t={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"moth-bot",children:"Moth Bot"}),"\n",(0,n.jsx)(t.h2,{id:"objectives",children:"Objectives"}),"\n",(0,n.jsx)("p",{children:"Let's get familiar with how the MothBot works!"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Carobot Swiss Cheese",src:s(2407).A+"",width:"4768",height:"5132"})}),"\n",(0,n.jsx)("p",{children:'The primary objective of this project is to explore the use of photoresistors, a.k.a. "light sensors," in robotics. By building a moth-inspired robot, we will learn how these sensors mimic the light-seeking behavior of moths to help the robot navigate its environment and follow light sources.'}),"\n",(0,n.jsx)("p",{children:"Through this project, we will:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Understand the working principles of photoresistors."}),"\n",(0,n.jsx)(t.li,{children:"Gain hands-on experience in assembling and programming a simple robot."}),"\n",(0,n.jsx)(t.li,{children:"Learn about basic electronics and Arduino programming."}),"\n",(0,n.jsx)(t.li,{children:"Explore how sensors can be used for light detection and movement."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.h3,{id:"hardware",children:"Hardware"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Simple Robot Chassis Kit"}),": Includes 2 DC motors, 2 wheels, and a battery holder."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Photoresistors (Light Sensors)"}),": Sensors that detect light intensity."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Arduino Uno + Cable"}),": Microcontroller board for programming and controlling the robot."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"CAROBOT Motor Shield v3"}),": Extension board for driving the motors."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"0.1 microF Capacitors (x2)"}),": For filtering noise in the circuit."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Resistors"}),":","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"220 ohm resistors (x2) for current limiting."}),"\n",(0,n.jsx)(t.li,{children:"10k ohm resistor (x1) for the push button."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Push Button"}),": For starting or resetting the robot."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mini Breadboard"}),": For creating the circuit connections."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Jumper Wires"}),": For connecting components on the breadboard."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"AA Batteries (x4)"}),": Power source for the robot."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"software",children:"Software"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Arduino IDE"}),": Integrated Development Environment for writing and uploading code to the Arduino board."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Basic C/C++ Programming Knowledge"}),": To understand and write the Arduino code."]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Carobot Swiss Cheese",src:s(9033).A+"",width:"994",height:"413"})}),"\n",(0,n.jsx)(t.h2,{id:"bill-of-material",children:"Bill of Material:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Simple Robot Chassis Kit (2 DC motors, 2 Wheels, battery holder)"}),"\n",(0,n.jsx)(t.li,{children:"Photoresistors (Light Sensors)"}),"\n",(0,n.jsx)(t.li,{children:"Arduino Uno + Cable"}),"\n",(0,n.jsx)(t.li,{children:"CAROBOT motor shield v3"}),"\n",(0,n.jsx)(t.li,{children:"0.1 microF capacitor"}),"\n",(0,n.jsx)(t.li,{children:"220 Ohms resistor"}),"\n",(0,n.jsx)(t.li,{children:"10k Ohms resistor"}),"\n",(0,n.jsx)(t.li,{children:"push button"}),"\n",(0,n.jsx)(t.li,{children:"mini breadboard"}),"\n",(0,n.jsx)(t.li,{children:"Jumper wires"}),"\n",(0,n.jsx)(t.li,{children:"AA batteries"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Carobot Swiss Cheese",src:s(5558).A+"",width:"1280",height:"920"})}),"\n",(0,n.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,n.jsx)(t.p,{children:"The Moth Bot is designed to mimic the behavior of a moth using its light-seeking eyes for navigation. The design includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Chassis and Motors"}),": The base structure of the robot with wheels driven by DC motors."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Photoresistors"}),": Attached to the front of the robot, acting as eyes to detect light intensity."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Arduino and Motor Shield"}),": Central control system that processes sensor data and controls the motors."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Power Supply"}),": Batteries to power the entire system."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Push Button"}),": For user interaction to start or reset the robot."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When the photoresistors detect light, they measure the intensity of the light. The Arduino reads this data and adjusts the robot's movement, turning towards the side with more light until both sensors detect equal light, then moving towards the brightest spot."}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Assemble the Chassis"}),": Attach the DC motors and wheels to the chassis. Insert the batteries into the holder."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Set Up the Photoresistors"}),": Connect the photoresistors to the mini breadboard and wire them to the Arduino. Use the capacitors and resistors as needed."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Install the Motor Shield"}),": Attach the motor shield to the Arduino and connect the DC motors."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Connect the Push Button"}),": Wire the push button to the Arduino through the breadboard."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Write the Code"}),": Use the Arduino IDE to write a program that reads the photoresistor data and controls the motors based on the sensor input."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Test and Debug"}),": Upload the code to the Arduino, test the robot\u2019s functionality, and make necessary adjustments."]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Carobot Swiss Cheese",src:s(5428).A+"",width:"690",height:"459"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:'Through this project, you will have gained practical experience in building and programming a robot, understanding the use of photoresistors for light detection, and learning basic principles of electronics and robotics. This hands-on project not only enhances your technical skills but also emphasizes the "hows" and "whys" by demonstrating real-world applications of sensors and robotics.'})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5558:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/general_kit-bacb0003b341e399396f4574aed794dd.jpeg"},9033:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/light-sensor-2ff4f6507cdf5dab3df2408ae1f4175a.png"},2407:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/moth-drawing-0a20b57a74288f2add958df4f0ce1ba4.png"},5428:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/moth-wiring-f907d5764150bd9913d5caa4e1336fc1.jpeg"},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>h});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);