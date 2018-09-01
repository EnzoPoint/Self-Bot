const asciify = require('asciify');


module.exports.run = (client, message, args) => {
    let textasciify = args.join(" ")
    if (!textasciify) return message.edit("Tu a rien ecrit. :smile: . !!")
    asciify(textasciify, {font: 'standard'}, function (err, res) {
      if (err) {
        console.error(err)
        message.channel.send(`Une erreur a été produite :p L'Error: \`\`\`${err}\`\`\``)
        return
      }
    
      message.edit("```\n" + res + "```\n").then(m => m.delete(600000));
    })
};
module.exports.help = {
    name: "ascii"
}
