const leet = require('leet');

module.exports.run = (client, message, args) => {
	
    let text = args.slice(1).join(" ")
    if (!args[0]) { return message.edit(":x: Tu ne peux pas convertir :x:") }
    message.edit("" + leet.convert(text)).then(m => m.delete(600000));
	
}

	  
module.exports.help = {
  name: "leet"
}