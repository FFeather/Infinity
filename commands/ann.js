const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_MESSAGES` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(botperms)

  const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if(message.guild == null) return message.channel.send(dm)

  if (message.member.hasPermission("MANAGE_MESSAGES")) {

    const providetext = new Discord.MessageEmbed().setDescription(`U must provide text for the announcement.`).setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    if (!args || args.length < 1) return message.channel.send(providetext)

    message.delete()
    const ann = new Discord.MessageEmbed()
    .setDescription(args.join(" "))
    .setThumbnail(message.author.avatarURL())
    .setColor('RANDOM')
    .setFooter(`Announcement by: ` + message.author.username, message.author.avatarURL())
    if (message.attachment) ann.setImage(message.attachment);
    message.channel.send(`@everyone,`)
    message.channel.send(ann);

  } else {
    const noperms = new Discord.MessageEmbed().setDescription('You need `MANAGE_MESSAGES` permissions to make an announcement').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    message.channel.send(noperms)
  }
}