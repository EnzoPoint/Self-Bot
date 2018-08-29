const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Je ne trouve pas la personne que tu demande :thinking:!");
    let bReason = args.join(" ").slice(22);
    if (!bReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
    
    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Info Du Ban**")
    .setColor("00FF00")
    .addField("Banned User:", `${bUser} Avec l'ID ${bUser.id}`)
    .addField("Banned By:", `<@${message.author.id}> Avec l'ID ${message.author.id}`)
    .addField("Banned In:", message.channel)
    .addField("Time:", message.createdAt)
    .addField("The Reason:", bReason);

   // let incidentchannel = message.guild.channels.find(`name`, "incidents");
   // if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
  //  incidentchannel.send(banEmbed);
    message.channel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
