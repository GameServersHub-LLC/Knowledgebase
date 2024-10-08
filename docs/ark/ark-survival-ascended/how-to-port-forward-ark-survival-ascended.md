---
head:
  - - meta
    - property: "og:image"
      content: /ark-survival-evolved-port-forwarding-ark-survival-ascended-port-forwarding-gameservershub.com.webp
  - - meta
    - name: description
      content: Learn how to open ports for Ark Survival Ascended on a Windows Server. Follow this detailed step-by-step guide to configure your firewall and allow essential game traffic.
  - - meta
    - name: keywords
      content: Ark Survival Ascended port forwarding, open ports Ark Windows Server, Ark server firewall rules, Ark Ascended TCP UDP ports, Ark game server port setup, Steam query port Ark server, RCON port Ark server, Ark Windows firewall tutorial
title: Ark Firewall Guide
---

# How to Open Ports for Ark: Survival Ascended on a Windows Server Firewall

When hosting a dedicated server for **Ark: Survival Ascended** on a **Windows Server**, it is essential to configure the built-in Windows Firewall to allow incoming and outgoing traffic through the correct ports. Without proper firewall rules, players will be unable to connect to your server, and critical services such as Steam query and remote management via RCON will not function correctly.

Below is a detailed step-by-step guide to opening the required ports for **Ark: Survival Ascended** on a Windows Server operating system.

---

### Required Ports for Ark: Survival Ascended

Before configuring your firewall, you need to know the specific ports that **Ark: Survival Ascended** requires to be open for server communication. These ports handle game data, server queries, and optional remote management.

#### 1. Game Client Port (Default)

- **Port**: `TCP/UDP 7777`
- **Purpose**: This port is the core communication channel between your server and connected players. It handles all game data, including player movement, actions, and interactions within the game world. Both **TCP** and **UDP** protocols should be enabled to ensure smooth communication without interruptions.

#### 2. Query Port

- **Port**: `UDP 27015`
- **Purpose**: The query port allows players to discover your server in the **Steam Server Browser**. It handles server pings, player counts, and connection requests. This port must be open for your server to be listed and visible on the Steam platform.

#### 3. RCON (Remote Console) Port (Optional)

- **Port**: `TCP 27020`
- **Purpose**: This port is used to manage your server remotely using the **Remote Console (RCON)** protocol. If you want to control server settings, issue commands, or monitor player activity from another machine or tool, this port must be open. Though optional, it is highly recommended for administrators.

---

### Step-by-Step Instructions for Opening Ports on Windows Server Firewall

Follow these detailed steps to properly configure the **Windows Firewall** on your server to allow Ark: Survival Ascended traffic.

#### Step 1: Access Windows Defender Firewall

1. **Open Server Manager**:

   - Start by logging into your **Windows Server**.
   - Launch **Server Manager** from the taskbar or the Start menu. Server Manager provides administrative tools for managing roles, features, and security settings, including the firewall.

2. **Open Windows Defender Firewall with Advanced Security**:
   - In **Server Manager**, click on **Tools** in the upper-right corner.
   - From the dropdown list, select **Windows Defender Firewall with Advanced Security**. This will open the firewall management console, which allows you to create and manage inbound and outbound firewall rules.

#### Step 2: Create New Inbound Rules

1. **Inbound Rules**:

   - On the left-hand side of the firewall management window, click on **Inbound Rules**. Inbound rules determine what types of traffic are allowed to enter your server.

2. **Create a New Rule**:

   - In the right-hand actions pane, click **New Rule** to launch the **New Inbound Rule Wizard**.
   - In the wizard, choose **Port** as the rule type and click **Next**.

3. **Select Protocols and Ports**:

   - Choose **TCP** and **UDP** for protocols. Both protocols are necessary to ensure all types of network communication work correctly.
   - Under **Specific Local Ports**, enter the port number that corresponds to the **Ark: Survival Ascended** service you’re configuring. Start with **7777** for the game client port.
   - Click **Next** when finished.

