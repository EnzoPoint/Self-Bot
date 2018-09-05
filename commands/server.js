const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
	var part = message.author.id !== "295621584822075414"
	if(part) {
};
message.delete();
    let servericon = message.guild.iconURL;
    var date = message.guild.createdAt;
	if(message.author.id !== "295621584822075414") return;
    let serverembed = new Discord.RichEmbed()
        .setColor("#42dff4")
		.setDescription("**-------- SERVER INFO --------**")
		.setFooter("Ce message s\'auto-detruira dans 1 minutes.")

        .addField("Server:", message.guild.name)
        .addField("Creator's id:", bot.user.createdTimestamp, true)
		.addField("Creater Of This Serveur:", message.guild.owner, true)
        .addField("Créé le:", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" : "+date.getHours()+":"+date.getMinutes(), true)
        .addField("Total members:", message.guild.memberCount, true)
		.addField('Nombre de Channels:', message.guild.channels.size, true)
		.addField('Nombre de Roles:', message.guild.roles.size, true)
	    .addField("Région du serveur:", message.guild.region)
		.addField('Niveau de vérification du Server:', message.guild.verificationLevel)
		.setThumbnail(servericon)
		
		 message.channel.send(serverembed).then(m => m.delete(60000));
}

module.exports.help = {
    name: "server"
}
