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
title: Server Restarts
---

# Path of Titans Configure Server Restarts

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

## Configure Restarts through the Game.ini (Timed or Scheduled)

To change the configuration options, click on Files and navigate to the following path:

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

Click on `Game.ini` to begin editing the file. Type out the server configurations options (below) to enable them. All of the lines entered into this file will affect your server. When you are happy with your server configuration options, click save. This method of setting server restarts is highly recommended, as it will warn players in-game when the player is going to restart.

::: tip
Each option must be on its own line or else they will not work.
:::

### Timed Restarts Configuration

- `bServerAutoRestart=true` -> Enables automatic server restarts.
- `RestartLengthInSeconds=10800` -> Specifies the time between automatic server restarts in seconds.

**Example Contents of Game.ini**

```ini
[/Script/PathOfTitans.IGameSession]
bServerAutoRestart=true
RestartLengthInSeconds=10800
```

## Scheduled Restarts Configuration

`bServerAutoRestart=true` -> Enables automatic server restarts.

`bUseScheduledRestartTimes=true` -> The server will restart using local server time based on ScheduledRestartTimes

`RestartLengthInSeconds=xx` -> In this case, this is ignored, because we are using scheduled restarts.

`ScheduledRestartTimes=xxyy` -> xxyy = xx:yy = Hour:Minute (To add more than one scheduled restart time, just add as many lines as you need. See example)

`RestartNotificationTimestamps=xxxx` -> How many seconds before a restart should we warn players with a notification. (To add more than one notification time, just add as many lines as you need. See example)

**Example Contents of Game.ini**

```ini
[/Script/PathOfTitans.IGameSession]
bServerAutoRestart=true
bUseScheduledRestartTimes=true
ScheduledRestartTimes=0300
ScheduledRestartTimes=0700
ScheduledRestartTimes=1100
ScheduledRestartTimes=1500
ScheduledRestartTimes=1900
ScheduledRestartTimes=2300

# Path of Titans Notification at: 2,1 hours - 30,10,5,1 minutes - 10,5,4,3,2,1 seconds before restart
RestartNotificationTimestamps=7200
RestartNotificationTimestamps=3600
RestartNotificationTimestamps=3000
RestartNotificationTimestamps=2400
RestartNotificationTimestamps=1800
RestartNotificationTimestamps=1200
RestartNotificationTimestamps=600
RestartNotificationTimestamps=540
RestartNotificationTimestamps=480
RestartNotificationTimestamps=420
RestartNotificationTimestamps=360
RestartNotificationTimestamps=300
RestartNotificationTimestamps=240
RestartNotificationTimestamps=180
RestartNotificationTimestamps=120
RestartNotificationTimestamps=60
RestartNotificationTimestamps=59
RestartNotificationTimestamps=58
RestartNotificationTimestamps=57
RestartNotificationTimestamps=56
RestartNotificationTimestamps=55
RestartNotificationTimestamps=54
RestartNotificationTimestamps=53
RestartNotificationTimestamps=52
RestartNotificationTimestamps=51
RestartNotificationTimestamps=50
RestartNotificationTimestamps=49
RestartNotificationTimestamps=48
RestartNotificationTimestamps=47
RestartNotificationTimestamps=46
RestartNotificationTimestamps=45
RestartNotificationTimestamps=44
RestartNotificationTimestamps=43
RestartNotificationTimestamps=42
RestartNotificationTimestamps=41
RestartNotificationTimestamps=40
RestartNotificationTimestamps=39
RestartNotificationTimestamps=38
RestartNotificationTimestamps=37
RestartNotificationTimestamps=36
RestartNotificationTimestamps=35
RestartNotificationTimestamps=34
RestartNotificationTimestamps=33
RestartNotificationTimestamps=32
RestartNotificationTimestamps=31
RestartNotificationTimestamps=30
RestartNotificationTimestamps=29
RestartNotificationTimestamps=28
RestartNotificationTimestamps=27
RestartNotificationTimestamps=26
RestartNotificationTimestamps=25
RestartNotificationTimestamps=24
RestartNotificationTimestamps=23
RestartNotificationTimestamps=22
RestartNotificationTimestamps=21
RestartNotificationTimestamps=20
RestartNotificationTimestamps=19
RestartNotificationTimestamps=18
RestartNotificationTimestamps=17
RestartNotificationTimestamps=16
RestartNotificationTimestamps=15
RestartNotificationTimestamps=14
RestartNotificationTimestamps=13
RestartNotificationTimestamps=12
RestartNotificationTimestamps=11
RestartNotificationTimestamps=10
RestartNotificationTimestamps=9
RestartNotificationTimestamps=8
RestartNotificationTimestamps=7
RestartNotificationTimestamps=6
RestartNotificationTimestamps=5
RestartNotificationTimestamps=4
RestartNotificationTimestamps=3
RestartNotificationTimestamps=2
RestartNotificationTimestamps=1
```

## Configuring notification times (Works with both Timed and Scheduled restart configs.)

The defaults already are setup to notify every second during the last minute, then every hour for the last 6 hours, then every 6 hours beyond. No need to change this unless you want to customize the notification timing.

`RestartNotificationTimestamps=xxxx` -> How many seconds before a restart should we warn players with a notification. (To add more than one notification time, just add as many lines as you need. See example below.)

**Example Contents of Game.ini**

```ini
[/Script/PathOfTitans.IGameSession]
bServerAutoRestart=true
RestartLengthInSeconds=10800
RestartNotificationTimestamps=240
RestartNotificationTimestamps=180
RestartNotificationTimestamps=120
RestartNotificationTimestamps=60
RestartNotificationTimestamps=30
RestartNotificationTimestamps=20
RestartNotificationTimestamps=10
RestartNotificationTimestamps=05
```
