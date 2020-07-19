const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {   
    const snipes = client.snipes.get(message.channel.id) || [];
    const msg = snipes[args[0] - 1 || 0];
    const valid = new MessageEmbed().setDescription('There is nothing to snipe.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if (!msg) return message.channel.send(valid);
    const Embed = new MessageEmbed()
    .setColor('RANDOM')
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  }