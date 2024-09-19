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
title: Reserved Slots
---

# Path of Titans Reserved Slots

You can adjust and change the number of reserved slots on your server, and change what server roles can use reserved slots. We highly suggest adding your server's admin roles to use reserved slots to ensure you can have admins login and moderate even if the server is full.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

You must edit two areas to set reserved slots.

First you must set the number of reserved slots your server uses, then you must specify which roles can take advantage of reserve slots.

## Setting Reserved Slot Limit

You must add this line in your `Game.ini` file. You can find this file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Game.ini`

::: info
`LinuxServer` is the folder name for LinuxServer servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

And add the following line under the `[/Script/PathOfTitans.IGameSession]` header as such:

### Example contents of Game.ini

```ini
[/Script/PathOfTitans.IGameSession]
ReservedSlots=20
```

If the player limit is 100, the `ReservedSlots` line will allow the server go up to 120 players, with 20 slots being reserved for admins. By default your server will use 20 reserve slots. If you are fine with using 20 reserve slots you don't need to add this line, as it applies automatically.

## Enabling Reserved Slots on your Admin Roles

To take advantage of reserved slots, you must enable it on your admin roles.

For more information about creating server roles, see the [Add or Remove Player Roles page.](#)

You must edit your `Commands.ini` file to enable reserved slots on your admin roles. You can find this file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Commands.ini`

::: info
`LinuxServer` is the folder name for LinuxServer servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

Add the `ReservedSlot=True` line under each role you want to have access to reserved slots.

### Example contents of Commands.ini

```ini
[Role:Teleporter]
+Permission=teleport
ReservedSlot=True

[PlayerRoles]
123-456-789=Teleporter
```
