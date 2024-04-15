const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('withtax')
        .setDescription('Calculate price including tax')
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

        await interaction.reply({ content: `Calculated tax! \nOriginal: ${originalAmount} \nPrice with tax included: \`${Math.ceil(originalAmount / 0.7)}\` robux.`, ephemeral: eph });
    },
};