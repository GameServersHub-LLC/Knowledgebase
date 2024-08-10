---
title: Chat Commands
---

# Path of Titans Chat Commands

To use these commands, simply log into your server and open the text chat in-game. Type your command and hit **"Enter"** to execute the command. Text commands can also be used when in Spectator Mode.

::: tip
Optional parameters can be added anywhere inside the command and will change the way the command works.
::: details
One Example is `/teleport` - By default, it teleports safely, making sure the player is on ground and not inside anything. But the keyword `unsafe` will stop the teleport from checking for a safe location.
:::

When creating player roles, the permission to allow any command is the name of the command unless otherwise stated, for example, `/bring` relies on the "teleport" permission, so you must allow that permission in order for a role to use `/bring`.

## General Command

Commands in this section do not require permission to use, and are available to everyone. They are useful for bug reporting, general information, and more.

| Chat Command:                 | Example:                          | Permissions: | RCON Support: | Action:                                                                                                                     |
| ----------------------------- | --------------------------------- | ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------- |
| /rules                        | `/rules`                          | -            | :x:           | List the server's rules                                                                                                     |
| /motd                         | `/motd`                           | -            | :x:           | Displays the server's Message of The Day.                                                                                   |
| /help                         | `/help`                           | -            | :x:           | Lists all the commands that player has access to with a short description of each.                                          |
| /clear                        | `/clear`                          | -            | :x:           | Clears the current chat channel.                                                                                            |
| /mapbug                       | `/mapbug`                         | -            | :x:           | Copies the current player position to the clipboard.                                                                        |
| /bugsnap                      | `/bugsnap`                        | -            | :x:           | Loads a dialogue for submitting a bug snapshot.                                                                             |
| /respawn                      | `/respawn`                        | -            | :x:           | Kills your character and respawns them at a standard spawn point. Useful if players somehow get stuck.                      |
| /mute [user]                  | `/mute that411guy`                | -            | :x:           | Mutes the specified user. This only mutes them for the player, not the entire server.                                       |
| /unmute [user]                | `/unmute that411guy`              | -            | :x:           | Unmutes the specified user. This only unmutes them for the player, not the entire server.                                   |
| /listplayers                  | `/listplayers`                    | -            | :x:           | Shows all players on the server.                                                                                            |
| /whisper [username] [message] | `/whisper that411guy Hello there` | -            | :x:           | Whispers a message to the specified player. If no player is specified, it will whisper to the last player you whispered to. |
| /w [username] [message]       | `/w that411guy Hello there`       | -            | :x:           | Shortcut for /whisper.                                                                                                      |
| /whisperall [message]         | `/whisperall Hello everyone`      | -            | :x:           | Whispers a message to all players in the server.                                                                            |

## Teleport Commands

Commands related to teleporting and bringing players to locations, POIs, and even other players.

| Chat Command:                  | Example:                                            | Permissions:            | RCON Support:      | Action:                                                                                                                                                                                   |
| ------------------------------ | --------------------------------------------------- | ----------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /teleport (coordinates)        | `/teleport (X=-91112,Y=-176182,Z=13156)`            | +Permission=teleport    | :heavy_check_mark: | Teleports yourself to the specified coordinates. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport                                                    |
| /teleport [user] (coordinates) | `/teleport that411guy (X=-91112,Y=-176182,Z=13156)` | +Permission=teleport    | :heavy_check_mark: | Teleports the user to the specified coordinates. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport                                                    |
| /teleport [user] [user]        | `/teleport Mike Josh`                               | +Permission=teleport    | :heavy_check_mark: | Teleports the first user to the second user. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport                                                        |
| /teleport [POIname]            | `/teleport talonspoint`                             | +Permission=teleport    | :heavy_check_mark: | Teleports yourself to a point within the specified POI. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport                                             |
| /teleport [user] [POIname]     | `/teleport that411guy talonspoint`                  | +Permission=teleport    | :heavy_check_mark: | Teleports the user to a point within the specified POI. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport                                             |
| /bring [user]                  | `/bring that411guy`                                 | +Permission=teleport    | :x:                | Brings the user to your location. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport                                                                   |
| /goto [location]               | `/goto talonspoint`                                 | +Permission=teleport    | :x:                | Teleports you to the target location. The location can be either a username, a POI, or coordinates. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport |
| /teleportall [POIname]         | `/teleportall talonspoint`                          | +Permission=teleportall | :heavy_check_mark: | Teleports all users on the server to a point within the specified POI.                                                                                                                    |
| /teleportall (coordinates)     | `/teleportall (X=-91112,Y=-176182,Z=13156)`         | +Permission=teleportall | :heavy_check_mark: | Teleports all users on the server to the specified coordinates.                                                                                                                           |
| /bringall                      | `/bringall`                                         | +Permission=teleportall | :x:                | Teleports all players to your location.                                                                                                                                                   |

## Change Stats Commands

Commands related to changing player stats, such as hunger, thirst, stamina, and many more.

| Chat Command:      | Example:        | Permissions:         | RCON Support:      | Action:                                  |
| ------------------ | --------------- | -------------------- | ------------------ | ---------------------------------------- |
| /setmarks [number] | `/setmarks 900` | +Permission=setmarks | :heavy_check_mark: | Sets your marks to the specified number. |
