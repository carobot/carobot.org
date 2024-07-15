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
        {
          'Chassis Robot':[
            'tutorials/chassis-robot/chassis-robot',
            'tutorials/chassis-robot/building',
            'tutorials/chassis-robot/programming',
            'tutorials/chassis-robot/wiring',
          ]
        },
        {
          'Discovery Kit':[
            'tutorials/discovery-kit/discovery-kit',
            'tutorials/discovery-kit/introduction',
            'tutorials/discovery-kit/arduino-hardware',
          ]
        },
        {
          'Introduction to C':[
            'tutorials/intro-to-C/c01-beginning',
            'tutorials/intro-to-C/c02-types',
            'tutorials/intro-to-C/c03-literals',
            'tutorials/intro-to-C/c04-operator',
            'tutorials/intro-to-C/c05-constructs',
            'tutorials/intro-to-C/c06-arrays',
            'tutorials/intro-to-C/c07-functions',
            'tutorials/intro-to-C/c08-data-conversions',
          ]
        },
        {
          'KiCAD Tutorial':[
            'tutorials/kicad/kicad',
            'tutorials/kicad/kicad-basic',
          ]
        },
        'tutorials/robot-with-real-time-temperature-display',
        {
          'TinkerKit LCD Tutorial':[
            'tutorials/tinkerkit/tinkerkit-lcd-0',
            'tutorials/tinkerkit/tinkerkit-lcd-1',
            'tutorials/tinkerkit/tinkerkit-lcd-2',
            'tutorials/tinkerkit/tinkerkit-lcd-3',
            'tutorials/tinkerkit/tinkerkit-lcd-4',
            'tutorials/tinkerkit/tinkerkit-lcd-5',
            'tutorials/tinkerkit/tinkerkit-lcd-6',
          ]
        },
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
    }
  ],
  
};

export default sidebars;