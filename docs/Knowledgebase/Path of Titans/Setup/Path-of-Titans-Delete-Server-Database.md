---
title: Delete Databases
---

# Path of Titans Deleting / Resetting Server Database

If you want to delete the database of saved character and downloaded mods on your server, follow this tutorial. Please make sure you keep a backup of these files in case you want to restore your saved characters/mods. To make a backup, simply copy these folders to a secure location elsewhere. If you want to restore these files, move the folders back into their correct locations.

:: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
::

Resetting / deleting the database is a two-step process. You have to delete the database cache, then delete the save games. The order of these steps is not important.

## Delete DatabaseCache

Path:

`PathofTitans/Saved/DataBaseCache`

Delete this `DatabaseCache` folder.

Deleting this folder will delete all player characters and character progress. We recommend deleting this folder between installing new mods and major changes.

We also suggest periodically backing up this folder to ensure you can rollback player saves if there are any issues you encounter on your server.

## Delete SaveGames

Path:

`PathofTitans/Saved/SaveGame`

Delete this `SaveGames` folder.

Deleting this folder will reset water quality, waystone cooldowns, and other map-specific saved content.
