---
head:
  - - meta
    - property: "og:image"
      content: /path of titans - 667x260.webp
  - - meta
    - name: description
      content: Explore GameServersHub's Gaming Wiki for in-depth info on Palworld. Discover details on gameplay, features, and updates for the ultimate creature-collecting adventure!
  - - meta
    - name: keywords
      content: Palworld
title: Server Settings
---

# Palworld Server Settings: How to set up the Palworld configuration file.

## Locating the Configuration File

Before starting with the configuration process of your Palworld server, you need to locate a crucial file that stores all the default server settings. This file plays a significant role in governing several aspects of your server. To locate this file successfully, you can follow a few simple steps.

1\. To ensure that the \`**PalWorldSettings.ini**\` file is generated, running the \`**PalServer.exe**\` at least once is essential. Without running the \`**PalServer.exe**\`, the \`**PalWorldSettings.ini**\` file will not be created.

2\. To access the secure repository where the configuration files for your Palworld server are stored, you'll need to navigate to the designated directory path, which differs depending on your operating system. For **Linux** users, head to "**Saved/Config/LinuxServer/PalWorldSettings.ini**", while **Windows** users should go to "**Saved/Config/WindowsServer/PalWorldSettings.ini**". This repository is where you can manage and modify various settings that affect your Palworld server experience, so it's an important location to be familiar with.

![PalworldDedicatedServer](/palworld-dedicated-server-location.webp)

## Understanding the Configuration File

Before you're in the editing process, please take a moment to get a chance to understand the intricate structure of the configuration file. Each setting manifests as a harmonious key-value pair within this digital blueprint, elegantly enclosed in square brackets. To illustrate, consider the following enlightening example:

` [/Script/Pal.PalGameWorldSettings]   ``OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000) `

The assigned values to these keys wield power to intricately shape crucial server parameters, encompassing the nuances of difficulty levels, day and night speed rates, experience rates, and various other pivotal elements.

![PalworldServerLocation](/palworld-server-settings-preview.webp)

## How to Edit Palworld Server Settings:

With the configuration file successfully identified and comprehended, it's time to begin editing your Palworld server settings. Explore essential customization options as we delve into key parameters that allow you to tailor your server experience to perfection:

**`Difficulty`:** You can modify the level of challenge for the game by adjusting the overall difficulty settings.  
**`ServerPassword`:** To enhance the security of the server, it is recommended that you set a secure password. Please let me know the password you want to set, and I will assist you throughout the process. If you need any guidance on creating a strong password, I can provide you with some tips and suggestions.  
**`DayTimeSpeedRate`:** This feature allows you to adjust the speed of the daytime cycle within the game.  
**`NightTimeSpeedRate`:** This option allows you to adjust the speed at which the game runs during nighttime. Modifying this setting allows you to customize your gaming experience to suit your preferences better.  
**`ExpRate`:** This feature enables you to modify the rate at which players and creatures accumulate experience points, allowing you to fine-tune the pace of character progression and gameplay balance.  
**`PalSpawnNumRate`:** With this feature, you can control and modify the frequency of Pal creatures appearing in your game.  
**`PlayerDamageRateAttack`:** This particular functionality aids in calculating the precise amount of damage that can be inflicted on other players and animals within the game.  
**`PlayerDamageRateDefense`:** This attribute calculates how much a player or animal can resist or withstand attacks or damage from external sources. It is an essential aspect of gameplay that allows players to survive in hostile environments and engage in combat with other players or creatures.  
**`DropItemMaxNum`**: This setting allows you to specify the highest possible amount of items that can be dropped within the game.

When it comes to the Palworld server, there are various settings that you can explore and customize to make your gameplay experience more enjoyable. Customization options include everything from adjusting the difficulty level to changing the weather and time of day. You can also fine-tune the rules of the game, like whether or not PvP combat is allowed or how frequently resources spawn. Experimenting with these settings to find what works best for you and your playing style is essential. Whether you prefer a more relaxed gaming experience or a challenging one, don't hesitate to make the adjustments to create a Palworld server that you'll love.

## Saving Changes and Restarting the Server

After you have made the required modifications to your Palworld server, it's very important to restart it to make sure the changes take effect. It's important to note that players may need to disconnect and reconnect to the server to experience the updated settings. This is because the server may not automatically apply the changes to the already connected players. Therefore, it's recommended that you let your players know beforehand about the server restart and advise them to reconnect after the restart to avoid any confusion or gameplay issues.

## List of all Settings

| Setting                                | Description                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------------- |
| `Difficulty`                           | Adjusts the overall difficulty of the game.                                      |
| `DayTimeSpeedRate`                     | Modifies the speed of in-game time during the day.                               |
| `NightTimeSpeedRate`                   | Modifies the speed of in-game time during the night.                             |
| `ExpRate`                              | Changes the experience gain rate for both players and creatures.                 |
| `PalCaptureRate`                       | Adjusts the rate at which Pal creatures can be captured.                         |
| `PalSpawnNumRate`                      | Adjusts the rate at which Pal creatures spawn.                                   |
| `PalDamageRateAttack`                  | Fine-tunes Pal creature damage dealt.                                            |
| `PalDamageRateDefense`                 | Fine-tunes Pal creature damage received.                                         |
| `PlayerDamageRateAttack`               | Fine-tunes player damage dealt.                                                  |
| `PlayerDamageRateDefense`              | Fine-tunes player damage received.                                               |
| `PlayerStomachDecreaseRate`            | Adjusts the rate at which the player's stomach decreases.                        |
| `PlayerStaminaDecreaseRate`            | Adjusts the rate at which the player's stamina decreases.                        |
| `PlayerAutoHPRegeneRate`               | Adjusts the rate of automatic player health regeneration.                        |
| `PlayerAutoHpRegeneRateInSleep`        | Adjusts the rate of automatic player health regeneration during sleep.           |
| `PalStomachDecreaseRate`               | Adjusts the rate at which Pal creature stomach decreases.                        |
| `PalStaminaDecreaseRate`               | Adjusts the rate at which Pal creature stamina decreases.                        |
| `PalAutoHPRegeneRate`                  | Adjusts the rate of automatic Pal creature health regeneration.                  |
| `PalAutoHpRegeneRateInSleep`           | Adjusts the rate of automatic Pal creature health regeneration during sleep.     |
| `BuildObjectDamageRate`                | Adjusts the rate at which built objects take damage.                             |
| `BuildObjectDeteriorationDamageRate`   | Adjusts the rate at which built objects deteriorate.                             |
| `CollectionDropRate`                   | Adjusts the drop rate of collected items.                                        |
| `CollectionObjectHpRate`               | Adjusts the health of collected objects.                                         |
| `CollectionObjectRespawnSpeedRate`     | Adjusts the respawn speed of collected objects.                                  |
| `EnemyDropItemRate`                    | Adjusts the drop rate of items from defeated enemies.                            |
| `DeathPenalty`                         | Defines the penalty upon player death (e.g., All, None).                         |
| `bEnablePlayerToPlayerDamage`          | Enables or disables player-to-player damage.                                     |
| `bEnableFriendlyFire`                  | Enables or disables friendly fire.                                               |
| `bEnableInvaderEnemy`                  | Enables or disables invader enemies.                                             |
| `bActiveUNKO`                          | Activates or deactivates UNKO (Unidentified Nocturnal Knock-off).                |
| `bEnableAimAssistPad`                  | Enables or disables aim assist for controllers.                                  |
| `bEnableAimAssistKeyboard`             | Enables or disables aim assist for keyboards.                                    |
| `DropItemMaxNum`                       | Sets the maximum number of dropped items in the game.                            |
| `DropItemMaxNum_UNKO`                  | Sets the maximum number of dropped UNKO items in the game.                       |
| `BaseCampMaxNum`                       | Sets the maximum number of base camps that can be built.                         |
| `BaseCampWorkerMaxNum`                 | Sets the maximum number of workers in a base camp.                               |
| `DropItemAliveMaxHours`                | Sets the maximum time items remain alive after being dropped.                    |
| `bAutoResetGuildNoOnlinePlayers`       | Automatically resets guilds with no online players.                              |
| `AutoResetGuildTimeNoOnlinePlayers`    | Sets the time after which guilds with no online players are automatically reset. |
| `GuildPlayerMaxNum`                    | Sets the maximum number of players in a guild.                                   |
| `PalEggDefaultHatchingTime`            | Sets the default hatching time for Pal eggs.                                     |
| `WorkSpeedRate`                        | Adjusts the overall work speed in the game.                                      |
| `bIsMultiplay`                         | Enables or disables multiplayer mode.                                            |
| `bIsPvP`                               | Enables or disables player versus player (PvP) mode.                             |
| `bCanPickupOtherGuildDeathPenaltyDrop` | Enables or disables the pickup of death penalty drops from other guilds.         |
| `bEnableNonLoginPenalty`               | Enables or disables non-login penalties.                                         |
| `bEnableFastTravel`                    | Enables or disables fast travel.                                                 |
| `bIsStartLocationSelectByMap`          | Enables or disables the selection of starting locations on the map.              |
| `bExistPlayerAfterLogout`              | Enables or disables the existence of players after logout.                       |
| `bEnableDefenseOtherGuildPlayer`       | Enables or disables the defense of other guild players.                          |
| `CoopPlayerMaxNum`                     | Sets the maximum number of cooperative players in a session.                     |
| `ServerPlayerMaxNum`                   | Sets the maximum number of players allowed on the server.                        |
| `ServerName`                           | Sets the name of the Palworld server.                                            |
| `ServerDescription`                    | Provides a description for the Palworld server.                                  |
| `AdminPassword`                        | Sets the password for server administration.                                     |
| `ServerPassword`                       | Sets the password for joining the Palworld server.                               |
| `PublicPort`                           | Sets the public port for the Palworld server.                                    |
| `PublicIP`                             | Sets the public IP address for the Palworld server.                              |
| `RCONEnabled`                          | Enables or disables Remote Console (RCON) for server administration.             |
| `RCONPort`                             | Sets the port for Remote Console (RCON) communication.                           |
| `Region`                               | Sets the region for the Palworld server.                                         |
| `bUseAuth`                             | Enables or disables server authentication.                                       |
| `BanListURL`                           | Sets the URL for the server's ban list.                                          |

## Additional Tips

**Backup Your Configuration File:** It is highly recommended to back up your PalWorldSettings.ini file before making significant changes. This file contains crucial configuration settings that determine how PalWorld operates. If something goes wrong, you can quickly restore the original settings by creating a backup. This will save you much time and effort you would otherwise spend on troubleshooting. So, before you tweak the settings, you need to back up the PalWorldSettings.ini file.  
**Please check for Updates**: You should perform regular checks for any updates to the game or server software you use. These updates may contain new settings or adjustments that enhance your gaming experience. Keeping your software up-to-date can help avoid potential issues and ensure smooth gameplay.

If you're a Palworld player, you might want to take control of your server settings to customize your gaming experience. Following a few steps, you can tailor your Palworld adventure to your liking and create a unique gameplay experience for yourself and your fellow players. You can start by experimenting with different configurations and finding the settings that resonate with your preferences. You can adjust factors such as the difficulty level, resource availability, and environmental conditions to create a gameplay environment that challenges and excites you. With the ability to control your Palworld server settings, you can unleash your creativity and design a gaming experience that's uniquely yours. So why don't you try it and see what Palworld adventure you can create?

Looking for a reliable source for Palworld server guides, tutorials, and tech support? Join our Discord server at [**discord.gg/gsh**](https://discord.gg/gsh "discord.gg/gsh")! Our community offers a safe space for you to advertise your server, as well as receive expert tech support. Don't wait - join us today and take your Palworld server to the next level!
