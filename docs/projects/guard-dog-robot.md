# Guard Dog Bot

## Objectives

<p>Let's get familiar with how the Guard Dog Bot works!</p>

![Carobot Swiss Cheese](img/dog-drawing.JPG)

<p>The primary objective of this project is to explore the use of infrared sensors, a.k.a. "IR sensors," in robotics. By building a guard dog-inspired robot, we will learn how these sensors mimic the night vision of dogs to help the robot detect and move towards objects in its path.</p>

<p>Through this project, we will:</p>
- Understand the working principles of infrared sensors.
- Gain hands-on experience in assembling and programming a simple robot.
- Learn about basic electronics and Arduino programming.
- Explore how sensors can be used for object detection and movement.

## Requirements
### Hardware
- **Simple Robot Chassis Kit**: Includes 2 DC motors, 2 wheels, and a battery holder.
- **Infrared Sensor (IR Sensor)**: Sensor that detects infrared light waves and calculates the distance to objects.
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
![Carobot Swiss Cheese](img/infrared-sensor.png)


## Bill of Material:
1. Simple Robot Chassis Kit (2 DC motors, 2 Wheels, battery holder)
2. Infrared Sensor
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
The Guard Dog Bot is designed to mimic the behavior of a guard dog using its infrared vision for navigation. The design includes:
- **Chassis and Motors**: The base structure of the robot with wheels driven by DC motors.
- **Infrared Sensor**: Attached to the front of the robot, detecting objects by reflecting infrared light waves.
- **Arduino and Motor Shield**: Central control system that processes sensor data and controls the motors.
- **Power Supply**: Batteries to power the entire system.
- **Push Button**: For user interaction to start or reset the robot.

When the infrared sensor detects an object in its path, it measures the distance by reflecting infrared light waves (heat) and calculating how far away the object is. The Arduino processes this information and relays it to the motors, driving the robot forward towards the object.

## Implementation
1. **Assemble the Chassis**: Attach the DC motors and wheels to the chassis. Insert the batteries into the holder.
2. **Set Up the Infrared Sensor**: Connect the IR sensor to the mini breadboard and wire it to the Arduino. Use the capacitors and resistors as needed.
3. **Install the Motor Shield**: Attach the motor shield to the Arduino and connect the DC motors.
4. **Connect the Push Button**: Wire the push button to the Arduino through the breadboard.
5. **Write the Code**: Use the Arduino IDE to write a program that reads the IR sensor data and controls the motors based on the sensor input.
6. **Test and Debug**: Upload the code to the Arduino, test the robot’s functionality, and make necessary adjustments.


<br></br>
![Carobot Swiss Cheese](img/dog-wiring.png)


## Conclusion
Through this project, you will have gained practical experience in building and programming a robot, understanding the use of infrared sensors for object detection, and learning basic principles of electronics and robotics. This hands-on project not only enhances your technical skills but also emphasizes the "hows" and "whys" by demonstrating real-world applications of sensors and robotics.
