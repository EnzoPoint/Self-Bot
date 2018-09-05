const Discord = require("discord.js");
const eightball = require('8ball')()
var bleu = Math.floor(Math.random() * 177216).toString(12);

module.exports.run = (client, message, args, await) => {
	
    let text = args.join(" ")
    if(message.author.id !== "295621584822075414") return;
	message.delete();
	var embed = new Discord.RichEmbed()
    .setTitle("**Nous allons répondre a la Question !.**")
	.setColor(bleu)
	.addField(`** :8ball: Question - **`, `**` + text + `**`)
	.addField(`** :8ball: Reponse a votre question - **`, `**` + eightball + `**`)	
	.setFooter("Ce message s\'auto-détruira dans 1 minutes. 💥")
	message.channel.sendEmbed(embed).then(m => m.delete(60000));
   
} 

	  
module.exports.help = {
  name: "8ball"
}