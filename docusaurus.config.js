// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Academic Microsite',
  tagline: 'A simple academic and professional microsite',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ahmadjafari24.github.io',
  baseUrl: '/my-website/',

  organizationName: 'Ahmadjafari24',
  projectName: 'my-website',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Academic Microsite',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },

        items: [
          {
            to: '/docs/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/docs/contact',
            label: 'Contact',
            position: 'left',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Pages',
            items: [
              {
                label: 'About',
                to: '/docs/about',
              },
              {
                label: 'Contact',
                to: '/docs/contact',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Ahmadjafari24',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Academic Microsite`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;