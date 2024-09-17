import { defineConfig } from "vitepress";

// This allows lightbox images to work on the pages for users
import lightbox from "vitepress-plugin-lightbox";

// This allows automation folder generation
import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = {
  /* Options... */
};

const ogUrl = "https://gameservershub.com/wp-content/uploads/2024/07/";
const ogImage = `${ogUrl}GameServersHub.com-Wiki-Page.webp`;

export default defineConfig({
  title: "GameServersHub",
  description:
    "GameServersHub's wiki offers guides and tutorials for Path of Titans. Explore maps and more. Join our Discord for expert tips, support, and detailed tutorials!",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: "https://guides.gsh-servers.com",
  },
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-0WCXTJZXEF",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0WCXTJZXEF');`,
    ],
    ["meta", { name: "theme-color", content: "#fdc752" }],
    ["link", { rel: "icon", href: "/favicon.ico", sizes: "any" }],
    ["link", { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#fdc752" },
    ],
    ["meta", { name: "author", content: "Mike Harrison" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:site", content: "@antfu7" }],
    ["meta", { name: "twitter:url", content: ogUrl }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: "local",
    },

    nav: [
      { text: "Home", link: "/" },
      { text: "Gaming Guides", link: "/welcome" },
      { text: "Meet the team", link: "/team" },
      { text: "Join Our Discord", link: "https://discord.gg/gsh" },
      {
        text: "Extra",
        items: [
          {
            text: "Articles / Blogs",
            link: "https://gameservershub.com/articles",
          },
          {
            text: "Forums / Marketplace",
            link: "https://gameservershub.com/forums/resources",
          },
          {
            text: "Dedicated Server Rentals",
            link: "https://gameservershub.com/hosting",
          },
        ],
      },
    ],

    footer: {
      copyright:
        '2024 © <a href="https://gameservershub.com/tos">Copyright</a> GameServersHub: All rights reserved.',
    },

    outline: {
      level: "deep",
    },

    sidebar: generateSidebar({
      documentRootPath: "docs",
      // scanStartPath: null,
      // resolvePath: null,
      // useTitleFromFileHeading: false,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      // useFolderTitleFromIndexFile: false,
      useFolderLinkFromIndexFile: true,
      hyphenToSpace: true,
      // underscoreToSpace: true,
      // capitalizeFirst: false,
      capitalizeEachWords: true,
      collapsed: true,
      // collapseDepth: 2,
      // sortMenusByName: false,
      // sortMenusByFrontmatterOrder: false,
      // sortMenusByFrontmatterDate: false,
      // sortMenusOrderByDescending: false,
      // sortMenusOrderNumericallyFromTitle: false,
      // sortMenusOrderNumericallyFromLink: false,
      // frontmatterOrderDefaultValue: 0,
      // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'],
      // removePrefixAfterOrdering: false,
      // prefixSeparator: '.',
      excludeFiles: ["team.md", "welcome.md"],
      excludeFilesByFrontmatterFieldName: "exclude",
      // excludeFolders: ['secret-folder'],
      // includeDotFiles: false,
      // includeRootIndexFile: false,
      // includeFolderIndexFile: false,
      // includeEmptyFolder: false,
      // rootGroupText: 'Contents',
      // rootGroupLink: 'https://github.com/jooy2',
      // rootGroupCollapsed: false,
      // convertSameNameSubFileToGroupIndexPage: false,
      // folderLinkNotIncludesFileName: false,
      // keepMarkdownSyntaxFromTitle: false,
      // debugPrint: false,
    }),

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/gsh" },
      {
        icon: "facebook",
        link: "https://www.facebook.com/people/Gameservershub/61559304243890/",
      },
      { icon: "instagram", link: "https://www.instagram.com/gameservershub/" },
      { icon: "x", link: "https://twitter.com/GameServersHub" },
      { icon: "github", link: "https://github.com/ServersHub" },
    ],
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});
