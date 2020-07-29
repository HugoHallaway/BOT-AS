const Discord = require ("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission");
    if (!args[0]) return message.channel.send("Indique le nombre de messages que tu souhaite supprimer !");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont bien été supprimés`).then(msg => msg.delete(5000));
    });
}
 
module.exports.help = {
    name: "clear"
}