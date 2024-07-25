# Chat Commands

To use these commands, simply log into your server and open the text chat in-game. Type your command and hit **"Enter"** to execute the command. Text commands can also be used when in Spectator Mode.

::: tip
Optional parameters can be added anywhere inside the command and will change the way the command works.
::: details
One Example is `/teleport` - By default, it teleports safely, making sure the player is on ground and not inside anything. But the keyword `unsafe` will stop the teleport from checking for a safe location.
:::

When creating player roles, the permission to allow any command is the name of the command unless otherwise stated, for example, `/bring` relies on the "teleport" permission, so you must allow that permission in order for a role to use `/bring`.

## General Command

Commands in this section do not require permission to use, and are available to everyone. They are useful for bug reporting, general information, and more.

|Chat Command:|Example:|Permissions:|RCON Support:|Action:|
|-|-|-|-|-|
|/rules|`/rules`|-|:x:|List the server's rules|
|/motd|`/motd`|-|:x:|Displays the server's Message of The Day.|
|/help|`/help`|-|:x:|Lists all the commands that player has access to with a short description of each.|
|/clear|`/clear`|-|:x:|Clears the current chat channel.|
|/mapbug|`/mapbug`|-|:x:|Copies the current player position to the clipboard.|
|/bugsnap|`/bugsnap`|-|:x:|Loads a dialogue for submitting a bug snapshot.|
|/respawn|`/respawn`|-|:x:|Kills your character and respawns them at a standard spawn point. Useful if players somehow get stuck.|
|/mute [user]|`/mute Jiggy`|-|:x:|Mutes the specified user. This only mutes them for the player, not the entire server.|
|/unmute [user]|`/unmute Jiggy`|-|:x:|Unmutes the specified user. This only unmutes them for the player, not the entire server.|
|/listplayers|`/listplayers`|-|:x:|Shows all players on the server.|
|/whisper [username] [message]|`/whisper Jiggy Hello there`|-|:x:|Whispers a message to the specified player. If no player is specified, it will whisper to the last player you whispered to.|
|/w [username] [message]|`/w Jiggy Hello there`|-|:x:|Shortcut for /whisper.|
|/whisperall [message]|`/whisperall Hello everyone`|-|:x:|Whispers a message to all players in the server.|

## Teleport Commands

Commands related to teleporting and bringing players to locations, POIs, and even other players.

|Chat Command:|Example:|Permissions:|RCON Support:|Action:|
|-|-|-|-|-|

