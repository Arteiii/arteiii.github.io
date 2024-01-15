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
  // resume: {
  //   label: "Resume",
  //   href: "https://evantay.com/pdf/resume.pdf",
  // },
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
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'YOUR_APP_ID',

    //   // Public API key: it is safe to commit it
    //   apiKey: 'YOUR_SEARCH_API_KEY',

    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   //externalUrlRegex: 'external\\.com|domain\\.com',

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: '/docs/', // or as RegExp: /\/docs\//
    //     to: '/',
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: 'search',

    //   //... other Algolia params
    // },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Arteii",
      logo: {
        alt: "Arteii",
        src: "img/logo.svg",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "projects/", label: "Projects", position: "right" },
        // {
        //   href: "https://evantay.com/pdf/resume.pdf",
        //   label: "Resume",
        //   position: "right",
        // },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            // internetProfiles.linkedin,
            // internetProfiles.padlet,
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
