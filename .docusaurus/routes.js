import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/carobot.org/__docusaurus/debug',
    component: ComponentCreator('/carobot.org/__docusaurus/debug', '4cb'),
    exact: true
  },
  {
    path: '/carobot.org/__docusaurus/debug/config',
    component: ComponentCreator('/carobot.org/__docusaurus/debug/config', '2d7'),
    exact: true
  },
  {
    path: '/carobot.org/__docusaurus/debug/content',
    component: ComponentCreator('/carobot.org/__docusaurus/debug/content', 'c90'),
    exact: true
  },
  {
    path: '/carobot.org/__docusaurus/debug/globalData',
    component: ComponentCreator('/carobot.org/__docusaurus/debug/globalData', 'ea5'),
    exact: true
  },
  {
    path: '/carobot.org/__docusaurus/debug/metadata',
    component: ComponentCreator('/carobot.org/__docusaurus/debug/metadata', '259'),
    exact: true
  },
  {
    path: '/carobot.org/__docusaurus/debug/registry',
    component: ComponentCreator('/carobot.org/__docusaurus/debug/registry', '46e'),
    exact: true
  },
  {
    path: '/carobot.org/__docusaurus/debug/routes',
    component: ComponentCreator('/carobot.org/__docusaurus/debug/routes', 'd48'),
    exact: true
  },
  {
    path: '/carobot.org/blog',
    component: ComponentCreator('/carobot.org/blog', 'e4d'),
    exact: true
  },
  {
    path: '/carobot.org/blog/archive',
    component: ComponentCreator('/carobot.org/blog/archive', '329'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags',
    component: ComponentCreator('/carobot.org/blog/tags', '6c8'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/announcement',
    component: ComponentCreator('/carobot.org/blog/tags/announcement', 'f3a'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/outreach',
    component: ComponentCreator('/carobot.org/blog/tags/outreach', '3c3'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/stem',
    component: ComponentCreator('/carobot.org/blog/tags/stem', '7ac'),
    exact: true
  },
  {
    path: '/carobot.org/blog/welcome',
    component: ComponentCreator('/carobot.org/blog/welcome', 'b69'),
    exact: true
  },
  {
    path: '/carobot.org/markdown-page',
    component: ComponentCreator('/carobot.org/markdown-page', '7f8'),
    exact: true
  },
  {
    path: '/carobot.org/docs',
    component: ComponentCreator('/carobot.org/docs', '4ec'),
    routes: [
      {
        path: '/carobot.org/docs',
        component: ComponentCreator('/carobot.org/docs', '9c8'),
        routes: [
          {
            path: '/carobot.org/docs',
            component: ComponentCreator('/carobot.org/docs', '27d'),
            routes: [
              {
                path: '/carobot.org/docs/about-us',
                component: ComponentCreator('/carobot.org/docs/about-us', 'a97'),
                exact: true,
                sidebar: "navigationSidebar"
              },
              {
                path: '/carobot.org/docs/contact/contact-us',
                component: ComponentCreator('/carobot.org/docs/contact/contact-us', '5ce'),
                exact: true
              },
              {
                path: '/carobot.org/docs/Directors and Executives/Directors',
                component: ComponentCreator('/carobot.org/docs/Directors and Executives/Directors', '25e'),
                exact: true,
                sidebar: "navigationSidebar"
              },
              {
                path: '/carobot.org/docs/Directors and Executives/Executives',
                component: ComponentCreator('/carobot.org/docs/Directors and Executives/Executives', 'e9f'),
                exact: true,
                sidebar: "navigationSidebar"
              },
              {
                path: '/carobot.org/docs/projects/ant-robot',
                component: ComponentCreator('/carobot.org/docs/projects/ant-robot', 'd62'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/projects/bat-robot',
                component: ComponentCreator('/carobot.org/docs/projects/bat-robot', '0bf'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/projects/beetle-robot',
                component: ComponentCreator('/carobot.org/docs/projects/beetle-robot', 'ca7'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/projects/canada-goose-robot',
                component: ComponentCreator('/carobot.org/docs/projects/canada-goose-robot', '091'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/projects/fly-robot',
                component: ComponentCreator('/carobot.org/docs/projects/fly-robot', 'e28'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/projects/guard-dog-robot',
                component: ComponentCreator('/carobot.org/docs/projects/guard-dog-robot', '8e3'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/projects/moth-robot',
                component: ComponentCreator('/carobot.org/docs/projects/moth-robot', '25d'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/carobot.org/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/carobot.org/docs/tutorial-extras/manage-docs-versions', '979'),
                exact: true
              },
              {
                path: '/carobot.org/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/carobot.org/docs/tutorial-extras/translate-your-site', '251'),
                exact: true
              },
              {
                path: '/carobot.org/docs/tutorials/CarduBlock-Edu-Tutorial',
                component: ComponentCreator('/carobot.org/docs/tutorials/CarduBlock-Edu-Tutorial', 'cf4'),
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
    path: '/carobot.org/',
    component: ComponentCreator('/carobot.org/', 'eda'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
