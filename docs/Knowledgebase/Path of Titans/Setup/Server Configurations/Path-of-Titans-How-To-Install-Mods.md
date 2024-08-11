---
head:
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!
  - - meta
    - name: keywords
      content: Path Of Titans
title: Adding Server Mods
---

# Path of Titans Adding Mods to your Path of Titans Server:

Here's a simplified guide to editing server files and enabling mods in "**Path of Titans**":

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

It would help if you listed every mod you plan to use in the `GameUserSettings.ini` file.

Under the `[PathOfTitans.Mods]` header, add the lines:

`EnabledMods=UGC_M_DYV7XYEGX2_SK` - where `UGC_M_DYV7XYEGX2_SK` represents the Mod ID you wish to enable on your server. This unique MOD ID will prompt the mod to be downloaded and enabled upon server restart. You can add more lines to enable multiple mods simultaneously.

**Example of this:**

```ini
[PathOfTitans.Mods]
EnabledMods=UGC_M_DYV7XYEGX2_SK
EnabledMods=UGC_M_DYV0XMY7GX_SK
```

## Changing Default Server Map (If Using a Mod Map):

If you're using a modded map, specify its name in your `Game.ini` file.

Under the `[/Script/PathOfTitans.IGameSession]` header, add the line `ServerMap=TheGrimExpanse` - where TheGrimExpanse is the map name of the mod you want to use. Ensure the name matches exactly what's specified in the mod files. Generally, this will be the mod's name, but confirm with the mod author if unsure.

::: warning
Certain mods may disrupt the functioning of the custom map. Include only the custom map mod ID in the GameUserSettings.ini config, and specify the exact file name of the custom map for the server map config variable in the Game.ini file. Test it in-game to make sure it works. Then, add each mod individually, testing each time to ensure the custom map still loads.
:::

---

# Path of Titans All Dino Mods ID's, and `Game.ini` names are listed below:

::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::

## Absentia:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Absentia/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Acrocanthosaurus|`UGC_M_NV57RV2EJD_SK`|`AbsentiaAcro`|

## Ancient Gods:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Ancient%20Gods/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Camarasaurus|`UGC_M_DYV7XQ60GX_SK`|`Camarasaurus`|

## Ancient Monster:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Ancient%20Monster/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Cerataspida|`UGC_M_Y257G65EVZ_SK`|`AMCerataspida`|
|Dankanaptera|`UGC_M_634752J78W_SK`|`AMDankanaptera`|
|Dryptosaurus|`UGC_M_YNR7341E81_SK`|`DJCDryptosaurus`|
|Gigamandra|`UGC_M_W61E8X47MD_SK`|`Gigamandra`|
|Golugore|`UGC_M_VJK7M6KER3_SK`|`Golugore`|
|Madrehorn|`UGC_M_QM57NKD7D3_SK`|`AMMadrehorn`|
|Moraquile|`UGC_M_NZKEJJRE12_SK`|`AMMoraquile`|
|Thalasrex|`UGC_M_VJK0M13ER3_SK`|`AMThalasrex`|

## Archetypes:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Archetypes/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Dunkleosteus|`UGC_M_4RMEK5W7ZY_SK`|`Dunkleosteus`|
|Ocepechelon|`UGC_M_4RM0K8QEZY_SK`|`Ocepech`|
|Squalicorax|`UGC_M_6YJ72NJE58_SK`|`Squalicorax`|

## Arazoa:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Arazoa/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Xiphactinus|`UGC_M_6YJ72ZYE58_SK`|`ArazoaXiph`|

::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::

## Asylum:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Asylum/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Asylum Feline|`UGC_M_YZK04ZKE9W_SK`|`AsylumCougar`|

## David Rosa's:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/David%20Rosa/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Kaprosuchus|`UGC_M_N597DMN7WQ_SK`|`DavidKaproNew`|

