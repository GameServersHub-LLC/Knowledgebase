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
title: Setup Server Password
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

<ul class="breadcrumbs" data-v-1536bbb2="">
<!--[-->
<li class="first" data-v-1536bbb2="">
<span data-v-1536bbb2="">
<i class="fas fa-folder" data-v-1536bbb2=""></i> PathofTitans
</span>
</li>
<li class="" data-v-1536bbb2="">
<span data-v-1536bbb2="">
<i class="fas fa-folder" data-v-1536bbb2=""></i> Saved
</span>
</li>
<li class="" data-v-1536bbb2="">
<span data-v-1536bbb2="">
<i class="fas fa-folder" data-v-1536bbb2=""></i> Config
</span>
</li>
<li class="" data-v-1536bbb2="">
<span data-v-1536bbb2="">
<i class="fas fa-folder" data-v-1536bbb2=""></i> LinuxServer
</span>
</li>
<li class="last" data-v-1536bbb2="">
<span data-v-1536bbb2="">
<i class="fas fa-file" data-v-1536bbb2=""></i> Game.ini
</span>
</li>
<!--]-->
</ul>

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

## Example Contents of Game.ini

```ini
[/Script/PathOfTitans.IGameSession]
ServerPassword=Password123
```
