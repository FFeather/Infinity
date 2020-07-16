const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const invite = new Discord.MessageEmbed().setTitle('**Botinvite for infinity.**').setDescription('[Click here](https://discord.com/api/oauth2/authorize?client_id=728986900161101846&permissions=8&redirect_uri=https%3A%2F%2Fwww.infinitybot.ml%2F&scope=bot)').setColor('RANDOM').setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    message.channel.send(invite);
}