## Ex Argilla:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Ex%20Argilla/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Australovenator|`UGC_M_YZKE41GE9W_SK`|`ExAAustralo`|
|Beringia Mammuthus Columbi|`UGC_M_RD17PN2EXG_SK`|`BeringiaMammothC`|
|Beringia Smilodon|`UGC_M_W6108VG0MD_SK`|`BeringiaSmilodon`|
|Bistahieversor|`UGC_M_K5G7Z2Y0PN_SK`|`ExABista`|
|Ex Argilla Smilodon|`UGC_M_JG1E9D97QN_SK`|`EASmilodon`|
|Dracoviper|`UGC_M_W610844EMD_SK`|`EADracoviper`|
|Griffin|`UGC_M_12GEW9PEWK_SK`|`EAGriffin`|
|Nasutoceratops|`UGC_M_6GWEYR373Z_SK`|`EANasuto`|

## The Crimson Isle:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/The%20Crimson%20Isle/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Cryolophosaurus|`UGC_M_N597D9ZEWQ_SK`|`CrimsonCryo`|

## Cenozoic Timelines:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Cenozoic%20Timelines/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Andrewsarchus|`UGC_M_Y25EGKQ0VZ_SK`|`CTAndrewsarchus`|
|Ankylorhiza|`UGC_M_YZK74RK79W_SK`|`CTAnkylorhiza`|

## Extinction Mods:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Extinction%20Mods/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Chaos Triceratops|`UGC_M_5XN7VP87PZ_SK`|`ChaosTrike`|

## Divine Beasts:

