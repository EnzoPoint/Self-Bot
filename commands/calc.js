const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require("discord.js");
exports.run = (bot, message, args) => {
	if(message.author.id !== "295621584822075414") return;
    
    if (args.length < 1) {
        message.reply('Tu dois fournir un calcul valide :boom:');
    }

    const question = args.join(' ');

    let answer;
	 try {
        answer = math.eval(question);
	 } catch (err) {
        console.error(`Invalid math equation: ${err}`);
    }
    
    message.delete();
	 let calcule = new Discord.RichEmbed()
    .setDescription("**Calculatrice !**")
    .setColor("00FF00")
	
    .addField("**Equation:**", question)
	
	.addField("**Résultat:**", answer)
	
	.setFooter("Ce message s\'auto-détruira dans 10 minutes. 💥")
	
    message.channel.send(calcule).then(m => m.delete(600000));

};

module.exports.help = {
    name: 'calc',
};