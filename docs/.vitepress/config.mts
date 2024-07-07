import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gaming Guides",
  description: "Knowledgebase for tutorials, guides, articles on GSH.",
  lastUpdated: true,
  sitemap: {
    hostname: "https://guides.gameservershub.com",
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
          { text: "Articles / Blogs", link: "/articles" },
          { text: "Forums / Marketplace", link: "/forums/resources" },
          { text: "Dedicated Server Rentals", link: "/hosting" },
        ],
      },
    ],

    footer: {
      copyright:
        '2024 © <a href="https://gameservershub.com/tos">Copyright</a> GameServersHub: All rights reserved.',
    },

    sidebar: [
      {
        text: "Welcome to our guides!",
        collapsed: false,
        items: [{ text: "Introduction", link: "/welcome" }],
      },
      {
        text: "Basic security 101",
        collapsed: true,
        items: [
          { text: "Passwords 101", link: "/how-to-protect-your-passwords" },
        ],
      },
      {
        text: "Path of Titans",
        collapsed: true,
        items: [
          {
            text: "Curve overrides",
            collapsed: true,
            items: [
              {
                text: "Alderons Dinosaurs",
                collapsed: true,
                items: [{ text: "T-Rex", link: "/replaceMe" }],
              },
              {
                text: "Modded Dinosaurs",
                collapsed: true,
                items: [
                  {
                    text: "Mikes Mods",
                    collapsed: true,
                    items: [{ text: "Superdino", link: "/replaceMe" }],
                  },
                ],
              },
            ],
          },
          {
            text: "Server Configurations",
            collapsed: true,
            items: [
              {
                text: "How to configurate INIs",
                link: "/path-of-titans-how-to-configurate-server",
              },
              {
                text: "How To Install Mods",
                link: "/path-of-titans-how-to-install-mods",
              },
            ],
          },
        ],
      },
      {
        text: "The Isle (Evrima)",
        collapsed: true,
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "Palworld",
        collapsed: true,
        items: [
          {
            text: "How To Edit Palworld Server Settings",
            link: "/palworld-server-settings",
          },
        ],
      },
      {
        text: "V Rising",
        collapsed: true,
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "7 Days To Die",
        collapsed: true,
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "Soulmask",
        collapsed: true,
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
    ],

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
});
