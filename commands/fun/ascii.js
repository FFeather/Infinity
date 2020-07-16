const figlet = require('figlet');

const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

        const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Please provide text.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if(!args[0]) return message.channel.send(provide);

        msg = args.join(" ");
        message.delete();
        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong in ascii');
                console.dir(err);
            }
            const provide2000 = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Please provide text shorter than 2000 characters.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
            if(data.length > 2000) return message.channel.send(provide2000)
            const ping = new Discord.MessageEmbed().setColor('RANDOM').setDescription('I aint pinging anyone').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
            if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send(ping);
            const ascii = new Discord.MessageEmbed().setColor('RANDOM').setDescription('```' + data + '```').setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
            message.channel.send(ascii);
        })
    }