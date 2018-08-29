const Discord = require("discord.js");
const config = require('../config.json');
const ms = require('ms');
const chalk = require("chalk");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

      message.delete().catch(O_o=>{}); 
      if (!client.lockit) client.lockit = [];
      let time = args.join(' ');
      let validUnlocks = ['release', 'unlock'];
      if (!time) return message.reply('Vous devez définir une durée pour le verrouillage; en heures, minutes ou secondes');
    
      if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: null
        }).then(() => {
          message.channel.sendMessage('Verrouillage terminé');  '\u2713' + ' Bot chargé'
          clearTimeout(client.lockit[message.channel.id]);
          delete client.lockit[message.channel.id];
        }).catch(error => {
          console.log(error);
        });
      } else {
        message.channel.overwritePermissions(message.guild.id, {
          SEND_MESSAGES: false
        }).then(() => {
          message.channel.sendMessage(`Canal verrouillé pour ${ms(ms(time), { long:true })}`).then(() => {
    
            client.lockit[message.channel] = setTimeout(() => {
              message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: null
              }).then(message.channel.sendMessage('Verrouillage du salon terminé')).catch(console.error);
              delete client.lockit[message.channel.id];    
            }, ms(time));
    
          }).catch(error => {
            console.log(error);
          });
        });
      }
      console.log(`${message.author.username} sur ${message.guild.name} salon ${message.channel.name} : ${(chalk.green('\u2713'))} A ouvert la fonction LOCK \n--------------------------------------`);
    
    }
	
module.exports.help = {
  name: "lock"
}