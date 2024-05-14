import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e21'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '245'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '4c4'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fb9'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'aba'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '41a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
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
    component: ComponentCreator('/docs', 'adf'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'fbf'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd43'),
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
