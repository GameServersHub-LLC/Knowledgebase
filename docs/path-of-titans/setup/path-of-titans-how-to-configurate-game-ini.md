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
title: Game INI Configs
---

# Path of Titans Game.ini Server Configuration

**We continually strive to improve our knowledge base to ensure that our customers have access to the most relevant and up-to-date information. Therefore, we highly value your suggestions and feedback on further enhancing our knowledge base. If you feel something needs to be added or added, we encourage you to join our Discord server.**

[By creating a support ticket on our discord server, you can let us know how we can improve and serve you better](https://discord.gg/gsh)

---

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

Editing your configuration files using the official GameServersHub admin dashboard is easy. Follow the steps below to edit your configuration files efficiently.

1. Open the `File Managers` tab inside your admin dashboard.
2. Head to `PathOfTitans/Saved/Config/LinuxServer` and open the `Game.ini` file.
3. Make the edits and click `Save Content`; then, you can safely restart your game server to apply the changes.
   Below you'll find a list of references of what each **Game.ini** value represents, and the best strategy to edit them is given in context.

Path:

<ul class="breadcrumbs" data-v-1536bbb2="">
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
</ul>

## IGameSession Config

Below are settings that will work under the `[/Script/PathOfTitans.IGameSession]` header.
::: tip
By not adding the line makes the line to the **default** setting
:::

| Config Name: | Description: |
| ------------ | ------------ |
| `ServerName=Hosted by GSH` | Setting the public name of your `ServerName` is a crucial step to ensure accessibility and effective communication within your network. To add spaces to your Server Name, you can include an underscore `_`, which will act as syntax spacing. **Note**: _GameServersHub runs Path of Titans on Linux Machines which don't require underscores._ |
| `MaxPlayers=100` | Specifies the maximum number of players allowed on the server |
| `ServerPassword=Password123` | Set a password for accessing the server to ensure authorized access only. |
| `ReservedSlots=20` | Specifies the number of reserved slots allowed on your server [Click to learn more](../guides/path-of-titans-reserved-slots). |
| `bServerPaidUsersOnly=false` | Enable Free-to-Play Access: Determine whether the server permits users to join without payment. |
| `bServerAllowChat=true` | Enhance Communication Control: Enable or disable text chat functionality for the entire server, granting you greater control over communication. |
| `bServerGlobalChat=true` | Manage Global Chat: Toggle the availability of the global chat channel on the server, granting you the ability to enable or disable it as desired. |
| `bServerNameTags=false` | Enables or disables the ability for ALL players on the server to see player nametags. Defaults to `false`. |
| `bServerFish=true` | Control Fish Population: Toggle the spawning of fish, giving you the ability to either enable or disable it. |
| `bServerWaterQualitySystem=true` | Manage Water Quality System: This feature allows you to enable or disable the water quality system per your needs. |
| `bOverrideWaterRegeneration=false` | Control Water Regeneration Override: This feature enables or disables the override function for water regeneration. If this setting is turned off, the system will revert to using predefined default values. |
| `bEnableWaterRegeneration=true` | Configure Water Regeneration: This feature determines if water will replenish over time. If you choose to disable this, it is crucial to have water restoration quests in your hosted map; otherwise, the water supply could eventually deplete. |
| `WaterRegenerationRateMultiplierUpdate=180` | This involves updating the multiplier for the water regeneration rate. |
| `WaterRegenerationRate=60` | This refers to the duration, in seconds, before water begins to regenerate. Setting this value too low prompts the server to update water levels more frequently, which could potentially lead to server lag. |
| `WaterRegenerationValue=10` | This refers to the volume of water replenished during each cycle. The actual amount scales based on the size of the water body. |
| `WaterRainRegenerationIncrement=20.0` | Multiplier that increases the amount of water restored when it rains. |
| `bServerWaystoneCooldownRemoval=true` | Enables or disables the ability for players to spend marks to insta-cooldown Waystones. |
| `OverrideWaystoneCooldown=-1` | Overrides the cooldown timer for Waystones in seconds. `-1` will use the default cooldown timer. |
| `bServerFallDamage=true` | Enables or disables fall damage for all users on the server. |
| `ServerDiscord=gsh` | Specifies the connected community Discord server. This must be only the letters/numbers after the discord.gg part of the server invite link. Example: [https://discord.gg/gsh](https://discord.gg/gsh) should only use `gsh` Be sure to use a permanent invite link, or else it will expire. |
| Configure Server Automatic Restart Times | Servers can be configured to automatically restart either at preset times or at preset intervals through the following options: `bServerAutoRestart`, `bUseScheduledRestartTimes`, `ScheduledRestartTimes`, `RestartLengthInSeconds`, `RestartNotificationTimestamps`. [learn how to adjust server restart behavior here](./path-of-titans-server-restart). |
| `ServerDeadBodyTime=0` | Specifies how long a dead body will persist for in seconds. A value of `0` means it will persist forever. |
| `ServerRespawnTime=45` | Amount of time (in minutes) a player must be alive before they can use the `/respawn` command to kill their dinosaur and respawn. It's suggested to keep this number relatively high to avoid players piling up corpses on your server and causing issues. Defaults to `45` minutes. |
| `ServerFootprintLifetime=60` | Specifies the maximum time (in seconds) footprints will remain behind dinosaurs. Setting this to `0` will disable footprints entirely. Max is 60! Defaults to `60` seconds. |
| `bServerAllowMap=true` | Enables or disables the full map for the entire server. Defaults to `true`. |
| `bServerAllowMinimap=true` | Enables or disables the minimap for the entire server. Defaults to `true`. |
| `bServerAllow3DMapMarkers=true` | Enables or disables the markers on the full map, and floating quest markers in the world. Defaults to `true`. |
| `AllowedCharacters=DinosaurName` | Disables all dinosaurs except the listed dinosaurs. [More information here.](../guides/path-of-titans-enable-disable-dinosaurs) |
| `DisallowedCharacters=DinosaurName` | Enables all dinosaurs except the listed dinosaurs. [More information here.](../guides/path-of-titans-enable-disable-dinosaurs) |
| `bServerAllowChangeSubspecies=true` | Allows players to change their subspecies. Defaults to `true`. |
| `AFKDisconnectTime=600` | Specifies the amount of time in seconds before a player will be automatically disconnected from the server if they are idle/AFK. Useful to prevent idle players from filling your server. If set to `0`, no players will ever be kicked for being idle. |
| `MaxClientPingMs=0` | Specifies the maximum ms ping before auto-disconnecting the player.`0` will disable this option. Use to prevent high-ping players causing issues for your server. |
| `MaxClientPingDuration=0` | Specifies the duration of time in seconds the player's ms ping must be above the MaxClientPingMs before being disconnected. |
| `ServerLogoutTime=60` | The amount of time required to be on the logout menu before a player safe logs. Set to `0` if you want instant logouts. |
| `bServerAntiRevengeKill=true` | Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. When set to `true`, when a player is killed, any of their other characters within a certain radius are flagged with a 10 minute timer, which prevents those specific characters from logging back in right away. Characters that are further away are unaffected by the login timer. |
| `RevengeKillDistance=100000` | (100000 = 1km) Will only work when a Database is set to remote, for hived servers. It is planned to work for all servers in the future. Specifies the radius of the Anti-Revenge Kill distance. |
| `MaxCharactersPerPlayer=30` | Specifies the maximum number of characters a user can have in total. |
| `MaxCharactersPerSpecies=1` | Specified the maximum number of characters a user can have per species. |
| `bServerAllowReplayRecording=false` | Specifies if players can record a replay. Defaults to `false`. |
| `SpeedhackDetection=1` | Setting for action taken when speed hacks are detected. `0` = none, `1` = log, `2` = kick, `3` = ban. From settings 1-3, a PlayerHack webhook will also be sent. |
| `SpeedhackThreshold=10` | The amount of speedhack detections that will be allowed per minute before the SpeedhackDetection action is taken. A value of `0` will disable detection. This value helps to minimize false positives due to packet loss or lag.  |
| `bServerWaystones=true` | Enables or disables Waystones on your server. |
| `bServerAllowAnselMultiplayerPausing=false` | Allows players to be able to use Nvidia Ansel on the server to take screenshots. Be mindful of allowing this, as players can technically use it to pause their game to investigate the location of hiding players or gain other gamplay advantages. Defaults to `false`. |
| `ServerAnselCameraConstraintDistance=500` | The distance, in centimeters, the player can move their Nvidia Ansel camera away from their dinosaur in order to take screenshots. It's suggested to keep this a bit limited to avoid unfair gameplay advantages. Defaults to `500` (5 meters). |
| `bServerAllowInGameWaystone=true` | Enables or disables waystones. Setting this as `fals`e requires players to use the old method of using the Waystone by retuning to the Character Menu screen. |
| `bEnforceWhitelist=true` | Enables or disables the whitelist system. If enabled, only players on the whitelist can join the server. |
| **Changing Login Debuff length and stats** | When a player logs in, they will have a Login Debuff applied to their character. You can adjust the length and stat changes of this buff by adding the following:<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffDuration",Values=(60))`<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffSpeedReduction",Values=(0.75))`<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffIncomingDamage",Values=(2))`<br/> - `CurveOverrides=(CurveName="Global.LoginDebuffAttackDamage",Values=(0.4))`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here](../guides/curve-overrides/index). |
| **Changing Group Buff stats** | When players are grouped and near each other they gain increased movement speed and stamina regeneration. You can adjust these values by adding the following:<br/> - `CurveOverrides=(CurveName="Global.GroupLeaderBuffStaminaRecoveryMultiplier",Values=(1.1))`<br/> - `CurveOverrides=(CurveName="Global.GroupLeaderBuffSpeedMultiplier",Values=(1.05))`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here](../guides/curve-overrides/index).                                                                                                                                             |
| **Changing Group Slot Sizes** | When players group up, their dino will fill a certain number of group slots. You can change the number of slots by adding the following for any desired dinosaur:<br/> - `GroupSlotSizeOverrides=(DinoAssetID="Allosaurus",GroupSize=5)`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here](../guides/curve-overrides/index).`added` |

