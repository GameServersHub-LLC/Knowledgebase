# Game.ini Server Configuration

**We continually strive to improve our knowledge base to ensure that our customers have access to the most relevant and up-to-date information. Therefore, we highly value your suggestions and feedback on further enhancing our knowledge base. If you feel something needs to be added or added, we encourage you to join our Discord server.**

[By creating a support ticket on our discord server, you can let us know how we can improve and serve you better](https://discord.gg/gsh)

---
::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::
Editing your configuration files using the official GameServersHub admin dashboard is easy. Follow the steps below to edit your configuration files efficiently.

1.  Open the `File Managers` tab inside your admin dashboard.
2.  Head to `PathOfTitans/Saved/Config/LinuxServer` and open the `Game.ini` file.
3.  Make the edits and click `Save Content`; then, you can safely restart your game server to apply the changes.
Below you'll find a list of references of what each **Game.ini** value represents, and the best strategy to edit them is given in context.

## IGameSession Config

Below are settings that will work under the `[/Script/PathOfTitans.IGameSession]` header.
::: tip
By not adding the line makes the line to the **default** setting
:::
|Config Name:|Description:|
|-|-|
|`ServerName=Hosted by GSH`|Setting the public name of your `ServerName` is a crucial step to ensure accessibility and effective communication within your network. To add spaces to your Server Name, you can include an underscore `_`, which will act as syntax spacing. **Note**: *GameServersHub runs Path of Titans on Linux Machines which don't require underscores.*
|`MaxPlayers=100`|Specifies the maximum number of players allowed on the server|
|`ServerPassword=Password123`|Set a password for accessing the server to ensure authorized access only.|
|`ReservedSlots=20`|Specifies the number of reserved slots allowed on your server [Click to learn more]().|
|`bServerPaidUsersOnly=false`|Enable Free-to-Play Access: Determine whether the server permits users to join without payment.|
|`bServerAllowChat=true`|Enhance Communication Control: Enable or disable text chat functionality for the entire server, granting you greater control over communication.|
|`bServerGlobalChat=true`|Manage Global Chat: Toggle the availability of the global chat channel on the server, granting you the ability to enable or disable it as desired.|
|`bServerNameTags=false`|Enables or disables the ability for ALL players on the server to see player nametags. Defaults to `false`.|
|`bServerFish=true`|Control Fish Population: Toggle the spawning of fish, giving you the ability to either enable or disable it.|
|`bServerWaterQualitySystem=true`|Manage Water Quality System: This feature allows you to enable or disable the water quality system per your needs.|
|`bOverrideWaterRegeneration=false`|Control Water Regeneration Override: This feature enables or disables the override function for water regeneration. If this setting is turned off, the system will revert to using predefined default values.|
|`bEnableWaterRegeneration=true`|Configure Water Regeneration: This feature determines if water will replenish over time. If you choose to disable this, it is crucial to have water restoration quests in your hosted map; otherwise, the water supply could eventually deplete.|
|`WaterRegenerationRateMultiplierUpdate=180`|This involves updating the multiplier for the water regeneration rate.|
|`WaterRegenerationRate=60`|This refers to the duration, in seconds, before water begins to regenerate. Setting this value too low prompts the server to update water levels more frequently, which could potentially   lead to server lag.|
|`WaterRegenerationValue=10`|This refers to the volume of water replenished during each cycle. The actual amount scales based on the size of the water body.|
|`WaterRainRegenerationIncrement=20.0`|Multiplier that increases the amount of water restored when it rains.|
|`bServerWaystoneCooldownRemoval=true`|This function permits or restricts players from using marks to initiate a cooldown on Waystones.|
|`OverrideWaystoneCooldown=-1`|This setting allows you to alter the cooldown period for Waystones in seconds. If set to -1, the default cooldown duration will be utilized.|
|`bServerAllowInGameWaystone=true`|This function allows the acceptance of Waystone invites within the game by resting for 30 seconds in a secure zone.|
|`bOverrideMaxCompleteQuestsInLocation=false`|Enables or disables the ability to change the `MaxCompleteQuestsInLocation`. Defaults to `false`. If set to true you must also set `MaxCompleteQuestsInLocation` (below).|
|`MaxCompleteQuestsInLocation=3`|Determines how many quests must be completed within a POI before it is 'completed'. Default|
|`WeatherLengthVariation=(X=10,Y=20)`|The amount of time (in minutes) that any 1 weather type will be active for. This is specified as a minimum (X) and maxium (y) time that will be randomly selected between. By default, a weather type will persist for between `10` to `20` minutes before changing to the next weather type.|
|`bServerFallDamage=true`|This feature allows you to either activate or deactivate fall damage for all participants on the server.|
|`bPermaDeath=false`|Activates permanent death on the server. Deceased characters will show up as corpses on the Character Selection Menu. Defaults to `false`.|
|`bDeathInfo=false`|Displays a textbox on the Character Select Screen that provides info about your dead character when `bPermaDeath` is enabled.|
|`ServerDiscord=gsh`|This setting designates the linked community Discord server. You should only input the alphanumeric characters found after the discord.gg part of the server invite link. For instance, for the link [https://discord.gg/gsh](https://discord.gg/gsh), you should only use **gsh**. Please ensure to use a perpetual invite link to avoid expiration.|
|`bServerAutoRestart=false`|This function facilitates the automatic rebooting of the server.|
|Configure Server Automatic Restart Times|Servers can be configured to automatically restart either at preset times or at preset intervals through the following options: `bServerAutoRestart`, `bUseScheduledRestartTimes`, `ScheduledRestartTimes`, `RestartLengthInSeconds`, `RestartNotificationTimestamps`. [learn how to adjust server restart behavior here]().|
|`ServerDeadBodyTime=0`|This setting indicates the duration, in seconds, for which a deceased character's body will remain. A value of 0 implies that the body will remain indefinitely.|
|`ServerRespawnTime=45`|Amount of time (in minutes) a player must be alive before they can use the /respawn command to kill their dinosaur and respawn. It's suggested to keep this number relatively high to avoid players piling up corpses on your server and causing issues. Defaults to `45` minutes.|
|`ServerFootprintLifetime=60`|Specifies the maximum time (in seconds) footprints will remain behind dinosaurs. Setting this to `0` will disable footprints entirely. Defaults to `60` seconds.|
|`bServerAllowMap=true`|Enables or disables the full map for the entire server.|
|`bServerAllowMinimap=true`|Enables or disables the minimap for the entire server.|
|`bServerAllow3DMapMarkers=true`|Enables or disables the markers on the full map, and floating quest markers in the world. Defaults to `true`.|
|`AllowedCharacters=DinosaurName`|This setting turns off all dinosaurs except those specified in the list. You can find more details. [Click to learn more]().|
|`DisallowedCharacters=DinosaurName`|This setting disables the dinosaur specified in the list. You can find more details. [Click to learn more]().|
|`bServerWaystones=true`|Enables or disables Waystones on your server.|
|`bServerHomeCaves=true`|This feature allows you to either activate or deactivate the home caves on your server.|
|`bServerHomecaveCampingDebuff=true`|Enables or disables the Home Cave Camping debuff on your server.|
|`bOverrideHomecaveCampingDistance=false`|Flags whether you want to override the Home Cave Camping debuff. If set to true you must also then specify the` HomecaveCampingDistance` (below). Defaults to `false`.|
|`HomecaveCampingDistance=20000`|Radius (in centimeters) around Home Cave Entrances that will apply the Home Cave Camping debuff. Defaults to `20000`, which is 200 meters.|
|`bOverrideHomecaveCampingDelay=false`|Flags whether there is a delay between a player entering the `HomecaveCampingDistance` radius, and actually having the debuff applied to them. Typically this should be at least a few minutes to avoid players instantly getting debuffed when they walk near a Home Cave.|
|`HomecaveCampingDelay=180`|Time (in seconds) the Home Cave Camping debuff will delay before being applied to a player if they are within the `HomecaveCampingDistance`. Defaults to `180` (3 minutes).|
|`bServerWellRestedBuff=true`|Enables or disables the Well Rested buff. Defaults to `true`.|
|`bServerEditAbilitiesInHomeCaves=true`|If set to true, players' ability modifications are restricted to their home caves. However, if set to false, players can alter their abilities anywhere, provided they are asleep. Setting this feature to true if you've also activated home caves on your server is advisable.|
|`bServerEditAbilitiesWhileSleeping=false`|If true, players can edit their abilities only while sleeping. If false, players can edit their abilities while standing. If this is set to `true` AND `bServerEditAbilitiesInHomeCaves=true`, players can edit their abilities in their home caves OR while sleeping.|
|`bServerHatchlingCaves=true`|This feature lets you turn the Hatchling Caves tutorial on or off. When enabled, players start in a tutorial zone at zero growth, and upon completing quests, they reach 0.3 growth before exiting. If disabled, players will directly spawn into the world at 0.3 growth, bypassing the tutorial altogether.|
|`HatchlingCaveExitGrowth=0.25`|Specifies the growth a player will have when they exit the Hatchling Caves. `0` denotes a hatchling and is the default value.|
|`bServerHungerThirstInCaves=false`|Enables/Disables Hunger and Thirst in caves. If disabled, Dinosaurs will not lose hunger or thirst in caves and will take no damage if they have no food or water.|
|`bServerGrowth=true`|This feature gives you the control to turn on or off the Growth function on your server. If turned off, all dinosaurs will appear as adults upon spawning, and all existing characters will be instantly matured into adults.|
|`GlobalPassiveGrowthPerMinute=0.005`|This feature allows adding extra passive growth per second to all dinosaurs. Remember that the total growth = `1`, so a suitable value might be 0.005. This means it would take a player 200 minutes (or 3.3 hours) to reach adulthood. The growth amount is uniformly applied to all dinosaurs. Setting this value to 0 turns off passive growth.|
|`QuestGrowthMultiplier=1`|This feature lets you modify the growth rate players gain when they finish quests. If you wish to turn off growth from quests, set this value to `0`.|
|`QuestMarksMultiplier=1.0`|Specifies the multiplier used when rewarding marks for quest completion.|
|`bEnableMaxUnclaimedRewards=false`|Coming Soon!|
|`bOverrideLocalQuestCooldown=false`|If set to `true` will allow you to override the time it takes for a local quest to cooldown after completion.|
|`LocalQuestCooldown=3600`|Time it takes in seconds for a quest to cooldown before it can be completed again. Default `3600` (1 hour)|
|`bOverrideLocationQuestCooldown=false`|If set to `true` will allow you to override the time it takes for the POI completion reward to reset after reaching 100%. Default `false`|
|`LocationQuestCooldown=3600`|Time it takes in seconds for a the POI Completion reward to reset before it can be completed again. Default `3600` (1 hour)|
|`bLoseGrowthPastGrowthStages=true`|Allows players to lose growth past Juvenile/Adolescent/Sub-Adult/Adult growth states when they die.|
|`bLoseUnclaimedQuestsOnDeath=false`|Coming Soon!|
|`CombatDeathMarksPenaltyPercent=25`|Percent of total marks a player will lose when they die from combat. Default `25`|
|`CombatDeathGrowthPenaltyPercent=10`|Percent of growth a player will lose when they die from combat. Default `10`|
|`FallDeathMarksPenaltyPercent=5`|Percent of total marks a player will lose when they die from fall damage. Default `5`|
|`FallDeathGrowthPenaltyPercent=2`|Percent of growth a player will lose when they die from fall damage. Default `2`|
|`SurvivalDeathMarksPenaltyPercent=10`|Percent of total marks a player will lose when they die from starving/thirst/drowning. Default  `10`|
|`SurvivalDeathGrowthPenaltyPercent=5`|Percent of growth a player will lose when they die from starving/thirst/drowning. Default `5`|
|`bTrophyQuests=true`|Enable or disable Trophy Quests on the server. Defaults to `true`|
|`bOverrideTrophyQuestCooldown=false`|Flags whether you want to override the `TrophyQuestCooldown`. If set to true you must also then specify the `TrophyQuestCooldown` (below). Default to `false`.|
|`TrophyQuestCooldown=1800`|Time (in seconds) between a player being able to handin another Trophy quest. Defaults to `1800` (30 minutes).|
|`ChangeSubspeciesGrowthPenaltyPercent=10`|Percent growth stage lost when changing sub species Default `10`|
|`AFKDisconnectTime=600`|Specifies the amount of time in seconds before a player will be automatically disconnected from the server if they are idle/AFK. Useful to prevent idle players from filling your server. Default `600` seconds (10 minutes). If set to `0`, no players will ever be kicked for being idle.|
|`MaxClientPingMs=0`|Specifies the maximum ms ping before auto-disconnecting the player. `0` will disable this option. Use to prevent high-ping players causing issues for your server.|
|`MaxClientPingDuration=0`|Specifies the duration of time in seconds the player's ms ping must be above the `MaxClientPingMs` before being disconnected.|
|`ServerLogoutTime=60`|Specifies the duration of time in seconds the player's ms ping must be above the `MaxClientPingMs` before being disconnected.|
|`bServerAntiRevengeKill=true`|Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. When set to `true`, when a player is killed, any of their other characters within a certain radius are flagged with a 10 minute timer, which prevents those specific characters from logging back in right away. Characters that are further away are unaffected by the login timer.|
|`RevengeKillDistance=100000`|Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. Specifies the radius of the Anti-Revenge Kill distance. Defaults to `100000` which is 1 km.|
|`MaxCharactersPerPlayer=30`|Specifies the maximum number of characters a user can have in total.|
|`MaxCharactersPerSpecies=1`|Specified the maximum number of characters a user can have per species.|
|`bLoseQuestsOnDeath=true`|Specifies whether quests will automatically fail when a player dies. Defaults to `true`|
|`SpeedhackDetection=1`|Setting for action taken when speed hacks are detected. 0 = `none`, 1 = `log`, 2 = `kick`, 3 = `ban`. From settings 1-3, a PlayerHack webhook will also be sent.|
|`SpeedhackThreshold=10`|The amount of speedhack detections that will be allowed per minute before the `SpeedhackDetection` action is taken. A value of 0 will disable detection. This value helps to minimize false positives due to packet loss or lag.|
|`bServerAllowReplayRecording=false`|Specifies if players can record a replay. Defaults to `false`.|
|`bServerAllowAnselMultiplayerPausing=false`|Allows players to be able to use Nvidia Ansel on the server to take screenshots. Be mindful of allowing this, as players can technically use it to pause their game to investigate the location of hiding players or gain other gamplay advantages. Defaults to `false`.|
|`ServerAnselCameraConstraintDistance=500`|The distance, in centimeters, the player can move their Nvidia Ansel camera away from their dinosaur in order to take screenshots. It's suggested to keep this a bit limited to avoid unfair gameplay advantages. Defaults to `500` (5 meters).|
|`DefaultCreatorModeSave=CreatorName`|Specifies the default creator mode save file to load when the server starts. This is the name used to save the creator mode file. If the file does not exist, it will not load. (Currently has some limitations with loading saved modded items)|
|Changing Login Debuff length and stats|When a player logs in, they will have a Login Debuff applied to their character. You can adjust the length and stat changes of this buff by adding the following:<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffDuration",Values=(60))`<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffSpeedReduction",Values=(0.75))`<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffIncomingDamage",Values=(2))`<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffAttackDamage",Values=(0.4))`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here]().|
|Changing Group Buff stats|When players are grouped and near each other they gain increased movement speed and stamina regeneration. You can adjust these values by adding the following:<br/> - `CurveOverrides=(CurveName="Global.GroupLeaderBuffStaminaRecoveryMultiplier",Values=(1.1))`<br/> - `CurveOverrides=(CurveName="Global.GroupLeaderBuffSpeedMultiplier",Values=(1.05))`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here]().|
|Changing Combat timer duration|When players attack each other, they gain an "In Combat" status that prevents healing and logging out. You can change the duration of this state by adding the following:<br/> - `CurveOverrides=(CurveName="Global.InCombatDuration",Values=(30))`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here]().|
|Changing Group Slot Sizes|When players group up, their dino will fill a certain number of group slots. You can change the number of slots by adding the following for any desired dinosaur:<br/> - `GroupSlotSizeOverrides=(DinoAssetID="Allosaurus",GroupSize=5)`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here]().|



