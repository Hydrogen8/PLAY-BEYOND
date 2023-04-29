
# PLAY BEYOND

Assistance bot for the Brewstation discord server.

Feel free to host this bot yourself for your own server.

## Credits

[@JamesIsWack](https://github.com/JamesIsWack/) for Database, development help/ideas, and original bot idea

[@Hydrogen8](https://github.com/Hydrogen8/) for most of the code and ideas

[@NoobKillU](https://github.com/NoobKillU) for [contributing to the database](https://github.com/JamesIsWack/PLAY-BEYOND/commit/3416c61681aa0d31b636eae2e9b1fc56599cf845)

Special thanks to the PS3DevWiki, its contributors, and everyone else in the PS3 scene that made this bot possible. Thank you.

## Contributing

If you would like to contribute to this project, please fork this repo and submit a pull request.

- Database TODO:
  - Np Error Codes
    - Status: Unfinished.
  - Syscon Error Codes
    - Status: Finished.
  - Guide resources
    - Status: Unfinshed.

## Hosting The Bot

First, create an application. To do this, go to the [Discord Developer Portal](https://discord.com/developers/applications), and click "New Application", as shown:

!["Create an application" window on the Discord Developer Portal](https://raw.githubusercontent.com/Hydrogen8/PLAY-BEYOND/0b83974d9ebdb5cab733d330b80315ee4627179c/images/Create%20an%20application.png)

Next, go to "Bot" on the left and add a bot user.

Then, use `git` to clone the source code:

```bash
git clone https://github.com/Hydrogen8/PLAY-BEYOND
```

And `cd` to the bot dir:

```bash
cd PLAY-BEYOND
```

Next, create a file called `config.json`, and populate it with a `PREFIX` and `TOKEN` as shown:

```json
{"PREFIX": "bot-prefix", "TOKEN": "your-bot-token"}
```

Replacing `bot-prefix` with the prefix you want, and `your-bot-token` with your bot token. (To get your bot token, go back to the discord bot dash where you created the bot, and click "Copy token".)

After, add the bot to your server. To do this, on the bot dashboard, click "OAuth2" in the sidebar. There, from "SCOPES", select `bot`, then from "BOT PERMISSIONS" under "TEXT PERMISSIONS" select Send Messages, Send Messages in Threads, Embed Links, Read Message History and Add Reactions. Copy the link from the text box under "SCOPES", Open a new tab, paste in the link, and press Enter.
![The OAuth link in the OAuth2> URL Generator> Scopes page](https://raw.githubusercontent.com/Hydrogen8/PLAY-BEYOND/0b83974d9ebdb5cab733d330b80315ee4627179c/images/OAuth%20Link.png)

Last, install Node.js, discord.js, and run the bot. To do this, go to the [Node.js Download page](https://nodejs.org/en/download/) and download one of the installers.

Alternatively, install node.js from your package manager, or for debian follow [these instructions](https://github.com/nodesource/distributions#installation-instructions).

To install the required modules, run:

```bash
npm i
```

and then to run the bot:

```bash
node main.js
```
