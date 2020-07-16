const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    let type = args[0]
    let say = args.slice(1);
    let say2 = say.join(" ");
    
    if(type==="embed") {
        const ping = new Discord.MessageEmbed().setDescription('I can\'t say that cause i don\'t want to ping anyone or send your link. if you have `MANAGE_MESSAGES` permissions try &ann [announcement].').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if (message.content.includes("@everyone")  || message.content.includes("@here") || message.content.includes("@")  || message.content.includes("http")  || message.content.includes("discord.")  || message.content.includes("https")) return message.channel.send(ping);
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(say2)
        .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
        message.channel.startTyping(5);
        setTimeout(() => {
            message.channel.stopTyping(true);
                        message.channel.send(embed);

        }, 1000*3)
    } else if(type==="normal") {
        const pingn = new Discord.MessageEmbed().setDescription('I can\'t say that cause i don\'t want to ping anyone if you have `MANAGE_MESSAGES` permissions try &ann [announcement].').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if (message.content.includes("@everyone")  || message.content.includes("@here") || message.content.includes("@")) return message.channel.send(pingn);
        message.channel.startTyping(5);
        setTimeout(() => {
            message.channel.stopTyping(true);
            message.channel.send(`Requested by: ${message.author.username}`)
                        message.reply(say2)

        }, 1000*3)

    } else {
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('You are missing some args (ex: &say normal || &say embed)')
        .setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        message.channel.send(embed);
    };

}