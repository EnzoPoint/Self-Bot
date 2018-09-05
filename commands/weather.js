const Discord = require("discord.js");
const weather = require("weather-js");

module.exports.run = async (bot, message, me, args) => {
if(me) return;
  weather.find({search: args.join(" "), degreeType: 'C' }, function(err, result) {

  
    if (err) message.channel.send(err);

    if(result === undefined || result.length === 0){
      message.channel.send('Entrer une Localisation Valide. !!')
      return;
    }



    var current = result[0].current;
    var location = result[0].location;

    const embed = new Discord.RichEmbed()
      .setDescription(`**${current.skytext}**`)
	  
      .setAuthor(`Météo De ${current.observationpoint}`)
      .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpchCdSQJNaQK_xxCKtw5fcah-tmEUObPtmRtuvn0fDKD97tKTIw")
      .setColor("00FF00")
      .addField('Fuseau Horaire:', `UTC${location.timezone}`, true)
      .addField('Type De Degrée:',location.degreetype, true)
      .addField('Température:', `${current.temperature} Degrées`, true)
      .addField('Vents:',current.winddisplay, true)
      .addField('Humidité:', `${current.humidity}%`, true)
      .setTimestamp()
      .setFooter("Ce message s\'auto-détruira dans 1 minutes. 💥")
	
      message.channel.send({embed}).then(m => m.delete(60000));
  });

}

module.exports.help = {
  name: "weather"
}