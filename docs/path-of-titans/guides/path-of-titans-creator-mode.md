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
title: Creator Mode
---

# Path of Titans Creator Mode

This guide will teach you how to use Creator Mode on your server and how to configure it.

## What is Creator Mode?

Creator Mode allows server admins to fly around in spectator mode and spawn in items, food, water, hand out quests, change the time of day and weather, spawn in creatures for players to interact with, and more. Creator Mode also lets admins drag players around and edit items that are placed on the map. It is a powerful tool that lets admins directly interact with their community and host unique events in real-time.

This game mode essentially puts a player into the role of a Dungeon Master typically found in tabletop roleplaying games such as Dungeons and Dragons. It opens up a huge amount of possibilities for server owners to host their own events without having to learn to mod the game or work within the boundaries of the default game mode.

Creator Mode can be modded to add new item and food types. This allows you to create small community areas on your server without the need to mod in an entirely new map. You can download and mod in new spectator camera models as well. You can find more information below.

<iframe width="100%" height="540" src="https://www.youtube-nocookie.com/embed/r1KtJ25ylz8?si=Nb4GVBIIJjI_xyG2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Enabling Creator Mode

To use creator mode, you must have permission to use it via your assigned Player Role. [Learn how to edit Player Roles here.](./path-of-titans-player-roles)

If you do not have a player role assigned to you with Creator Mode permissions, you will not be able to access Creator Mode.

1. Ensure you have the correct admin permissions to use the Spectator Tool.
2. Log in to your server.
3. Click the "Spectator" button on the right of the Character Creation panel.
4. You will be spawned into the map as the spectator camera. The camera can fly anywhere and by default is visible by players.
5. Press TAB and open the "Admin" panel on the left side.
6. On the Admin Panel, click the "Creator Mode" checkbox.

You will now have Creator Mode enabled. To disable creator mode, simply uncheck the "Creator Mode" checkbox in the Admin panel.

## Using Creator Mode

Once you have access to creator mode, it can be opened by entering Spectator Mode, pressing TAB, and selecting "Creator Objects". Here you can select items to spawn, with every item having a budget. You cannot spawn more items than the budget allows, in order to prevent server performance problems.

You can also click on an item, press TAB, and click "Selection" to edit the stats of the selected item (including players!) You can have multiple items selected and edited at the same time.

You can also drag items and players by clicking and holding while moving your mouse cursor.

<!-- insert creator mode image -->

Another setting you can change is the rotation of the item. You can change the rotation of an item by clicking on it and using the following keys based on your system:

- **PC**: R button
- **Switch**: Left bumper (Broken as “A” since LB cannot be rebound)
- **Xbox**: Left bumper (Broken as “B” since LB cannot be rebound)
- **Playstation**: Left bumper (Broken as “O” since LB cannot be rebound)
- **Mobile**: Left bumper (Broken as “B” since LB cannot be rebound)

## Creator Mode Chat Commands

You can use these commands in your chat to manage your creator mode profiles, assuming you have the correct permissions.

| Chat Command:                 | Example:                       | Permissions:                     | RCON Support:      | Action:                                                                                                                 |
| ----------------------------- | ------------------------------ | -------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| /ClearCreatorObjects          | `/clearcreatorobjects`         | +Permission=clearcreatorobjects  | :heavy_check_mark: | Removes and refunds all placed Creator Mode Objects on the server.                                                      |
| /LoadCreatorMode [SaveName]   | `/loadcreatormode rockworld`   | +Permission=loadcreatormode      | :heavy_check_mark: | Loads the saved Creator Mode data from the specified save slot.                                                         |
| /SaveCreatorMode [SaveName]   | `/savecreatormode rockworld`   | +Permission=savecreatormode      | :heavy_check_mark: | Saves the Creator Mode data to the specified save slot.                                                                 |
| /ResetCreatorMode             | `/resetcreatormode`            | +Permission=resetcreatormode     | :heavy_check_mark: | Resets Creator Mode Objects to their default, removing placed objects and changing map objects to their original state. |
| /RemoveCreatorMode [SaveName] | `/removecreatormode rockworld` | +Permission=removecreatormode    | :heavy_check_mark: | Removes the Creator Move data from the specified save slot.                                                             |
| /ListCreatorMode              | `/listcreatormode`             | +Permission=listcreatormode      | :heavy_check_mark: | Lists the saved Creator Mode saves.                                                                                     |
| /ReplenishCreatorMode         | `/replenishcreatormode`        | +Permission=replenishcreatormode | :heavy_check_mark: | Replenishes all items on the map, excluding water.                                                                      |

## Config

Creator mode can automatically load a saved state when a server starts by defining DefaultCreatorModeSave in `Game.ini`. The state can be saved via the command `/SaveCreatorMode [SaveName]`.

```ini
[/Script/PathOfTitans.IGameMode]
DefaultCreatorModeSave=""
```
