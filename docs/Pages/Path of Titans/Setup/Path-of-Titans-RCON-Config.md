# RCON Configuration

You can use Source RCON protocol to help moderate your server. You can configure and setup RCON with the following steps.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

To change the configuration options, click on Files and navigate to the following path:

`PathofTitans/Saved/Config/LinuxServer/Game.ini`

::: info
`LinuxServer` is the folder name for Linux servers. If you are using a different operating system, the folder name will be different but the other folders will be the same.
:::

Underneath the `[SourceRCON]` header, create the entries specified in the below example.

## Example of RCON Config

Example for `GameServersHub` Servers only, as GSH doesn't require additional lines.

### GSH Example Game.ini
```ini
[SourceRCON]
bEnabled=true
bLogging=true
Password=password
```

### Other Providers Example Game.ini
```ini
[SourceRCON]
bEnabled=true
bLogging=true
Password="password"
Port=0
IP="0.0.0.0"
MaxFailedAttempts=5
Timeout=60
PageTimeout=5
MaxConnectionsPerIP=3
```