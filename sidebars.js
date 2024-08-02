/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

// Generate sidebar items from a specific folder
const sidebars = {

  navigationSidebar: [
    'about-us',
    {
      'Meet the Directors' : ['Directors and Executives/Directors','Directors and Executives/Executives'],
    },
  ],

   tutorialSidebar: [
    {
      'Tutorials': [
        'tutorials/Introduction',
        'tutorials/CarduBlock-Edu-Tutorial',
        'tutorials/robot-with-real-time-temperature-display',
      ],
    }
  ],

  projectsSidebar: [
    {
      'Projects': 
      [
        'projects/ant-robot',
        'projects/bat-robot',
        'projects/beetle-robot', 
        'projects/canada-goose-robot',
        'projects/fly-robot',
        'projects/guard-dog-robot',
        'projects/moth-robot'
      ],
      'ESP32 Starter Kit': [
        'projects/ESP32-Starter-Kit/Introduction',
        'projects/ESP32-Starter-Kit/Components-and-Installation',
        'projects/ESP32-Starter-Kit/Project-1',
        'projects/ESP32-Starter-Kit/Project-2',
        'projects/ESP32-Starter-Kit/Project-3',
        'projects/ESP32-Starter-Kit/Project-4',
        'projects/ESP32-Starter-Kit/Project-5.1',
        'projects/ESP32-Starter-Kit/Project-5.2',
        'projects/ESP32-Starter-Kit/Project-6.1',
        'projects/ESP32-Starter-Kit/Project-6.2',
      ],
      'Ethanol Detector Using An MQ3 Sensor': [
        'projects/Ethanol-Detector/Introduction',
        'projects/Ethanol-Detector/Getting-Started',
        'projects/Ethanol-Detector/Working-Principle',
        'projects/Ethanol-Detector/Testing',
      ],
      'Microbit Robot':[
        'projects/Microbit-Robot/Introduction',
        'projects/Microbit-Robot/Getting-Started',
        'projects/Microbit-Robot/Working-Principle',
      ],
      'Microbit Robot': [
        'projects/Microbit-Robot/Introduction',
        'projects/Microbit-Robot/Getting-Started',
        'projects/Microbit-Robot/Working-Principle',
      ]
    }
  ],
  
};

export default sidebars;