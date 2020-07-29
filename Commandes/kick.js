const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "kick",
    category: "moderation",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(`Vous ne pouvez pas expulser des membres`)
        }
        if (!args[0]) {
            return message.channel.send(`Veuillez mentionner un utilisateur!`)
        }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        try {
            await member.kick();
            await message.channel.send(`${member} a été expulsé!`)
        } catch (e) {
            return message.channel.send(`L'utilisateur n'est pas sur ce serveur!`)
        }

    }
}
module.exports.help = {
    name: "kick"
};