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
  projectsSidebar: [
    {
      'Projects': ['projects/Ant Robot','projects/Bat Robot',
      'projects/Beetle Robot', 'projects/Canada Goose Robot',
      'projects/Fly Robot','projects/Guard Dog Robot',
      'projects/Moth Robot'
      ],
    }
  ],
};

export default sidebars;