## IGameMode Config

Below are settings that will work under the `[/Script/PathOfTitans.IGameMode]` header.
|Config Name:|Description:|
|-|-|
|`ServerStartingTime=1380`|Specifies the time of day the server begins at after a restart. Time is scaled between `0-2300`. Example:`1000` = 1:00 AM, `1200` = 12:00 PM, and `1800` = 6:00 PM signifies 12:00 PM, and 5800 denotes 6:00 PM.|
|`bServerDynamicTimeOfDay=1`|Specifies if the server uses a fixed (0) or dynamic (1) time of day. Fixed will use the ServerStartingTime.|
|`bServerRestrictCarnivoreGrouping=false`|This feature determines whether the server limits the grouping of carnivores to those of the same species.|
|`bServerRestrictHerbivoreGrouping=false`|Specifies if the server restricts carnivore grouping to the same species. (Revision 13324)|
|`ServerDayLength=240`|This feature sets the duration (minutes) for a complete day cycle.|
|`ServerNightLength=240`|Specified the length (in minutes) of a full night cycle. (Revision 29073)|
|`MaxGroupSize=10`|This feature establishes the limit for the number of slots available for player groups.|
|`MaxGroupLeaderCommunicationDistance=250000`|Max radius for randomly picking a spawn point from the furthest spawn location from other players. Defaults to `250000` (2.5km).|

