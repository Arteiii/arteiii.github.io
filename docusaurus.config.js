const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

const math = require("remark-math");
const katex = require("rehype-katex");


const internetProfiles = {
  discord: {
    label: "Discord",
    href: "Arteii",
  },
  linkedin: {
    label: "LinkedIn",
    href: "blank",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/Arteiii",
  },
  padlet: {
    label: "Padlet",
    href: "#",
  },
  email: {
    label: "Email",
    href: "mailto:#",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  projects: {
    label: "Projects",
    to: "projects",
  },
};

module.exports = {
  title: "Arteii",
  tagline: "i do stuff",
  url: "https://arteiii.github.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "arteii",
  projectName: "arteii-web",

  themeConfig: {
    prism: {
      theme: code_themes.light,
      darkTheme: code_themes.dark,
      additionalLanguages: [
        'dart',
        'ruby',
        'groovy',
        'kotlin',
        'java',
        'swift',
        'objectivec',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'highlight-next-line-error',
        },
      ],
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: true,
      title: "Arteii",
      // logo: {
      //   alt: "Arteii",
      //   src: "img/logo.svg",
      //   target: "_self",
      // },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            // internetProfiles.linkedin,
            internetProfiles.github,
            internetProfiles.email,
          ],
        },
        {
          title: "Discover",
          items: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.projects,
            // internetProfiles.resume,
          ],
        },
      ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `Arteii • <a href="https://github.com/arteiii/arteiii.github.io/commits/main">Updated ${new Date().toLocaleDateString()}</a>`,
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          blogSidebarTitle: "Blog",
          blogSidebarCount: "ALL",
          remarkPlugins: [math],
          rehypePlugins: [katex],

          blogTitle: "blog!",
          blogDescription: "A Docusaurus powered blog!",
          postsPerPage: "ALL",

          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          // Please change this to your repo.
          editUrl:
            "https://github.com/arteiii/arteiii.github.io/tree/main/",

          feedOptions: {
            type: "all",
            copyright: `${new Date().getFullYear()} Arteii`,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'G-7JSR7YQ7YL',
          anonymizeIP: true,
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
