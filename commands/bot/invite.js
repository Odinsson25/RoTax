const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Invite this bot to your server!'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        await interaction.reply({ content: `You can invite the bot via the button on its profile.\nOr, via [here](https://discord.com/oauth2/authorize?client_id=1141690352424718386&permissions=277361323201&scope=applications.commands%20bot).`, ephemeral: true });
    },
};