### Growth

|Config Name:|Description:|
|-|-|
| `bServerGrowth=true` | Enables/Disables Growth on your server. If disabled, all dinosaurs will spawn as Adults, and all existing characters will be bumped up to Adult. |
| `GlobalPassiveGrowthPerMinute=0` | Adds additional passive growth per second to all dinosaurs. Remember, full growth = `1` so a good value for this might be `0.005`, which means a player would take 200 minutes (3.3 hours) to reach adulthood. Growth amount currently applies equally across all dinosaurs. Setting this to `0` disables passive growth. |
| `ChangeSubspeciesGrowthPenaltyPercent=25` | Specifies the growth penalty percent for changing subspecies. Note that `bLoseGrowthPastGrowthStages=true` may have to be active for anything 25 and above. |
| `bUseTutorialCustomGrowthMultiplier=false` | If true, the tutorial will use the `TutorialCustomGrowthMultiplier` value to determine the growth rate of the player. If false, the tutorial will use the default growth rate. |
| `TutorialCustomGrowthMultiplier=1.0` | The growth multiplier used in the tutorial if `bUseTutorialCustomGrowthMultiplier` is set to true. |

### Weather

|Config Name:|Description:|
|-|-|
| `WeatherLengthVariation=(X=10,Y=20)` | The amount of time (in minutes) that any 1 weather type will be active for. This is specified as a minimum (X) and maxium (y) time that will be randomly selected between. By default, a weather type will persist for between `10` to `20` minutes before changing to the next weather type. |
| `WeatherBlendVariation=(X=1,Y=2)` | The duration of time (in minutes) that will take for weather types to transition to the next. This is specified as a minimum (X) and maxium (y) time that will be randomly selected between. By default, it will take between `1` to `2` minutes for the weather to transition to the next type. |
| `bOverrideWeather=true` | This much be added under `bOverrideWeather=true` and each have its own line `+WeatherEvents=(WeatherType=Fog,MinTime=1.000000,MaxTime=1.000000)` `+WeatherEvents=(WeatherType=Storm,MinTime=1.000000,MaxTime=1.000000)` `+WeatherEvents=(WeatherType=Snow,MinTime=1.000000,MaxTime=1.000000)` |

