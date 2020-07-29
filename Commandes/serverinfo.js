const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "server-info",
    category: "Commandes",
    run: async (client, message, args) => {
        let region;
        switch (message.guild.region) {
            case "europe":
                region = '🇪🇺 Europe';
                break;
            case "us-east":
                region = '🇺🇸 us-east'
                break;
            case "us-west":
                region = '🇺🇸 us-west';
                break;
            case "us-south":
                region = '🇺🇸 us-south'
                break;
            case "us-central":
                region = '🇺🇸 us-central'
                break;
        }

        const embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL({dynamic : true}))
            .setColor('#0088ff')
            .setTitle(`${message.guild.name} server stats`)
            .addFields(
                {
                    name: "Propriétaire: ",
                    value: message.guild.owner.user.tag,
                    inline: true
                },
                {
                    name: "Membres: ",
                    value: `Il y a ${message.guild.memberCount} utilisateurs !`,
                    inline: true
                },
                {
                    name: "Membres en ligne: ",
                    value: `Il y a ${message.guild.members.cache.filter(m => m.user.presence.status == "en ligne").size} utilisateurs en ligne!`,
                    inline: true
                },
                {
                    name: "Total des robots: ",
                    value: `Il y a ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                    inline: true
                },
                {
                    name: "Date de création: ",
                    value: message.guild.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: "Nombre de rôles: ",
                    value: `Il y a ${message.guild.roles.cache.size} rôles dans ce serveur.`,
                    inline: true,
                },
                {
                    name: `🗺 Region: `,
                    value: region,
                    inline: true
                },
                {
                    name: `Vérifié: `,
                    value: message.guild.verified ? 'Le serveur est vérifié' : `Le serveur n'est pas vérifié`,
                    inline: true
                },
                {
                    name: 'Boosters: ',
                    value: message.guild.premiumSubscriptionCount >= 1 ? `Il y a ${message.guild.premiumSubscriptionCount} Boosters` : `Il n'y a pas de boosters`,
                    inline: true
                },
                {
                    name: "Emojis: ",
                    value: message.guild.emojis.cache.size >= 1 ? `Il y a ${message.guild.emojis.cache.size} emojis!` : 'Il y a aucun émojis' ,
                    inline: true
                }
            )
        await message.channel.send(embed)
    }
}
module.exports.help = {
    name: "serverinfo"
}