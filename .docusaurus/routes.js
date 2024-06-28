import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '466'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'f2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/announcement',
    component: ComponentCreator('/blog/tags/announcement', 'c32'),
    exact: true
  },
  {
    path: '/blog/tags/outreach',
    component: ComponentCreator('/blog/tags/outreach', 'ce5'),
    exact: true
  },
  {
    path: '/blog/tags/stem',
    component: ComponentCreator('/blog/tags/stem', 'ddd'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '288'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b70'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b1b'),
            routes: [
              {
                path: '/docs/about-us',
                component: ComponentCreator('/docs/about-us', '64f'),
                exact: true,
                sidebar: "navigationSidebar"
              },
              {
                path: '/docs/contact/contact-us',
                component: ComponentCreator('/docs/contact/contact-us', '66c'),
                exact: true
              },
              {
                path: '/docs/Directors and Executives/Directors',
                component: ComponentCreator('/docs/Directors and Executives/Directors', '3fd'),
                exact: true,
                sidebar: "navigationSidebar"
              },
              {
                path: '/docs/Directors and Executives/Executives',
                component: ComponentCreator('/docs/Directors and Executives/Executives', '4bf'),
                exact: true,
                sidebar: "navigationSidebar"
              },
              {
                path: '/docs/projects/ant-robot',
                component: ComponentCreator('/docs/projects/ant-robot', '062'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/bat-robot',
                component: ComponentCreator('/docs/projects/bat-robot', '11e'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/beetle-robot',
                component: ComponentCreator('/docs/projects/beetle-robot', '65d'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/canada-goose-robot',
                component: ComponentCreator('/docs/projects/canada-goose-robot', '373'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/fly-robot',
                component: ComponentCreator('/docs/projects/fly-robot', 'cd7'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/guard-dog-robot',
                component: ComponentCreator('/docs/projects/guard-dog-robot', 'bd3'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/moth-robot',
                component: ComponentCreator('/docs/projects/moth-robot', 'a62'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'a34'),
                exact: true
              },
              {
                path: '/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '739'),
                exact: true
              },
              {
                path: '/docs/tutorials/CarduBlock-Edu-Tutorial',
                component: ComponentCreator('/docs/tutorials/CarduBlock-Edu-Tutorial', 'e3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/chassis-robot/',
                component: ComponentCreator('/docs/tutorials/chassis-robot/', '0b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/chassis-robot/building',
                component: ComponentCreator('/docs/tutorials/chassis-robot/building', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/chassis-robot/programming',
                component: ComponentCreator('/docs/tutorials/chassis-robot/programming', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/chassis-robot/wiring',
                component: ComponentCreator('/docs/tutorials/chassis-robot/wiring', 'd6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/discovery-kit/',
                component: ComponentCreator('/docs/tutorials/discovery-kit/', 'd86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/discovery-kit/arduino-hardware',
                component: ComponentCreator('/docs/tutorials/discovery-kit/arduino-hardware', '536'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/discovery-kit/introduction',
                component: ComponentCreator('/docs/tutorials/discovery-kit/introduction', '2fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c01-beginning',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c01-beginning', 'b8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c02-types',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c02-types', 'f5f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c03-literals',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c03-literals', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c04-operator',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c04-operator', '1b7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c05-constructs',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c05-constructs', 'f9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c06-arrays',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c06-arrays', 'd12'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c07-functions',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c07-functions', '8c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/intro-to-C/c08-data-conversions',
                component: ComponentCreator('/docs/tutorials/intro-to-C/c08-data-conversions', '0c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/Introduction',
                component: ComponentCreator('/docs/tutorials/Introduction', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/kicad/',
                component: ComponentCreator('/docs/tutorials/kicad/', '5e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/kicad/kicad-basic',
                component: ComponentCreator('/docs/tutorials/kicad/kicad-basic', '8f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/robot-with-real-time-temperature-display',
                component: ComponentCreator('/docs/tutorials/robot-with-real-time-temperature-display', '3a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/',
                component: ComponentCreator('/docs/tutorials/tinkerkit/', 'b57'),
                exact: true
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-01-windows-installation-guide', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-02-introduction-to-lcd', 'c29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-03-lcd-serial', '301'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-04-lcd-local-no-arduino', 'b50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-05-arduino-2-wires', '065'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorial-06-arduino-2-wires', '13f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorials',
                component: ComponentCreator('/docs/tutorials/tinkerkit/tinkerkit-lcd-tutorials', '5e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
