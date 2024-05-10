/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Generate sidebar items from a specific folder
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
};

export default sidebars;