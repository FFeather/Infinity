const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  const av = message.mentions.users.first() || message.author;
  const avembed = new Discord.MessageEmbed().setTitle(`**🔰 | ${av.username}'s Avatar**`).setImage(av.displayAvatarURL({ format: 'png', dynamic: true, size: 4096 })).setColor('RANDOM').setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
  message.channel.send(avembed);
}