### Death

|Config Name:|Description:|
|-|-|
| `bPermaDeath=false` | Activates permanent death on the server. Deceased characters will show up as corpses on the Character Selection Menu. Defaults to `false`. |
| `bDeathInfo=false` | Displays a textbox on the Character Select Screen that provides info about your dead character when `bPermaDeath` is enabled. |
| `MinGrowthAfterDeath=0.5` | The minimum growth a player can be rolled back to if they die. Defaults to `0.5` |
| `FallDeathMarksPenaltyPercent=5` | Percent of total marks a player will lose when they die from fall damage. |
| `FallDeathGrowthPenaltyPercent=2` | Percent of growth a player will lose when they die from fall damage. |
| `SurvivalDeathMarksPenaltyPercent=10` | Percent of total marks a player will lose when they die from starving/thirst/drowning. |
| `SurvivalDeathGrowthPenaltyPercent=5` | Percent of growth a player will lose when they die from starving/thirst/drowning. |


### Homecave

|Config Name:|Description:|
|-|-|
| `bServerHomeCaves=true` | Enables or disables home caves on your server. |
| `bServerWellRestedBuff=true` | Enables or disables the Well Rested buff. Defaults to `true`. |
| `bServerEditAbilitiesInHomeCaves=true` | If true, players can only edit abilities in their home caves. If `false`, players can edit their abilities anywhere. Recommended to be set to true if you also enable home caves on your server. |
| `bServerEditAbilitiesWhileSleeping=false`    | If true, players can edit their abilities only while sleeping. If `false`, players can edit their abilities while standing. If this is set to `true` AND `bServerEditAbilitiesInHomeCaves=true`, players can edit their abilities in their home caves OR while sleeping. |
| `bServerHatchlingCaves=true` | Enables/Disables the tutorial Hatchling Caves. If this is enabled, players will spawn in a tutorial area at `0` growth, and completing quests will bring them to `0.25` growth by the time they exit. If this is disabled, players will spawn in the world at `0.25` growth and completely skip the tutorial. The growth can be modified with `HatchlingCaveExitGrowth`. |
| `bServerHungerThirstInCaves=false` | Enables or disables Hunger and Thirst in Home Caves. If disabled, Dinosaurs will not lose hunger or thirst in Home Caves and will take no damage if they have no food or water.|
| `HatchlingCaveExitGrowth=0.25` | Specifies the growth a player will have when they exit the Hatchling Caves. `0` denotes a hatchling and is the default value. |
| `bServerHomecaveCampingDebuff=true` | Enables or disables the Home Cave Camping debuff on your server. |
| `bOverrideHomecaveCampingDistance=false` | Flags whether you want to override the Home Cave Camping debuff. If set to true you must also then specify the `HomecaveCampingDistance` (below). Defaults to `false`. |
| `HomecaveCampingDistance=20000` | Radius (in centimeters) around Home Cave Entrances that will apply the Home Cave Camping debuff. Defaults to `20000`, which is 200 meters. |
| `bOverrideHomecaveCampingDelay=false` | Flags whether there is a delay between a player entering the `HomecaveCampingDistance` radius, and actually having the debuff applied to them. Typically this should be at least a few minutes to avoid players instantly getting debuffed when they walk near a Home Cave. |
| `HomecaveCampingDelay=180` | Time (in seconds) the Home Cave Camping debuff will delay before being applied to a player if they are within the HomecaveCampingDistance. Defaults to 180 (3 minutes). |

