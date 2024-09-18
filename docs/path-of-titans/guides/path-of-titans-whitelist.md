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
title: Whitelisting
---

# Path of Titans Whitelisting

## About Whitelisting

If you have a private server and only want specific players to join, you can create a Whitelist. This is more secure than using a password, as a password can be leaked or shared.

You can use the `bEnforceWhitelist=true` option in your `Game.ini` file to enable the whitelist without kicking users until you are done.

- If you don't have a whitelist file, or the file is empty, the whitelist will not be enabled.
- The moment you add a user ID to the whitelist text file, the whitelist will come into effect.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
::: details
Changes to server files require a server restart, so we recommend adding whitelisted players with RCON commands or in-game chat commands!
:::

1. In the Saved folder you must create a file called `whitelist.txt`
2. Add the whitelisted users for your server in the text file and click "Save".

Here is the format for the `whitelist.txt` file:

`PathofTitans/Saved/whitelist.txt`

## Formatting

Add the Alderon Games ID (AGID) of each whitelisted user on a new line. You can find a player's AGID by using the Admin Chat Commands or the Spectator Tool.

### Example whitelist.txt

```txt
123-456-963
455-789-426
687-653-545
123-456-789
```
