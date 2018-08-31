const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args, client) => {
if(message.author.id !== "295621584822075414") return;
message.delete();
    let Say = args.join(" ")
	var embed = new Discord.RichEmbed()
    .setColor(`#OOFFOO`)
	.setDescription(Say)	
	.setFooter("Ce message s\'auto-détruira dans 10 minutes. ??")

	message.channel.sendEmbed(embed).then(m => m.delete(600000));
    
}
	  
	  
module.exports.help = {
  name: "say"
}
