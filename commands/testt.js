 const figlet = require('figlet');

module.exports.run = (bot, message, args) => {
    // -l -- List all fonts
    // -f <font> -- Set font
	let f = args.join(" ")
   	const parsed = bot.utils.parse (args, ['f']);
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
    name: 'figlet'
};