## BattleEye Config

Below are settings that will work under the `[BattlEye]` header.
::: tip
Only add this line if you want to set it to `false` as its set to `true` by default
:::
|Config Name:|Description:|
|-|-|
|`bEnabled=true`|This enables `BattleEye` on the server, which is a anti-cheat Defaults to `true`|

## Game.ini Example
::: tip
You can add `#` in front of any lines to remove them without deleting them
:::
```ini
[/Script/PathOfTitans.IGameSession]
ServerMap=Island
ServerName=Hosted By GSH
MaxPlayers=100
ServerPassword=
bServerPaidUsersOnly=false
bServerAllowChat=true
bServerGlobalChat=true
bServerFish=true
bServerWaterQualitySystem=true
bServerWaystoneCooldownRemoval=true
bServerFallDamage=true
ServerDiscord=gsh
bServerAutoRestart=true
RestartLengthInSeconds=21600
ServerDeadBodyTime=0

[/Script/PathOfTitans.IGameMode]
ServerStartingTime=1350
bServerDynamicTimeOfDay=1
ServerDayLength=240
MaxGroupSize=10
MaxGroupLeaderCommunicationDistance=50000
; This is for loading Creator Modes on startup
DefaultCreatorModeSave=


[SourceRCON]
bEnabled=true
bLogging=true
Password=ChangeMe


[ServerWebhooks]
bEnabled=true
Format="Discord"
PlayerReport=""
PlayerLogin=""
PlayerLogout=""
PlayerLeave=""
PlayerKilled=""
PlayerQuestComplete=""
PlayerQuestFailed=""
PlayerRespawn=""
PlayerWaystone=""
PlayerChat=""
PlayerHack=""
PlayerDamagedPlayer=""
PlayerJoinedGroup=""
PlayerLeftGroup=""
ServerRestart=""
ServerRestartCountdown=""
ServerModerate=""
AdminSpectate=""
AdminCommand=""
BadAverageTick=""
ServerError=""
PlayerProfanity=""

```
## [RCON Config]()
Path of Titans RCON Config

