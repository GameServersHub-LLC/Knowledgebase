import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GSH Knowledgebase",
  description: "Knowledgebase for tutorials, guides, articles on GSH.",
  lastUpdated: true,
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
    ["link", { rel: "icon", href: "/favicon.ico" }],
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
                link: "Pages/Path of Titans/Guides/Curve Overrides/Path-of-Titans-Curve-Overrides",
                collapsed: true,
                items: [
                  {
                    text: "Alderons",
                    link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Alderon-CO",
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
                        text: "Microraptor",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Microraptor",
                      },
                      {
                        text: "Miragaia",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Alderons/Path-of-Titans-Miragaia",
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
                    link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Path-of-Titans-Dino-CO",
                    collapsed: true,
                    items: [
                      {
                        text: "Absentia",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Absentia/Path-of-Titans-Absentia",
                        collapsed: true,
                        items: [
                          {
                            text: "Acrocanthosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Absentia/Path-of-Titans-AbsentiaAcro",
                          },
                        ],
                      },
                      {
                        text: "Ancient Gods",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Gods/Path-of-Titans-Ancient-Gods",
                        collapsed: true,
                        items: [
                          {
                            text: "Camarasaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Gods/Path-of-Titans-Camarasaurus",
                          },
                        ],
                      },
                      {
                        text: "Ancient Monster",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-Ancient-Monster",
                        collapsed: true,
                        items: [
                          {
                            text: "Cerataspida",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-AMCerataspida",
                          },
                          {
                            text: "Dryptosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-DJCDryptosaurus",
                          },
                          {
                            text: "Gigamandra",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-Gigamandra",
                          },
                          {
                            text: "Golugore",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-Golugore",
                          },
                          {
                            text: "Moraquile",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-AMMoraquile",
                          },
                          {
                            text: "Thalasrex",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ancient Monster/Path-of-Titans-AMThalasrex",
                          },
                        ],
                      },
                      {
                        text: "Arazoa",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Arazoa/Path-of-Titans-Arazoa",
                        collapsed: true,
                        items: [
                          {
                            text: "Xiphactinus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Arazoa/Path-of-Titans-ArazoaXiph",
                          },
                        ],
                      },
                      {
                        text: "Archetypes",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Archetypes/Path-of-Titans-Archetypes",
                        collapsed: true,
                        items: [
                          {
                            text: "Dunkleosteus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Archetypes/Path-of-Titans-Dunkleosteus",
                          },
                        ],
                      },
                      {
                        text: "Asylum",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Asylum/Path-of-Titans-Asylum",
                        collapsed: true,
                        items: [
                          {
                            text: "Cougar",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Asylum/Path-of-Titans-AsylumCougar",
                          },
                        ],
                      },
                      {
                        text: "Cenozoic Timelines",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Cenozoic Timelines/Path-of-Titans-Cenozoic-Timelines",
                        collapsed: true,
                        items: [
                          {
                            text: "Andrewsarchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Cenozoic Timelines/Path-of-Titans-CTAndrewsarchus",
                          },
                          {
                            text: "Ankylorhiza",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Cenozoic Timelines/Path-of-Titans-CTAnkylorhiza",
                          },
                        ],
                      },
                      {
                        text: "David Rosa",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/David Rosa/Path-of-Titans-David-Rosa",
                        collapsed: true,
                        items: [
                          {
                            text: "Kaprosuchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/David Rosa/Path-of-Titans-DavidKaproNew",
                          },
                          {
                            text: "Pachyrhinosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/David Rosa/Path-of-Titans-DavidRosaPachyrhino",
                          },
                        ],
                      },
                      {
                        text: "Divine Beasts",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-Divine-Beasts",
                        collapsed: true,
                        items: [
                          {
                            text: "Acrocanthosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineAcroRedux",
                          },
                          {
                            text: "Ampelosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineAmp",
                          },
                          {
                            text: "Carcharodontosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineCarchar",
                          },
                          {
                            text: "Compsognathus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineCompy",
                          },
                          {
                            text: "Deinosuchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineDeino",
                          },
                          {
                            text: "Dryosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineDryo",
                          },
                          {
                            text: "Edmontosaurus Annectens",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineAnnectens",
                          },
                          {
                            text: "Edmontosaurus Regalis",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineRegalis",
                          },
                          {
                            text: "Giganotosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineGiga",
                          },
                          {
                            text: "Inostrancevia",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineInos",
                          },
                          {
                            text: "Japanese Giant Salamander",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-TGBsalamander",
                          },
                          {
                            text: "Kryptops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-CretaceousKryptops",
                          },
                          {
                            text: "Mosasaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineMosa",
                          },
                          {
                            text: "VelocciRaptor",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-VelocciRaptor",
                          },
                          {
                            text: "Zhuchengtyrannus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Divine Beasts/Path-of-Titans-DivineZhuch",
                          },
                        ],
                      },
                      {
                        text: "Ex Argilla",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-Ex-Argilla",
                        collapsed: true,
                        items: [
                          {
                            text: "Australovenator",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-ExAAustralo",
                          },
                          {
                            text: "Beringia Mammuthus Columbi",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-Beringia-Mammuthus-Columbi",
                          },
                          {
                            text: "Beringia Smilodon",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-EASmilodon",
                          },
                          {
                            text: "Bistahieversor",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-ExABista",
                          },
                          {
                            text: "Dracoviper",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-EADracoviper",
                          },
                          {
                            text: "Griffin",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-EAGriffin",
                          },
                          {
                            text: "Nasutoceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Ex Argilla/Path-of-Titans-EANasuto",
                          },
                        ],
                      },
                      {
                        text: "Extinction Mods",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Extinction Mods/Path-of-Titans-Extinction-Mods",
                        collapsed: true,
                        items: [
                          {
                            text: "Chaos Triceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Extinction Mods/Path-of-Titans-Chaos-Triceratops",
                          },
                        ],
                      },
                      {
                        text: "Feilong",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Feilong/Path-of-Titans-Feilong",
                        collapsed: true,
                        items: [
                          {
                            text: "Armored Eotriceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Feilong/Path-of-Titans-EoTLC",
                          },
                          {
                            text: "Beaked Pachycephalosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Feilong/Path-of-Titans-Armored-Beaked-Pachycephalosaurus",
                          },
                          {
                            text: "Giant Tegu",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Feilong/Path-of-Titans-Tegu",
                          },
                        ],
                      },
                      {
                        text: "Goliath",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Goliath/Path-of-Titans-Goliath",
                        collapsed: true,
                        items: [
                          {
                            text: "Dimetrodon",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Goliath/Path-of-Titans-Dimetrodon",
                          },
                        ],
                      },
                      {
                        text: "Great",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Great/Path-of-Titans-Great",
                        collapsed: true,
                        items: [
                          {
                            text: "Tenontosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Great/Path-of-Titans-GTenontosaurus",
                          },
                        ],
                      },
                      {
                        text: "Isla Nycta",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Isla Nycta/Path-of-Titans-Isla-Nycta",
                        collapsed: true,
                        items: [
                          {
                            text: "Nyctatyrannus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Isla Nycta/Path-of-Titans-Nyctatyrannus",
                          },
                        ],
                      },
                      {
                        text: "JFD",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/JFD/Path-of-Titans-JFD",
                        collapsed: true,
                        items: [
                          {
                            text: "Deltadromeus agilis",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/JFD/Path-of-Titans-JFDDagilis",
                          },
                          {
                            text: "Torvosaurus tanneri",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/JFD/Path-of-Titans-JFDTtanneri",
                          },
                        ],
                      },
                      {
                        text: "K-23",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/K-23/Path-of-Titans-K-23",
                        collapsed: true,
                        items: [
                          {
                            text: "Bwi",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/K-23/Path-of-Titans-Bwi",
                          },
                        ],
                      },
                      {
                        text: "Krono",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Krono/Path-of-Titans-Krono",
                        collapsed: true,
                        items: [
                          {
                            text: "Bloop",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Krono/Path-of-Titans-Bloop",
                          },
                        ],
                      },
                      {
                        text: "KTO",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Path-of-Titans-KTO",
                        collapsed: true,
                        items: [
                          {
                            text: "Deinosuchus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Path-of-Titans-KTODeino",
                          },
                          {
                            text: "Dryptosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Path-of-Titans-KTODrypto",
                          },
                          {
                            text: "Yangchuanosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/KTO/Path-of-Titans-KTOYang",
                          },
                        ],
                      },
                      {
                        text: "P&D's Menagerie",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/P&D's Menagerie/Path-of-Titans-P&D's-Menagerie",
                        collapsed: true,
                        items: [
                          {
                            text: "Pentaceratops",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/P&D's Menagerie/Path-of-Titans-PDPentaceratops",
                          },
                        ],
                      },
                      {
                        text: "Primordial Tyrants",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-Primordial-Tyrants",
                        collapsed: true,
                        items: [
                          {
                            text: "Argentinosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTArgent",
                          },
                          {
                            text: "Carnotaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTCarno",
                          },
                          {
                            text: "Dilophosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTDilophosaurus",
                          },
                          {
                            text: "Giganotosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTGiga",
                          },
                          {
                            text: "Kelenken",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTKelenken",
                          },
                          {
                            text: "Maip",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTMaip",
                          },
                          {
                            text: "Noviana",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-IgnisNoviana",
                          },
                          {
                            text: "Ophis",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-IgnisOphis",
                          },
                          {
                            text: "Parasaurolophus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTParasaurolophus",
                          },
                          {
                            text: "Psittacosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTPsittacosaurus",
                          },
                          {
                            text: "Quetzalcoatlus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTQuetzalcoatlus",
                          },
                          {
                            text: "Sachicasaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTSachicasaurus",
                          },
                          {
                            text: "Therizinosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTTherizinosaurus",
                          },
                          {
                            text: "Tyrannosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTTyrannosaurus",
                          },
                          {
                            text: "Utahraptor",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTUtahraptor",
                          },
                          {
                            text: "Yunnanosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTYunnano",
                          },
                          {
                            text: "Yutyrannus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Primordial Tyrants/Path-of-Titans-PTYutyrannus",
                          },
                        ],
                      },
                      {
                        text: "The Crimson Isle",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/The Crimson Isle/Path-of-Titans-The-Crimson-Isle",
                        collapsed: true,
                        items: [
                          {
                            text: "Cryolophosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/The Crimson Isle/Path-of-Titans-CrimsonCryo",
                          },
                        ],
                      },
                      {
                        text: "Titanus Constructus",
                        link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Titanus Constructus/Path-of-Titans-Titanus-Constructus",
                        collapsed: true,
                        items: [
                          {
                            text: "Ampelosaurus",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Titanus Constructus/Path-of-Titans-Ampelosaurus",
                          },
                          {
                            text: "Citipati",
                            link: "Pages/Path of Titans/Guides/Curve Overrides/Modded Dinosaurs/Titanus Constructus/Path-of-Titans-TCCitipati",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                text: "Player Roles",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-Player-Roles",
              },
              {
                text: "Server Admins",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-Server-Admins",
              },
              {
                text: "Enable/Disable Dinosaurs",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-Enable-Disable-Dinosaurs",
              },
              {
                text: "Reserved Slots",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-Reserved-Slots",
              },
              {
                text: "MOTD Setup",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-MOTD-Setup",
              },
              {
                text: "Server Rules",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-Server-Rules",
              },
              {
                text: "Whitelist",
                link: "Pages/Path of Titans/Guides/Path-of-Titans-Whitelist",
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
                    link: "Pages/Path of Titans/Setup/Server Configurations/Path-of-Titans-How-To-Configurate-Game-ini",
                  },
                  {
                    text: "How To Install Mods",
                    link: "Pages/Path of Titans/Setup/Server Configurations/Path-of-Titans-How-To-Install-Mods",
                  },
                  {
                    text: "Basic Webhooks Config",
                    link: "Pages/Path of Titans/Setup/Server Configurations/Path-of-Titans-Webhook-Config",
                  },
                  {
                    text: "Auth Token Setup",
                    link: "Pages/Path of Titans/Setup/Server Configurations/Path-of-Titans-Auth-Token-Setup",
                  },
                  {
                    text: "Server Password",
                    link: "Pages/Path of Titans/Setup/Server Configurations/Path-of-Titans-Server-Password",
                  },
                ],
              },
              {
                text: "Delete Server Database",
                link: "Pages/Path of Titans/Setup/Path-of-Titans-Delete-Server-Database",
              },
              {
                text: "RCON Config",
                link: "Pages/Path of Titans/Setup/Path-of-Titans-RCON-Config",
              },
              {
                text: "Server Restart",
                link: "Pages/Path of Titans/Setup/Path-of-Titans-Server-Restart",
              },
            ],
          },
        ],
      },
      {
        text: "The Isle (Evrima)",
        link: "Pages/Coming-Soon",
        collapsed: true,
        items: [],
      },
      {
        text: "Palworld",
        collapsed: true,
        items: [
          {
            text: "How To Edit Palworld Server Settings",
            link: "Pages/Palworld/palworld-server-settings",
          },
        ],
      },
      {
        text: "V Rising",
        link: "Pages/Coming-Soon",
        collapsed: true,
        items: [],
      },
      {
        text: "7 Days To Die",
        link: "Pages/Coming-Soon",
        collapsed: true,
        items: [],
      },
      {
        text: "Soulmask",
        link: "Pages/Coming-Soon",
        collapsed: true,
        items: [],
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
