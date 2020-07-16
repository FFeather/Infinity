const { Client, MessageEmbed } = require('discord.js');
const client = new Client({ partials: ['MESSAGE'] });

module.exports = async (client, message) => {
    if (message.author.bot) return;
    const snipes = message.client.snipes.get(message.channel.id) || [];
    snipes.unshift({
      content: message.content,
      author: message.author,
      image: message.attachments.first()
        ? message.attachments.first().proxyURL
        : null,
      date: new Date().toLocaleString("en-GB", {
        dataStyle: "full",
        timeStyle: "short",
      }),
    });
    snipes.splice(10);
    message.client.snipes.set(message.channel.id, snipes);
if(!message.partial) {
    const channel = message.guild.channels.cache.find(ch => ch.name === 'logging');
    if(channel) {
        const embed = new MessageEmbed()
            .setTitle('Deleted Message')
            .addField('Author', `${message.author.tag} (${message.author.id})`, true)
            .addField('Channel', `${message.channel.name} (${message.channel.id})`, true)
            .setDescription(message.content)
            .setColor('BLACK')
            .setTimestamp();
        channel.send(embed);
    }
  }
}