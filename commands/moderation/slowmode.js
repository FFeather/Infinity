const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_CHANNEL` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if (!message.guild.me.hasPermission("MANAGE_CHANNEL")) return message.channel.send(botperms)

  const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if(message.guild == null) return message.channel.send(dm)

    if (message.member.hasPermission("MANAGE_CHANNEL")) {

    const number = new Discord.MessageEmbed().setDescription(`That's not a number, please, specify the time in seconds you wish to set this channel's slow mode too.`).setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    const specify = new Discord.MessageEmbed().setDescription(`You did not specify the time in seconds you wish to set this channel's slow mode too.`).setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    const succes = new Discord.MessageEmbed().setDescription(`Set the slowmode of this channel too: **${args[0]}**`).setColor('RANDOM').setFooter(`Changed by: ` + message.author.username, message.author.avatarURL())

      if (!args[0])
        return message.channel.send(specify);
      if (isNaN(args[0])) return message.channel.send(number);
      message.channel.setRateLimitPerUser(args[0]);
     
      message.channel.send(succes);
    }
}
