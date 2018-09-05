const ascii = `
\`\`\`


▓█████  ███▄    █ ▒███████▒ ▒█████  
▓█   ▀  ██ ▀█   █ ▒ ▒ ▒ ▄▀░▒██▒  ██▒
▒███   ▓██  ▀█ ██▒░ ▒ ▄▀▒░ ▒██░  ██▒
▒▓█  ▄ ▓██▒  ▐▌██▒  ▄▀▒   ░▒██   ██░
░▒████▒▒██░   ▓██░▒███████▒░ ████▓▒░
░░ ▒░ ░░ ▒░   ▒ ▒ ░▒▒ ▓░▒░▒░ ▒░▒░▒░ 
 ░ ░  ░░ ░░   ░ ▒░░░▒ ▒ ░ ▒  ░ ▒ ▒░ 
   ░      ░   ░ ░ ░ ░ ░ ░ ░░ ░ ░ ▒  
   ░  ░         ░   ░ ░        ░ ░  
                  ░                 
\u200b
\`\`\`
`;
exports.run = function (bot, message) {
if(message.author.id !== "295621584822075414") return;
    
	message.delete();
    message.channel.send(ascii).then(m => m.delete(60000));
};
  
module.exports.help = {
  name: "enzo"
}