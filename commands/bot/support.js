const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('support')
        .setDescription('Need help? Have a question? Head over here!'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        await interaction.reply({ content: `For help with commands, execute </help:1141701740639555674>.\nStill need help? Join our [Support server](<https://discord.gg/BP4Pw5wPMG>)!`, ephemeral: true });
    },
};