### Critter
|Config Name:|Description:|
|-|-|
| `bServerCritters=true` | Enables or disables critters spawning. Defaults to `true`. |
| `ServerMaxCritters=100` | The maximum number of critters that can spawn at once. Defaults to 100 critters allowed at once.  |

### Combat

|Config Name:|Description:|
|-|-|
| `bServerCombatTimerAppliesToGroup=true` | Specifies whether players that are grouped up all share the same combat timer. If set to false, players will only receive the combat timer if they personally attack/are attacked. Defaults to `true`. |
| `bLoseGrowthPastGrowthStages=true` | Allows players to lose growth past Juvenile/Adolescent/Sub-Adult/Adult growth states when they die. |
| `CombatDeathMarksPenaltyPercent=25` | Percent of total marks a player will lose when they die from combat. |
| `CombatDeathGrowthPenaltyPercent=10` | Percent of growth a player will lose when they die from combat. |
| **Changing Combat timer duration** | When players attack each other, they gain an "In Combat" status that prevents healing and logging out. You can change the duration of this state by adding the following:<br/> - `CurveOverrides=(CurveName="Global.InCombatDuration",Values=(30))`<br/> This uses the same format as adjusting dinosaur stats, [learn how to adjust stats here](../guides/curve-overrides/index).`added` |

