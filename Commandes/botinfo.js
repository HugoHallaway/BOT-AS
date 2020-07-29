  
const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: "botinfo",
    category: "bot",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor('#000000')
            .addFields(
                {
                    name: '🌐 les serveurs',
                    value: `Portion ${client.guilds.cache.size} les serveurs.`,
                    inline: true
                },
                {
                    name: '📺 Chaînes',
                    value: `Portion ${client.channels.cache.size} canaux.`,
                    inline: true
                },
                {
                    name: '👥 Utilisateurs du serveur',
                    value: `Portion ${client.users.cache.size}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Date de création',
                    value: client.user.createdAt,
                    inline: true
                },
                {
                    name: 'Informations sur le serveur',
                    value: `Noyaux: ${os.cpus().length}`,
                    inline: true
                }
            )
            .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

        await message.channel.send(embed)
    }
}
module.exports.help = {
    name: "botinfo"
};