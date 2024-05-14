import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/carobot.org/blog',
    component: ComponentCreator('/carobot.org/blog', '182'),
    exact: true
  },
  {
    path: '/carobot.org/blog/archive',
    component: ComponentCreator('/carobot.org/blog/archive', '329'),
    exact: true
  },
  {
    path: '/carobot.org/blog/first-blog-post',
    component: ComponentCreator('/carobot.org/blog/first-blog-post', '82b'),
    exact: true
  },
  {
    path: '/carobot.org/blog/long-blog-post',
    component: ComponentCreator('/carobot.org/blog/long-blog-post', 'fc3'),
    exact: true
  },
  {
    path: '/carobot.org/blog/mdx-blog-post',
    component: ComponentCreator('/carobot.org/blog/mdx-blog-post', '64c'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags',
    component: ComponentCreator('/carobot.org/blog/tags', '6c8'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/docusaurus',
    component: ComponentCreator('/carobot.org/blog/tags/docusaurus', 'a7f'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/facebook',
    component: ComponentCreator('/carobot.org/blog/tags/facebook', 'd09'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/hello',
    component: ComponentCreator('/carobot.org/blog/tags/hello', '37d'),
    exact: true
  },
  {
    path: '/carobot.org/blog/tags/hola',
    component: ComponentCreator('/carobot.org/blog/tags/hola', 'edd'),
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
    component: ComponentCreator('/carobot.org/docs', '4a9'),
    routes: [
      {
        path: '/carobot.org/docs',
        component: ComponentCreator('/carobot.org/docs', '27a'),
        routes: [
          {
            path: '/carobot.org/docs',
            component: ComponentCreator('/carobot.org/docs', '51e'),
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
