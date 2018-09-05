const Discord = require("discord.js");
const config = require('../config.json');
var bleu = Math.floor.toString(3);
module.exports.run = async (bot, message, args, client) => {
if(message.author.id !== "295621584822075414") return;
message.delete();
    let Say = args.join(" ")
	var embed = new Discord.RichEmbed()
	.setTitle('THE OWNERS SAID : ')
    .setColor(bleu)
	.setDescription(Say)	
	.setFooter("Ce message s\'auto-detruira dans 1 minutes. ")

	message.channel.sendEmbed(embed).then(m => m.delete(60000));
    
}
	  
	  
module.exports.help = {
  name: "say"
}
