---
head:
  - - meta
    - property: "og:image"
      content: /path of titans - 667x260.webp
  - - meta
    - name: description
      content: Explore the best security practices and tweaks for Linux systems in this comprehensive guide. Enhance your system's security and safeguard against threats today.
  - - meta
    - name: keywords
      content: Linux security, best practices, Linux tweaks, secure Linux, Linux hardening, system security, Linux firewall, SSH security, Linux server security, Linux security guide
title: Top Linux Security Practices
---

# Best Security Practices and Tweaks for Linux Systems

## Introduction

Linux systems are renowned for their robustness and security features. However, no system is immune to vulnerabilities without proper configuration and maintenance. Implementing best security practices is essential to protect your Linux environment from threats and unauthorized access. This comprehensive guide outlines the top security practices and tweaks to enhance the security of your Linux systems.

---

## 1. Keep the System Updated

Regularly updating your system ensures that security patches and updates are applied to protect against known vulnerabilities.

- **Update Package Lists and Upgrade Packages:**

  ```bash
  # For Debian/Ubuntu systems
  sudo apt update && sudo apt upgrade -y

  # For CentOS/Fedora systems
  sudo yum update -y   # CentOS
  sudo dnf upgrade -y  # Fedora
  ```

- **Enable Automatic Updates (Optional):**

  - **Ubuntu:**

    ```bash
    sudo apt install unattended-upgrades -y
    sudo dpkg-reconfigure --priority=low unattended-upgrades
    ```

---

## 2. Use Strong Password Policies

Enforce strong password policies to prevent unauthorized access through brute-force attacks.

- **Install `libpam-pwquality`:**

  ```bash
  sudo apt install libpam-pwquality -y   # Ubuntu/Debian
  sudo yum install pam_pwquality -y      # CentOS
  ```

- **Configure Password Requirements:**

  Edit `/etc/pam.d/common-password` or `/etc/pam.d/system-auth` and set parameters like `minlen`, `dcredit`, `ucredit`, `ocredit`, and `lcredit`.

- **Set Password Aging Policies:**

  Modify `/etc/login.defs`:

  ```bash
  PASS_MAX_DAYS   90
  PASS_MIN_DAYS   10
  PASS_WARN_AGE   7
  ```

---

## 3. Implement a Firewall

Use a firewall to control incoming and outgoing network traffic based on predetermined security rules.

- **Use UFW (Uncomplicated Firewall) on Ubuntu:**

  ```bash
  sudo apt install ufw -y
  sudo ufw default deny incoming
  sudo ufw default allow outgoing
  sudo ufw allow ssh
  sudo ufw enable
  ```

- **Use FirewallD on CentOS/Fedora:**

  ```bash
  sudo systemctl enable firewalld --now
  sudo firewall-cmd --permanent --add-service=ssh
  sudo firewall-cmd --permanent --set-default-zone=drop
  sudo firewall-cmd --reload
  ```

---

## 4. Disable Unnecessary Services and Ports

Running unnecessary services increases the attack surface.

- **List Active Services:**

  ```bash
  sudo systemctl list-unit-files --type=service --state=enabled
  ```

- **Disable Unneeded Services:**

  ```bash
  sudo systemctl disable service_name
  sudo systemctl stop service_name
  ```

- **Check Open Ports:**

  ```bash
  sudo netstat -tulpn   # Or use 'ss -tulpn'
  ```

---

## 5. Use SSH Key Authentication

SSH keys provide a more secure authentication method than passwords.

- **Generate SSH Key Pair:**

  On your local machine:

  ```bash
  ssh-keygen -t rsa -b 4096
  ```

- **Copy Public Key to Server:**

  ```bash
  ssh-copy-id user@server_ip
  ```

- **Disable Password Authentication:**

  Edit `/etc/ssh/sshd_config`:

  ```ini
  PasswordAuthentication no
  ```

  Restart SSH service:

  ```bash
  sudo systemctl restart ssh    # Ubuntu/Debian
  sudo systemctl restart sshd   # CentOS/Fedora
  ```

---

## 6. Configure Fail2Ban

Fail2Ban monitors log files and bans IPs showing malicious signs.

- **Install Fail2Ban:**

  ```bash
  sudo apt install fail2ban -y        # Ubuntu/Debian
  sudo yum install epel-release -y    # CentOS
  sudo yum install fail2ban -y        # CentOS
  ```

- **Configure Fail2Ban:**

  Create a local configuration file:

  ```bash
  sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
  ```

  Edit `/etc/fail2ban/jail.local` to enable SSH protection and adjust settings.

- **Start and Enable Fail2Ban:**

  ```bash
  sudo systemctl enable fail2ban --now
  ```

---

## 7. Secure Shared Memory

Mount the `/tmp` directory with `noexec` and `nosuid` options to prevent execution of scripts.

- **Edit `/etc/fstab`:**

  Add the following line:

  ```bash
  tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0
  ```

- **Remount the Partition:**

  ```bash
  sudo mount -o remount /run/shm
  ```

---

