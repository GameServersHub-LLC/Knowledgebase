---
head:
  - - meta
    - property: "og:image"
      content: /path of titans - 667x260.webp
  - - meta
    - name: description
      content: Discover how to install and configure MySQL on Linux with this comprehensive, step-by-step guide. Optimize your database setup on Ubuntu, CentOS, or Fedora today.
  - - meta
    - name: keywords
      content: MySQL, Linux, Install MySQL, Configure MySQL, MySQL Installation, Database Setup, MySQL Tutorial, Ubuntu, CentOS, Fedora, MySQL Guide
title: Step-by-Step Guide Installing MySQL on Linux
---

# How to Set Up MySQL on Linux: A Comprehensive Guide

## Introduction

MySQL is a powerful, open-source relational database management system (RDBMS) widely used in web applications and enterprise environments. Installing MySQL on a Linux server is a fundamental skill for developers and system administrators. This guide provides a detailed, step-by-step walkthrough on how to install and configure MySQL on various Linux distributions, including Ubuntu, CentOS, and Fedora.

## Prerequisites

Before proceeding, ensure you have:

- **A Linux server**: This guide covers Ubuntu 20.04/22.04, CentOS 7/8, and Fedora 33/34.
- **Root or sudo privileges**: Necessary for installation and configuration.
- **Internet connectivity**: Required for downloading packages and updates.

## Table of Contents

