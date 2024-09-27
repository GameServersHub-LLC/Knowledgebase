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
title: Webhook Configs
---

# Path of Titans Webhook Configuration

Webhooks provide a powerful mechanism for external services to receive real-time notifications when specific events occur within your application. When these predefined events take place, our system automatically sends a POST request to each of the URLs you have configured. This process ensures seamless integration and instant updates, enabling your external services to respond promptly to critical activities.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

To change the configuration options, you must edit your `Game.ini` file.

::: tip
Each option must be on its own line or else they will not work. The options might also be removed if they are default values.
:::

You can find your `Game.ini` file in the following location:

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

## Creating Discord Webhooks

You can create a Discord webhook for your Discord channel by following these steps:

1. Go into your desired channel settings and select "Integrations"
2. Create a new webhook.
3. Copy the webhook URL and paste it into your Game.ini file.

## Webhook List:

### PlayerReport

This logs instances where a player submits a report, typically about another player’s behavior or a game issue.

### PlayerLogin

This records when a player logs into the game.

### PlayerLogout

This tracks when a player logs out of the game.

### PlayerLeave

This logs when a player leaves the server.

### PlayerKilled

This records instances of a player being killed in the game, often including details about who killed them and how.

### PlayerQuestComplete

This logs when a player successfully completes a quest.

### PlayerQuestFailed

This records when a player fails a quest.

### PlayerRespawn

This tracks when a player respawns after being killed.

### PlayerWaystone

This logs when a player uses a waystone to teleport.

### PlayerChat

This records messages sent by a player in the game chat.

### PlayerProfanity

This records instances of a player using profanity in the game chat.

### PlayerHack

This logs suspected or confirmed instances of a player using hacks or cheats and reports on high ping.

### PlayerDamagedPlayer

This records when one player causes damage to another player.

### PlayerJoinedGroup

This logs when a player joins a group within the game.

### PlayerLeftGroup

This records when a player leaves a group within the game.

### PlayerPurchase

Called when a player purchases/upgrades a skin and when an ability is purchased. Depending on the purchase, different fields are sent.

### ServerRestart

This logs instances of the server being restarted.

### ServerRestartCountdown

This tracks the countdown leading up to a server restart.

### ServerModerate

This logs actions taken by server moderators, such as muting or banning players.

### ServerError

This logs errors encountered by the server.

### AdminSpectate

This records when an admin starts spectating a player or area within the game.

### AdminCommand

This logs commands issued by an admin.

### BadAverageTick

This tracks instances where the server’s tick rate falls below acceptable levels, indicating potential performance issues.

## Game.ini Example

```ini
[ServerWebhooks]
bEnabled=true
# Set this to true if you want the server to call webhooks
Format="Discord"
# Discord or General
PlayerReport="https://discord-webhook-url-here/"
PlayerLogin=""
PlayerLogout=""
PlayerLeave=""
PlayerKilled=""
PlayerQuestComplete=""
PlayerQuestFailed=""
PlayerRespawn=""
PlayerWaystone=""
PlayerChat=""
PlayerProfanity=""
PlayerHack=""
PlayerDamagedPlayer=""
PlayerJoinedGroup=""
PlayerLeftGroup=""
PlayerPurchase=""
ServerRestart=""
ServerRestartCountdown=""
ServerModerate=""
ServerError=""
AdminSpectate=""
AdminCommand=""
BadAverageTick=""
```
