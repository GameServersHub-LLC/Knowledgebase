### We continually strive to improve our knowledge base to ensure that our customers have access to the most relevant and up-to-date information. Therefore, we highly value your suggestions and feedback on further enhancing our knowledge base. If you feel something needs to be added or added, we encourage you to join our Discord server.

### [By creating a support ticket on our discord server, you can let us know how we can improve and serve you better](https://discord.gg/gsh)

---

Editing your configuration files using the official GameServersHub admin dashboard is easy. Follow the steps below to edit your configuration files efficiently.

1.  Open the `File Managers` tab inside your admin dashboard.
2.  Head to `PathOfTitans/Saved/Config/LinuxServer` and open the `Game.ini` file.
3.  Make the edits and click `Save Content`; then, you can safely restart your game server to apply the changes.

Below you'll find a list of references of what each **Game.ini** value represents, and the best strategy to edit them is given in context.

**IGameSession:**

Below are settings that will work under the `[/Script/PathOfTitans.IGameSession]` header.

`ServerName=`

Setting the public name of your `ServerName` is a crucial step to ensure accessibility and effective communication within your network. To add spaces to your Server Name, you can include an underscore "\_, "which will act as syntax spacing. **Note**: _GameServersHub runs the Path of Titans on Linux Machines which don't require underscores._

`MaxPlayers=100`

Specifies the maximum number of players allowed on the server.

`ServerPassword=`

Set a password for accessing the server to ensure authorized access only.

`bServerPaidUsersOnly=false`

Enable Free-to-Play Access: Determine whether the server permits users to join without payment.

`bServerAllowChat=true`

Enhance Communication Control: Enable or disable text chat functionality for the entire server, granting you greater control over communication.

`bServerGlobalChat=true`

Manage Global Chat: Toggle the availability of the global chat channel on the server, granting you the ability to enable or disable it as desired.

`bServerFish=true`

Control Fish Population: Toggle the spawning of fish, giving you the ability to either enable or disable it.

`bServerWaterQualitySystem=true`

Manage Water Quality System: This feature allows you to enable or disable the water quality system per your needs.

`bOverrideWaterRegeneration=false`

Control Water Regeneration Override: This feature enables or disables the override function for water regeneration. If this setting is turned off, the system will revert to using predefined   default values.

`bEnableWaterRegeneration=true`

Configure Water Regeneration: This feature determines if water will replenish over time. If you choose to disable this, it is crucial to have water restoration quests in your hosted map;   otherwise, the water supply could eventually deplete.

`WaterRegenerationRateMultiplierUpdate=180`

This involves updating the multiplier for the water regeneration rate.

`WaterRegenerationRate=60`

This refers to the duration, in seconds, before water begins to regenerate. Setting this value too low prompts the server to update water levels more frequently, which could potentially   lead to server lag.

`WaterRegenerationValue=10`

This refers to the volume of water replenished during each cycle. The actual amount scales based on the size of the water body.

`WaterRainRegenerationIncrement=20.0`

Multiplier that increases the amount of water restored when it rains.

`bServerWaystoneCooldownRemoval=true`

This function permits or restricts players from using marks to initiate a cooldown on Waystones.

`OverrideWaystoneCooldown=-1`

This setting allows you to alter the cooldown period for Waystones in seconds. If set to -1, the default cooldown duration will be utilized.

`bServerAllowInGameWaystone=true`

This function allows the acceptance of Waystone invites within the game by resting for 30 seconds in a secure zone.

`MaxCompleteQuestsInLocation=3`

Determines how many quests must be completed within a POI before it is 'completed'. Default

`bServerFallDamage=true`

This feature allows you to either activate or deactivate fall damage for all participants on the server.

`ServerDiscord=gsh`