4. **Allow the Connection**:

   - In the next window, choose **Allow the connection**. This setting ensures that traffic through the specified port is permitted.
   - Click **Next**.

5. **Configure Profiles**:

   - The wizard will ask which profiles (Domain, Private, Public) this rule applies to:
     - **Domain**: Choose this if your server is connected to an internal domain (corporate network).
     - **Private**: Select this for internal networks (e.g., home or trusted networks).
     - **Public**: Use this for untrusted or public networks (e.g., Internet access).
   - For a game server, it's common to select all three profiles to ensure it works across various network environments.
   - Click **Next**.

6. **Name the Rule**:
   - Give the rule a descriptive name such as **Ark: Survival Ascended Game Client Port**.
   - Optionally, add a description for clarity, especially if you are managing multiple services or ports.
   - Click **Finish** to save the rule.

#### Step 3: Repeat for Each Required Port

Now that the rule for port **7777** is created, repeat the above steps to create new inbound rules for the other required ports:

1. **Port 27015** for Steam Query:

   - Use the **UDP** protocol.
   - Enter port **27015** under **Specific Local Ports**.
   - Follow the same steps to allow the connection and name it something descriptive, such as **Ark: Survival Ascended Query Port**.

2. **Port 27020** for RCON (Optional):
   - Use the **TCP** protocol.
   - Enter port **27020** under **Specific Local Ports**.
   - Name this rule **Ark: Survival Ascended RCON Port** if you're using remote console access.

#### Step 4: Verify Firewall Rules

After creating the necessary inbound rules, it’s important to double-check that everything is configured properly:

1. **Review Inbound Rules**:

   - Return to the **Inbound Rules** section in the **Windows Defender Firewall** interface.
   - Scroll through the list and ensure your newly created rules for ports **7777**, **27015**, and (optionally) **27020** are active and properly configured.
   - Verify that the **Action** column shows **Allow** for each rule.

2. **Test the Connection**:
   - Once all the rules are in place, it's time to test your server. Try connecting to the Ark: Survival Ascended server from a remote machine, or use an online port-checking tool to confirm that the ports are open and reachable.

#### Step 5: Configure Outbound Rules (Optional)

If your server's security policy restricts outbound traffic, you’ll need to configure **Outbound Rules** to ensure the Ark: Survival Ascended server can send traffic out through the same ports:

1. **Outbound Rules**:

   - In the **Windows Defender Firewall** window, click **Outbound Rules** in the left-hand pane.

2. **Create New Outbound Rules**:

   - Follow the same steps you used for the inbound rules, but select **Outbound Rules** instead. Specify the same port numbers and protocols (7777, 27015, and optionally 27020).

3. **Apply the Rules**:
   - Ensure the new outbound rules are set to **Allow the connection** and apply to the relevant profiles.

## How to Open Ports for Ark: Survival Ascended on a Linux / Pterodactyl System

If you're hosting an **Ark: Survival Ascended** server on a **Linux** system through **Pterodactyl**, you'll need to ensure that the appropriate ports are opened on your Linux firewall. This step is crucial to allow external players to connect to your server. Most Linux distributions use either **UFW (Uncomplicated Firewall)** or **iptables** for managing firewall rules, depending on the configuration.

This guide will walk you through opening the necessary ports for Ark: Survival Ascended, whether you're using **UFW** or **iptables**, as well as configuring these settings to work with **Pterodactyl**.

---

### Required Ports for Ark: Survival Ascended

Before setting up firewall rules, you need to know the specific ports Ark: Survival Ascended uses:

#### 1. Game Client Port (Default)

- **Port**: `TCP/UDP 7777`
- **Purpose**: This port handles the main game data, allowing players to connect and interact with the server. You’ll need to open both **TCP** and **UDP** protocols for this port.

#### 2. Query Port

- **Port**: `UDP 27015`
- **Purpose**: The Steam query port allows players to find your server in the Steam server browser. This port needs to be open for your server to be discoverable.

#### 3. RCON Port (Optional)

