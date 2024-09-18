---
head:
  - - meta
    - property: "og:image"
      content: /path of titans - 667x260.webp
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Path of Titans. Find details on gameplay, features, and updates for the ultimate dino MMO adventure!
  - - meta
    - name: keywords
      content: Path Of Titans
title: Dinosaurs Enable/Disable
---

# Path of Titans Enabling/Disabling Dinosaurs

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

This will set up a whitelist of permitted dinosaurs on your server. The reason why this is a whitelist, and not a blacklist (eg. a list of disabled dinosaurs) is so that as new official dinosaurs are released to the game, this new dinosaur won't suddenly appear in your server without your permission. This way, you can test the new dinosaur ahead of time and see if it is fit for your server and enable it on your own terms.

To enable/disable dinosaurs you must edit the `Game.ini` file on your server, and add the dinosaur names under the `[/Script/PathOfTitans.IGameSession]` header. You can find the `Game.ini` file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Commands.ini`

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

## Dinosaur Names

Dinosaur names for the `AllowedCharacters` are spelled exactly the same as seen in-game. For example: `Albertaceratops`, `Tyrannosaurus`, `Latenivenatrix` etc. For a full list of all the dinosaurs you can enable, please open the game and view them in the character creation menu.

You must use the format `AllowedCharacters=DinosaurName` where `DinosaurName` is the name of the dinosaur you want to enable.

Or if you want to disable specific dinosaurs, you can use the format `DisallowedCharacters=DinosaurName` where `DinosaurName` is the name of the dinosaur you want to disable.

For modded dinosaurs, [here the list of all names](../guides/curve-overrides/modded-dinosaurs/index)

## Example Game.ini

```ini
[/Script/PathOfTitans.IGameSession]
AllowedCharacters=Struthiomimus
AllowedCharacters=Suchomimus
DisallowedCharacters=Spinosaurus
```