### Quest

|Config Name:|Description:|
|-|-|
| `bOverrideMaxCompleteQuestsInLocation=false` | Enables or disables the ability to change the `MaxCompleteQuestsInLocation`. Defaults to `false`. If set to `true` you must also set `MaxCompleteQuestsInLocation` (below). |
| `MaxCompleteQuestsInLocation=3` | Determines how many quests must be completed within a POI before it is 'completed'. |
| `QuestGrowthMultiplier=1` | Allows you to adjust the rate of growth earned by players when they complete quests. If you want to disable growth from quests, set this value to `0`. |
| `QuestMarksMultiplier=1.0` | Specifies the multiplier used when rewarding marks for quest completion. |
| `bOverrideLocalQuestCooldown=false` | If set to `true` will allow you to override the time it takes for a local quest to cooldown after completion. |
| `LocalQuestCooldown=3600` | Time it takes in seconds for a quest to cooldown before it can be completed again. |
| `bOverrideLocationQuestCooldown=false` | If set to `true` will allow you to override the time it takes for the POI completion reward to reset after reaching 100%. |
| `LocationQuestCooldown=3600` | Time it takes in seconds for a the POI Completion reward to reset before it can be completed again. |
| `bLoseQuestsOnDeath=true` | Specifies whether quests will automatically fail when a player dies. |
| `bTrophyQuests=true` | Enable or disable Trophy Quests on the server. Defaults to `true` |
| `bOverrideTrophyQuestCooldown=false` | Flags whether you want to override the `TrophyQuestCooldown`. If set to true you must also then specify the `TrophyQuestCooldown` (below). Default to `false`. |
| `TrophyQuestCooldown=1800` | Time (in seconds) between a player being able to handin another Trophy quest. Defaults to `1800` (30 minutes). |
| `bOverrideLocalQuestCooldown=false` | Specifies whether to change the time it takes for a Local Quest to be given to a player. Defaults to `false`. If set to `true` you must then set `LocalQuestCooldown` (below). |
| `LocalQuestCooldown=3600.0` | Time (in seconds) between a player being able to recieve a new Local Quest. Defaults to `3600` (1 hour). |
| `bOverrideLocationQuestCooldown=false` | Specifies whether to change the time it takes for a Location Quest to be given to a player. Defaults to `false`. If set to true you must then set `LocationQuestCooldown` (below). |
| `LocationQuestCooldown=3600.0` | Time (in seconds) between a player being able to recieve a new Location Quest. Defaults to `3600` (1 hour). |
| `MaxGroupQuests=2` | Specifies the maximum number of group quests that can be assigned to a group at a time. Defaults to `2`. |
| `bServerLocalWorldQuests=true` | Enables or disables Local World Quests on your server. |
| `ServerMinTimeBetweenExplorationQuest=30` | Specifies the minumum time (in minutes) between a player receiving a new Exploration quest. Defaults to `30` minutes. |

