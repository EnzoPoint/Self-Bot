const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
if(message.author.id !== "295621584822075414") return;
    
  message.delete().catch;

  if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length;

            let embed = new Discord.RichEmbed()
            .setColor('00FF00')
            .setDescription(`${message.author} deleted **${messagesDeleted}** messages.`)
            .setFooter("Ce message s\'auto-détruira dans 10 minutes. 💥")
            message.channel.send(embed).then(m => m.delete(600000));
          })
          .catch(err => {
            console.log('Erreur Clear !');
            console.log(err);
          });
      }
    }

module.exports.help = {
  name: "clear"
}
