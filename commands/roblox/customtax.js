const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('customtax')
        .setDescription('Calculate custom tax, for example: tax from your server.')
        .addIntegerOption(o => o
            .setName("amount")
            .setDescription("Amount of robux")
            .setRequired(true)
        )
        .addIntegerOption(o => o
            .setName("tax")
            .setDescription("Amount of tax")
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
        const tax = interaction.options.getInteger("tax");
        const eph = interaction.options.getBoolean("ephemeral");

        await interaction.reply({ content: `Calculated tax! \nOriginal: ${originalAmount} \nRobux minus tax:\`${Math.floor(originalAmount * ((100 - tax) / 100))}\` robux.`, ephemeral: eph });
    },
};