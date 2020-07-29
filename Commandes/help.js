const Discord = require ('discord.js');

module.exports.run = (client, message, args) => {
	let embed = new Discord.MessageEmbed()
	    .setDescription("📜 Listes des commandes disponibles :")
		.setColor('#00fff8')
		.addField("📋__UTILITAIRES__:", "`b/help`") 
		.addField("📌__MODERATION__:", "`Commandes administrateur`") 
		.addField("***b/clear***:", "`permet au administrateur d'effacer un ou plusieurs messages`") 
		.addField("***b/ban***:", "`permet au administrateur de bannir un ou plusieurs membres`") 
		.addField("***b/unban***:", "`permet au administrateur de débannir un membre `") 
		.addField("***b/kick***:", "`permet au administrateur de kick un membre `") 
		.addField("***b/serverinfo***:", "`permet au administrateur de voir les infos de votre serveur`") 
		.addField("***b/userinfo***:", "`permet au administrateur de voir les infos d'un membre de votre serveur`") 
		.addField("***b/botinfo***:", "`permet au administrateur de voir le caractheristique du bot`") 
		.addField("***b/totalbans***:", "`permet au administrateur de voir le nombre de ban sur votre serveur`") 
		.addField("📦__GENERATEUR__:", "`Commande de generation de compte ou de jeu discord`") 
	message.channel.send(embed);
	};


module.exports.help = {
    name: "help"
};