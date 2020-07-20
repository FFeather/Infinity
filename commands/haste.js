const hastebin = require("hastebin-gen");
const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Usage: &haste <file type> <message>`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
if(!args[0]) return message.channel.send(provide);

var language = args[0]
var text = args.slice(1).join(' ')
const haste = await hastebin(text, { extension: language });
message.channel.send(new Discord.MessageEmbed().setDescription(`We created the haste here's the link ${haste}`).setColor('RANDOM').setFooter(`Requested by: ` + message.author.username, message.author.avatarURL()));
}