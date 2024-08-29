---
title: Working Principle
sidebar_position: 3
---

The Microbit Insect Robot operates through a combination of microcontroller programming, electrical circuitry, and motor control. Central to its functionality is the micro:bit, which replaces the traditional Arduino microcontroller, interfacing with the Adafruit Motor Shield V2 to control the robot's movements and actions.

The micro:bit uses I2C communication to interface with the Adafruit Motor Shield V2. I2C, or Inter-Integrated Circuit, is a communication protocol that allows multiple devices to connect to the microcontroller using just two wires: SCL (clock) and SDA (data).These lines facilitate the transfer of data between the micro and the motor shield, enabling precise control of the motors.

The robot uses DC motors for movement, which are controlled by the Adafruit Motor Shield V2. The micro sends signals to the motor shield, specifying the desired direction and speed. The motor shield uses H-bridge circuits to drive the motor forward, backward, or to stop them. This is achieved by manipulating the voltage supplied to the motors.

The sensory system consists of two simple flex sensors of which the working is illustrated below:

<img src="\img\docs\microbit\microbit_3.png" width="700" />
