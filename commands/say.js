const Discord = require("discord.js");
const config = require('../config.json');


module.exports.run = async (bot, message, args, client) => {

		   message.delete();
           let Say = args.join(" ")
			var embed = new Discord.RichEmbed()
    .setColor(RANDOM)
	.setDescription(Say)	
	message.channel.sendEmbed(embed)
    
}
	  
	  
module.exports.help = {
  name: "say"
}
