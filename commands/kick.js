const Discord = require("discord.js");
module.exports.run = async (bot, message, args, client) => {
if(message.author.id !== "295621584822075414") return;
    
message.delete();
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Mais je ne la trouve pas :thinking:");
    let kReason = args.join(" ").slice(22);
    if (!kReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
    
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Kick**")
    .setColor("OOFFOO")
	.setFooter("Ce message s\'auto-détruira dans 1 minutes.")


    .addField("Kicked User:", `${kUser} Avec l'ID ${kUser.id}`)
    .addField("Kicked Par:", `<@${message.author.id}> Avec l'ID ${message.author.id}`)
    .addField("Kicked In:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("Reason:", kReason);
    
    message.channel.send(kickEmbed).then(m => m.delete(60000));
}

module.exports.help = {
  name:"kick"
}
