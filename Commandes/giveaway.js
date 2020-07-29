const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Créez un cadeau simple",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`Vous n'avez pas précisé votre heure!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Vous n'avez pas utilisé le formatage correct pour l'époque!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Ce n'est pas un nombre!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Je n'ai pas pu trouver cette chaîne dans la guilde!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Aucun prix spécifié!`);
    message.channel.send(`*Giveaway créé dans ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`Nouveau giveaway!`)
      .setDescription(
        `L'utilisateur ${message.author} organise un cadeau pour le prix de **${prize}**`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Réactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Pas assez de gens ont réagi pour que je commence à dessiner un gagnant!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Le gagnant du concours pour **${prize}** est... ${winner}`
      );
    }, ms(args[0]));
  },
};
module.exports.help = {
    name: "giveaway"
};