- [How to Set Up MySQL on Linux: A Comprehensive Guide](#how-to-set-up-mysql-on-linux-a-comprehensive-guide)
  - [Introduction](#introduction)
  - [Prerequisites](#prerequisites)
  - [Table of Contents](#table-of-contents)
  - [1. Updating System Packages](#1-updating-system-packages)
    - [Ubuntu](#ubuntu)
    - [CentOS](#centos)
    - [Fedora](#fedora)
  - [2. Installing MySQL](#2-installing-mysql)
    - [On Ubuntu](#on-ubuntu)
    - [On CentOS and Fedora](#on-centos-and-fedora)
  - [3. Securing the MySQL Installation](#3-securing-the-mysql-installation)
  - [4. Managing the MySQL Service](#4-managing-the-mysql-service)
  - [5. Testing the MySQL Installation](#5-testing-the-mysql-installation)
  - [6. Configuring Remote Access (Optional)](#6-configuring-remote-access-optional)
  - [7. Setting Up a Sample Database (Optional)](#7-setting-up-a-sample-database-optional)
  - [8. Scheduling Regular Backups](#8-scheduling-regular-backups)
  - [9. Updating MySQL](#9-updating-mysql)
  - [10. Conclusion](#10-conclusion)

---

## 1. Updating System Packages

Before installing new software, update your system packages to the latest versions.

### Ubuntu

```bash
sudo apt update
sudo apt upgrade -y
```

### CentOS

```bash
sudo yum update -y
```

### Fedora

```bash
sudo dnf update -y
```

---

## 2. Installing MySQL

### On Ubuntu

Ubuntu's default repositories include MySQL packages.

1. **Install MySQL Server:**

   ```bash
   sudo apt install mysql-server -y
   ```

2. **Verify Installation:**

   ```bash
   mysql --version
   ```

### On CentOS and Fedora

CentOS and Fedora use the YUM and DNF package managers, respectively.

1. **Add the MySQL Repository:**

   - Download the MySQL Community RPM package:

     ```bash
     wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm   # For CentOS 7
     wget https://dev.mysql.com/get/mysql80-community-release-el8-3.noarch.rpm   # For CentOS 8
     ```

   - Install the RPM package:

     ```bash
     sudo rpm -Uvh mysql80-community-release-el7-3.noarch.rpm   # CentOS 7
     sudo rpm -Uvh mysql80-community-release-el8-3.noarch.rpm   # CentOS 8
     ```

2. **Install MySQL Server:**

   ```bash
   sudo yum install mysql-server -y   # CentOS
   sudo dnf install mysql-server -y   # Fedora
   ```

3. **Verify Installation:**

   ```bash
   mysql --version
   ```

---

## 3. Securing the MySQL Installation

Run the `mysql_secure_installation` script to enhance security.

1. **Run the Security Script:**

   ```bash
   sudo mysql_secure_installation
   ```

2. **Follow the Prompts:**

   - **Set the root password:** Enter a strong password.
   - **Remove anonymous users:** Yes.
   - **Disallow root login remotely:** Yes.
   - **Remove test database and access to it:** Yes.
   - **Reload privilege tables now:** Yes.

---

## 4. Managing the MySQL Service

Ensure that MySQL starts on boot and is currently running.

1. **Start MySQL Service:**

   ```bash
   sudo systemctl start mysql    # Ubuntu
   sudo systemctl start mysqld   # CentOS/Fedora
   ```

2. **Enable MySQL to Start on Boot:**

   ```bash
   sudo systemctl enable mysql    # Ubuntu
   sudo systemctl enable mysqld   # CentOS/Fedora
   ```

3. **Check Service Status:**

   ```bash
   sudo systemctl status mysql    # Ubuntu
   sudo systemctl status mysqld   # CentOS/Fedora
   ```

---

## 5. Testing the MySQL Installation

1. **Log In to MySQL Shell:**

   ```bash
   sudo mysql -u root -p
   ```

   - Enter the root password when prompted.

2. **Run a Test Query:**

   ```sql
   SHOW DATABASES;
   ```

3. **Exit the MySQL Shell:**

   ```sql
   EXIT;
   ```

---

## 6. Configuring Remote Access (Optional)

By default, MySQL listens only on `localhost`. To allow remote connections:

1. **Edit MySQL Configuration File:**

   - Open the file in a text editor.

     ```bash
     sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf    # Ubuntu
     sudo nano /etc/my.cnf                           # CentOS/Fedora
     ```

2. **Modify Bind Address:**

   - Locate the line:

     ```ini
     bind-address = 127.0.0.1
     ```

   - Change it to:

     ```ini
     bind-address = 0.0.0.0
     ```

3. **Create a Remote User:**

   ```bash
   sudo mysql -u root -p
   ```

   - In the MySQL shell:

     ```sql
     CREATE USER 'remote_user'@'%' IDENTIFIED BY 'strong_password';
     GRANT ALL PRIVILEGES ON *.* TO 'remote_user'@'%' WITH GRANT OPTION;
     FLUSH PRIVILEGES;
     EXIT;
     ```

4. **Adjust Firewall Settings:**

   - **Ubuntu with UFW:**

     ```bash
     sudo ufw allow 3306/tcp
     sudo ufw reload
     ```

   - **CentOS/Fedora with firewalld:**

     ```bash
     sudo firewall-cmd --permanent --add-port=3306/tcp
     sudo firewall-cmd --reload
     ```

5. **Restart MySQL Service:**

   ```bash
   sudo systemctl restart mysql    # Ubuntu
   sudo systemctl restart mysqld   # CentOS/Fedora
   ```

---

## 7. Setting Up a Sample Database (Optional)

1. **Log In to MySQL Shell:**

   ```bash
   sudo mysql -u root -p
   ```

2. **Create a New Database:**

   ```sql
   CREATE DATABASE testdb;
   ```

3. **Create a New User and Grant Permissions:**

   ```sql
   CREATE USER 'testuser'@'localhost' IDENTIFIED BY 'user_password';
   GRANT ALL PRIVILEGES ON testdb.* TO 'testuser'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Use the New Database:**

   ```sql
   USE testdb;
   ```

5. **Create a Table:**

   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     email VARCHAR(100) NOT NULL UNIQUE
   );
   ```

6. **Insert Data:**

   ```sql
   INSERT INTO users (name, email) VALUES ('Alice Smith', 'alice@example.com');
   ```

7. **Query the Data:**

   ```sql
   SELECT * FROM users;
   ```

8. **Exit the MySQL Shell:**

   ```sql
   EXIT;
   ```

---

## 8. Scheduling Regular Backups

Regular backups are essential for data recovery.

1. **Create a Backup Directory:**

   ```bash
   sudo mkdir /var/backups/mysql
   sudo chown $(whoami):$(whoami) /var/backups/mysql
   ```

2. **Create a Backup Script:**

   ```bash
   nano ~/mysql_backup.sh
   ```

   - Add the following content:

     ```bash
     #!/bin/bash
     TIMESTAMP=$(date +"%F")
     BACKUP_DIR="/var/backups/mysql/$TIMESTAMP"
     mkdir -p "$BACKUP_DIR"
     mysqldump -u root -p'root_password' --all-databases > "$BACKUP_DIR/all_databases.sql"
     ```

   - Replace `'root_password'` with your MySQL root password.

3. **Make the Script Executable:**

   ```bash
   chmod +x ~/mysql_backup.sh
   ```

4. **Schedule the Script with Cron:**

   ```bash
   crontab -e
   ```

   - Add the following line to run the backup daily at 2 AM:

     ```bash
     0 2 * * * /home/your_username/mysql_backup.sh
     ```

   - Replace `/home/your_username/` with your actual username.

---

## 9. Updating MySQL

Keep MySQL updated for security and performance improvements.

1. **Update Package Lists and Upgrade Packages:**

   - **Ubuntu:**

     ```bash
     sudo apt update
     sudo apt upgrade -y
     ```

   - **CentOS:**

     ```bash
     sudo yum update -y
     ```

   - **Fedora:**

     ```bash
     sudo dnf upgrade -y
     ```

2. **Check MySQL Version:**

   ```bash
   mysql --version
   ```

---

## 10. Conclusion

You have successfully installed and configured MySQL on your Linux server. This guide covered the essential steps, from installation and securing the server to managing databases and scheduling backups. Regular maintenance and updates will keep your MySQL server running smoothly and securely.

---

**Note:** Always ensure that your MySQL server is properly secured, especially if it's accessible over a network. [Use strong passwords](/security-practices/how-to-protect-your-passwords), restrict user privileges, and keep your software up to date to protect against vulnerabilities.
