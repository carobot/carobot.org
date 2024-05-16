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
      'Tutorials': ['tutorials/CarduBlock-Edu-Tutorial'],
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
    }
  ],
  
};

export default sidebars;