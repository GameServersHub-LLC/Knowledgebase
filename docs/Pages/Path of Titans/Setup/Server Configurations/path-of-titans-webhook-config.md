|Config Name:|Description:|
|-|-|
|`bEnabled=true`|Set this to true if you want the server to call webhooks.|
|`Format="Discord"`|`Discord` or `General`: Discord will format the messsage for posting directly to the channel `General` will format the message to be consumed by your own website / server / backend|
|||



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
