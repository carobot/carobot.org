# Fly Bot

## Objectives

<p>Let's get familiar with how the FlyBot works!</p>

![Carobot Swiss Cheese](img/fly-drawing.png)

<p>The primary objective of this project is to explore the use of Time-of-Flight sensors, a.k.a. "ToF sensors," in robotics. By building a fly-inspired robot, we will learn how these sensors mimic the compound eyes of flies to help the robot navigate its environment at high speeds.</p>

<p>Through this project, we will:</p>
- Understand the working principles of Time-of-Flight sensors.
- Gain hands-on experience in assembling and programming a simple robot.
- Learn about basic electronics and Arduino programming.
- Explore how sensors can be used for navigation and obstacle avoidance.

## Requirements
### Hardware
- **Simple Robot Chassis Kit**: Includes 2 DC motors, 2 wheels, and a battery holder.
- **Time-of-Flight Sensors (ToF Sensors)**: Sensors that measure distance by timing how long it takes for light to bounce back from objects.
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


<br></br>
![Carobot Swiss Cheese](img/TOF-sensor.png)


## Bill of Material:
1. Simple Robot Chassis Kit (2 DC motors, 2 Wheels, battery holder)
2. Time-of-Flight Sensors
3. Arduino Uno + Cable
4. CAROBOT motor shield v3
5. 0.1 microF capacitor
6. 220 Ohms resistor
7. 10k Ohms resistor
8. push button
9. mini breadboard
10. Jumper wires
11. AA batteries


<br></br>
![Carobot Swiss Cheese](img/general_kit.jpeg)


## Design
The FlyBot is designed to mimic the behavior of a fly using its compound eyes for navigation. The design includes:
- **Chassis and Motors**: The base structure of the robot with wheels driven by DC motors.
- **Time-of-Flight Sensors**: Attached to the front of the robot, acting as compound eyes to detect distances and shapes.
- **Arduino and Motor Shield**: Central control system that processes sensor data and controls the motors.
- **Power Supply**: Batteries to power the entire system.
- **Push Button**: For user interaction to start or reset the robot.

When the Time-of-Flight sensors detect an object, they measure the time it takes for the laser light to bounce back, calculating the distance. The Arduino reads this data and adjusts the robot's movement, simulating the fly’s rapid navigation.


## Implementation
1. **Assemble the Chassis**: Attach the DC motors and wheels to the chassis. Insert the batteries into the holder.
2. **Set Up the Time-of-Flight Sensors**: Connect the ToF sensors to the mini breadboard and wire them to the Arduino. Use the capacitors and resistors as needed.
3. **Install the Motor Shield**: Attach the motor shield to the Arduino and connect the DC motors.
4. **Connect the Push Button**: Wire the push button to the Arduino through the breadboard.
5. **Write the Code**: Use the Arduino IDE to write a program that reads the ToF sensor data and controls the motors based on the sensor input.
6. **Test and Debug**: Upload the code to the Arduino, test the robot’s functionality, and make necessary adjustments.


<br></br>
![Carobot Swiss Cheese](img/fly-wiring.png)


## Conclusion
Through this project, you will have gained practical experience in building and programming a robot, understanding the use of Time-of-Flight sensors for navigation, and learning basic principles of electronics and robotics. This hands-on project not only enhances your technical skills but also emphasizes the "hows" and "whys" by demonstrating real-world applications of sensors and robotics.