::: details
[Modder Discord](https://discord.gg/divinebeasts)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Divine%20Beasts/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Acrocanthosaurus|`UGC_M_Z85EQ5372V_SK`|`DivineAcroRedux`|
|Ampelosaurus|`UGC_M_K5GEZ410PN_SK`|`DivineAmp`|
|Carcharodontosaurus|`UGC_M_5XN0V387PZ_SK`|`DivineCarchar`|
|Compsognathus|`UGC_M_DYV0X257GX_SK`|`DivineCompy`|
|Deinosuchus|`UGC_M_6GW0YZY73Z_SK`|`DivineDeino`|
|Dryosaurus|`UGC_M_43GE6D67NR_SK`|`DivineDryo`|
|Edmontosaurus Annectens|`UGC_M_Z850QPPE2V_SK`|`DivineAnnectens`|
|Edmontosaurus Regalis|`UGC_M_N2R719403D_SK`|`DivineRegalis`|
|Giganotosaurus|`UGC_M_N59ED1N7WQ_SK`|`DivineGiga`|
|Inostrancevia|`UGC_M_DYVEXK57GX_SK`|`DivineInos`|
|Japanese Giant Salamander|`UGC_M_QM5ENMJ7D3_SK`|`TGBsalamander`|
|Kryptops|`UGC_M_43GE6NQENR_SK`|`CretaceousKryptops`|
|Mosasaurus|`UGC_M_NZK0JNR712_SK`|`DivineMosa`|
|Velocciraptor|`UGC_M_43G069Q0NR_SK`|`Velocciraptor`|
|Zhuchengtyrannus|`UGC_M_6GW0YYP03Z_SK`|`DivineZhuch`|

::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::

## Feilong:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Feilong/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Armored Eotriceratops|`UGC_M_NV5ER12EJD_SK`|`EoTLC`|
|Beaked Pachycephalosaurus Variant|`UGC_M_JG1E9XX0QN_SK`|`Beaky`|

## Goliath:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Goliath/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Dimetrodon|`UGC_M_W6178YG7MD_SK`|`Dimetrodon`|

## Great:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Great/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Tenontosaurus|`UGC_M_N590DRNEWQ_SK`|`GTenontosaurus`|

## Isla Nycta:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Isla%20Nycta/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Nyctatyrannus|`UGC_M_K5G0Z310PN_SK`|`Nyctatyrannus`|

## JFD:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/JFD/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Torvosaurus tanneri|`UGC_M_YNR73VY081_SK`|`JFDTtanneri`|
|Deltadromeus agilis|`UGC_M_W6178R10MD_SK`|`JFDDagilis`|

## K23:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/K-23/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Breenoc *deprecated|`UGC_M_634E5WJ08W_SK`|`Breenoc`|
|Bwi|`UGC_M_NZK0JMQ012_SK`|`Bwi`|
|Chisk *deprecated|`UGC_M_YNRE3QYE81_SK`|`Chisk`|
|Erosidian *deprecated|`UGC_M_6YJ723JE58_SK`|`Erosidian`|
|Gonari|`UGC_M_N2R01X403D_SK`|`Gonari`|
|Hannek|`UGC_M_6GWEYKY03Z_SK`|`Hannek`|
|Hebu-Bebu|`UGC_M_N597D5N7WQ_SK`|`Hebubebu`|
|Lahki *deprecated|`UGC_M_4RM0KZQ0ZY_SK`|` Lahki``Lahki2 `|
|Leilib *deprecated|`UGC_M_DYV7XJ5EGX_SK`|`Leilib`|
|Maahu *deprecated|`UGC_M_RD1EPV2EXG_SK`|`Maahu`|
|Moel *deprecated|`UGC_M_VJKEMDVER3_SK`|`Moel`|
|Nuuk *deprecated|`UGC_M_12GEWRN0WK_SK`|`Nuuk`|

## Kulku:

::: details
[Modder Discord](#)|[Curve Overrides Link](#)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Susecdurus|`UGC_M_W6108317MD_SK`|`Susecdurus`|

::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::

## KTO:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/KTO/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Deinosuchus|`UGC_M_43G76JQ0NR_SK`|`KTODeino`|
|Dryptosaurus|`UGC_M_N2RE1Y403D_SK`|`KTODrypto`|
|Yangchuanosaurus|`UGC_M_K5G7ZX1EPN_SK`|`KTOYang`|

## P&D's Menagerie:

::: details
[Modder Discord](https://discord.gg/3mUVxVhSXW)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/P&D's%20Menagerie/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Pentaceratops|`UGC_M_4RM7KJW0ZY_SK`|`PDPentaceratops`|

## Primordial Tyrants:

::: details
[Modder Discord](https://discord.gg/primordialtyrants)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Primordial%20Tyrants/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Apatosaurus|`UGC_M_QM50NNJ0D3_SK`|`PTApatosaurus`|
|Argentinosaurus|`UGC_M_Z857QJG02V_SK`|`PTArgent`|
|Carnotaurus|`UGC_M_YZK04PD79W_SK`|`PTCarno`|
|Dilophosaurus|`UGC_M_DYVEXZ57GX_SK`|`PTDilophosaurus`|
|Giganotosaurus|`UGC_M_DYV7X6Y0GX_SK`|`PTGiga`|
|Kelenken|`UGC_M_QM57N6J7D3_SK`|`PTKelenken`|
|Maip|`UGC_M_Z857Q4PE2V_SK`|`PTMaip`|
|Parasaurolophus|`UGC_M_Z85EQRP02V_SK`|`PTParasaurolophus`|
|Psittacosaurus|`UGC_M_DYVEXP60GX_SK`|`PTPsittacosaurus`|
|Quetzalcoatlus|`UGC_M_5XNEV187PZ_SK`|`PTQuetzalcoatlus`|
|Sachicasaurus|`UGC_M_RD10PP20XG_SK`|`PTSachicasaurus`|
|Therizinosaurus|`UGC_M_Y250GPQ0VZ_SK`|`PTTherizinosaurus`|
|Torvosaurus|`UGC_M_DYV0X96EGX_SK`|`PTTorvosaurus`|
|Tyrannosaurus|`UGC_M_NV57RRW7JD_SK`|`PTTyrannosaurus`|
|Utahraptor|`UGC_M_5XN7VXW0PZ_SK`|`PTUtahraptor`|
|Yunnanosaurus|`UGC_M_Y25EGXK7VZ_SK`|`PTYunnano`|
|Yutyrannus|`UGC_M_QM5ENGD7D3_SK`|`PTYutyrannus`|
|Noviana|`UGC_M_Z857Q9P72V_SK`|`IgnisNoviana`|
|Ophis|`UGC_M_6YJ026J758_SK`|`IgnisOphis`|

## Titanus Constructus:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Titanus%20Constructus/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Ampelosaurus|`UGC_M_NZK0J4RE12_SK`|`Ampelosaurus`|
|Citipati|`UGC_M_YNRE3PY781_SK`|`TCCitipati`|

## Krono:

::: details
[Modder Discord](#)|[Curve Overrides Link](../../Guides/Curve%20Overrides/Modded%20Dinosaurs/Krono/index)|[Others](#)
:::
|Mod Name:|Mod ID:|Game.ini Name:|
|-|-|-|
|Bloop|`UGC_M_VJKEM8KER3_SK`|`Bloop`|

::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::

## Mod Maps:

| Mod Name:          | Mod ID:               |             Discord Link              |
| ------------------ | --------------------- | :-----------------------------------: |
| Avernus            | `UGC_M_K5G0ZN10PN_SK` |  [Link](https://discord.gg/hhZnYsPT)  |
| StoneclawHighlands | `UGC_M_QM57NW7D3P_SK` |               [Link](#)               |
| Teutonia           | `UGC_M_RD1EPJ9EXG_SK` |               [Link](#)               |
| TheGrimExpanse     | `UGC_M_DYV7XYEGX2_SK` |               [Link](#)               |
| NewEra             | `UGC_M_43G06350NR_SK` |               [Link](#)               |
| Jangwa             | `UGC_M_5XN7VN2EPZ_SK` |               [Link](#)               |
| Infinita           | `UGC_M_JG1E9WXEQN_SK` |               [Link](#)               |
| Etis               | `UGC_M_N597DNPEWQ_SK` |               [Link](#)               |
| CeruleanIsland     | `UGC_M_YNR73P081V_SK` |               [Link](#)               |
| Aedis              | `UGC_M_NZK0J6M712_SK` |               [Link](#)               |
| Paragon            | `UGC_M_YZKE4MK09W_SK` |               [Link](#)               |
| Savanna            | `UGC_M_RD10PRZEXG_SK` | [Link](https://discord.gg/ynQzQJJexq) |

## Skin Packs & Others:

| Mod Name:                         | Mod ID:               | Discord Link |
| --------------------------------- | --------------------- | :----------: |
| Ordinary Prehistoric Skin Mod     | `UGC_M_Y250G4KEVZ_SK` |  [Link](#)   |
| IoA Realism Skins                 | `UGC_M_12G0WJNEWK_SK` |  [Link](#)   |
| Isle of Asylum Skins              | `UGC_M_N2R01R03DQ_SK` |  [Link](#)   |
| Radical Rocks                     | `UGC_M_YZK74KD09W_SK` |  [Link](#)   |
| Rainbow Dinos                     | `UGC_M_6YJ023758N_SK` |  [Link](#)   |
| Simple Skins                      | `UGC_M_N59EDWP0WQ_SK` |  [Link](#)   |
| CMIPlus                           | `UGC_M_63475MJ78W_SK` |  [Link](#)   |
| Crazy Items                       | `UGC_M_K5G0ZGQEPN_SK` |  [Link](#)   |
| Diet Mod                          | `UGC_M_12G7WQN7WK_SK` |  [Link](#)   |
| The Jurassic Savannah Skins [TJS] | `UGC_M_43GE695ENR_SK` |  [Link](#)   |
| Arazoa Creator                    | `UGC_M_43G06W60NR_SK` |  [Link](#)   |
| Veneer                            | `UGC_M_YZK743K09W_SK` |  [Link](#)   |

::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::

<p style="text-align: center;"><span data-preserver-spaces="true">Experience seamless gameplay with our top-of-the-line "</span><strong><span data-preserver-spaces="true">Path Of Titans</span></strong><span data-preserver-spaces="true">" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. </span><span data-preserver-spaces="true">With </span><strong><span data-preserver-spaces="true">lightning-fast hardware</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">unrivaled performance</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">reliable uptime</span></strong><span data-preserver-spaces="true">, our servers ensure an immersive gaming experience for your communitys needs. </span><span data-preserver-spaces="true">Take advantage of our cutting-edge features, including </span><strong><span data-preserver-spaces="true">customizable settings</span></strong><span data-preserver-spaces="true">, an </span><strong><span data-preserver-spaces="true">intuitive control panel</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">dedicated support</span></strong><span data-preserver-spaces="true">. Dont miss out on this opportunity to level up your gaming experience.</span></p>
<h3 style="text-align: center;"><span style="color: #ffd369;"><a style="color: #ffd369;" href="https://gameservershub.com/hosting/path-of-titans/"><strong>Get your server today!</strong></a></span></h3>