## 8. Use SELinux or AppArmor

Mandatory Access Control (MAC) systems like SELinux (CentOS/Fedora) or AppArmor (Ubuntu) provide enhanced security.

- **For SELinux:**

  - **Check SELinux Status:**

    ```bash
    sudo sestatus
    ```

  - **Set SELinux to Enforcing Mode:**

    Edit `/etc/selinux/config`:

    ```ini
    SELINUX=enforcing
    ```

    Reboot the system to apply changes.

- **For AppArmor:**

  - **Ensure AppArmor is Enabled:**

    ```bash
    sudo aa-status
    ```

  - **Install AppArmor Profiles:**

    ```bash
    sudo apt install apparmor-profiles apparmor-utils -y
    ```

---

## 9. Monitor System Logs

Regularly monitoring logs helps in early detection of suspicious activities.

- **Use `logwatch`:**

  ```bash
  sudo apt install logwatch -y        # Ubuntu/Debian
  sudo yum install logwatch -y        # CentOS
  ```

- **Configure Logwatch:**

  Edit `/etc/logwatch/conf/logwatch.conf` to set email recipient and detail level.

- **Check Logs Manually:**

  ```bash
  sudo tail -f /var/log/auth.log    # Ubuntu/Debian
  sudo tail -f /var/log/secure      # CentOS/Fedora
  ```

---

## 10. Implement Intrusion Detection Systems

IDS tools like Aide or Tripwire can detect unauthorized changes to the system.

- **Install Aide:**

  ```bash
  sudo apt install aide -y          # Ubuntu/Debian
  sudo yum install aide -y          # CentOS
  ```

- **Initialize Aide Database:**

  ```bash
  sudo aideinit
  ```

- **Check for Changes:**

  ```bash
  sudo aide --check
  ```

---

## 11. Limit Root Access and Use Sudo

Restrict direct root login and use the `sudo` command for administrative tasks.

- **Disable Root SSH Login:**

  Edit `/etc/ssh/sshd_config`:

  ```ini
  PermitRootLogin no
  ```

  Restart SSH service:

  ```bash
  sudo systemctl restart ssh    # Ubuntu/Debian
  sudo systemctl restart sshd   # CentOS/Fedora
  ```

- **Add Users to Sudoers:**

  ```bash
  sudo usermod -aG sudo username     # Ubuntu/Debian
  sudo usermod -aG wheel username    # CentOS/Fedora
  ```

---

## 12. Secure the Bootloader

Protect the GRUB bootloader with a password to prevent unauthorized changes at boot time.

- **Set GRUB Password:**

  ```bash
  sudo grub-mkpasswd-pbkdf2
  ```

  - Enter and confirm a password; copy the generated hash.

- **Edit GRUB Configuration:**

  Edit `/etc/grub.d/40_custom` and add:

  ```bash
  set superusers="username"
  password_pbkdf2 username grub.pbkdf2.sha512.[...]  # Paste the hash here
  ```

- **Update GRUB:**

  ```bash
  sudo update-grub    # Ubuntu/Debian
  sudo grub2-mkconfig -o /boot/grub2/grub.cfg   # CentOS/Fedora
  ```

---

## 13. Regular Backups

Maintain regular backups to recover data in case of a security breach.

- **Use `rsync` for Backups:**

  ```bash
  rsync -a --delete /source/directory /backup/directory
  ```

- **Automate Backups with Cron Jobs:**

  ```bash
  crontab -e
  ```

  - Add a cron job to schedule backups.

---

## 14. Use Anti-Virus Software

While Linux is less susceptible to viruses, using anti-virus software adds an extra layer of security.

- **Install ClamAV:**

  ```bash
  sudo apt install clamav clamav-daemon -y   # Ubuntu/Debian
  sudo yum install epel-release -y           # CentOS
  sudo yum install clamav clamav-update -y   # CentOS
  ```

- **Update Virus Definitions:**

  ```bash
  sudo freshclam
  ```

- **Scan the System:**

  ```bash
  sudo clamscan -r /home
  ```

---

## 15. Secure Network Configurations

Implement network-level security measures to protect against external threats.

- **Disable IPv6 if Not Used:**

  Edit `/etc/sysctl.conf` and add:

  ```ini
  net.ipv6.conf.all.disable_ipv6 = 1
  ```

  Apply changes:

  ```bash
  sudo sysctl -p
  ```

- **Configure TCP Wrappers:**

  Edit `/etc/hosts.allow` and `/etc/hosts.deny` to control access.

- **Enable Network Time Protocol (NTP) Security:**

  Install and configure NTP or Chrony with authentication to prevent time-based attacks.

---

## Conclusion

Securing a Linux system is an ongoing process that involves regular updates, monitoring, and adherence to best practices. By implementing the security measures outlined in this guide, you significantly reduce the risk of unauthorized access and vulnerabilities. Always stay informed about the latest security threats and updates relevant to your system.

---

**Note:** Security practices should be tailored to your specific environment and requirements. Regularly audit your systems and consult with security professionals when necessary.
