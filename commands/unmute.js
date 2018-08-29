 const Discord = require("discord.js");
const config = require('../config.json');


module.exports.run = async (bot, message, args, client) => {

 message.delete();
  let user = message.mentions.users.first();
 var unmuterole = message.guild.roles.find("name", "Muted")
        var tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
		let taReason = args.join(" ").slice(22);
        if (!tounmute) return message.channel.send(" mentionne un user!")
		if (!taReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
        await (tounmute.removeRole(unmuterole.id))
	    
	 let unmute = new Discord.RichEmbed()
    .setDescription("**Info Du unmute**")
    .setColor("00FF00")
    .addField("Unmute:", tounmute)
	.addField("Id du Joueur:", user.id)
    .addField("The Reason:", taReason)
	.addField("Info:", "**Merci de ne pas Recommencer**") 

    message.channel.send(unmute);
}
  
module.exports.help = {
  name: "unmute"
}