### Nesting

|Config Name:|Description:|
|-|-|
| `bNesting=true` | If true, nesting will be enabled on the server. Default is `true` |
| `bNestingDecorations=true` | If true, decorations can be placed around nests. Default is `true` |
| `bSameSpeciesAdoptionRestriction=false` | If true, only the same species can be adopted. Otherwise, only the same diet type can be adopted. Default is `false` |
| `MinNestingGrowth=0.75` | The minimum growth a player must be in order to place a nest. Default is `0.75` |
| `MaxNestImmunityBuffGrowth=0.25` | The maximum growth a hatchling will become immune to all damage for a short time after spawning at their parent's nest. Set this to 0 to completely disable the hatchling spawn immunity. Default is `0.25` |
| `MaxNestRespawnGrowth=0.5` | The maximum growth a hatchling will respawn at their parent's nest. Once they grow past this value, they will respawn at a random point on the map like a regular adult dinosaur. Default is `0.5` |
| `MaxNestFreeRespawnGrowth=0.25` | The maximum growth a hatchling will respawn at their parent's nest without consuming a baby slot. Once they grow past this point, they will consume an egg slot for each respawn. Default is `0.25 |
| `MinNestRespawnCondition=0.5` | The minimum health a nest must have for a hatchling to be able to respawn at it. If the nest is too damaged, the hatchling will not be able to respawn there and will instead spawn at a random point on the map like a regular adult dinosaur. Default is `0.5` |
| `MinNestHealthForDecorations=0.5` | The minimum health a nest must have to place decorations around it. Default is `0.5` |
| `MinNestBabySlotFoodWater=0.0` | The minimum food and water a nest must have inside it to begin generating baby slots. Leave this at 0 to ignore the food/water requirements. Default is `0.0` |
| `MinNestBabySlotResources=0.5` | The minimum resource percentage in each category a nest must have to generate baby slots. Default is `0.5` |
| `MinNestHealthToEditAbilities=0.75` | The minimum health a nest must have to be able to edit abilities while sleeping nearby it. Default is `0.75` |
| `MaxAdoptionGrowth=0.5` | The max growth of a potential adoption candidate. If they are older than this age, they will not be adoptable. Default is `0.5` |
| `NestInactiveDespawnTimeSolo=120` | The amount of seconds until a nest will despawn without the owner online. Default is `120` |
| `NestInactiveDespawnTimeDependents=900` | The amount of seconds until a nest will despawn, without the owner's offspring online. Default is `900` |
| `NestDisrepairDespawnTime=7200` | The amount of seconds a nest with 0 health will be destroyed permanently. Default is `7200` |
| `NestBabySlotGenerationTime=1800` | The amount of seconds it will take for a baby slot to generate while all baby slot conditions are met. Default is `1800` |
| `NestInvitationExpiryTime=15` | The amount of seconds until a nest invitation will expire. Default is `15` |
| `NestAcceptedInvitationExpiryTime=300` | The amount of seconds until an accepted nest invitation will no longer be valid to use. This will be used on the character creation screen as the player is creating their new hatchling character. Default is `300` |
| `FamilyBuffRange=5000` | The distance from family members that the family buff will be applied. Set this to 0 to disable this buff. `5000` |
| `NestResourceMultiplier=1.0` | The multiplier on the amount of resources required to construct a nest. If set to 0, nests will not require resources and can be built instantly without them. Default is `1.0` |
| `NestResourcelessConstructionSpeed=5.0` | The amount of health contributed to a nest when NestResourceMultiplier is zero. Default is `5.0` |
| `bNestsInvulnerable=false` | If true, nests cannot be destroyed by other players. Default is `false` |
| `bSpawnParentNestOnLogin=false` | If true, the parent's nest will spawn when a child that is still young logs in. This can be useful to avoid players being orphaned if their parents log out. Default is `false` |
| `NestObstructionRadius=500` | The radius in centimeters other nests cannot be placed near an existing nest. The default is `5` meters here. |
| `bServerEditAbilitiesAtNest=true` | If true, players can only edit abilities at their nest. Setting **BOTH** `bServerEditAbilitiesInHomeCaves=false` **AND** `bServerEditAbilitiesAtNest=false` will allow players to edit their abilities anywhere. |

