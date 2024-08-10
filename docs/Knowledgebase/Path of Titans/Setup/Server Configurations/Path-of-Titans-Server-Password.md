---
title: PlaceHolder
---

# Path of Titans Server Password

Setting up a password on your server is encouraged if you intend to play with just your friends or with a closed community.

::: tip
This line isn't required for `GSH Servers` and should a password be required, please update the `Startup` tab with the password!
:::

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

To add a password you must add the `ServerPassword` line in your `Game.ini` file, under the `[/Script/PathOfTitans.IGameSession]` header. You can find this file in the following location:

`PathofTitans/Saved/Config/LinuxServer/Game.ini`

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

## Example Contents of Game.ini

```ini
[/Script/PathOfTitans.IGameSession]
ServerPassword=Password123
```
