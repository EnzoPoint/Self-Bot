const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args, client) => {
if(message.author.id !== "295621584822075414") return;
    
 message.delete();
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                name: "Muted",
                color: "#00FFOO",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
        } catch(e){
        console.log(e.stack);
            }
        }
        
        let taReason = args.join(" ").slice(22);
       if (!taReason) return message.reply("Ta pas fournit de reason :smile: !").then(msg => msg.delete(5000));
   	 let mute = new Discord.RichEmbed()
    .setDescription("**Info Du Mute**")
    .setColor("00FF00")
	.setFooter("Ce message s\'auto-détruira dans 1 minutes.")

    .addField("Mute:", tomute)
    .addField("The Reason:", taReason)
	.addField("Role:", muterole)
	.addField("Info", "**Fait une demande a un admin pour te faire UnMute !**");
	
await(tomute.addRole(muterole.id));

    message.channel.send(mute).then(m => m.delete(60000));
}
		
	 	  
module.exports.help = {
  name: "mute"
}