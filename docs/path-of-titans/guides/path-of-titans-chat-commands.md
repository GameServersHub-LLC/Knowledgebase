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
title: Chat Commands
---

# Path of Titans Path of Titans Chat Commands

To use these commands, simply log into your server and open the text chat in-game. Type your command and hit **"Enter"** to execute the command. Text commands can also be used when in Spectator Mode.

::: tip
Optional parameters can be added anywhere inside the command and will change the way the command works.
::: details
One Example is `/teleport` - By default, it teleports safely, making sure the player is on ground and not inside anything. But the keyword `unsafe` will stop the teleport from checking for a safe location.
:::

When creating player roles, the permission to allow any command is the name of the command unless otherwise stated, for example, `/bring` relies on the "teleport" permission, so you must allow that permission in order for a role to use `/bring`.

## General Command

Commands in this section do not require permission to use, and are available to everyone. They are useful for bug reporting, general information, and more.

| Chat Command: | Example: | Permissions: | RCON Support: | Action: |
| -- | -- | -- | -- | -- |
| /rules | `/rules` | - | :x: | List the server's rules |
| /motd | `/motd` | - | :x: | Displays the server's Message of The Day. |
| /help | `/help` | - | :x: | Lists all the commands that player has access to with a short description of each. |
| /clear | `/clear` | - | :x: | Clears the current chat channel. |
| /mapbug | `/mapbug` | - | :x: | Copies the current player position to the clipboard. |
| /bugsnap | `/bugsnap` | - | :x: | Loads a dialogue for submitting a bug snapshot. |
| /respawn | `/respawn` | - | :x: | Kills your character and respawns them at a standard spawn point. Useful if players somehow get stuck. |
| /mute [user] | `/mute mike` | - | :x: | Mutes the specified user. This only mutes them for the player, not the entire server. |
| /unmute [user] | `/unmute mike` | - | :x: | Unmutes the specified user. This only unmutes them for the player, not the entire server. |
| /listplayers | `/listplayers` | - | :heavy_check_mark: | Shows all players on the server. |
| /whisper [username] [message] | `/whisper mike Hello there` | - | :heavy_check_mark: | Whispers a message to the specified player. If no player is specified, it will whisper to the last player you whispered to. |
| /w [username] [message] | `/w mike Hello there` | - | :x: | Shortcut for /whisper. |
| /whisperall [message] | `/whisperall Hello everyone` | - | :x: | Whispers a message to all players in the server. |

## Teleport Commands

Commands related to teleporting and bringing players to locations, POIs, and even other players.

| Chat Command: | Example: | Permissions: | RCON Support: | Action: |
| -- | -- | -- | -- | -- |
| /teleport (coordinates)| `/teleport (x=-91112,Y=-176182,Z=13156)`  | +Permission=teleport | :heavy_check_mark: | Teleports yourself to the specified coordinates. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport|
| /teleport [user] (coordinates) | `/teleport mike (x=-91112,Y=-176182,Z=13156)` | +Permission=teleport | :heavy_check_mark: | Teleports the user to the specified coordinates. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport|
| /teleport [user] [user]| `/teleport Mike Josh`  | +Permission=teleport | :heavy_check_mark: | Teleports the first user to the second user. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport  |
| /teleport [POIname]  | `/teleport talonspoint`| +Permission=teleport | :heavy_check_mark: | Teleports yourself to a point within the specified POI. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport |
| /teleport [user] [POIname]| `/teleport mike talonspoint`| +Permission=teleport | :heavy_check_mark: | Teleports the user to a point within the specified POI. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport |
| /bring [user]| `/bring mike` | +Permission=teleport | :x: | Brings the user to your location. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport|
| /goto [location]| `/goto talonspoint` | +Permission=teleport | :x: | Teleports you to the target location. The location can be either a username, a POI, or coordinates. 'unsafe' Optional parameter, use to change from a safe teleport to an unsafe teleport |
| /teleportall [POIname] | `/teleportall talonspoint`  | +Permission=teleportall | :heavy_check_mark: | Teleports all users on the server to a point within the specified POI.|
| /teleportall (coordinates)| `/teleportall (x=-91112,Y=-176182,Z=13156)` | +Permission=teleportall | :heavy_check_mark: | Teleports all users on the server to the specified coordinates. |
| /bringall  | `/bringall`  | +Permission=teleportall | :x: | Teleports all players to your location.|

## Change Stats Commands

Commands related to changing player stats, such as hunger, thirst, stamina, and many more.