## IGameMode Config

Below are settings that will work under the `[/Script/PathOfTitans.IGameMode]` header.
|Config Name:|Description:|
|-|-|
|`DefaultCreatorModeSave=CreatorName`|Specifies the default creator mode save file to load when the server starts. This is the name used to save the creator mode file. If the file does not exist, it will not load. (Currently has some limitations with loading saved modded items)|
|`ServerStartingTime=1380`|Specifies the time of day the server begins at after a restart. Time is scaled between `0-2300`. Example:`100` = 1:00 AM, `1200` = 12:00 PM, and `1800` = 6:00 PM signifies 12:00 PM, and 1800 denotes 6:00 PM.|
|`bServerDynamicTimeOfDay=1`|Specifies if the server uses a fixed (0) or dynamic (1) time of day. Fixed will use the ServerStartingTime.|
|`bServerRestrictCarnivoreGrouping=false`|This feature determines whether the server limits the grouping of carnivores to those of the same species.|
|`bServerRestrictHerbivoreGrouping=false`|Specifies if the server restricts carnivore grouping to the same species. (Revision 13324)|
|`ServerDayLength=240`|This feature sets the duration (minutes) for a complete day cycle.|
|`ServerNightLength=240`|Specified the length (in minutes) of a full night cycle. (Revision 29073)|
|`MaxGroupSize=10`|This feature establishes the limit for the number of slots available for player groups.|
|`MaxGroupLeaderCommunicationDistance=250000`|Max radius for randomly picking a spawn point from the furthest spawn location from other players. Defaults to `250000` (2.5km).|
|`FurthestSpawnInclusionRadius=250000`|Max radius for randomly picking a spawn point from the furthest spawn location from other players. Defaults to `250000` (2.5km).|

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

# Path of Titans This is for loading Creator Modes on startup
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

## [RCON Config](./path-of-titans-rcon-config)

Path of Titans RCON Config

[Link for `[SourceRCON]` configuration](./path-of-titans-rcon-config)

## [Server Webhooks Config](./path-of-titans-webhook-config)

Path of Titans Server Webhooks Config

[Link for `[ServerWebhooks]` configuration](./path-of-titans-webhook-config)

---

<p style="text-align: center;"><span data-preserver-spaces="true">Experience seamless gameplay with our top-of-the-line "</span><strong><span data-preserver-spaces="true">Path Of Titans</span></strong><span data-preserver-spaces="true">" video game servers for hosting. Dominate the virtual world and build your killer dinosaur-themed world with your gaming squad. </span><span data-preserver-spaces="true">With </span><strong><span data-preserver-spaces="true">lightning-fast hardware</span></strong><span data-preserver-spaces="true">, </span><strong><span data-preserver-spaces="true">unrivaled performance</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">reliable uptime</span></strong><span data-preserver-spaces="true">, our servers ensure an immersive gaming experience for your communitys needs. </span><span data-preserver-spaces="true">Take advantage of our cutting-edge features, including </span><strong><span data-preserver-spaces="true">customizable settings</span></strong><span data-preserver-spaces="true">, an </span><strong><span data-preserver-spaces="true">intuitive control panel</span></strong><span data-preserver-spaces="true">, and </span><strong><span data-preserver-spaces="true">dedicated support</span></strong><span data-preserver-spaces="true">. Dont miss out on this opportunity to level up your gaming experience.</span></p>
<h3 style="text-align: center;"><span style="color: #ffd369;"><a style="color: #ffd369;" href="https://gameservershub.com/hostin./path-of-titans/"><strong>Get your server today!</strong></a></span></h3>
