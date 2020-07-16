const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
        
    const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `EMBED_LINKS` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send(botperms)
    
    const { MessageEmbed } = require("discord.js");    
    
    const min=1; 
    const max=39; 
    
    const text = new Discord.MessageEmbed().setDescription('Please provide text for your achi.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const morethen = new Discord.MessageEmbed().setDescription('You can\'t use more then 25 letters or symbols.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    

    const logo = Math.floor(Math.random() * (+max - +min)) + +min;
    
    
        let achi = message.content.split(" ").slice(1).join("+");
        if(!achi)return message.reply(text)
        if (achi.length  > 24) return message.channel.send(morethen);
        let achiem = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("**New achievement!**")
    .setImage(`https://minecraftskinstealer.com/achievement/${logo}/Achievement+Get%21/${achi}`)
    .setFooter(`Recieved by: ` + message.author.username, message.author.avatarURL());
 
    message.channel.send(achiem);
         
            }
    
