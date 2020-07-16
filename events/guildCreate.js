const Discord = module.require("discord.js");

module.exports = async (client, message) => {

const JoinEmbed = new Discord.MessageEmbed().setTitle('Thank you for adding infinity!').addField('Server name:', guild.name).addField('Setup:', `Hello owner of ${guild.name}! \nSeems like someone added me to your server so here is information about me \nInfinity is a multi-purpose bot ready to skill up and boost up your Discord server
Also features auto-moderation, administration, fun and much more!`).addField('more info:', 'to get started with infinity go to our [website](https://www.infinitybot.ml/) for the documentation or just use &help and try it out!').setColor('RANDOM')
guild.owner.send(JoinEmbed)
}