const { Client, EmbedBuilder, GatewayIntentBits, Collection, Events } = require("discord.js");
const { Guilds } = GatewayIntentBits;
const fs = require('node:fs');
const path = require('node:path');
// const {};

require("dotenv").config();


const client = new Client({
    intents: Guilds
});

// #region COMMANDS
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        };
    };
};
// #endregion COMMANDS

process.on("unhandledRejection", (reason, promise) => {
    console.warn("-- Unhandled Rejection Error-- ");
    console.log(reason, promise)
});
process.on("uncaughtException", (err, origin) => {
    console.warn("-- Uncaught Exeception Error -- ");
    console.log(err, origin);
});
process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.warn("-- Uncaught Exception Monitor Error --");
    console.log(err, origin);
});

client.once("ready", (client) => {
    console.log("ready");
    setTimeout(() => {
        client.user.setActivity("Starting up...");

    }, 3 * 1000);

    //#region Status
    const statusOptions = [
        "RoTax",
        "Calculate tax really fast with RoTax!",
        "Slash (/) commands!",
        "All info in my bio.",
        `with ${client.users.cache.size} users.`,
        "Need help? Contact staff or the bot developer!",
        "Life is roblox ~ DJ Khaled",
        `with ${client.guilds.cache.size} guilds.`,
        "This bot is still in development. Please report bugs as soon as possible in our support server.",
        "Public bot! Invite me to your server!"

    ];

    let i = 0;
    setInterval(() => {
        client.user.setActivity(statusOptions[i]);
        i++;
        if (i >= statusOptions.length) {
            i = 0;
        };

    }, 5000);
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.user.bot) return console.log("!!BOT!! tried to execute Command!\n", interaction.id, "executed by", interaction.user.id, "in", interaction.guild.id)
    else console.log("Interaction ID:", interaction.id + ".", (interaction.commandId), "executed by", interaction.user.id, "in", interaction.guild.id);;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    };

    try {
        await command.execute(interaction, client);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!\nDev: \`RD\`', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!\nDev: \`undefined\`', ephemeral: true });
        };
    };


});

client.login(process.env.DISCORD_BOT_TOKEN);