[Link for `[SourceRCON]` configuration]()

## [Server Webhooks Config]()
Path of Titans Server Webhooks Config

[Link for `[ServerWebhooks]` configuration]()


---
::: info LAST UPDATED
<span style="color: #ffd369;">07-07-2024 by Mike</span>
:::
<p style="text-align: center;"><span data-preserver-spaces="true">Experience seamless gameplay with our top-of-the-line "</span><strong><span data-preserver-spaces="true">Path Of Titans</span></strong><span data-preserver-spaces="true">" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. </span><span data-preserver-spaces="true">With </span><strong><span data-preserver-spaces="true">lightning-fast hardware</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">unrivaled performance</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">reliable uptime</span></strong><span data-preserver-spaces="true">, our servers ensure an immersive gaming experience for your communitys needs. </span><span data-preserver-spaces="true">Take advantage of our cutting-edge features, including </span><strong><span data-preserver-spaces="true">customizable settings</span></strong><span data-preserver-spaces="true">, an </span><strong><span data-preserver-spaces="true">intuitive control panel</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">dedicated support</span></strong><span data-preserver-spaces="true">. Dont miss out on this opportunity to level up your gaming experience.</span></p>
<h3 style="text-align: center;"><span style="color: #ffd369;"><a style="color: #ffd369;" href="https://gameservershub.com/hosting/path-of-titans/"><strong>Get your server today!</strong></a></span></h3>
