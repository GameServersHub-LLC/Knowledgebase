import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gaming Guides",
  description: "Knowledgebase for tutorials, guides, articles on GSH.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Gaming Guides", link: "/welcome" },
      { text: "Meet the team", link: "/team" },
      { text: "Articles / Blogs", link: "/articles" },
      { text: "Forums / Marketplace", link: "/forums/resources" },
      { text: "Dedicated Server Rentals", link: "/hosting" },
    ],

    footer: {
      message:
        'Join our <a href="https://discord.gg/gsh">Discord</a> for faster support',
      copyright:
        '2024 © <a href="https://gameservershub.com/tos">Copyright</a> GameServersHub: All rights reserved.',
    },

    sidebar: [
      {
        text: "Welcome to our guides!",
        items: [{ text: "Introduction", link: "/welcome" }],
      },
      {
        text: "Basic security 101",
        items: [
          { text: "Passwords 101", link: "/how-to-protect-your-passwords" },
        ],
      },
      {
        text: "Path of Titans",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "The Isles",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "Palworld",
        items: [
          {
            text: "How To Edit Palworld Server Settings",
            link: "/palworld-server-settings",
          },
        ],
      },
      {
        text: "V Rising",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "7 Days To Die",
        items: [{ text: "Markdown Examples", link: "/markdown-examples" }],
      },
      {
        text: "Soulmask",
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
