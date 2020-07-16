const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const invite = new Discord.MessageEmbed().setTitle('**Support-server of infinity.**').setDescription('[Click here](https://discord.gg/GC6qMqF)').setColor('RANDOM').setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    message.channel.send(invite);
}