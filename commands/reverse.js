const Discord = require("discord.js");

module.exports.run = function (bot, message, args) {
	
	message.delete();
    if (args.length < 1) {
        throw 'Vous devez entrer le texte à inverser !';
    }
    message.channel.send(args.join(' ').split('').reverse().join(''));
};

module.exports.help = {
  name: "reverse"
}