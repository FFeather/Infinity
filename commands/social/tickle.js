const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Please mention a user.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if(!args[0]) return message.channel.send(provide);

    const real = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Please mention a real user.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const self = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You can't tickle yourself.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

const user = message.mentions.members.first() ||message.guild.members.cache.filter(member => member.user.username === args.join(" ")).array()[0]||message.guild.members.cache.filter(member => member.displayName === args.join(" ")).array()[0];
if (!user) return message.channel.send(real)

if(message.member === user) return message.channel.send(self)
const embed = new Discord.MessageEmbed()
.setDescription(`<@${message.author.id}> tickles <@${user.id}>`)
.setImage(`https://media2.giphy.com/media/Ycr587EkQo8KY/giphy.gif?cid=ecf05e472c1c891baa40787088130ff2be24b4a8822e44cb&rid=giphy.gif`)
.setColor('RANDOM')
.setFooter(`Tickled by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
message.channel.send(embed);
}