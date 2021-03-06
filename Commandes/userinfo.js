const Discord = require('discord.js');

module.exports.run = async (bot, message, args, cmd) => {
    const status = {
        online: "<:NAME:ID> En ligne",
        idle: "<:NAME:ID> Inactif",
        dnd: "<:NAME:ID> Ne pas déranger",
        offline: "<:NAME:ID> Hors ligne / invisible",
        streaming: "<:NAME:ID> En Stream"

      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

const getPresenceStatus = status => {
    let presence = ''
 
    switch(Object.keys(status)[0]) {
        case 'desktop': 
          presence = 'Ordinateur';
          break;
        case 'mobile':
          presence = 'Mobile';
        case 'web':
          presence = 'Internet';
          break;
    }
   return presence
 }

    let embed = new Discord.MessageEmbed()
        .setColor("")
        .setAuthor(member.user.username, member.user.displayAvatarURL())
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addField("Nom d'utilisateur complet", `${member.user.tag}`, true)
        .addField("Nickname", `${member.nickname !== null ? `${member.nickname}` : "Aucun"}`, true)
        .addField("ID", `${member.user.id}`, true)
        .addField('Bot', member.user.bot ? '🤖 Oui' : '👤 Non', true)
        .addField("Status", `${status[member.user.presence.status]}`, true)
        .addField("Platforme", getPresenceStatus(member.user.presence.clientStatus), true)
        .addField("Compte crée", message.guild.createdAt.toLocaleString(), true)
        .addField("A rejoint le server", message.guild.joinedAt.toLocaleString(), true)
        .setFooter(`Information utilisateur `)
        .setTimestamp()
        message.channel.send(embed);

}
module.exports.help = {
    name: 'userinfo',
    aliases: ['ui'],
};