- **Port**: `TCP 27020`
- **Purpose**: The RCON port is used for remote console access to manage your server, including issuing commands and monitoring server activity. This port is optional but useful for remote management.

---

### Opening Ports on a Linux System Using UFW

If you’re using **UFW**, the following steps will guide you through the process of opening ports.

#### Step 1: Check UFW Status

Before you start, check if **UFW** is installed and active on your server:

```bash
sudo ufw status
```

If **UFW** is inactive, you can enable it:

```bash
sudo ufw enable
```

#### Step 2: Open the Necessary Ports

To allow traffic through the required ports for Ark: Survival Ascended, run the following commands:

1. **Open Game Client Port (7777)**:

   - For both **TCP** and **UDP** traffic, use:

   ```bash
   sudo ufw allow 7777/tcp
   sudo ufw allow 7777/udp
   ```

2. **Open Steam Query Port (27015)**:

   - Since this port uses **UDP** only, run:

   ```bash
   sudo ufw allow 27015/udp
   ```

3. **Open RCON Port (Optional - 27020)**:

   - If you plan to use RCON, you can allow **TCP** traffic on this port:

   ```bash
   sudo ufw allow 27020/tcp
   ```

#### Step 3: Reload and Verify UFW Rules

After opening the ports, reload the firewall to apply the changes:

```bash
sudo ufw reload
```

Verify that the ports are open by checking the firewall status:

```bash
sudo ufw status
```

You should see rules allowing traffic through the specified ports.

---

### Opening Ports on a Linux System Using iptables

If you're using **iptables** to manage your firewall, follow these steps to open the necessary ports.

#### Step 1: Open the Ports Using iptables

1. **Open Game Client Port (7777)**:

   - For both **TCP** and **UDP**, run:

   ```bash
   sudo iptables -A INPUT -p tcp --dport 7777 -j ACCEPT
   sudo iptables -A INPUT -p udp --dport 7777 -j ACCEPT
   ```

2. **Open Steam Query Port (27015)**:

   - Allow **UDP** traffic on this port:

   ```bash
   sudo iptables -A INPUT -p udp --dport 27015 -j ACCEPT
   ```

3. **Open RCON Port (Optional - 27020)**:

   - If you are using RCON for server management, allow **TCP** traffic:

   ```bash
   sudo iptables -A INPUT -p tcp --dport 27020 -j ACCEPT
   ```

#### Step 2: Save iptables Rules

After adding the rules, save the configuration to ensure the rules persist after a reboot:

- On **Ubuntu** or **Debian**:

  ```bash
  sudo netfilter-persistent save
  ```

- On **CentOS** or **RHEL**:

  ```bash
  sudo service iptables save
  ```

#### Step 3: Verify iptables Rules

To confirm that the rules have been applied, you can list the active iptables rules:

```bash
sudo iptables -L
```

You should see your new rules for ports **7777**, **27015**, and **27020** listed.

---

### Configuring Pterodactyl for Ark: Survival Ascended

If you're using **Pterodactyl** to manage your game server, it’s important to ensure that the firewall settings correspond to the ports configured in Pterodactyl’s **Wings** panel.

#### Step 1: Set Ports in Pterodactyl

1. **Log in to your Pterodactyl Panel**.
2. Navigate to your **Ark: Survival Ascended** server settings.
3. Under the **Network Configuration**, make sure the ports (7777, 27015, and optionally 27020) match the ones opened in your firewall.
4. Save the settings and restart your server to apply changes.

#### Step 2: Test the Server

After configuring both the firewall and Pterodactyl, test your server by connecting to it from an external machine. You can also use an online port-checking tool to ensure the ports are open and reachable.

### All done!

By following these steps, you can successfully open the necessary ports for Ark: Survival Ascended on a Linux system, whether using UFW or iptables. Additionally, ensure that the firewall rules align with the ports configured in Pterodactyl to enable seamless gameplay and management. Properly configuring your firewall ensures that players can discover and connect to your server while maintaining security and stability.
