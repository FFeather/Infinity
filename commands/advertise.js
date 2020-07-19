const { MessageEmbed } = require('discord.js');
 
const talkedRecently = new Map();
 
function createNoticeEmbed(description, author) {
  return new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(description)
    .setFooter(`Attempted by ${author.username}`, author.displayAvatarURL());
}
 
module.exports.run = (client, message, args) => {
  const author = message.author;
 
  const advertisement = args.join(' ').trim();
  if (!advertisement) return message.channel.send(createNoticeEmbed('Please provide text for your advertisement.', author));
 
  if (message.channel.type === 'dm') return message.channel.send(createNoticeEmbed('You cannot use this command in DMs; please use it in a guild that has a designated advertisements channel.', author));
 
  const hasAdvertisementsChannel = message.guild.channels.cache.some(c => c.name === 'advertisements');
  if (!hasAdvertisementsChannel) return message.channel.send(createNoticeEmbed('Your guild needs an #advertisements channel in order to use this command.', author));
 
  if (talkedRecently.has(author.id)) return message.channel.send(createNoticeEmbed('You can only post one advertisement every two hours in a guild.', author));
  talkedRecently.set(
    author.id,
    setTimeout(() => talkedRecently.delete(message.guild.id), 1000 * 60 * 60 * 2),
  );
 
  let successful = 0;
  client.guilds.cache.forEach(guild => {
    const channel = guild.channels.cache.find(c => c.name === 'advertisements');
    if (channel) {
      channel.send(
        new MessageEmbed()
          .setThumbnail(author.displayAvatarURL())
          .setTitle(`New advertisement from ${author.tag}!`)
          .setDescription(advertisement)
          .setColor(`RANDOM`)
          .setFooter(`This command is in beta | Ad by: ${author.tag}`, author.displayAvatarURL())
      );
      successful++;
    }
  });
   const succes = new MessageEmbed().setDescription(`Successfully advertised across ${successful}/${client.guilds.cache.size} guilds.`).setColor('RANDOM').setFooter(`This command is in beta | Ad by: ${message.author.tag}`, author.displayAvatarURL())
  message.channel.send(succes);
};