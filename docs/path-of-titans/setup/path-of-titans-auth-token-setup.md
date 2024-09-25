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
title: Authentication Tokens
---

# Path of Titans Authentication Token

Both `AlderonGamesCmd` and `PathOfTitansServer` will need user authentication to the Alderon Games Platform, this can be any account that has access to the game. If you want to hive the database of two or more servers together using a `Remote` Database, they will need to the same account. These are specified in the examples as a email and password, however you can also optionally specify `-AuthToken=` for `PathOfTitansServer` by using the token generated via this page here after signing in.

Due to Windows having a 1024 character limit on command line argument and it being a Json Web Token which is fairly long, we have added the ability to specify it via Process Environment Variable instead. You can use the environment variable `AG_AUTH_TOKEN` instead.

## Setting up an AUTH Token

[▶ Generate AUTH Token Here ◀](https://alderongames.com/oauth/hosting-token)

When accessing the AUTH Token page, you must be **logged in with an account that owns the game**. This account should be secure, as it will be the AUTH host account for your server.

::: warning
Please note that after you click "Generate New Token", the page will not display your same token twice if you leave or refresh the page. This is done for security reasons.
::: details
If you have lost or forgotten your token, you can generate another one via the page, just make sure you update your server with the new token.
:::

::: danger
**When you generate a new token any old tokens will be revoked, which can cause issues if they are still in use.**
:::
