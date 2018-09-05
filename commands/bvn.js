const Discord = require("discord.js");
var bleu = Math.floor(Math.random() * 177216).toString(12);
const ascii = `
\`\`\`
  ____    _                                                          _ 
 | __ )  (_)   ___   _ __   __   __   ___   _ __    _   _    ___    | |
 |  _ \  | |  / _ \ | '_ \  \ \ / /  / _ \ | '_ \  | | | |  / _ \   | |
 | |_) | | | |  __/ | | | |  \ V /  |  __/ | | | | | |_| | |  __/   |_|
 |____/  |_|  \___| |_| |_|   \_/    \___| |_| |_|  \__,_|  \___|   (_)
                                                                               
\u200b
\`\`\`
`;

module.exports.run = (client, message, args, await) => {
	if (message.author.id !== "295621584822075414") return;
	 if (message.mentions.users.size < 1) {
		 message.delete();
        message.channel.send('@mention Quelqun !');
    }

    let output = message.mentions.users.map(m => `**A toi ${m}** ** Sur ${message.guild.name} :) **`).join('\n');

	message.delete();
	var embed = new Discord.RichEmbed()
	.setColor(bleu)
	.setDescription(ascii + output)
	.setFooter("Ce message s\'auto-détruira dans 1 minutes. ??")
	message.channel.sendEmbed(embed).then(m => m.delete(60000));

     
} 

	  
module.exports.help = {
  name: "welcome"
}