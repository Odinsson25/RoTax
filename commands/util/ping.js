const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with the latency!'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {

        var ping;
        if (client.ws.ping < 0) { ping = "Undefined" } else { ping = client.ws.ping };
        await interaction.reply(`Pong! ${ping}`);
    },
};