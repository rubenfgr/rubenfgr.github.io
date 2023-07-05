// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ruben Rosales Web',
  tagline: 'Desarrollador de páginas Web, aplicaciones Web y multiplataforma',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ruben-rosales.es',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rubenfgr', // Usually your GitHub org/user name.
  projectName: 'ruben-rosales-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
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
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Ruben Rosales Web',
        logo: {
          alt: 'Ruben Rosales Web Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rubenfgr',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          src: 'img/logo.svg',
          width: 40,
          href: 'https://ruben-rosales.es',
          alt: 'test'
        },
        links: [
          {
            html: `
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
                <script>
                  document.getElementById("personal_email").addEventListerner('click', () => console.log('OK'));
                </script>
              `
          },
          {
            html: `
              <h2>Información de contacto</h2>
              <div class="footer__contact-info__item">
                <span class="material-symbols-outlined footer__material-symbols-outlined">mail</span>
                <a title="Correo personal - Rubén Rosales" href="mail:rubenfranciscogr@outlook.com" target="_blank">rubenfranciscogr@outlook.com</a>
              </div>
              <br />
            `,
          },
          {
            html: `
              
              <h2>Sígueme en mis redes</h2>
              <div class="footer__social">
                <!-- FACEBOOK -->
                <a
                  title="Facebook - Rubén Rosales"
                  href="https://www.facebook.com/rubenfrancisco.gazquezrosales"
                  target="_blank"
                >
                  <svg
                    class="footer__social__svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M26.9717 0H3.23661C2.37821 0 1.55496 0.343994 0.94798 0.956307C0.340999 1.56862 0 2.3991 0 3.26504L0 27.2086C0 28.0746 0.340999 28.9051 0.94798 29.5174C1.55496 30.1297 2.37821 30.4737 3.23661 30.4737H12.4913V20.1133H8.24323V15.2368H12.4913V11.5201C12.4913 7.2926 14.9862 4.95742 18.8074 4.95742C20.6374 4.95742 22.5511 5.28664 22.5511 5.28664V9.43596H20.4425C18.3651 9.43596 17.7171 10.7365 17.7171 12.0704V15.2368H22.3548L21.6131 20.1133H17.7171V30.4737H26.9717C27.8301 30.4737 28.6534 30.1297 29.2604 29.5174C29.8673 28.9051 30.2083 28.0746 30.2083 27.2086V3.26504C30.2083 2.3991 29.8673 1.56862 29.2604 0.956307C28.6534 0.343994 27.8301 0 26.9717 0Z"
                      fill="#FEFEFE"
                    />
                  </svg>
                </a>

                <!-- LINKEDIN -->
                <a
                  title="Linkedin - Rubén Rosales"
                  href="https://www.linkedin.com/in/rub%C3%A9n-francisco-gazquez-rosales-45b788160"
                  target="_blank"
                >
                  <svg
                    class="footer__social__svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28.3978 0H2.49822C1.31147 0 0.347229 0.986314 0.347229 2.1971V28.2766C0.347229 29.4874 1.31147 30.4737 2.49822 30.4737H28.3978C29.5846 30.4737 30.5556 29.4874 30.5556 28.2766V2.1971C30.5556 0.986314 29.5846 0 28.3978 0ZM9.47716 26.1203H4.99985V11.5773H9.4839V26.1203H9.47716ZM7.2385 9.59105C5.80226 9.59105 4.64248 8.41427 4.64248 6.97222C4.64248 5.53016 5.80226 4.35338 7.2385 4.35338C8.66801 4.35338 9.83453 5.53016 9.83453 6.97222C9.83453 8.42108 8.67475 9.59105 7.2385 9.59105ZM26.2603 26.1203H21.783V19.0461C21.783 17.3591 21.7493 15.1892 19.4567 15.1892C17.1236 15.1892 16.7663 17.0258 16.7663 18.9236V26.1203H12.289V11.5773H16.5842V13.5635H16.6449C17.245 12.4207 18.7082 11.2168 20.8862 11.2168C25.4174 11.2168 26.2603 14.2301 26.2603 18.1482V26.1203Z"
                      fill="#FEFEFE"
                    />
                  </svg>
                </a>

                <!-- GITHUB -->
                <a
                  title="Github - Rubén Rosales"
                  href="https://github.com/rubenfgr"
                  target="_blank"
                >
                  <svg
                    class="footer__social__svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.7009 0H3.96579C2.17892 0 0.729187 1.46246 0.729187 3.26504V27.2086C0.729187 29.0112 2.17892 30.4737 3.96579 30.4737H27.7009C29.4878 30.4737 30.9375 29.0112 30.9375 27.2086V3.26504C30.9375 1.46246 29.4878 0 27.7009 0ZM19.4273 26.0999C18.8609 26.2019 18.6519 25.8482 18.6519 25.5557C18.6519 25.1884 18.6654 23.311 18.6654 21.7941C18.6654 20.733 18.3148 20.0596 17.9034 19.7059C20.3983 19.427 23.0281 19.0801 23.0281 14.7335C23.0281 13.4955 22.5898 12.8765 21.875 12.0806C21.9897 11.7881 22.374 10.5842 21.7604 9.01967C20.8231 8.72717 18.6789 10.2373 18.6789 10.2373C17.7888 9.98557 16.8246 9.85633 15.8738 9.85633C14.9231 9.85633 13.9588 9.98557 13.0688 10.2373C13.0688 10.2373 10.9245 8.72717 9.98723 9.01967C9.37363 10.5774 9.75123 11.7813 9.8726 12.0806C9.15785 12.8765 8.82071 13.4955 8.82071 14.7335C8.82071 19.0597 11.3358 19.427 13.8307 19.7059C13.507 19.9984 13.2171 20.5017 13.116 21.2227C12.4754 21.5152 10.8368 22.0186 9.85912 20.2772C9.24551 19.2025 8.13967 19.1141 8.13967 19.1141C7.04731 19.1005 8.0655 19.8079 8.0655 19.8079C8.79373 20.148 9.3062 21.454 9.3062 21.454C9.96026 23.4743 13.089 22.794 13.089 22.794C13.089 23.7395 13.1025 25.2768 13.1025 25.5557C13.1025 25.8482 12.9002 26.2019 12.327 26.0999C7.87669 24.5966 4.76146 20.3249 4.76146 15.3321C4.76146 9.08769 9.495 4.34658 15.685 4.34658C21.875 4.34658 26.8918 9.08769 26.8918 15.3321C26.8985 20.3249 23.8777 24.6034 19.4273 26.0999ZM12.8125 21.9438C12.6844 21.971 12.563 21.9166 12.5495 21.8281C12.5361 21.7261 12.6237 21.6377 12.7518 21.6105C12.88 21.5969 13.0013 21.6513 13.0148 21.7397C13.035 21.8281 12.9474 21.9166 12.8125 21.9438ZM12.1719 21.8826C12.1719 21.971 12.0708 22.0458 11.9359 22.0458C11.7876 22.0594 11.6865 21.9846 11.6865 21.8826C11.6865 21.7941 11.7876 21.7193 11.9225 21.7193C12.0506 21.7057 12.1719 21.7805 12.1719 21.8826ZM11.2482 21.8077C11.2212 21.8962 11.0863 21.937 10.9717 21.8962C10.8436 21.8689 10.7559 21.7669 10.7829 21.6785C10.8099 21.5901 10.9447 21.5492 11.0594 21.5765C11.1942 21.6173 11.2819 21.7193 11.2482 21.8077ZM10.4188 21.4404C10.3581 21.5152 10.23 21.5016 10.1288 21.3996C10.0277 21.3112 10.0007 21.1819 10.0681 21.1207C10.1288 21.0459 10.2569 21.0595 10.3581 21.1615C10.4458 21.25 10.4795 21.386 10.4188 21.4404ZM9.80517 20.8214C9.74449 20.8622 9.62986 20.8214 9.55568 20.7194C9.48151 20.6174 9.48151 20.5017 9.55568 20.4541C9.62986 20.3929 9.74449 20.4405 9.80517 20.5425C9.87935 20.6446 9.87935 20.767 9.80517 20.8214ZM9.36688 20.1616C9.3062 20.2228 9.20505 20.1888 9.13088 20.1208C9.05671 20.0324 9.04322 19.9303 9.10391 19.8827C9.16459 19.8215 9.26574 19.8555 9.33991 19.9235C9.41408 20.012 9.42757 20.114 9.36688 20.1616ZM8.91511 19.6582C8.88813 19.7195 8.80048 19.7331 8.7263 19.6855C8.63865 19.6446 8.59819 19.5698 8.62516 19.5086C8.65213 19.4678 8.7263 19.4474 8.81396 19.4814C8.90162 19.529 8.94208 19.6038 8.91511 19.6582Z"
                      fill="#FEFEFE"
                    />
                  </svg>
                </a>
              </div>
            `,
          },
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
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
        copyright: `
            <div>Rubén Rosales Web &copy;</div>
            <div>Todos los derechos reservados</div>
            <div>${new Date().getFullYear()}</div>
          
          `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