| Chat Command:| Example:| Permissions: | RCON Support: | Action:|
| -- | -- | -- | -- | -- |
| /setmarks [number]| `/setmarks 900`| +Permission=setmarks | :heavy_check_mark: | Sets your marks to the specified number.|
| /setmarks [user] [number] | `/setmarks mike 900` | +Permission=setmarks | :heavy_check_mark: | Sets a player's marks to the specified number. |
| /setmarksall [number]| `/setmarksall 900`  | +Permission=setmarksall| :heavy_check_mark: | Sets all users' marks to the specified amount. |
| /addmarks [user] [number] | `/addmarks mike 200` | +Permission=setmarks | :heavy_check_mark: | Adds a number of marks to the player.|
| /addmarksall [number]| `/addmarksall 200`  | +Permission=setmarks | :heavy_check_mark: | Adds a number of marks to all the players in the server.|
| /removemarks [user] [number]| `/removemarks that41guy 400`  | +Permission=setmarks | :heavy_check_mark: | Removes a number of marks from the player.|
| /heal  | `/heal` | +Permission=heal| :x: | Heals yourself.|
| /heal [user]| `/heal mike`  | +Permission=heal| :heavy_check_mark: | Heals the specified player.|
| /healall | `/healall` | +Permission=healall  | :heavy_check_mark: | Heals everyone.|
| /godmode | `/godmode` | +Permission=godmode  | :x: | Apply godmode to yourself. Use this command again to toggle it on/off. |
| /godmode [user] | `/godmode mike` | +Permission=godmode  | :x: | Apply godmode to a user. Use this command again to toggle it on/off. |
| /[attribute] [number]| `/hunger 100`  | +Permission=modify attribute| :heavy_check_mark: | Sets your hunger to 100. |
| /modattr [user] [attribute] [value] | `/modattr mike Stamina -100` | +Permission=modify attribute| :heavy_check_mark: | Modifies the user's attribute by the value specified. This is additive, rather than `/setattr`, which overrides the value. |
| /setattr [user] [attribute] [value] | `/setattr mike Stamina 20`| +Permission=set attribute | :heavy_check_mark: | Sets the user's attribute to the value specified. |
| /setattrall [attribute] [value]| `/setattrall Stamina 20` | +Permission=set attribute all  | :heavy_check_mark: | Sets the attribute for all players.|
| /getattr [user] [attribute] | `/getattr mike Stamina` | +Permission=get attribute | :heavy_check_mark: | Gets Value for specified Attribute.|
| /getallattr [user]| `/getallattr mike` | +Permission=get attribute | :heavy_check_mark: | Lists all attribute names and their values.  |
| /rewardgrowth [user] [value]| `/rewardgrowth mike 0.1`| +Permission=reward growth | :x: | Rewards growth over time to the specified player. |
| /rewardwellrested [user] [value] | `/rewardwellrested mike 0.1` | +Permission=reward well rested | :x: | Rewards Well Rested buff till the specified growth value is hit.|

## Character Commands

Character commands allow players and server admins to manage their characters.

::: danger
Character commands are ONLY supported for Local Databases at this moment. Support for Remote Databases will be added in the future updates.
:::

| Chat Command: | Example: | Permissions: | RCON Support: | Action: |
| -- | -- | -- | -- | -- |
| /createcharacter [AlderonId] [CharacterName] [DinosaurType] [Growth] [Marks] | `/createcharacter 123-456-789 Bloodclaw Allosaurus 1.0 3000` | - | :x: | Creates a character with the specified parameters. The example below creates a character with the Alderon ID `123-456-789`, named `Bloodclaw`, as an Allosaurus with 1.0 growth and 3000 marks. (ONLY works with `Local` database currently) |

## Admin Commands

Admin commands allow players (with roles that have permissions) or admins to manage the server easily and efficiently.

::: danger
Please only give these permissions to a role/user that you can trust. You will be responsible for the consequence of misuse of these commands on your server.
:::

