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
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
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
    component: ComponentCreator('/blog', '725'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/announcement',
    component: ComponentCreator('/blog/tags/announcement', '6f2'),
    exact: true
  },
  {
    path: '/blog/tags/outreach',
    component: ComponentCreator('/blog/tags/outreach', '4d9'),
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
    component: ComponentCreator('/docs', 'af8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd61'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f29'),
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
                path: '/docs/projects/Microbit-Robot/Getting-Started',
                component: ComponentCreator('/docs/projects/Microbit-Robot/Getting-Started', '505'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Microbit-Robot/Introduction',
                component: ComponentCreator('/docs/projects/Microbit-Robot/Introduction', 'f20'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Microbit-Robot/Working-Principle',
                component: ComponentCreator('/docs/projects/Microbit-Robot/Working-Principle', '382'),
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
                path: '/docs/tutorials/Introduction',
                component: ComponentCreator('/docs/tutorials/Introduction', 'eae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/robot-with-real-time-temperature-display',
                component: ComponentCreator('/docs/tutorials/robot-with-real-time-temperature-display', '3a3'),
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