This setting designates the linked community Discord server. You should only input the alphanumeric characters found after the discord.gg part of the server invite link. For instance, for   the link [https://discord.gg/gsh](https://discord.gg/gsh), you should only use **gsh**. Please ensure to use a perpetual invite link to avoid expiration.

`bServerAutoRestart=false`

This function facilitates the automatic rebooting of the server.

`RestartLengthInSeconds=10800`

This setting determines the interval, in seconds, between each automatic server restart. Players will receive warnings at intervals of 2 and 1 hour, 30, 10, 5, and 1 minute, as well as 10,   5, 4, 3, 2, and 1 seconds before the restart.

`ServerDeadBodyTime=0`

This setting indicates the duration, in seconds, for which a deceased character's body will remain. A value of 0 implies that the body will remain indefinitely.

`bServerAllowMap=true`

Enables or disables the full map for the entire server.

`bServerAllowMinimap=true`

Enables or disables the minimap for the entire server.

`AllowedCharacters=DinosaurName`

This setting turns off all dinosaurs except those specified in the list. You can find more details. [Click to learn more](https://hosting.pathoftitans.wiki/guide/dinosaurs).

`DisallowedCharacters=DinosaurName`

This setting disables the dinosaur specified in the list. You can find more details. [Click to learn more](https://hosting.pathoftitans.wiki/guide/dinosaurs).

`bServerHomeCaves=true`

This feature allows you to either activate or deactivate the home caves on your server.

`bServerEditAbilitiesInHomeCaves=true`

If set to true, players' ability modifications are restricted to their home caves. However, if set to false, players can alter their abilities anywhere, provided they are asleep. Setting this   feature to true if you've also activated home caves on your server is advisable.

`bServerHatchlingCaves=true`

This feature lets you turn the Hatchling Caves tutorial on or off. When enabled, players start in a tutorial zone at zero growth, and upon completing quests, they reach 0.3 growth before   exiting. If disabled, players will directly spawn into the world at 0.3 growth, bypassing the tutorial altogether.

`bServerHungerThirstInCaves=false`

Enables/Disables Hunger and Thirst in caves. If disabled, Dinosaurs will not lose hunger or thirst in caves and will take no damage if they have no food or water.

`bServerGrowth=true`

This feature gives you the control to turn on or off the Growth function on your server. If turned off, all dinosaurs will appear as adults upon spawning, and all existing characters will be   instantly matured into adults.

`GlobalPassiveGrowthPerMinute=0`

This feature allows adding extra passive growth per second to all dinosaurs. Remember that the total growth equals 1, so a suitable value might be 0.005. This means it would take a   player 200 minutes (or 3.3 hours) to reach adulthood. The growth amount is uniformly applied to all dinosaurs. Setting this value to 0 turns off passive growth.

`QuestGrowthMultiplier=1`

This feature lets you modify the growth rate players gain when they finish quests. If you wish to turn off growth from quests, set this value to 0.

`QuestMarksMultiplier=1.0`

Specifies the multiplier used when rewarding marks for quest completion.

`bEnableMaxUnclaimedRewards=false`

Coming Soon!

`bOverrideLocalQuestCooldown=false`

If set to `true` will allow you to override the time it takes for a local quest to cooldown after completion.

`LocalQuestCooldown=3600`

Time it takes in seconds for a quest to cooldown before it can be completed again. Default `3600` (1 hour)

`bOverrideLocationQuestCooldown=false`

If set to `true` will allow you to override the time it takes for the POI completion reward to reset after reaching 100%. Default `false`

`LocationQuestCooldown=3600`

Time it takes in seconds for a the POI Completion reward to reset before it can be completed again. Default `3600` (1 hour)

`bLoseGrowthPastGrowthStages=true`

Allows players to lose growth past Juvenile/Adolescent/Sub-Adult/Adult growth states when they die.

`bLoseUnclaimedQuestsOnDeath=false`

Coming Soon!

`CombatDeathMarksPenaltyPercent=25`

Percent of total marks a player will lose when they die from combat. Default `25`

`CombatDeathGrowthPenaltyPercent=10`

Percent of growth a player will lose when they die from combat. Default `10`

`FallDeathMarksPenaltyPercent=5`

Percent of total marks a player will lose when they die from fall damage. Default `5`

`FallDeathGrowthPenaltyPercent=2`

Percent of growth a player will lose when they die from fall damage. Default `2`

`SurvivalDeathMarksPenaltyPercent=10`

Percent of total marks a player will lose when they die from starving/thirst/drowning. Default  `10`

`SurvivalDeathGrowthPenaltyPercent=5`

Percent of growth a player will lose when they die from starving/thirst/drowning. Default `5`

`ChangeSubspeciesGrowthPenaltyPercent=10`

Percent growth stage lost when changing sub species Default `10`

`AFKDisconnectTime=600`

Specifies the amount of time in seconds before a player will be automatically disconnected from the server if they are idle/AFK. Useful to prevent idle players from filling your server. Default `600` seconds (10 minutes). If set to `0`, no players will ever be kicked for being idle.

`MaxClientPingMs=0`

Specifies the maximum ms ping before auto-disconnecting the player. `0` will disable this option. Use to prevent high-ping players causing issues for your server.

`MaxClientPingMs=0`

Specifies the maximum ms ping before auto-disconnecting the player. `0` will disable this option. Use to prevent high-ping players causing issues for your server.

`MaxClientPingDuration=0`

Specifies the duration of time in seconds the player's ms ping must be above the `MaxClientPingMs` before being disconnected.

`ServerLogoutTime=60`

Specifies the duration of time in seconds the player's ms ping must be above the `MaxClientPingMs` before being disconnected.

`bServerAntiRevengeKill=true`

Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. When set to `true`, when a player is killed, any of their other   characters within a certain radius are flagged with a 10 minute timer, which prevents those specific characters from logging back in right away. Characters that are further away are   unaffected by the login timer.

`RevengeKillDistance=100000`

Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. Specifies the radius of the Anti-Revenge Kill distance. Defaults   to `100000` which is 1 km.

`MaxCharactersPerPlayer=30`

Specifies the maximum number of characters a user can have in total.

`MaxCharactersPerSpecies=1`

Specified the maximum number of characters a user can have per species.

`bLoseQuestsOnDeath=true`

Specifies whether quests will automatically fail when a player dies. Defaults to `true`

`SpeedhackDetection=1`

Setting for action taken when speed hacks are detected. 0 = `none`, 1 = `log`, 2 = `kick`, 3 = `ban`. From settings 1-3, a PlayerHack webhook will also be sent.

`SpeedhackThreshold=10`

The amount of speedhack detections that will be allowed per minute before the `SpeedhackDetection` action is taken. A value of 0 will disable detection. This value helps to minimize false   positives due to packet loss or lag.

**IGameMode:**

Below are settings that will work under the `[/Script/PathOfTitans.IGameMode]` header.

`ServerStartingTime=1380`

This feature designates the starting time of day for the server after a reboot. Time is measured on a scale from 0-2400. For instance, 100 represents 1:00 AM, 1200 signifies 12:00 PM,   and 5800 denotes 6:00 PM.

`bServerDynamicTimeOfDay=1`

This feature determines whether the server operates on a fixed or fluctuating time of day.

`bServerRestrictCarnivoreGrouping=false`

This feature determines whether the server limits the grouping of carnivores to those of the same species.

`bServerRestrictHerbivoreGrouping=false`

Specifies if the server restricts carnivore grouping to the same species. (Revision 13324)

`ServerDayLength=240`

This feature sets the duration (minutes) for a complete day cycle.

`ServerNightLength=240`

Specified the length (in minutes) of a full night cycle. (Revision 29073)

`MaxGroupSize=10`

This feature establishes the limit for the number of slots available for player groups.

`MaxGroupLeaderCommunicationDistance=50000`

This feature determines the distance (in meters) at which players can view their fellow group members.

**ServerWebhooks:**

Below are settings that will work under the `[ServerWebhooks]` header.

`bEnabled=true`

Set this to true if you want the server to call webhooks.

`Format="Discord"`

`Discord` or `General`: Discord will format the messsage for posting directly to the channel `General` will format the message to be consumed by your own website / server / backend

`PlayerReport=""`

This logs instances where a player submits a report, typically about another player’s behavior or a game issue.

`PlayerLogin=""`

This records when a player logs into the game.

`PlayerLogout=""`

This tracks when a player logs out of the game.

`PlayerLeave=""`

This logs when a player leaves the server.

`PlayerKilled=""`

This records instances of a player being killed in the game, often including details about who killed them and how.

`PlayerQuestComplete=""`

This logs when a player successfully completes a quest.

`PlayerQuestFailed=""`

This records when a player fails a quest.

`PlayerRespawn=""`

TThis tracks when a player respawns after being killed.

`PlayerWaystone=""`

This logs when a player uses a waystone to teleport.

`PlayerChat=""`

This records messages sent by a player in the game chat.

`PlayerHack=""`

This logs suspected or confirmed instances of a player using hacks or cheats and reports on high ping.

`PlayerDamagedPlayer=""`

This records when one player causes damage to another player.

`PlayerJoinedGroup=""`

This logs when a player joins a group within the game.

`PlayerLeftGroup=""`

This records when a player leaves a group within the game.

`ServerRestart=""`

This logs instances of the server being restarted.

`ServerRestartCountdown=""`

This tracks the countdown leading up to a server restart.

`ServerModerate=""`

This logs actions taken by server moderators, such as muting or banning players.

`AdminSpectate=""`

This records when an admin starts spectating a player or area within the game.

`AdminCommand=""`

This logs commands issued by an admin.

`BadAverageTick=""`

This tracks instances where the server’s tick rate falls below acceptable levels, indicating potential performance issues.

`ServerError=""`

This logs errors encountered by the server.

`PlayerProfanity=""`

This records instances of a player using profanity in the game chat.

**BattlEye:**

Below are settings that will work under the `[BattlEye]` header.

`bEnabled=true`

This enables `BattleEye` on the server, which is a anti-cheat Defaults to `true`

---

### Transform your gaming experience with GSH dedicated servers! Get the most bang for your buck by deploying a Path of Titans Server today, and enjoy unbeatable prices without compromising on quality.

Experience seamless gameplay with our top-of-the-line "**Path Of Titans**" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. With **lightning-fast hardware**, **unrivaled performance**, and **reliable uptime**, our servers ensure an immersive gaming experience for your community's needs. Take advantage of our cutting-edge features, including **customizable settings**, an **intuitive control panel**, and **dedicated support**. Don't miss out on this opportunity to level up your gaming experience.
