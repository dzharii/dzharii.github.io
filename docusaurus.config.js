// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dmytro Zharii',
  tagline: 'Personal Wiki',
  url: 'https://blog.zharii.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dzharii', // Usually your GitHub org/user name.
  projectName: 'dzharii.github.io', // Usually your repo name.

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  scripts: [
    // Clippy.JS
    '/clippy.js/jquery-3.6.0.min.js',
    '/clippy.js/clippy.js',
  ],

  stylesheets: [
    '/clippy.js/clippy.css'
  ],

  clientModules: [
    require.resolve('./src/modules/clippy-module.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [require('mdx-mermaid')],
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dzharii/dzharii.github.io/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/dzharii/dzharii.github.io/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Personal Wiki',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://blog.zharii.com/blog/rss.xml', label: '[RSS]', position: 'left'},
          {
            href: 'https://github.com/dzharii/dzharii.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Disclaimer: The content on this website is my personal work and reflects my own views and opinions. 
            It is not associated with or endorsed by any of my past, current, or future employers. This site contains links to external websites and compiled pages from various sources. 
            I do not claim any rights or responsibility for the content of these external materials. 
            All content is provided "AS IS" without any guarantees or warranties.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
