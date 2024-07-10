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

    outline: {
      level: "deep",
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
        text: "Path Of Titans",
        collapsed: true,
        items: [
          {
            text: "Guides",
            collapsed: true,
            items: [
              {
                text: "Curve Overrides",
                collapsed: true,
                items: [
                  {
                    text: "Alderons",
                    collapsed: true,
                    items: [
                      {
                        text: "Achillobator",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Achillobator",
                      },
                      {
                        text: "Albertaceratops",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Albertaceratops",
                      },
                      {
                        text: "Alioramus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Alioramus",
                      },
                      {
                        text: "Allosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Allosaurus",
                      },
                      {
                        text: "Amargasaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Amargasaurus",
                      },
                      {
                        text: "Anodontosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Anodontosaurus",
                      },
                      {
                        text: "Barsboldia",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Barsboldia",
                      },
                      {
                        text: "Camptosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Camptosaurus",
                      },
                      {
                        text: "Ceratosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Ceratosaurus",
                      },
                      {
                        text: "Concavenator",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Concavenator",
                      },
                      {
                        text: "Daspletosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Daspletosaurus",
                      },
                      {
                        text: "Deinocheirus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Deinocheirus",
                      },
                      {
                        text: "Deinonychus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Deinonychus",
                      },
                      {
                        text: "Eotriceratops",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Eotriceratops",
                      },
                      {
                        text: "Eurhinosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Eurhinosaurus",
                      },
                      {
                        text: "Hatzegopteryx",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Hatzegopteryx",
                      },
                      {
                        text: "Iguanodon",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Iguanodon",
                      },
                      {
                        text: "Kaiwhekea",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Kaiwhekea",
                      },
                      {
                        text: "Kentrosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Kentrosaurus",
                      },
                      {
                        text: "Lambeosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Lambeosaurus",
                      },
                      {
                        text: "Latenivenatrix",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Latenivenatrix",
                      },
                      {
                        text: "Megalania",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Megalania",
                      },
                      {
                        text: "Metriacanthosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Metriacanthosaurus",
                      },
                      {
                        text: "Pachycephalosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Pachycephalosaurus",
                      },
                      {
                        text: "Pycnonemosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Pycnonemosaurus",
                      },
                      {
                        text: "Rhamphorhynchus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Rhamphorhynchus",
                      },
                      {
                        text: "Sarcosuchus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Sarcosuchus",
                      },
                      {
                        text: "Spinosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Spinosaurus",
                      },
                      {
                        text: "Stegosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Stegosaurus",
                      },
                      {
                        text: "Struthiomimus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Struthiomimus",
                      },
                      {
                        text: "Styracosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Styracosaurus",
                      },
                      {
                        text: "Suchomimus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Suchomimus",
                      },
                      {
                        text: "Thalassodromeus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Thalassodromeus",
                      },
                      {
                        text: "Tyrannosaurus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Tyrannosaurus",
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
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Absentia/Mod-Acrocanthosaurus",
                          },
                        ],
                      },
                      {
                        text: "Ancient Gods",
                        collapsed: true,
                        items: [
                          {
                            text: "Camarasaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Gods/Mod-Camarasaurus",
                          },
                        ],
                      },
                      {
                        text: "Ancient Monster",
                        collapsed: true,
                        items: [
                          {
                            text: "Dankanaptera",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Dankanaptera",
                          },
                          {
                            text: "Dryptosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Dryptosaurus",
                          },
                          {
                            text: "Gigamandra",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Gigamandra",
                          },
                          {
                            text: "Golugore",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Golugore",
                          },
                          {
                            text: "Madrehorn",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Madrehorn",
                          },
                          {
                            text: "Moraquile",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Moraquile",
                          },
                          {
                            text: "Thalasrex",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Mod-Thalasrex",
                          },
                        ],
                      },
                      {
                        text: "Arazoa",
                        collapsed: true,
                        items: [
                          {
                            text: "Xiphactinus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Arazoa/Mod-Xiphactinus",
                          },
                        ],
                      },
                      {
                        text: "Archetypes",
                        collapsed: true,
                        items: [
                          {
                            text: "Dunkleosteus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Archetypes/Mod-Dunkleosteus",
                          },
                          {
                            text: "Ocepech",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Archetypes/Mod-Ocepech",
                          },
                          {
                            text: "Squalicorax",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Archetypes/Mod-Squalicorax",
                          },
                        ],
                      },
                      {
                        text: "Asylum",
                        collapsed: true,
                        items: [
                          {
                            text: "Cougar",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Asylum/Mod-Cougar",
                          },
                        ],
                      },
                      {
                        text: "Cenozoic Timelines",
                        collapsed: true,
                        items: [
                          {
                            text: "Andrewsarchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Cenozoic Timelines/Mod-Andrewsarchus",
                          },
                          {
                            text: "Ankylorhiza",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Cenozoic Timelines/Mod-Ankylorhiza",
                          },
                        ],
                      },
                      {
                        text: "David Rosa",
                        collapsed: true,
                        items: [
                          {
                            text: "Kaprosuchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/David Rosa/Mod-Kaprosuchus",
                          },
                        ],
                      },
                      {
                        text: "Divine Beasts",
                        collapsed: true,
                        items: [
                          {
                            text: "Acrocanthosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Acrocanthosaurus",
                          },
                          {
                            text: "Ampelosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Ampelosaurus",
                          },
                          {
                            text: "Carcharodontosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Carcharodontosaurus",
                          },
                          {
                            text: "Compsognathus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Compsognathus",
                          },
                          {
                            text: "Deinosuchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Deinosuchus",
                          },
                          {
                            text: "Dryosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Dryosaurus",
                          },
                          {
                            text: "Edmontosaurus Annectens",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Edmontosaurus-Annectens",
                          },
                          {
                            text: "Edmontosaurus Regalis",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Edmontosaurus-Regalis",
                          },
                          {
                            text: "Giganotosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Giganotosaurus",
                          },
                          {
                            text: "Inostrancevia",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Inostrancevia",
                          },
                          {
                            text: "Japanese Giant Salamander",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Japanese-Giant-Salamander",
                          },
                          {
                            text: "Kryptops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Kryptops",
                          },
                          {
                            text: "Mosasaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Mosasaurus",
                          },
                          {
                            text: "VelocciRaptor",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-VelocciRaptor",
                          },
                          {
                            text: "Zhuchengtyrannus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Mod-Zhuchengtyrannus",
                          },
                        ],
                      },
                      {
                        text: "Ex Argilla",
                        collapsed: true,
                        items: [
                          {
                            text: "Australovenator",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Australovenator",
                          },
                          {
                            text: "Beringia Mammuthus Columbi",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Beringia-Mammuthus-Columbi",
                          },
                          {
                            text: "Beringia Smilodon",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Beringia-Smilodon",
                          },
                          {
                            text: "Bistahieversor",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Bistahieversor",
                          },
                          {
                            text: "Dracoviper",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Dracoviper",
                          },
                          {
                            text: "Ex Argilla Smilodon",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Ex-Argilla-Smilodon",
                          },
                          {
                            text: "Griffin",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Griffin",
                          },
                          {
                            text: "Nasutoceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Mod-Nasutoceratops",
                          },
                        ],
                      },
                      {
                        text: "Extinction Mods",
                        collapsed: true,
                        items: [
                          {
                            text: "Chaos Triceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Extinction Mods/Mod-Chaos-Triceratops",
                          },
                        ],
                      },
                      {
                        text: "Feilong",
                        collapsed: true,
                        items: [
                          {
                            text: "Armored Eotriceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Feilong/Mod-Armored-Eotriceratops",
                          },
                          {
                            text: "Beaked Pachycephalosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Feilong/Mod-Armored-Beaked-Pachycephalosaurus",
                          },
                        ],
                      },
                      {
                        text: "Goliath",
                        collapsed: true,
                        items: [
                          {
                            text: "Dimetrodon",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Goliath/Mod-Dimetrodon",
                          },
                        ],
                      },
                      {
                        text: "Great",
                        collapsed: true,
                        items: [
                          {
                            text: "Tenontosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Great/Mod-Tenontosaurus",
                          },
                        ],
                      },
                      {
                        text: "Isla Nycta",
                        collapsed: true,
                        items: [
                          {
                            text: "Nyctatyrannus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Isla Nycta/Mod-Nyctatyrannus",
                          },
                        ],
                      },
                      {
                        text: "JFD",
                        collapsed: true,
                        items: [
                          {
                            text: "Torvosaurus tanneri",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/JFD/Mod-Torvosaurus-tanneri",
                          },
                        ],
                      },
                      {
                        text: "K-23",
                        collapsed: true,
                        items: [
                          {
                            text: "Bwi",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/K-23/Mod-Bwi",
                          },
                          {
                            text: "Gonari",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/K-23/Mod-Gonari",
                          },
                          {
                            text: "Hannek",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/K-23/Mod-Hannek",
                          },
                          {
                            text: "Hebubebu",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/K-23/Mod-Hebubebu",
                          },
                        ],
                      },
                      {
                        text: "Krono",
                        collapsed: true,
                        items: [
                          {
                            text: "Bloop",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Krono/Mod-Bloop",
                          },
                        ],
                      },
                      {
                        text: "KTO",
                        collapsed: true,
                        items: [
                          {
                            text: "Deinosuchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Mod-Deinosuchus",
                          },
                          {
                            text: "Dryptosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Mod-Dryptosaurus",
                          },
                          {
                            text: "Yangchuanosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Mod-Yangchuanosaurus",
                          },
                        ],
                      },
                      {
                        text: "P&D's Menagerie",
                        collapsed: true,
                        items: [
                          {
                            text: "Pentaceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/P&D's Menagerie/Mod-Pentaceratops",
                          },
                        ],
                      },
                      {
                        text: "Primordial Tyrants",
                        collapsed: true,
                        items: [
                          {
                            text: "Argentinosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Argentinosaurus",
                          },
                          {
                            text: "Carnotaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Carnotaurus",
                          },
                          {
                            text: "Dilophosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Dilophosaurus",
                          },
                          {
                            text: "Giganotosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Giganotosaurus",
                          },
                          {
                            text: "Kelenken",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Kelenken",
                          },
                          {
                            text: "Maip",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Maip",
                          },
                          {
                            text: "Noviana",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Noviana",
                          },
                          {
                            text: "Ophis",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Ophis",
                          },
                          {
                            text: "Parasaurolophus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Parasaurolophus",
                          },
                          {
                            text: "Psittacosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Psittacosaurus",
                          },
                          {
                            text: "Quetzalcoatlus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Quetzalcoatlus",
                          },
                          {
                            text: "Sachicasaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Sachicasaurus",
                          },
                          {
                            text: "Therizinosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Therizinosaurus",
                          },
                          {
                            text: "Tyrannosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Tyrannosaurus",
                          },
                          {
                            text: "Utahraptor",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Utahraptor",
                          },
                          {
                            text: "Yunnanosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Yunnanosaurus",
                          },
                          {
                            text: "Yutyrannus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Mod-Yutyrannus",
                          },
                        ],
                      },
                      {
                        text: "The Crimson Isle",
                        collapsed: true,
                        items: [
                          {
                            text: "Cryolophosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/The Crimson Isle/Mod-Cryolophosaurus",
                          },
                        ],
                      },
                      {
                        text: "Titanus Constructus",
                        collapsed: true,
                        items: [
                          {
                            text: "Ampelosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Titanus Constructus/Mod-Ampelosaurus",
                          },
                          {
                            text: "Citipati",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Titanus Constructus/Mod-Citipati",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            text: "Setups",
            collapsed: true,
            items: [
              {
                text: "Server Configurations",
                collapsed: true,
                items: [
                  {
                    text: "Basic Game.ini Config",
                    link: "Pages/Path of Titans/Setup/Server Configurations/path-of-titans-how-to-configurate-game.ini",
                  },
                  {
                    text: "How To Install Mods",
                    link: "Pages/Path of Titans/Setup/Server Configurations/path-of-titans-how-to-install-mods",
                  },
                  {
                    text: "Basic Webhooks Config",
                    link: "Pages/Path of Titans/Setup/Server Configurations/path-of-titans-webhook-config",
                  },
                ],
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
