
module.exports.run = (bot, message, args) => {
	 let parsed = bot.utils.parseArgs(args, 'd:');

    if (parsed.leftover.length < 1) {
        throw 'Veuillez fournir des émojis à utiliser.!';
    }

    let frames = parsed.leftover;
    let content = frames.join(' ');

    if (content.indexOf('|') > -1) {
        frames = content.split('|');
    }

    let delay = isNaN(parsed.options.d) ? 250 : parsed.options.d;

    bot.utils.playAnimation(message, delay, frames);
};

module.exports.help = {
    name: 'anim'
    };