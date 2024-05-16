# Beetle Robot


## Objectives

<p>Let's get familiar with how the BeetleBot work!</p>

<p>The primary objective of this project is to explore the use of flexible sensors, a.k.a. "flex sensors", in robotics. By building a beetle-inspired robot, we will learn how these sensors mimic the antennae of beetles to help the robot navigate its environment.</p>

<p>Through this project, we will:</p> 
- Understand the working principles of flex sensors.
- Gain hands-on experience in assembling and programming a simple robot.
- Learn about basic electronics and Arduino programming.
- Explore how sensors can be used for navigation and obstacle avoidance.


## Requirements
### Hardware
- **Simple Robot Chassis Kit**: Includes 2 DC motors, 2 wheels, and a battery holder.
- **Flex Sensors (2.2” x 2)**: Sensors that change resistance when bent.
- **Arduino Uno + Cable**: Microcontroller board for programming and controlling the robot.
- **CAROBOT Motor Shield v3**: Extension board for driving the motors.
- **0.1 microF Capacitors (x2)**: For filtering noise in the circuit.
- **Resistors**: 
  - 220 ohm resistors (x2) for current limiting.
  - 10k ohm resistor (x1) for the push button.
- **Push Button**: For starting or resetting the robot.
- **Mini Breadboard**: For creating the circuit connections.
- **Jumper Wires**: For connecting components on the breadboard.
- **AA Batteries (x4)**: Power source for the robot.

### Software
- **Arduino IDE**: Integrated Development Environment for writing and uploading code to the Arduino board.
- **Basic C/C++ Programming Knowledge**: To understand and write the Arduino code.


## Bill of Material:
1. 1x Simple Robot Chassis Kit (2 DC motors, 2 Wheels, battery holder)
2. 2x flex sensor - 2.2”
3. 1x Arduino Uno + Cable
4. 1x CAROBOT motor shield v3
5. 2x 0.1 microF capacitor
6. 2x resistor (not sure what value, can use 220)
7. 1x 10k resistor
8. 1x push button
9. 1x mini breadboard
10. Jumper wires
11. 4x AA batteries


## Design
The Beetle Robot is designed to mimic the behavior of a beetle using its antennae for navigation. The design includes:
- **Chassis and Motors**: The base structure of the robot with wheels driven by DC motors.
- **Flex Sensors**: Attached to the front of the robot, acting as antennae to detect obstacles.
- **Arduino and Motor Shield**: Central control system that processes sensor data and controls the motors.
- **Power Supply**: Batteries to power the entire system.
- **Push Button**: For user interaction to start or reset the robot.

When an antenna (flex sensor) bends upon touching an obstacle, it changes its resistance. The Arduino reads this change and makes the robot back away and change direction, simulating the beetle’s behavior.


## Implementation
1. **Assemble the Chassis**: Attach the DC motors and wheels to the chassis. Insert the batteries into the holder.
2. **Set Up the Flex Sensors**: Connect the flex sensors to the mini breadboard and wire them to the Arduino. Use the capacitors and resistors as needed.
3. **Install the Motor Shield**: Attach the motor shield to the Arduino and connect the DC motors.
4. **Connect the Push Button**: Wire the push button to the Arduino through the breadboard.
5. **Write the Code**: Use the Arduino IDE to write a program that reads the flex sensor data and controls the motors based on the sensor input.
6. **Test and Debug**: Upload the code to the Arduino, test the robot’s functionality, and make necessary adjustments.


## Conclusion
Through this project, you will have gained practical experience in building and programming a robot, understanding the use of flex sensors for navigation, and learning basic principles of electronics and robotics. This hands-on project not only enhances your technical skills, but also emphasizes the "hows" and "whys" by demonstrating real-world applications of sensors and robotics.