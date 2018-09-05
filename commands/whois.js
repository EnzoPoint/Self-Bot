const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
if(message.author.id !== "295621584822075414") return;
    
   message.delete();
      let user = message.mentions.users.first();
    if (!user) {
        return message.reply('veuiller mentioner un utilisateur.');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '/' + (mentioneduser.createdAt.getMonth() + 1) + '/' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'Cette utilisateur na actuellement pas de jeux lancé.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'Cette utilisateur na pas récemment parler';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':100:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
		} else if (user.presence.status === 'offline') {
			status = ':black_circle:';
		}

		let stat;
		if (user.presence.status === 'offline') {
			stat = 0x000000;
		} else if (user.presence.status === 'online') {
			stat = 0x00AA4C;
		} else if (user.presence.status === 'dnd') {
			stat = 0x9C0000;
		} else if (user.presence.status === 'idle') {
			stat = 0xF7C035;
		}
		if (user.bot === false) {
			bont = 'n\'est pas un bot.'
		} else if (user.bot === true) {
			bont = 'est un bot.'
		}
		const embed = new Discord.RichEmbed()
	  .addField(' :smirk_cat:  **Informations :**', `**Pseudo :** ${user.username}#${user.discriminator}\n**A rejoint Discord le :** ${joineddiscord}\n**Dernier message envoyé de l utilsateur :** ${messag}\n**Joue a :** ${game}\n**Statut :** ${status}\n**Cet utilisateur ** ${bont}\n`, true)
	  .setThumbnail(user.displayAvatarURL)
	  .setFooter("Ce message s\'auto-détruira dans 1 minutes. 💥")

	  .addField(`Role que le joueur a sur le serveur ! :`, '``' + message.mentions.members.first().roles.map(r => r.name).join(', ') + '``' + '\n')
	  .addField(':open_hands: Informations Complémentaire :', `**Discriminateur :** ${user.discriminator}\n**ID Du Joueur :** ${user.id}\n**Son Pseudo :** ${user.username}`)
	.setAuthor(`Informations sur le joueur  ${user.username}`, user.displayAvatarURL)
	  .setColor("#DFFF00");
	  
		message.channel.send({embed}).then(m => m.delete(60000));
	
	}


module.exports.help = {
  name: "whois"
}
