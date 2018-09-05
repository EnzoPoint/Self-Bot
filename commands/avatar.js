const Discord = require("discord.js");

module.exports.run = async (bot, message) => {
	if(message.author.id !== "295621584822075414") return;
    const user = message.mentions.users.first();
	message.delete();
    if (!user) {
       message.reply('ta pas mentionner de personne :smile: !.');
    }

    if (!user.avatarURL) {
        message.reply(`Il na pas d'avatar !.`);
    }

  
	 let avatar = new Discord.RichEmbed()
    .setDescription("**Avatar Discord**")
    .setColor("00FF00")
    .addField(`${user.username}'s Avatar`, `[Download](${user.avatarURL})`)
	.setImage(user.avatarURL)
	.setFooter("Ce message s\'auto-détruira dans 1 minutes. 💥")
    message.channel.send(avatar).then(m => m.delete(60000));
};

module.exports.help = {
    name: 'avatar',
    };