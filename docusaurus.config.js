// @ts-nocheck
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import React from 'react';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carobot Learning and Research Organization',
  tagline: 'STEM Outreach and Education',
  favicon: 'img/carobot.png',

  // Set the production url of your site here
  url: 'https://carobot.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Carobot', // Usually your GitHub org/user name.
  projectName: 'carobot.org', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: '...img/carobot.png',
    navbar: {
      logo: {
        alt: 'Carobot',
        src: 'img/carobotLogo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'navigationSidebar',
          position: 'left',
          label: 'About Us',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorials',
        },
        {
          to: 'docs/contact/contact-us',
          label: 'Contact Us',
          position: 'left'
        },

        // Add more navigation links as needed here
        
        /* {to: '/tutorials', label: 'Tutorials', position: 'left'}, */
        { to: '/blog', label: 'Blog', position: 'left' },

        /* This link isnt really needed but we could add our own repo here
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About Us',
          items: [
            {
              label: 'Our Mission',
              to: '/docs/about-us',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: "Instagram",
              href: 'https://www.instagram.com/carobotorg/',
            },
            {
              label: 'Email',
              href: 'mailto: info@carobot.org',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/carobotorg/',
            },
            {
              label: 'X',
              href: 'https://twitter.com/carobotorg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carobot Org.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Include the sidebar configuration file
    sidebarPath: require.resolve('./sidebars.js'),
  },
};

export default config;
