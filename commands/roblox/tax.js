const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tax')
        .setDescription('Calculate tax')
        .addIntegerOption(o => o
            .setName("amount")
            .setDescription("Amount of robux")
            .setRequired(true)
        )
        .addBooleanOption(o => o
            .setName("ephemeral")
            .setDescription("Select if you want this message to be ephemeral. Default is false."))
    ,
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const originalAmount = interaction.options.getInteger("amount");
        const eph = interaction.options.getBoolean("ephemeral");

        await interaction.reply({ content: `Calculated tax! \nOriginal: ${originalAmount} \nRobux minus tax: \`${Math.floor(originalAmount * 0.7)}\` robux.`, ephemeral: eph });
    },
};