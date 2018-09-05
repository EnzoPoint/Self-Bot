const snekfetch = require("snekfetch");
module.exports.run = async (bot, message, args) => {
if(message.author.id !== "295621584822075414") return;
    
message.delete();
if (!args[0]) { return message.channel.send(":thinking: Que voulez-vous publier sur Hastebin ? :thinking:") }
	 snekfetch.post("https://hastebin.com/documents").send(args.slice(0).join(" ")).then(body => {
            message.channel.send(":boom:  Texte envoyé à Hastebin à cette URL :boom: : https://hastebin.com/" + body.body.key).then(m => m.delete(60000));
        });
}

module.exports.help = {
    name: 'text'
    };
