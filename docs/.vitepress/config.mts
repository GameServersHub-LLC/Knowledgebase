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
                items: [
                  {
                    text: "Achillobator",
                    link: "/Path-of-Titans-Achillobator",
                  },
                  {
                    text: "Albertaceratops",
                    link: "/Path-of-Titans-Albertaceratops",
                  },
                  { text: "Alioramus", link: "/Path-of-Titans-Alioramus" },
                  { text: "Allosaurus", link: "/Path-of-Titans-Allosaurus" },
                  {
                    text: "Amargasaurus",
                    link: "/Path-of-Titans-Amargasaurus",
                  },
                  {
                    text: "Anodontosaurus",
                    link: "/Path-of-Titans-Anodontosaurus",
                  },
                  { text: "Barsboldia", link: "/Path-of-Titans-Barsboldia" },
                  {
                    text: "Camptosaurus",
                    link: "/Path-of-Titans-Camptosaurus",
                  },
                  {
                    text: "Ceratosaurus",
                    link: "/Path-of-Titans-Ceratosaurus",
                  },
                  {
                    text: "Concavenator",
                    link: "/Path-of-Titans-Concavenator",
                  },
                  {
                    text: "Daspletosaurus",
                    link: "/Path-of-Titans-Daspletosaurus",
                  },
                  {
                    text: "Deinocheirus",
                    link: "/Path-of-Titans-Deinocheirus",
                  },
                  { text: "Deinonychus", link: "/Path-of-Titans-Deinonychus" },
                  {
                    text: "Eotriceratops",
                    link: "/Path-of-Titans-Eotriceratops",
                  },
                  {
                    text: "Eurhinosaurus",
                    link: "/Path-of-Titans-Eurhinosaurus",
                  },
                  {
                    text: "Hatzegopteryx",
                    link: "/Path-of-Titans-Hatzegopteryx",
                  },
                  { text: "Iguanodon", link: "/Path-of-Titans-Iguanodon" },
                  { text: "Kaiwhekea", link: "/Path-of-Titans-Kaiwhekea" },
                  {
                    text: "Kentrosaurus",
                    link: "/Path-of-Titans-Kentrosaurus",
                  },
                  {
                    text: "Lambeosaurus",
                    link: "/Path-of-Titans-Lambeosaurus",
                  },
                  {
                    text: "Latenivenatrix",
                    link: "/Path-of-Titans-Latenivenatrix",
                  },
                  { text: "Megalania", link: "/Path-of-Titans-Megalania" },
                  {
                    text: "Metriacanthosaurus",
                    link: "/Path-of-Titans-Metriacanthosaurus",
                  },
                  {
                    text: "Pachycephalosaurus",
                    link: "/Path-of-Titans-Pachycephalosaurus",
                  },
                  {
                    text: "Pycnonemosaurus",
                    link: "/Path-of-Titans-Pycnonemosaurus",
                  },
                  {
                    text: "Rhamphorhynchus",
                    link: "/Path-of-Titans-Rhamphorhynchus",
                  },
                  { text: "Sarcosuchus", link: "/Path-of-Titans-Sarcosuchus" },
                  { text: "Spinosaurus", link: "/Path-of-Titans-Spinosaurus" },
                  { text: "Stegosaurus", link: "/Path-of-Titans-Stegosaurus" },
                  {
                    text: "Struthiomimus",
                    link: "/Path-of-Titans-Struthiomimus",
                  },
                  {
                    text: "Styracosaurus",
                    link: "/Path-of-Titans-Styracosaurus",
                  },
                  { text: "Suchomimus", link: "/Path-of-Titans-Suchomimus" },
                  {
                    text: "Thalassodromeus",
                    link: "/Path-of-Titans-Thalassodromeus",
                  },
                  {
                    text: "Tyrannosaurus",
                    link: "/Path-of-Titans-Tyrannosaurus",
                  },
                ],
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
