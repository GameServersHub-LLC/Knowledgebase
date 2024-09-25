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
title: Message of the Day Setup
---

# Path of Titans Message of the Day Setup

Setting up a Message of the Day is useful for letting your players know what's happening and current events. Unlike the Rules, which will not display again once the player closes the window, the MOTD will appear every single time a player logs into the server.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

1. In the Saved folder you must create a file called `MOTD.txt`
2. Enter the MOTD for your server in the text file and click "Save".

You can find this file in the following location:

`PathofTitans/Saved/MOTD.txt`

::: tip
If you specify a Discord server in your Server Config, a Discord button will appear on your MOTD as well, letting players join your community Discord server if clicked. More information here: [Server Configuration Options](../setup/path-of-titans-how-to-configurate-game-ini)
:::

## Formatting

You can use text formatting to make your MOTD look nicer or better organize your messages.

::: info
Formatting cannot be combined (example, `<title><red>This is my title!</></>` will only use the title format). Alderon currently do not support Markdown or HTML in the MOTD, Alderon only support the formatting as described below.
:::

You must close formatting with `</>`.

`<title>` - Largest title font size.

`<large>` - Large font size.

`<small>` - Small font size.

`<red>` - Use red text colour.

`<orange>` - Use orange text colour.

`<yellow>` - Use yellow text colour.

`<green>` - Use green text colour.

`<blue>` - Use blue text colour.

`<purple>` - Use purple text colour.

`<white>` - Use white text colour.

## Example MOTD.txt

Here is an example of way to edit the font and colors

```js
<title> Maximum font size </>
<large> Large font size </>
<small> Small font size </>
<red> Red font </>
<orange> Orange font </>
<yellow> Yellow font </>
<green> Green font </>
<blue> Blue font </>
<purple> Purple font </>
<white> White font </>

<blue>Join our Discord click the link bottom left or https://discord.gg/gsh</>
```

![Path of Titans Message of the Day](<motd screenshot.webp>)
