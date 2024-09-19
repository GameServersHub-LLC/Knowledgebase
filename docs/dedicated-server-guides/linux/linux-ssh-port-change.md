---
head:
  - - meta
    - property: "og:image"
      content: /path of titans - 667x260.webp
  - - meta
    - name: description
      content: Explore GameServersHub's Linux Guide for comprehensive information on Linux. Learn about installation, features, and updates for mastering your Linux system!
  - - meta
    - name: keywords
      content: Linux
title: Changing the Default SSH Port
---

# Linux: How to change the default SSH Port

By default, port 22 is used to establish an SSH connection, and it is automatically configured during the installation of your operating system. However, since attackers frequently target this port due to its common use for SSH connections, it is advisable not to keep it as the default. Therefore, we recommend changing it as one of your first setup steps for your Linux server.

::: warning
Please note that if you are using a firewall, such as UFW, you will need to open the port to allow connections through the SSH port you have selected. Additionally, when choosing your desired port, ensure that it is not already in use by another service. You can refer to the [list of pre-assigned ports](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) for guidance.
:::

## Changing SSH Connection Port

This guide is based on Ubuntu 22.04 LTS and uses the Nano text editor due to its ease of use for beginners. If you are using a different Linux distribution, the commands may vary from those shown below. Also if you are familiar with another text editor, please feel free to use that instead.

### Step One:

- Log on to the server as an administrator

### Step Two:

Open the SSH configuration file (**sshd_config**) with the text editor nano:

::: info
The `sudo` command in Linux allows users to execute commands with elevated privileges, as defined in the sudoers file. By prefixing a command with sudo, users can perform tasks requiring administrative rights, with each action logged for security and auditing purposes.
:::

- `sudo nano /etc/ssh/sshd_config`
- Then find `#Port 22` and replace it with `Port [Your desired port number]`.

Portion of **sshd_config** file:

```sh
# This is the sshd server system-wide configuration file.  See
# sshd_config(5) for more information.

# This sshd was compiled with PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games

# The strategy used for options in the default sshd_config shipped with
# OpenSSH is to specify options with their default value where
# possible, but leave them commented.  Uncommented options override the
# default value.

Include /etc/ssh/sshd_config.d/*.conf

Port 49231
#AddressFamily any
#ListenAddress 0.0.0.0
#ListenAddress ::
```

Once you have set your desired SSH port in the configuration file, you will need to exit the file and save your changes using the following keyboard shortcuts.

- Press `Ctrl + X` to initiate the exit process.
- When prompted to save the document (You will be choosing `Y`):
  - Press `Y` for yes.
  - Press `N` for no.
- Press `Enter` to finalize your choice.

### Step Three:

To finalize the configuration changes, you will need to restart the necessary services to apply the changes on your server.

To apply the configuration changes, run the following commands:

- `systemctl restart sshd`

**Optional:**
To confirm that SSH is running and the configuration changes have been applied successfully, you can run the following command:

- `systemctl status sshd`
