const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    category: "moderation",
    run: async (client, message, args) => {

        const member = args[0];

        if (!member) {
             return message.channel.send(`Veuillez entrer un identifiant!`)
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(`${member} n'a pas été banni!`)
        } catch (e) {
            return message.channel.send(`Une erreur s'est produite!`)
        }

    }
}
module.exports.help = {
    name: "unban"
};