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
title: Server Admins
---

# Path of Titans Server Admins

You can add admins to your server two ways, either by turning off your server and editing the Game.ini file, or by logging into your server and using some chat commands. If you plan on bulk adding many users, we suggest editing your `Game.ini` file.

## Adding Admins to Game.ini

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

You must edit `Game.ini` to add Server Admins. You can find this file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Game.ini`

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

Underneath the `[/Script/PathOfTitans.IGameSession]` header, enter the Alderon Games ID (AGID) of your admins, one player per line. You can add additional lines to enable more then one admin at once. To remove an admin, simply remove the line with their AGID.

::: tip
You can use in-line comments (using a `#`) to add notes about admins for better organization.
:::

## Example Game.ini

```ini
[/Script/PathOfTitans.IGameSession]
ServerAdmins=123-456-789
#Best friends with KangarooBoing88
ServerAdmins=987-654-321
ServerAdmins=456-103-789
```

## Add with Chat Command

You can also add and remove server admins via the in-game chat commands Promote or Demote. This can be used while your server is running. [More information here.](#)

| Code                          | Explanation                                                                                                      |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `/promote <user> <adminrole>` | Example: `/promote that411guy dinomaster` Promotes the player to the specified admin role. `+Permission=promote` |
| `/demote <user>`              | Example: `/demote that411guy` Removes all admin roles of that player. `+Permission=promote`                      |

If you want to create different admin roles, see this article: [Add or Remove Player Roles](#)
