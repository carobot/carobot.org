---
title: Getting Started
sidebar_position: 2
---

## Components
| Component Name                         | Image        |
|----------------------------------------|--------------|
| [BBC micro:bit v2 Go Bundle](https://www.canadarobotix.com/products/2647?variant=32508815310897)                       | <img src="/img/docs/microbit/microbit.webp" width="200" /> |
| Micro:bit compatible breakout board     | <img src="/img/docs/microbit/breakout-board.jpg" width="200" /> |
| [4x AA Batteries](https://www.canadarobotix.com/products/1916)                        | <img src="/img/docs/microbit/batteries.webp" width="200" /> |
| [Motor Shield V3](https://www.canadarobotix.com/products/2337)                        | <img src="/img/docs/microbit/motor-shield.webp" width="200" /> |
| [Robot Chassis Kit](https://www.canadarobotix.com/products/2794)                           | <img src="/img/docs/microbit/robot-chassis.webp" width="200" /> |
| [Small Breadboard](https://www.canadarobotix.com/products/223)                       | <img src="\img\docs\microbit\breadboard.webp" width="200" /> |
| [2x Flex Sensors](https://www.canadarobotix.com/products/2290)                        | <img src="/img/docs/microbit/flex-sensors.webp" width="200" /> |
| [Jumper Wires](https://www.canadarobotix.com/products/922)                           | <img src="\img\docs\microbit\jumper-wires.webp" width="200" /> |
| [2x 100nF Ceramic Capacitors](https://www.canadarobotix.com/products/1087)            | <img src="\img\docs\microbit\100nF_capacitor.webp" width="200" /> |
| 2x 211 kΩ ±0.5% Resistors              | <img src="\img\docs\microbit\resistors.webp" width="200" /> |
| 1x 130 Ω ±0.5% Resistor                | <img src="\img\docs\microbit\resistors.webp" width="200" /> |
| [1x Button](https://www.canadarobotix.com/products/545)                              | <img src="\img\docs\microbit\switch-button.webp" width="200" /> |

## Hardware Setup

Keeping the diagram as a reference, here are the connections to be made to the motor shield using jumper wires:



The breakout board we used has a red row and a black row which is used for the 3.3 IN and GND respectively. Connections are to be made to  5V and GND on the motorshield. (Motorshield’s pwr1  IN does not light up and the board logic is not powered with 3.3V).

PIN 0 and PIN 1 on the micro:bit => A0 and A1 on the motorshield which is in turn connected to the two flex sensors.
Since we are using M2 and M4, the respective pinouts on the motorshield ie. 11, 12 & 5,6 of the digital pin array are connected to the microbit. (Refer to the CAROBOT Motor shield V3 guide for more information) As for which pins on the micro:bit that the connection is made is flexible. Just has to be one of the GPIO pins. However, care is to be taken that it is not interfering with the microbit display or buttons. If that is the case, they have to be turned off in the code before accessing those pins.
A4 and A5 on the motor shield are connected to Pin 20 (SDA) AND Pin 19(SCL) respectively. These are not interchangeable as they facilitate the i2c communication.
Digital Pin 8 on the motorshield is used to complete the button circuit that is used to calibrate the flex sensors. It can be connected to any GPIO pin on the micro:bit, keeping in mind the previously mentioned conditions.
Finally, the small circuit on the breadboard has to be connected to the Vin and the GND on the motorshield thereby completing the circuit.

