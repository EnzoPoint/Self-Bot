
const Discord = require("discord.js");
var bleu = Math.floor(Math.random() * 177216).toString(12);

module.exports.run = async (bot, message) => {
	if(message.author.id !== "295621584822075414") return;
message.delete();
  let user = message.mentions.users.first();
    if (!user) {
        return message.reply('veuiller mentioner un utilisateur.');
    }
 let messag;
    if (user.lastMessage === null) {
        messag = 'Cette utilisateur na pas récemment parler';
    } else {
        messag = user.lastMessage;
    }
	const mentioneduser = message.mentions.users.first();
    let embed = new Discord.RichEmbed()
 .setDescription('**Le dernier message envoyé par la personne**')
 .setColor(bleu)
 .addField(`le dernier message de ${user.username}`, `Sont message : ** ${messag} **`)
 message.channel.send(embed).then(m => m.delete(60000));
};
module.exports.help = {
    name: 'msg',
};