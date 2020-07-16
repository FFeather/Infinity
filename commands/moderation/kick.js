const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `KICK_MEMBERS` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(botperms)

  const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if(message.guild == null) return message.channel.send(dm)
  if (message.member.hasPermission("KICK_MEMBERS")) {
    var member = message.mentions.members.first();
    const provideuser = new Discord.MessageEmbed().setDescription(`U must mention a user in this guild.`).setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    if (!member) return message.channel.send(provideuser)
    member.kick().then((member) => {

      const kicked = new Discord.MessageEmbed().setDescription(`${member.displayName} has been successfully kicked.`).setColor('RANDOM').setFooter(`Banned by: ` + message.author.username, message.author.avatarURL());

      message.channel.send(kicked);

    });
  } else {
    const noperms = new Discord.MessageEmbed().setDescription('You have need to have `KICK_MEMBERS` permission to ban someone').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    message.channel.send(noperms)
  }
}