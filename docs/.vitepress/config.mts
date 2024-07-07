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
          {
            text: "Passwords 101",
            link: "Pages/Security/how-to-protect-your-passwords",
          },
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
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Achillobator",
                  },
                  {
                    text: "Albertaceratops",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Albertaceratops",
                  },
                  {
                    text: "Alioramus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Alioramus",
                  },
                  {
                    text: "Allosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Allosaurus",
                  },
                  {
                    text: "Amargasaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Amargasaurus",
                  },
                  {
                    text: "Anodontosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Anodontosaurus",
                  },
                  {
                    text: "Barsboldia",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Barsboldia",
                  },
                  {
                    text: "Camptosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Camptosaurus",
                  },
                  {
                    text: "Ceratosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Ceratosaurus",
                  },
                  {
                    text: "Concavenator",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Concavenator",
                  },
                  {
                    text: "Daspletosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Daspletosaurus",
                  },
                  {
                    text: "Deinocheirus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Deinocheirus",
                  },
                  {
                    text: "Deinonychus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Deinonychus",
                  },
                  {
                    text: "Eotriceratops",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Eotriceratops",
                  },
                  {
                    text: "Eurhinosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Eurhinosaurus",
                  },
                  {
                    text: "Hatzegopteryx",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Hatzegopteryx",
                  },
                  {
                    text: "Iguanodon",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Iguanodon",
                  },
                  {
                    text: "Kaiwhekea",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Kaiwhekea",
                  },
                  {
                    text: "Kentrosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Kentrosaurus",
                  },
                  {
                    text: "Lambeosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Lambeosaurus",
                  },
                  {
                    text: "Latenivenatrix",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Latenivenatrix",
                  },
                  {
                    text: "Megalania",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Megalania",
                  },
                  {
                    text: "Metriacanthosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Metriacanthosaurus",
                  },
                  {
                    text: "Pachycephalosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Pachycephalosaurus",
                  },
                  {
                    text: "Pycnonemosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Pycnonemosaurus",
                  },
                  {
                    text: "Rhamphorhynchus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Rhamphorhynchus",
                  },
                  {
                    text: "Sarcosuchus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Sarcosuchus",
                  },
                  {
                    text: "Spinosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Spinosaurus",
                  },
                  {
                    text: "Stegosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Stegosaurus",
                  },
                  {
                    text: "Struthiomimus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Struthiomimus",
                  },
                  {
                    text: "Styracosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Styracosaurus",
                  },
                  {
                    text: "Suchomimus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Suchomimus",
                  },
                  {
                    text: "Thalassodromeus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Thalassodromeus",
                  },
                  {
                    text: "Tyrannosaurus",
                    link: "Pages/Path of Titans/Curve Overrides/Alderons/Path-of-Titans-Tyrannosaurus",
                  },
                ],
              },
              {
                text: "Modded Dinosaurs",
                collapsed: true,
                items: [
                  {
                    text: "Absentia",
                    collapsed: true,
                    items: [
                      {
                        text: "Acrocanthosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Absentia/mod-Acrocanthosaurus",
                      },
                    ],
                  },
                  {
                    text: "Ancient Gods",
                    collapsed: true,
                    items: [
                      {
                        text: "Camarasaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Gods/mod-Camarasaurus",
                      },
                    ],
                  },
                  {
                    text: "Ancient Monster",
                    collapsed: true,
                    items: [
                      {
                        text: "Dankanaptera",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Dankanaptera",
                      },
                      {
                        text: "Dryptosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Dryptosaurus",
                      },
                      {
                        text: "Gigamandra",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Gigamandra",
                      },
                      {
                        text: "Golugore",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Golugore",
                      },
                      {
                        text: "Madrehorn",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Madrehorn",
                      },
                      {
                        text: "Moraquile",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Moraquile",
                      },
                      {
                        text: "Thalasrex",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ancient-Monster/mod-Thalasrex",
                      },
                    ],
                  },
                  {
                    text: "Arazoa",
                    collapsed: true,
                    items: [
                      {
                        text: "Xiphactinus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Arazoa/mod-Xiphactinus",
                      },
                    ],
                  },
                  {
                    text: "Archetypes",
                    collapsed: true,
                    items: [
                      {
                        text: "Dunkleosteus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Archetypes/mod-Dunkleosteus",
                      },
                      {
                        text: "Ocepech",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Archetypes/mod-Ocepech",
                      },
                      {
                        text: "Squalicorax",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Archetypes/mod-Squalicorax",
                      },
                    ],
                  },
                  {
                    text: "Asylum",
                    collapsed: true,
                    items: [
                      {
                        text: "Cougar",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Asylum/mod-Cougar",
                      },
                    ],
                  },
                  {
                    text: "Cenozoic Timelines",
                    collapsed: true,
                    items: [
                      {
                        text: "Andrewsarchus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Cenozoic-Timelines/mod-Andrewsarchus",
                      },
                      {
                        text: "Ankylorhiza",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Cenozoic-Timelines/mod-Ankylorhiza",
                      },
                    ],
                  },
                  {
                    text: "David Rosa",
                    collapsed: true,
                    items: [
                      {
                        text: "Kaprosuchus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/David-Rosa/mod-Kaprosuchus",
                      },
                    ],
                  },
                  {
                    text: "Divine Beasts",
                    collapsed: true,
                    items: [
                      {
                        text: "Acrocanthosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Acrocanthosaurus",
                      },
                      {
                        text: "Ampelosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Ampelosaurus",
                      },
                      {
                        text: "Carcharodontosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Carcharodontosaurus",
                      },
                      {
                        text: "Compsognathus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Compsognathus",
                      },
                      {
                        text: "Deinosuchus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Deinosuchus",
                      },
                      {
                        text: "Dryosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Dryosaurus",
                      },
                      {
                        text: "Edmontosaurus Annectens",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Edmontosaurus-Annectens",
                      },
                      {
                        text: "Edmontosaurus Regalis",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Edmontosaurus-Regalis",
                      },
                      {
                        text: "Giganotosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Giganotosaurus",
                      },
                      {
                        text: "Inostrancevia",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Inostrancevia",
                      },
                      {
                        text: "Japanese Giant Salamander",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Japanese-Giant-Salamander",
                      },
                      {
                        text: "Kryptops",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Kryptops",
                      },
                      {
                        text: "Mosasaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Mosasaurus",
                      },
                      {
                        text: "VelocciRaptor",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-VelocciRaptor",
                      },
                      {
                        text: "Zhuchengtyrannus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Divine-Beasts/mod-Zhuchengtyrannus",
                      },
                    ],
                  },
                  {
                    text: "Ex Argilla",
                    collapsed: true,
                    items: [
                      {
                        text: "Australovenator",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Australovenator",
                      },
                      {
                        text: "Beringia Mammuthus Columbi",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Beringia-Mammuthus-Columbi",
                      },
                      {
                        text: "Beringia Smilodon",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Beringia-Smilodon",
                      },
                      {
                        text: "Bistahieversor",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Bistahieversor",
                      },
                      {
                        text: "Dracoviper",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Dracoviper",
                      },
                      {
                        text: "Ex Argilla Smilodon",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Ex-Argilla-Smilodon",
                      },
                      {
                        text: "Griffin",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Griffin",
                      },
                      {
                        text: "Nasutoceratops",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Ex-Argilla/mod-Nasutoceratops",
                      },
                    ],
                  },
                  {
                    text: "Extinction Mods",
                    collapsed: true,
                    items: [
                      {
                        text: "Chaos Triceratops",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Extinction-Mods/mod-Chaos-Triceratops",
                      },
                    ],
                  },
                  {
                    text: "Feilong",
                    collapsed: true,
                    items: [
                      {
                        text: "Armored Eotriceratops",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Feilong/mod-Armored-Eotriceratops",
                      },
                      {
                        text: "Beaked Pachycephalosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Feilong/mod-Armored-Beaked-Pachycephalosaurus",
                      },
                    ],
                  },
                  {
                    text: "Goliath",
                    collapsed: true,
                    items: [
                      {
                        text: "Dimetrodon",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Goliath/mod-Dimetrodon",
                      },
                    ],
                  },
                  {
                    text: "Great",
                    collapsed: true,
                    items: [
                      {
                        text: "Tenontosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Great/mod-Tenontosaurus",
                      },
                    ],
                  },
                  {
                    text: "Isla Nycta",
                    collapsed: true,
                    items: [
                      {
                        text: "Nyctatyrannus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Isla Nycta/mod-Nyctatyrannus",
                      },
                    ],
                  },
                  {
                    text: "JFD",
                    collapsed: true,
                    items: [
                      {
                        text: "Torvosaurus tanneri",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/JFD/mod-Torvosaurus-tanneri",
                      },
                    ],
                  },
                  {
                    text: "K-23",
                    collapsed: true,
                    items: [
                      {
                        text: "Bwi",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/K-23/mod-Bwi",
                      },
                      {
                        text: "Gonari",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/K-23/mod-Gonari",
                      },
                      {
                        text: "Hannek",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/K-23/mod-Hannek",
                      },
                      {
                        text: "Hebubebu",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/K-23/mod-Hebubebu",
                      },
                    ],
                  },
                  {
                    text: "Krono",
                    collapsed: true,
                    items: [
                      {
                        text: "Bloop",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Krono/mod-Bloop",
                      },
                    ],
                  },
                  {
                    text: "KTO",
                    collapsed: true,
                    items: [
                      {
                        text: "Deinosuchus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/KTO/mod-Deinosuchus",
                      },
                      {
                        text: "Dryptosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/KTO/mod-Dryptosaurus",
                      },
                      {
                        text: "Yangchuanosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/KTO/mod-Yangchuanosaurus",
                      },
                    ],
                  },
                  {
                    text: "P&D's Menagerie",
                    collapsed: true,
                    items: [
                      {
                        text: "Pentaceratops",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/P&D's-Menagerie/mod-Pentaceratops",
                      },
                    ],
                  },
                  {
                    text: "Primordial Tyrants",
                    collapsed: true,
                    items: [
                      {
                        text: "Argentinosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Argentinosaurus",
                      },
                      {
                        text: "Carnotaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Carnotaurus",
                      },
                      {
                        text: "Dilophosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Dilophosaurus",
                      },
                      {
                        text: "Giganotosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Giganotosaurus",
                      },
                      {
                        text: "Kelenken",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Kelenken",
                      },
                      {
                        text: "Maip",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Maip",
                      },
                      {
                        text: "Noviana",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Noviana",
                      },
                      {
                        text: "Ophis",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Ophis",
                      },
                      {
                        text: "Parasaurolophus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Parasaurolophus",
                      },
                      {
                        text: "Psittacosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Psittacosaurus",
                      },
                      {
                        text: "Quetzalcoatlus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Quetzalcoatlus",
                      },
                      {
                        text: "Sachicasaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Sachicasaurus",
                      },
                      {
                        text: "Therizinosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Therizinosaurus",
                      },
                      {
                        text: "Tyrannosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Tyrannosaurus",
                      },
                      {
                        text: "Utahraptor",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Utahraptor",
                      },
                      {
                        text: "Yunnanosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Yunnanosaurus",
                      },
                      {
                        text: "Yutyrannus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Primordial-Tyrants/mod-Yutyrannus",
                      },
                    ],
                  },
                  {
                    text: "The Crimson Isle",
                    collapsed: true,
                    items: [
                      {
                        text: "Cryolophosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/The-Crimson-Isle/mod-Cryolophosaurus",
                      },
                    ],
                  },
                  {
                    text: "Titanus Constructus",
                    collapsed: true,
                    items: [
                      {
                        text: "Ampelosaurus",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Titanus-Constructus/mod-Ampelosaurus",
                      },
                      {
                        text: "Citipati",
                        link: "Pages/Path of Titans/Curve Overrides/Modded Dinosaurs/Titanus-Constructus/mod-Citipati",
                      },
                    ],
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
                link: "Pages/Path of Titans/path-of-titans-how-to-configurate-server",
              },
              {
                text: "How To Install Mods",
                link: "Pages/Path of Titans/path-of-titans-how-to-install-mods",
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
            link: "Pages/Palword/palworld-server-settings",
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
