const db = require('quick.db');
module.exports = async (client, message) => {

    if (message.author.bot) return;

    let prefix;
    if(message.guild){
        if(message.guild.id != undefined || message.guild.id != null){
            prefix = db.get(`prefix_${message.guild.id}`)
        }
    }
    if(prefix === null) prefix = default_prefix;
  
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    const cmd = client.commands.get(command);
  
    if (!cmd) return;
  
    cmd.run(client, message, args);
  };