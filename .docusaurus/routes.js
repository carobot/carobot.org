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
    path: '/blog/tags/announcement',
    component: ComponentCreator('/blog/tags/announcement', 'c32'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'f7d'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '695'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8e5'),
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
    component: ComponentCreator('/docs', '2b0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '57f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '65b'),
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
                path: '/docs/projects/Ant Robot',
                component: ComponentCreator('/docs/projects/Ant Robot', 'caa'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Bat Robot',
                component: ComponentCreator('/docs/projects/Bat Robot', '5f6'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Beetle Robot',
                component: ComponentCreator('/docs/projects/Beetle Robot', '805'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Canada Goose Robot',
                component: ComponentCreator('/docs/projects/Canada Goose Robot', '6e8'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Fly Robot',
                component: ComponentCreator('/docs/projects/Fly Robot', '36c'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Guard Dog Robot',
                component: ComponentCreator('/docs/projects/Guard Dog Robot', 'be1'),
                exact: true,
                sidebar: "projectsSidebar"
              },
              {
                path: '/docs/projects/Moth Robot',
                component: ComponentCreator('/docs/projects/Moth Robot', 'b5d'),
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
