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
title: Delete Databases
---

# Path of Titans Deleting / Resetting Server Database

If you want to delete the database of saved character and downloaded mods on your server, follow this tutorial. Please make sure you keep a backup of these files in case you want to restore your saved characters/mods. To make a backup, simply copy these folders to a secure location elsewhere. If you want to restore these files, move the folders back into their correct locations.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

Resetting / deleting the database is a two-step process. You have to delete the database cache, then delete the save games. The order of these steps is not important.

## Delete DatabaseCache

Path:

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
<i class="fas fa-folder" data-v-1536bbb2=""></i> DataBaseCache
</span>
</li>
<!--]-->
</ul>

Delete this `DatabaseCache` folder.

Deleting this folder will delete all player characters and character progress. We recommend deleting this folder between installing new mods and major changes.

We also suggest periodically backing up this folder to ensure you can rollback player saves if there are any issues you encounter on your server.

## Delete SaveGames

Path:

`PathofTitans/Saved/SaveGame`

Delete this `SaveGames` folder.

Deleting this folder will reset water quality, waystone cooldowns, and other map-specific saved content.
