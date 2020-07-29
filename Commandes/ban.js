const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ban",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.channel.send(`Vous ne pouvez pas bannir les membres`)
        }
        if (!args[0]) {
            return message.channel.send(`Veuillez mentionner un utilisateur!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.ban();
            await message.channel.send(`${member} a été banni!`)
        } catch (e) {
            return message.channel.send(`L'utilisateur n'est pas sur le serveur!`)
        }

    }
}
module.exports.help = {
    name: "ban"
};