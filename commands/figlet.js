const Discord = require("discord.js");
const config = require('../config.json');
const figlet = require('figlet');

exports.run = (bot, message) => {
    // -l -- List all fonts
    // -f <font> -- Set fonts
	let args = message.content.split (' ').slice(1);
	 const parsed = bot.utils.parseArgs(args, ['l', 'f:']);
   
    if (parsed.options.l) {
        bot.utils.gistUpload(figlet.fontsSync().join('\n'), 'txt').then(({ url }) => {
            if (!url) {
                return message.error('Échec de la mise en ligne de la liste des polices !');
            }

            message.edit({
                embed: bot.utils.embed('Polices disponibles', `Une liste de polices disponibles peut être trouvée [here](${url}).`)
            }).then(m => m.delete(5000));
        });
        return;
    }

    if (parsed.leftover.length < 1) {
        throw 'Vous devez fournir du texte à rendre !';
    }

    const options = {};

    if (parsed.options.f) {
        options.font = parsed.options.f;
    }

    message.delete();

    const input = parsed.leftover.join(' ');
    message.channel.send(`\`\`\`\n${figlet.textSync(input, options)}\n\`\`\``);
};

module.exports.help = {
  name:"figlet"
}
