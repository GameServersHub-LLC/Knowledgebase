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
title: RCON Configuration
---

# Path of Titans RCON Configuration

You can use Source RCON protocol to help moderate your server. You can configure and setup RCON with the following steps.

::: warning
The server must be stopped while editing server files. You must save your edits and restart your server for any edits to take effect.
:::

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
