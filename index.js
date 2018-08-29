  // REQUIRE JSON FILES
const config = require("./config.json");
  // REQUIRE NODE_MODULES
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });

  // COMMANDS HANDLER
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("Look Serie", { type: "LISTENING" });

});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    let prefix = config.prefix;
	let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
	var argresult = args.join(' ');
    let cmd = messageArray[0];
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
 var part = message.author.id !== "295621584822075414"
	  
  
////////////////////////////// CHANGE LE JEUX ///////////////////////////////////////////
  if (message.content.startsWith(prefix + 'setgame')) {
	  message.delete();
    if(message.author.id !== "295621584822075414") return;
      bot.user.setGame(argresult); return message.reply('Mon **jeu** a était **modifié** avec **succés** !!')
  } else

/////////////////////////////// CHANGE STATUT /////////////////////////////////////////////
  if (message.content.startsWith(prefix + 'setstatut')) {
	  message.delete();
    if(message.author.id !== "295621584822075414") return;
      bot.user.setStatus(argresult); return message.reply('Mon **status** a était **modifié** avec **succés** !!')
      // idle = absent | dnd = offline  | invisible = invisible  | online = online //
    } else 
//////////////////////////////// CHANGE NAME OF BOT ///////////////////////////////////////
   if(message.content.startsWith(prefix + 'setname')){
    message.delete().catch(O_o=>{});
    if(message.author.id !== "295621584822075414") return message.channel.sendMessage("Vous n'avez pas la permission **RENAME_BOT** !!");
    bot.user.setUsername(message.content.substr(9));
    }
	
});

bot.login(config.token);
