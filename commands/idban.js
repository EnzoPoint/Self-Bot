const Discord = require("discord.js");
const config = require('../config.json');
module.exports.run = async (bot, message, args) => {
if(message.author.id !== "295621584822075414") return;
    
		   message.delete();
		     if (!args[0]) return message.channel.send(`**${message.author.username} ,** Vous devez spécifiez l'id de l'utilisateur.`).catch(console.error)
			  message.channel.send(`**${message.author.username} ,**banissement de <@${args[0]}> avec succes.`)
	  
			  message.guild.ban(args[0]).catch(error=>{
			  message.channel.send(`**${message.author.username} ,** je ne peut pas ban une personne qui a les roles admin`)

			  })
	  }
	  
	  
module.exports.help = {
  name: "idban"
}
