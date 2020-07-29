const Discord = require ('discord.js');
const fs = require ('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();

//Dossier Events
fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        let events = require(`./Events/${f}`);
        let event = f.split('.')[0];
        client.on(event, events.bind(null, client));
    });
});

client.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Est pourquoi t la casse toi nan je deconne ' + member.displayName)
    }).catch(console.error)
  })

client.on('message', message => {
    if (message.content === 'b/bonjour') {
      message.reply('casse toi !')
    }
  })

  //Dossier Commandes
fs.readdir('./Commandes/', (error, f) => {
  if (error) { return console.error(error); }
      let commandes = f.filter(f => f.split('.').pop() === 'js');
      if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

      commandes.forEach((f) => {
          let commande = require(`./Commandes/${f}`);
          console.log(`${f} commande chargée !`);
          client.commands.set(commande.help.name, commande);
      });
});


//Token
client.login('');
