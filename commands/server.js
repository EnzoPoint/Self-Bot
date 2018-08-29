	const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servericon = bot.user.displayAvatarURL;
	var date = message.guild.createdAt;
    let serverembed = new Discord.RichEmbed()
        .setColor("#f44242")
        .setThumbnail(servericon)
        .addField("Server", message.guild.name)
        .addField("Created on:", bot.user.createdTimestamp)
		.addField("Created of this Serveur:", message.guild.owner)
        .addField("Créé le:", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" � "+date.getHours()+":"+date.getMinutes())
          message.channel.send(serverembed);
}

module.exports.help = {
    name: "server"
}
