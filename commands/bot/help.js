const { SlashCommandBuilder, CommandInteraction, Client, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Need help with commands? Execute this command!')
        .addStringOption(o => o
            .setName("subject")
            .setDescription("Select what you need help with!")
            .addChoices(
                { name: 'Tax', value: 'tax' },
                { name: 'Custom Tax', value: 'custom_tax' },
                { name: 'Support server', value: 'support_server' }
            )
            .setRequired(true)
        )

    ,
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const subj = interaction.options.getString("subject")

        switch (subj) {

            case "tax":

                const taxEmbed = new EmbedBuilder()
                    .setTitle("Help - Tax")
                    .setColor(0x07273e)
                    .setDescription("When someone buys a roblox shirt, t-shirt, pants, gamepass etc., Roblox will take 30% as \"tax\". \nWith this tool, you can calculate how much you will get after the tax!\nExecute here: </tax:1141696045689077840>\nIf you need more help, join our support server! ")
                interaction.reply({ content: "</tax:1141696045689077840>", embeds: [taxEmbed], ephemeral: true })

                break;
            case "custom_tax":
                const custTaxEmbed = new EmbedBuilder()
                    .setTitle("Help - Custom Tax")
                    .setColor(0x07273e)
                    .setDescription("When you work for a selling/design server, you probably have to pay the owners tax. \nWith this tool, you can calculate how much you will get after the tax!\nIf you have to give 10% to the owners, fill in \"10\" for tax.\nExecute here: </customtax:1141698625664204830>\nIf you need more help, join our support server!  ")
                interaction.reply({ content: "</customtax:1141698625664204830>", embeds: [custTaxEmbed], ephemeral: true })
                break;
            case "support_server":
                interaction.reply({ content: "Still need help? Join our [Support server](<https://discord.gg/BP4Pw5wPMG>)!", ephemeral: true });
                break;

        };
    },
};