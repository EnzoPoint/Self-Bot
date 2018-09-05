
module.exports.run = (bot, message, args) => {
	if(message.author.id !== "295621584822075414") return;
   
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

    bot.utils.playAnimation(message, delay, frames).then(m => m.delete(60000));
};

module.exports.help = {
    name: 'anim'
    };