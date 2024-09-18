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
title: Player Roles
---

# Path of Titans Player Roles

This guide will show you how to setup player roles on your community server. These roles can be used to give players access to specific commands, and give them unique colors in chat!

## Modifying Player Roles

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::
You must edit the `Commands.ini` to modify player roles. You can find this file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Commands.ini`

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

## How do I add or remove player roles?

1. Add some player roles. For each player role you must create a section with the title `[Role:RoleName]` where `RoleName` is the name of the role you want to create.
2. Add some command permissions to your player role so that someone with this role can execute those commands. In order to add a permission, you must add a line underneath your role: `+Permission=PermissionName`, where `PermissionName` is the name of the command permission to allow.
3. Add a custom color to your new role. Adding a color is similar to adding a command permission: `ChatColor={R=255,G=255,B=255,A=255}` where the R,G,B values range from 0 - 255 and combine to make up the color. Changing the `A` value will do nothing as it controls transparency and is locked to 255. The default color if left undefined is white.
4. Assign your new role to a player. You can do this by creating a new section `[PlayerRoles]`, and underneath, you can enter the Alderon Games ID (AGID) of the player, followed by `=`, followed by the role name. Alternatively, as a server admin, you can use the command `/promote (playername) (rolename)` and `/demote (playername)` in-game to assign or unassign player roles.
5. There is additional customization you can add to your player role. To use them, add any of following lines under your player role section and set their value:

| Code                                | Explanation                                                                                                                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `OverrideAdminChatColor=True/False` | Set to True to allow the specific player role chat color to override the default whitelisted admin chat color. Default value = `False`. |
| `AllowSpectatorAccess=True/False`   | Set to True to allow the specific player role to access the "Spectator" mode and the admin panel. Default value = `False`.              |
| `ReservedSlot=True/False`           | Set to True to allow the specific player role to have a reserved slot in the server. Default value = `False`.                           |
| `CreatorModeAccess=True/False`      | Set to True to allow creator mode access for a player. Default value = `False`.                                                         |
| `Hierarchy=0`                       | Determines the hierarchy of player roles. A lower role cannot do specific commands on a higher role. Default value = `0`.               |

::: tip
Some of the commands use hierarchy, such as: `ban`, `kick`, `promote`, `demote`.
:::

## Example Commands.ini:

```ini
[Role:Teleporter]
+Permission=teleport
+Permission=teleportall
ChatColor=(R=0,G=255,B=0,A=255)
OverrideAdminChatColor=True
ReservedSlot=True

[PlayerRoles]
123-456-789=Teleporter
```
