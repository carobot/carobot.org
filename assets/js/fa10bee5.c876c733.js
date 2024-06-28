"use strict";(self.webpackChunkmy_owm_docs=self.webpackChunkmy_owm_docs||[]).push([[790],{2078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var l=n(4848),o=n(8453);const i={sidebar_position:1},r="CarduBlock Edu Tutorial",s={id:"tutorials/CarduBlock-Edu-Tutorial",title:"CarduBlock Edu Tutorial",description:"ArduBlock is a simple, fast, and fun way to program the CAROBOT SwissCHEESE. ArduBlock is a graphical programming language for Arduino that\u2019s almost the same as Scratch. To follow this tutorial, you will need a computer and a CAROBOT SwissCHEESE education kit, including an Arduino Uno. This tutorial will be using the CarduBlock Edu branch of ArduBlock, a simplified version of the program that\u2019s specialized for the SwissCHEESE.",source:"@site/docs/tutorials/CarduBlock-Edu-Tutorial.md",sourceDirName:"tutorials",slug:"/tutorials/CarduBlock-Edu-Tutorial",permalink:"/docs/tutorials/CarduBlock-Edu-Tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorials/CarduBlock-Edu-Tutorial.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/tutorials/Introduction"},next:{title:"Robot with Real-Time Temperature Display",permalink:"/docs/tutorials/robot-with-real-time-temperature-display"}},a={},d=[{value:"Contents",id:"contents",level:3},{value:"CAROBOT SwissCHEESE",id:"carobot-swisscheese",level:2},{value:"Opening CarduBlock Edu",id:"opening-cardublock-edu",level:3},{value:"Project 1 \u2013 Blinking a Green LED",id:"project-1--blinking-a-green-led",level:3},{value:"Project 2 \u2013 The Button",id:"project-2--the-button",level:3},{value:"If/Else",id:"ifelse",level:3},{value:"Project 3 \u2013 The Servo",id:"project-3--the-servo",level:3},{value:"Project 4 \u2013 Controlling a Servo with a Potentiometer",id:"project-4--controlling-a-servo-with-a-potentiometer",level:3},{value:"The Buzzer",id:"the-buzzer",level:3},{value:"Frequency",id:"frequency",level:3},{value:"The Variable",id:"the-variable",level:3},{value:"Project 5 \u2013 The Buzzer",id:"project-5--the-buzzer",level:3}];function h(e){const t={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"cardublock-edu-tutorial",children:"CarduBlock Edu Tutorial"}),"\n",(0,l.jsx)(t.p,{children:"ArduBlock is a simple, fast, and fun way to program the CAROBOT SwissCHEESE. ArduBlock is a graphical programming language for Arduino that\u2019s almost the same as Scratch. To follow this tutorial, you will need a computer and a CAROBOT SwissCHEESE education kit, including an Arduino Uno. This tutorial will be using the CarduBlock Edu branch of ArduBlock, a simplified version of the program that\u2019s specialized for the SwissCHEESE."}),"\n",(0,l.jsx)(t.h3,{id:"contents",children:"Contents"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"CAROBOT SwissCHEESE"}),"\n",(0,l.jsx)(t.li,{children:"Opening CarduBlock Edu"}),"\n",(0,l.jsx)(t.li,{children:"Project 1 \u2013 Blinking a Green LED"}),"\n",(0,l.jsx)(t.li,{children:"Project 2 \u2013 The Button"}),"\n",(0,l.jsx)(t.li,{children:"If/Else"}),"\n",(0,l.jsx)(t.li,{children:"Project 3 \u2013 The Servo"}),"\n",(0,l.jsx)(t.li,{children:"Project 4 \u2013 Controlling a Servo with a Potentiometer"}),"\n",(0,l.jsx)(t.li,{children:"The Buzzer\r\n-.1 Frequency"}),"\n",(0,l.jsx)(t.li,{children:"The Variable"}),"\n",(0,l.jsx)(t.li,{children:"Project 5 \u2013 The Buzzer"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"carobot-swisscheese",children:"CAROBOT SwissCHEESE"}),"\n",(0,l.jsx)(t.p,{children:"The CAROBOT SwissCHEESE is an add-on for Arduino designed to stack on top of the Arduino board. The SwissCHEESE allows us to easily use the inputs and outputs of the Arduino. Input is when the microcontroller is reading information from the outside world such as a button, while output is when the microcontroller displays information to the outside world such as blinking a light. We call each SwissCHEESE module a \u201cSlice\u201d."}),"\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.img,{alt:"Carobot Swiss Cheese",src:n(7461).A+"",width:"412",height:"217"}),"\r\nFigure: Slice"]}),"\n",(0,l.jsx)(t.h3,{id:"opening-cardublock-edu",children:"Opening CarduBlock Edu"}),"\n",(0,l.jsx)(t.p,{children:"CarduBlock Edu is built into the Arduino IDE. If you don\u2019t already have the Arduino software, download it here. The CarduBlock Edu software comes separately, and a tutorial for installing it, as well as the download link, is found here. Once everything is set-up, we can move to Step 1!"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Connect the USB cable to the Arduino board and to your computer."}),"\n",(0,l.jsx)(t.li,{children:"Open the Arduino IDE software. You need to do the following two steps every time you start programming an Arduino board or else it might give you an error."}),"\n",(0,l.jsxs)(t.li,{children:["Go to ",(0,l.jsx)("b",{children:" Tools > Board > "})," Select ",(0,l.jsx)("b",{children:" \u201cArduino/Genuino Uno\u201d "})]}),"\n",(0,l.jsxs)(t.li,{children:["Go to ",(0,l.jsx)("b",{children:" Tools > Port > "})," Select the ",(0,l.jsx)("b",{children:" COM# "})," for your Arduino. Note: It might not be COM6 as shown in the picture"]}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsxs)(t.li,{children:["Open CarduBlock Edu from ",(0,l.jsx)("b",{children:" Tools > CarduBlock Edu "})]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"project-1--blinking-a-green-led",children:"Project 1 \u2013 Blinking a Green LED"}),"\n",(0,l.jsx)(t.p,{children:"For Project 1, we are going to connect a green LED with the Arduino/SwissCHEESE board and program it so the green LED will blink. You\u2019ll need the Arduino/SwissCHEESE board, a green LED Slice, a SwissCHEESE Wire, and a USB cable for power."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsxs)(t.p,{children:[(0,l.jsx)("u",{children:"Always"})," disconnect the power (USB cable) when wiring electronics."]}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"On the SwissCHEESE: Connect a wire from O0 (which stands for OUTPUT #0) of the board to the green LED Slice."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"On your computer: From the Control bin, drag a loop to your sketch if it\u2019s not already there. Every Arduino program needs the \u201cloop\u201d block. If it is missing, Cardublock Edu will give you an error."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"From the SwissCHEESE bin, drag and connect a \u201cLED\u201d to the loop in your sketch. Note that the \u201cpin#\u201d is already set to O0, which is the one we want."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"From the \u201cControl\u201d bin, drag and connect \u201cdelay MILLIS\u201d to below the \u201cLED\u201d code block. Note that you can have longer or shorter delays depending on the number beside \u201cmilliseconds\u201d (1 second = 1000 milliseconds just like 1 meter = 1000 millimeters)."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"6",children:["\n",(0,l.jsx)(t.li,{children:"Repeat steps 4 and 5 once, building on the block of code inside \u201cloop\u201d. This time, change \u201cstatus\u201d in the second \u201cLED\u201d code block from \u201cON\u201d to \u201cOFF\u201d."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"7",children:["\n",(0,l.jsx)(t.li,{children:"Press the save button to save the sketch on your computer (be organized and save the file with a name you can recognize the program by). Remember to save often; who knows when your computer might freeze or if there will suddenly be a blackout. You don\u2019t want to lose all your work."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"8",children:["\n",(0,l.jsx)(t.li,{children:"On your computer: Press \u201cUpload to Arduino\u201d to upload the program to your Arduino board (your computer will ask you to save your program again after you press upload, so go ahead and do so)."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"9",children:["\n",(0,l.jsx)(t.li,{children:"If you were successful, the green LED should turn on for one second, then turn off for one second, and repeat."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"project-2--the-button",children:"Project 2 \u2013 The Button"}),"\n",(0,l.jsx)(t.p,{children:"Next, we are going add some inputs. The most common and simple input is a push button. When the button gets pushed, it closes a circuit and the Arduino reads this and reacts accordingly."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)("u",{children:"Always"})," disconnect the power (USB cable) when wiring electronics."]}),"\n",(0,l.jsx)(t.li,{children:"Pay attention, a button is an input. Therefore, we will use the input connection instead of the output connection. On your SwissCHEESE: Connect one wire from I0 to the button Slice."}),"\n",(0,l.jsx)(t.li,{children:"From the Control bin, drag an \u201cif\u201d block to your sketch"}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"From the SwissCHEESE bin, drag out and connect a Button block to your if code block."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"Disconnect the LED blink code in your loop code block and connect it to the \u201cthen\u201d section of your if code block"}),"\n",(0,l.jsx)(t.li,{children:"Drag the whole if code block into the loop code block."}),"\n",(0,l.jsx)(t.li,{children:"Remember to and save when you\u2019re finished. Plug your board in and upload the file. See that none of the LEDs are on!"}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"8",children:["\n",(0,l.jsx)(t.li,{children:"Press the button and see what happens."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"ifelse",children:"If/Else"}),"\n",(0,l.jsx)(t.p,{children:"\u201cIf\u201d and \u201cElse\u201d is a very important idea in programming because it allows the microcontroller to make decisions. The idea is actually very simple: If something happens (or a certain condition is true), then the program will do something (do the code in the \u201cthen\u201d area). If that something did not happen (or a certain condition is not met), then the program will do something else (do the code in the \u201celse\u201d area). It\u2019s almost the same as asking a question."}),"\n",(0,l.jsx)(t.h3,{id:"project-3--the-servo",children:"Project 3 \u2013 The Servo"}),"\n",(0,l.jsx)(t.p,{children:"A Servo is a small device that has an output shaft. This shaft moves to particular places by sending the servo a signal. As long as the signal exists, the servo will keep its place. As the signal changes, shaft\u2019s position changes. Servos are used in radio controlled airplanes and are also used in radio controlled cars, puppets, and of course, robots. For Project 3, we are going to connect a Servo with the SwissCHEESE board and program it so that the Servo can rotate back and forth between two angles.\r\nA servo."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)("u",{children:"Always"})," disconnect the USB cable (power) when wiring electronics."]}),"\n",(0,l.jsx)(t.li,{children:"On the SwissCHEESE board: Connect the Servo to O0."}),"\n",(0,l.jsx)(t.li,{children:"On your computer: From the Control bin, drag a loop block to your sketch if it\u2019s not already there. Remember that we always need a loop when programming with CarduBlock Edu."}),"\n",(0,l.jsx)(t.li,{children:"From the SwissCHEESE bin, drag a Servo block to your sketch and connect it to the loop in your sketch. Change the angle to 1."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"Add a delay block under the Servo block."}),"\n",(0,l.jsx)(t.li,{children:"Repeat steps 4 to 6 once, adding to the block of code inside the loop. This time, use 180 as the angle."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"7",children:["\n",(0,l.jsx)(t.li,{children:"Plug in your board and upload the file. If you were successful, the Servo will be moving back and forth."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"project-4--controlling-a-servo-with-a-potentiometer",children:"Project 4 \u2013 Controlling a Servo with a Potentiometer"}),"\n",(0,l.jsx)(t.p,{children:"Sometimes, we want the ability to move the servo to any place. To do this we use something called a potentiometer."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)("u",{children:"Always"})," disconnect the USB cable when wiring electronics."]}),"\n",(0,l.jsx)(t.li,{children:"On the SwissCHEESE board: Connect the potentiometer Slice to I0."}),"\n",(0,l.jsx)(t.li,{children:"Like step 4 in the last project, we\u2019ll put a Servo block in the loop block. However, drop the angle this time."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"From the Math Operators bin, drag the map block and fit it into the angle slot of the Servo block. Make sure the value is from (0 \u2013 1023) to (0 \u2013 180). The map block turns a number that at first ranges from 0-1023 to a number that ranges from 0-180. For example, 0 will remain as 0 but the 1023 will become 180 after the operation, while 512 will become 90, and so on."}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"We need to do this operation because while the value from the Potentiometer ranges between 0 and 1023, the angle signal for a servo can only be between 0 and 180.\r\n5. Then, from the SwissCHEESE bin, drag a RotaryPotentiometer to the value slot of the map block.How the program looks like after step 5.\r\n6. From the \u201cControl\u201d bin, add a short delay to the end of the loop. This is to make sure that we don\u2019t overload the Servo with signals."}),"\n",(0,l.jsxs)(t.ol,{start:"7",children:["\n",(0,l.jsx)(t.li,{children:"Plug in your board and upload the file. If you were successful, the Servo will move left and right while you move the potentiometer left and right."}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"the-buzzer",children:"The Buzzer"}),"\n",(0,l.jsx)(t.p,{children:"A buzzer is a device, almost the same as a speaker or a doorbell, that makes a sound. We can program the buzzer to make a higher or lower pitch, so if you string a bunch of tones together, you\u2019ve got music!"}),"\n",(0,l.jsx)(t.h3,{id:"frequency",children:"Frequency"}),"\n",(0,l.jsx)(t.p,{children:"Frequency is the rate a wave vibrates at for a wave, which is important because sounds are actually the vibrations of the atoms in the air. The higher the frequency, the higher the pitch. You can use the chart of frequencies below to make music. The red row is the octave of middle C."}),"\n",(0,l.jsx)("b",{children:" 8VA "}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Note"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"C"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"C#/Db"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"D"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"D#/Eb"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"E"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"F"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"F#/Gb"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"G"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"G#/Ab"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"A"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"A#/Bb"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"B"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"131"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"138"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"146"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"155"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"164"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"174"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"184"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"195"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"207"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"220"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"233"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"246"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"261"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"277"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"293"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"311"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"329"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"349"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"369"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"391"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"415"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"440"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"466"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"493"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"523"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"554"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"587"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"622"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"659"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"698"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"739"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"783"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"830"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"880"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"932"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"987"})]})]})]}),"\n",(0,l.jsx)(t.h3,{id:"the-variable",children:"The Variable"}),"\n",(0,l.jsx)(t.p,{children:"In programming, we often want to store information for later use, so to do that, we need to use something called a variable. We can store information like numbers in variables, and that information can be assigned, used, and modified in the program at any time, so each variable must have a unique name for identification. If you want to use a variable, then just \u201ccall\u201d its name.\r\nCarduBlock Edu TutorialCarduBlock Edu Tutorial\r\nThe second picture creates a variable called \u201cC4\u201d and set its value to 261."}),"\n",(0,l.jsx)(t.h3,{id:"project-5--the-buzzer",children:"Project 5 \u2013 The Buzzer"}),"\n",(0,l.jsx)(t.p,{children:"For Project 5, we are going to connect a buzzer Slice with the SwissCHEESE board and program it to create a song."}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)("u",{children:"Always"})," disconnect the USB cable when wiring electronics."]}),"\n",(0,l.jsx)(t.li,{children:"On the SwissCHEESE board: Connect a Buzzer to O0 and a Button to I0."}),"\n",(0,l.jsx)(t.li,{children:"The first thing we have to do is declare our variables, so from the Variables/Constants bin, drag a set integer variable block into the main loop of your sketch."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"4",children:["\n",(0,l.jsx)(t.li,{children:"Change the variable name to \u201cC4\u201d and the value to \u201c261\u201d."}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"5",children:["\n",(0,l.jsx)(t.li,{children:"Repeat step 4 and 5 three more times for:\r\nA. variable \u201cG3\u201d having value \u201c195\u201d\r\nB. variable \u201cA3\u201d having value \u201c220\u201d\r\nC. variable \u201cB3\u201d having value \u201c246\u201d"}),"\n"]}),"\n",(0,l.jsxs)(t.ol,{start:"6",children:["\n",(0,l.jsx)(t.li,{children:"Add a If block and a Button block at the end of the sketch to get the following.CarduBlock Edu Tutorial"}),"\n",(0,l.jsx)(t.li,{children:"Next, we\u2019ll add a Tone block from the SwissCHEESE bin into the then part of the If block.CarduBlock Edu Tutorial"}),"\n",(0,l.jsx)(t.li,{children:"Instead of using the value \u201c440\u201d, we\u2019ll use the \u201cC4\u201d variable we created earlier. To do that, remove the \u201c440\u201d block and replace it with an Integer block, then we\u2019ll rename the Integer block to \u201cC4\u201d.CarduBlock Edu Tutorial"}),"\n",(0,l.jsx)(t.li,{children:"Add a delay of \u201c250\u201d milliseconds after the Tone block, then add a NoTone block after the delay.CarduBlock Edu Tutorial"}),"\n",(0,l.jsx)(t.li,{children:"Plug in your board and upload the file. If you were successful, you should hear one tone, the middle C, when you press the button."}),"\n",(0,l.jsx)(t.li,{children:"Now let\u2019s add a few more tones to make a melody. To do this, repeat step 8 to 10 a few more times to create seven more tones. At the end, you should have the following eight tones:"}),"\n"]}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Note"}),(0,l.jsx)(t.th,{style:{textAlign:"left"},children:"Delay"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"C4 (we already did this)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"G3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"125"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"G3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"125"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"A3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"G3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"(Rest)"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"B3"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250"})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"C4"}),(0,l.jsx)(t.td,{style:{textAlign:"left"},children:"250"})]})]})]}),"\n",(0,l.jsx)(t.p,{children:"Upload your program. If you were successful, you should hear a melody when you press the button."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},7461:(e,t,n)=>{n.d(t,{A:()=>l});const l=n.p+"assets/images/swiss_cheese_io-ea739b6b2c35b5f82c84ae8cbdc3e763.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var l=n(6540);const o={},i=l.createContext(o);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);