| Chat Command: | Example: | Permissions: | RCON Support: | Action: |
| -- | -- | -- | -- | -- |
| /save| `/save`| +Permission=save  | :heavy_check_mark: | Forces a server save.|
| /load| `/load`| +Permission=load  | :heavy_check_mark: | Forces a server load.|
| /promote [user] [adminrole]| `/promote mike dinomaster` | +Permission=promote | :heavy_check_mark: | Promotes the player to the specified admin role. |
| /demote [user] | `/demote mike` | +Permission=promote | :heavy_check_mark: | Removes all admin roles of that player.|
| /kick [user] [kickreason]| `/kick mike "Spamming the chat."`  | +Permission=kick  | :heavy_check_mark: | Kicks the user with a message. You can optionally leave the message blank. The messages must be surrounded in quotations. |
| /ban [user] [duration] [banreason] [userbanreason] | `/ban mike 120 "Breaking rule number 12" "Don't break rule 12 next time!"`| +Permission=ban| :heavy_check_mark: | Bans the user with for an amount of seconds with an optional message. To ban forever, set the duration to `0`. The first ban reason is the reason shown to admins. The second ban reason is shown to the user who was banned. The messages must be surrounded in quotations. |
| /banip [ip] [duration] [banreason] [userbanreason] | `/banip 123.45.12.21 120 "Breaking rule number 12" "Don't break rule 12 next time!"` | +Permission=banip | :heavy_check_mark: | Bans the given IP address for an amount of seconds with an optional message. Similar to the normal ban command, you can set the duration to `0` to ban forever. The first ban reason is the reason shown to admins. The second ban reason is shown to the user who was banned. The messages must be surrounded in quotations. |
| /unban [user]  | `/unban mike`  | +Permission=unban | :heavy_check_mark: | Unbans the specified player. |
| /restart [seconds]  | `/restart 120`  | +Permission=restart | :heavy_check_mark: | Restarts the server after the specified number of seconds.|
| /cancelrestart | `/cancelrestart`| +Permission=restart | :heavy_check_mark: | Cancels the server restart.  |
| /announce [message] | `/announce Everyone kill mike for bonus points!`  | +Permission=announce| :heavy_check_mark: | Makes an announcement to everyone on the server. |
| /listpoi  | `/listpoi`  | +Permission=listpoi | :heavy_check_mark: | Lists all the POIs on the current map. |
| /listquests | `/listquests`| +Permission=listquests | :heavy_check_mark: | Lists all quests currently available.  |
| /listroles| `/listroles`| +Permission=listroles  | :heavy_check_mark: | Lists all roles currently available.|
| /listwaters | `/listwaters`| +Permission=listwaters | :heavy_check_mark: | Lists all bodies of water on the map.  |
| /listwaystones | `/listwaystones`| +Permission=listwaystones| :heavy_check_mark: | Lists all waystones on the map.|
| /Weather [type]| `/weather clearsky`  | +Permission=weather | :heavy_check_mark: | Sets the weather to the specified weather type. Types available are: ClearSky, Overcast, Fog, Cloudy, Rain, and Storm. |
| /TimeOfDay [time]| `/timeofday night`| +Permission=time of day| :heavy_check_mark: | Sets the time of day. Available times are morning, night, day, and optionally you can specify a number for more precise time.  |
| /Day | `/night` | +Permission=time of day| :heavy_check_mark: | Shorthand for /timeofday night. Other shorthand time commands are /day and /morning. |
| /ClearBodies| `/clearbodies`  | +Permission=clearbodies| :heavy_check_mark: | Clears all dead bodies from the map.|
| /WaterQuality [tag] [0-100%]  | `/waterquality swampyreservoir 50`  | +Permission=waterquality | :heavy_check_mark: | Sets the water body of the tag specified to a percentage quality.|
| /WaystoneCooldown [tag] [0-100%] | `/waystonecooldown centralwaystone 50`| +Permission=waystonecooldown| :heavy_check_mark: | Sets the waystone of the tag specified to a percentage cooldown remaining.|
| /PlayerInfo [username/AGID] | `/playerinfo 123-456-789` | +Permission=playerinfo | :heavy_check_mark: | Shows player info. |
| /ServerMute [username/AGID] [time] [admin reason] [user reason] | `/servermute 123-456-789 20m reason for admin reason for player`  | +Permission=servermute | :heavy_check_mark: | Mutes a player server-wide. Time is specified in minutes, hours, or days. e.g., 20m, 4h, or 1d. If 0 is given for time, it will be forever.|
| /ServerUnmute [username/AGID] | `/serverunmute 123-456-789` | +Permission=serverunmute | :heavy_check_mark: | Removes a server-wide mute for a player. |
| /Whitelist [username/AGID] | `/whitelist 123-456-789`  | +Permission=whitelist  | :heavy_check_mark: | Adds a player to the whitelist for the server.|
| /DelWhitelist [username/AGID] | `/delwhitelist 123-456-789` | +Permission=delwhitelist | :heavy_check_mark: | Removes a player from the server whitelist. |
| /ReloadBans | `/reloadbans`| +Permission=reloadbans | :heavy_check_mark: | Reloads server bans from the ban file. |
| /ReloadMutes | `/reloadmutes`  | +Permission=reloadmutes| :heavy_check_mark: | Reloads server mutes from the mutes file.|
| /ReloadWhitelist | `/reloadwhitelist`| +Permission=reloadwhitelist | :heavy_check_mark: | Reloads server whitelist.|
| /ReloadRules | `/reloadrules`  | +Permission=reloadrules| :heavy_check_mark: | Reloads server rules.|
| /ReloadMOTD | `/reloadmotd`| +Permission=reloadmotd | :heavy_check_mark: | Reloads the server's MOTD.|
| /ClearCreatorObjects | `/clearcreatorobjects` | +Permission=clearcreatorobjects  | :heavy_check_mark: | Removes and refunds all placed Creator Mode Objects on the server.  |
| /LoadCreatorMode [SaveName] | `/loadcreatormode rockworld`| +Permission=loadcreatormode | :heavy_check_mark: | Loads the saved Creator Mode data from the specified save slot.|
| /SaveCreatorMode [SaveName] | `/savecreatormode rockworld`| +Permission=savecreatormode | :heavy_check_mark: | Saves the Creator Mode data to the specified save slot.|
| /ResetCreatorMode| `/resetcreatormode`  | +Permission=resetcreatormode| :heavy_check_mark: | Resets Creator Mode Objects to their default, removing placed objects and changing map objects to their original state.|
| /RemoveCreatorMode [SaveName] | `/removecreatormode rockworld` | +Permission=removecreatormode | :heavy_check_mark: | Removes the Creator Move data from the specified save slot. |
| /ListCreatorMode| `/listcreatormode`| +Permission=listcreatormode | :heavy_check_mark: | Lists the saved Creator Mode saves. |
| /ReplenishCreatorMode | `/replenishcreatormode`| +Permission=replenishcreatormode | :heavy_check_mark: | Replenishes all items on the map, excluding water.|
| /SkipShed [Username] | `/skipshed mike` | +Permission=skipshed| :heavy_check_mark: | Instantly completes yours or the specified player's shedding.  |
| /GiveQuest [user] [questname] | `/givequest mike Collect Mushrooms`| +Permission=givequest  | :heavy_check_mark: | Assigns the specified quest to that player. |
| /CompleteQuest [user] [questname]  | `/completequest mike Collect Mushrooms` | +Permission=completequest| :x: | Completes the user's current quest or the specified quest if the name is provided. |
| /EditQuests [user] | `/editquests mike` | +Permission=editquests | :x: | Edit the player's quests.|
| /SetWound [Username] [Category] [Value] | `/setwound mike headleft 1`| +Permission=setwound| :x: | Sets a cosmetic wound.  |
| /SetPermaWound [Username] [Category] [Value] | `/setpermawound mike headleft 1`| +Permission=setpermawound| :x: | Sets a permanent cosmetic wound.  |
| /ClearEffects  | `/cleareffects` | +Permission=cleareffects | :x: | Clear all effects on the current character. |
| /ClearCooldowns | `/clearcooldowns` | +Permission=clearcooldowns  | :x: | Clear all ability cooldowns on the current character.|
| /SystemMessage [user] [message] | `/systemmessage mike Hello there`  | +Permission=systemmessage| :heavy_check_mark: | Sends a message to the specified player in the System channel. |
| /SystemMessageAll [message] | `/systemmessageall Hello there`| +Permission=systemmessageall| :heavy_check_mark: | Sends a message to all the players in the System channel. |
| /ServerInfo | `/serverinfo` | +Permission=serverinfo | :heavy_check_mark: | Shows information about the server such as time of day, weather, guid, and the name. |
| /SpawnCritter [crittername] [amount] | `/spawncritter Ocypode 25` | +Permission=spawncritter | :x: | Spawns critters with the provided name and amount. If ran without arguments, it shows a list of critters available. Critter names support incomplete names as long as it matches no more than 1 critter. |

## Nesting Commands

Commands related to nesting, constructing nests, and nest management.

| Chat Command: | Example: | Permissions: | RCON Support: | Action: |
| -- | -- | -- | -- | -- |
| /ReplenishNest | `/ReplenishNest` | +Permission=replenishnest | :x: | Fills your nest with resources and baby slots. |
| /SetNestHealth [Percent] | `/SetNestHealth 0.5` | +Permission=setnesthealth | :x: | Sets your nest's health to the specified percentage. Will adjust resources to match it. |
| /SetNestSlots [Slots] | `/SetNestSlots 2` | +Permission=setnestslots | :x: | Sets your nest's baby slots to the specified amount. |
| /GetNestResource [Resource] | `/GetNestResource Mud` | +Permission=getnestresource | :x: | Displays your nest's named resource value as a percentage. |
| /SetNestResource [Resource] [Percent] | `/SetNestResource Food 0.7` | +Permission=setnestresource | :x: | Sets your nest's named resource to the specified percentage. Works with any named resource, food or water. |
| /GotoNest | `/GotoNest` | +Permission=gotonest | :x: | Teleports you to your nest. |