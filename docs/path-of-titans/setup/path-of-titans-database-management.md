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
title: Database Management
---

# Path of Titans Database Management

Servers can use two types of databases to store player data: Local Database and Remote Database. This guide explains the differences between these databases and how to manage player data effectively.

::: warning
Local Database servers are at risk of losing player data due to server issues or bugs. It is recommended to back up your server data regularly to prevent data loss. The alderon team is working on features to allow for easier backups and data restoration on Local Database servers.
::: details
Read more about this in [Alderons blog post.](https://alderongames.com/local-db-lost-char)
:::

## Accessing the Database and Player Data

For each database type, the server owner can access the database to manage player data. The database contains information about player accounts, characters, and other server-related data. Here are the steps to access the database:

### Remote Database

The Remote Database is a managed database service provided by Alderon Games. It is a cloud-based database that stores player data securely and ensures data integrity. Server owners do not need to manage the database themselves, as it is maintained by the Alderon Games team.

::: info
Alderon team is working on commands/features that will allow you to interact and retrieve data from the Remote Database for any use cases you may have.
:::

### Local Database

Local Database servers store player data on the server machine itself. Server owners can access the database files directly to manage player data. The overall local database can be found in the `DatabaseCache` folder within the following directory:

Path:

<ul class="breadcrumbs" data-v-1536bbb2="">
  <li class="first" data-v-1536bbb2="">
    <span med-font="">
      <i class="fas fa-folder" data-v-1536bbb2=""></i> PathofTitans
    </span>
  </li>
  <li class="" data-v-1536bbb2="">
    <span med-font="">
      <i class="fas fa-folder" data-v-1536bbb2=""></i> Saved
    </span>
  </li>

  <li class="last" data-v-1536bbb2="">
    <span med-font="">
      <i class="fas fa-file" data-v-1536bbb2=""></i> DatabaseCache
    </span>
  </li>
</ul>

The steps below walks you through on how to access and modify player data stored on a local database. Server owners can directly manage and modify the data by accessing the database files.

::: danger
**Before making any changes, create a backup!** To avoid any potential data loss, it is important to back up the entire database.
:::

#### 1. Access the Server Database

- Log in to the server management panel where your server is hosted.
- Navigate to the database section: Locate the server data found in the `DatabaseCache` folder as mentioned above.

#### 2. Backup the Server Database

- Copy or zip the `DatabaseCache` folder to create a backup that includes the most recent player data.

#### 3. Locate the Player’s Account Data

- Find the player's account file: Accounts are stored in JSON format and are named according to the player’s Alderon ID.
- Navigate to the account file located in `/PathOfTitans/Saved/DatabaseCache/Account/` and search for the appropriate JSON file (e.g., `123456789.json` for the player ID `123-456-789`).

#### 4. Locate Characters

- Access the player's account JSON file using a text editor (e.g., Notepad++ or a similar tool). Here you can find all the characters associated with the player, as well as other account-related data.
- Locate the character IDs: Each character's associated ID can be found in the account JSON file under the `Characters` field. This ID is used to locate the character data in the `Character` directory.

#### 5. Locate and Modify Character Data

- Search for the player’s character data: Character data is stored in the `Character` directory, with each character saved as an individual JSON file.
- Use a tool like Notepad++ to search for the relevant character by name or other identifier. Navigate to `/PathOfTitans/Saved/DatabaseCache/Character` and locate the file based on the character id that you found in account's data in Step 4 (e.g., `35FB3F52419143E347089789CDB6D84C.json`).

#### 6. Modify Character Data

- Modify the character file: Once in the character data file, you can modify specific attributes of the character, such as health, marks, or inventory items, by editing the JSON file directly.

::: danger
Please note that modifying the character data directly can lead to unintended consequences such as breaking the character entirely. Ensure that you have a backup of the database before making any changes and use caution when editing the JSON files.
:::

#### 7. Save Changes and Update the Server

- After modifying the JSON file, ensure that all changes are saved.
- Restart the server if necessary to apply any updates to the player or character data.
- Verify the changes: Check on your own account or the player's account to confirm that the modifications have been applied correctly.

This method allows server owners to access and edit player data, helping them to adjust gameplay elements or correct issues directly in the local database files.

## Other Commands

Furthermore, the following command can be used by server owners to quickly create characters that are pre-grown of a certain dinosaur, dinosaur name, marks, and growth level. This can be useful for quickly creating characters for players:

::: warning
This command currently does not support Remote Database servers and should only be used on Local Database servers. The support for Remote Database servers will be added in a future update.
:::

| Chat Command: | Example: | Permissions: | RCON Support: | Action: |
| -- | -- | -- | -- | -- |
| /createcharacter [AlderonId] [CharacterName] [DinosaurType] [Growth] [Marks] | `/createcharacter 123-456-789 Bloodclaw Allosaurus 1.0 3000` | - | :x: | Creates a character with the specified parameters. The example below creates a character with the Alderon ID `123-456-789`, named `Bloodclaw`, as an Allosaurus with 1.0 growth and 3000 marks. |

## Switching Between Local and Remote Databases

Currently, server owners are free to choose and switch between `Local Database` and `Remote Database` options based on their requirements. The choice of database type can be made during the server setup process or changed later.

::: warning
It is important to note that if you switch from a `Local Database` to a `Remote Database` or the other way around, the existing player data will not be transferred automatically, thus, leading to a fresh start for the server. Please keep this in mind when making the switch.
:::

In the future, two options will be available to server owners to switch between databases:

- **AlderonDatabaseUploader Tool:** A tool that will allow server owners to upload their Local Database data to the Remote Database with ease. This tool will ensure that all player data is transferred securely and accurately allowing you to switch to remote database without losing any data.

- **Local To Remote Database:** For server owners, a way to specify that they want to switch from a Local Database to a Remote Database directly during server startup. This will allow the server to automatically upload the data to the Remote Database and start using it without the need of external tools.
-  <u> **GSH can offer this for our clients at this time, please make a ticket on our Discord.** </u>