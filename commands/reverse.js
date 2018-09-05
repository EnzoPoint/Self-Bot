const Discord = require("discord.js");
module.exports.run = function (bot, message, args) {
if(message.author.id !== "295621584822075414") return;
    
	message.delete();
    if (args.length < 1) {
        message.reply('Vous devez entrer le texte à inverser !');
    }
    message.channel.send(args.join(' ').split('').reverse().join('')).then(m => m.delete(60000));
};

module.exports.help = {
  name: "reverse"
}