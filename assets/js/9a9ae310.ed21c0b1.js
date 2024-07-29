"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[6940],{1036:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(4848),r=s(8453);const i={},o="Ant Robot",l={id:"projects/ant-robot",title:"Ant Robot",description:"Objectives",source:"@site/docs/projects/ant-robot.md",sourceDirName:"projects",slug:"/projects/ant-robot",permalink:"/docs/projects/ant-robot",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/ant-robot.md",tags:[],version:"current",frontMatter:{},sidebar:"projectsSidebar",next:{title:"Bat Robot",permalink:"/docs/projects/bat-robot"}},a={},d=[{value:"Objectives",id:"objectives",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Bill of Material:",id:"bill-of-material",level:2},{value:"Design",id:"design",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ant-robot",children:"Ant Robot"}),"\n",(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsx)("p",{children:"Let's get familiar with how the AntBot work!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carobot Swiss Cheese",src:s(962).A+"",width:"2360",height:"1640"})}),"\n",(0,t.jsx)("p",{children:'The primary objective of this project is to explore the use of infrared sensors, a.k.a. "IR sensors", in robotics. By building an ant-inspired robot, we will learn how these sensors mimic the navigation technique of ants to help the robot go around its environment.'}),"\n",(0,t.jsx)("p",{children:"Through this project, we will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Understand the working principles of infrared sensors."}),"\n",(0,t.jsx)(n.li,{children:"Gain hands-on experience in assembling and programming a simple robot."}),"\n",(0,t.jsx)(n.li,{children:"Learn about basic electronics and Arduino programming."}),"\n",(0,t.jsx)(n.li,{children:"Explore how sensors can be used for navigation and obstacle avoidance."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.h3,{id:"hardware",children:"Hardware"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Simple Robot Chassis Kit"}),": Includes 2 DC motors, 2 wheels, and a battery holder."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Infrared Sensors"}),": Sensors that change resistance when exposed to different light wavelengths."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Arduino Uno + Cable"}),": Microcontroller board for programming and controlling the robot."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CAROBOT Motor Shield v3"}),": Extension board for driving the motors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"0.1 microF Capacitors"}),": For filtering noise in the circuit."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Resistors"}),":","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"220 ohm resistors for current limiting."}),"\n",(0,t.jsx)(n.li,{children:"10k ohm resistor for the push button."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Push Button"}),": For starting or resetting the robot."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Mini Breadboard"}),": For creating the circuit connections."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Jumper Wires"}),": For connecting components on the breadboard."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"AA Batteries (x4)"}),": Power source for the robot."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"software",children:"Software"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Arduino IDE"}),": Integrated Development Environment for writing and uploading code to the Arduino board."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Basic C/C++ Programming Knowledge"}),": To understand and write the Arduino code."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carobot Swiss Cheese",src:s(8004).A+"",width:"819",height:"374"})}),"\n",(0,t.jsx)(n.h2,{id:"bill-of-material",children:"Bill of Material:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Simple Robot Chassis Kit (2 DC motors, 2 Wheels, battery holder)"}),"\n",(0,t.jsx)(n.li,{children:"IR sensor"}),"\n",(0,t.jsx)(n.li,{children:"Arduino Uno + Cable"}),"\n",(0,t.jsx)(n.li,{children:"CAROBOT motor shield v3"}),"\n",(0,t.jsx)(n.li,{children:"0.1 microF capacitor"}),"\n",(0,t.jsx)(n.li,{children:"Generic resistor"}),"\n",(0,t.jsx)(n.li,{children:"10k Ohm resistor"}),"\n",(0,t.jsx)(n.li,{children:"push button"}),"\n",(0,t.jsx)(n.li,{children:"mini breadboard"}),"\n",(0,t.jsx)(n.li,{children:"Jumper wires"}),"\n",(0,t.jsx)(n.li,{children:"AA batteries"}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carobot Swiss Cheese",src:s(5558).A+"",width:"1280",height:"920"})}),"\n",(0,t.jsx)(n.h2,{id:"design",children:"Design"}),"\n",(0,t.jsx)(n.p,{children:"The Beetle Robot is designed to mimic the behavior of an ant using its eyes for navigation. The design includes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chassis and Motors"}),": The base structure of the robot with wheels driven by DC motors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"IR Sensors"}),": Attached to the front of the robot, acting as eyes to detect light waves."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Arduino and Motor Shield"}),": Central control system that processes sensor data and controls the motors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Power Supply"}),": Batteries to power the entire system."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Push Button"}),": For user interaction to start or reset the robot."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"When the IR sensors detect the light path, they change their readings. The Arduino reads this change and makes the robot back away and change direction, simulating the ant\u2019s behavior."}),"\n",(0,t.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Assemble the Chassis"}),": Attach the DC motors and wheels to the chassis. Insert the batteries into the holder."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Set Up the IR Sensors"}),": Connect the IR sensors to the mini breadboard and wire them to the Arduino. Use the capacitors and resistors as needed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Install the Motor Shield"}),": Attach the motor shield to the Arduino and connect the DC motors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Connect the Push Button"}),": Wire the push button to the Arduino through the breadboard."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Write the Code"}),": Use the Arduino IDE to write a program that reads the infrared sensor data and controls the motors based on the sensor input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Test and Debug"}),": Upload the code to the Arduino, test the robot\u2019s functionality, and make necessary adjustments."]}),"\n"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Carobot Swiss Cheese",src:s(9392).A+"",width:"1494",height:"1116"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:'Through this project, you will have gained practical experience in building and programming a robot, understanding the use of IR sensors for navigation, and learning basic principles of electronics and robotics. This hands-on project not only enhances your technical skills but also emphasizes the "hows" and "whys" by demonstrating real-world applications of sensors and robotics.'})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},962:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ant-drawing-4767a284d829cb0f418b78f79747dd8b.JPG"},9392:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ant-wiring-04c91aadb75922475d031b058746821f.png"},5558:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/general_kit-bacb0003b341e399396f4574aed794dd.jpeg"},8004:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/ir-sensor-8b56d07983fc14409796cc6dcaab6c5e.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);