const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.delete().catch;

  if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length;

            let embed = new Discord.RichEmbed()
            .setColor('00FF00')
            .setDescription(`${message.author} deleted **${messagesDeleted}** messages.`)

            message.channel.send(embed).then(msg => msg.delete(8000));
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
