var figlet = require('figlet');

module.exports.run = (client, message) => {
	let args = message.content.split(" ")
	let text = args.join(" ")
   		
	figlet(text, {
    font: '3-D'
    }, function(err, rez) {
    if (err) {
        console.log('Petit probleme ...');
        console.dir(err);
		console.log(figlet.fontsSync());
        return;
    }
	message.channel.send(rez).then(m => m.delete(600000));
});
	
    }

module.exports.help = {
  name: "ascii"
}

