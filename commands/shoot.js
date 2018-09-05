const Discord = require("discord.js");
var bleu = Math.floor(Math.random() * 177216).toString(12);

module.exports.run = function (bot, message) {
    if (message.mentions.users.size < 1) {
        throw '@mention Quelqun a tuer!';
    }

    let output = message.mentions.users.map(m => `**${m}** :gun: :boom: ** Tu Est Mort. !! **`).join('\n');

    message.delete();
	var shoot = new Discord.RichEmbed()
	.addField(`${bot.user.username} est en train de tuer.!`, output)
	.setColor(bleu)
	.setFooter("Ce message s\'auto-detruira dans 1 minutes.")
	message.channel.sendEmbed(shoot).then(m => m.delete(60000));
   
};

module.exports.help = {
    name: 'shoot'
    };