const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Please provide text.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
if(!args[0]) return message.channel.send(provide);

let link = args.join('+')

const results = new Discord.MessageEmbed()
.setTitle('**🔰 | Results**')
.setDescription(`[Google](https://www.google.com/search?q=${link}) \n\n[YouTube](https://www.youtube.com/results?search_query=${link}) \n\n[Discord](https://discord.com/guild-discovery?query=${link}&offset=0&limit=12&preferredLocale=en-US&categoryId=-1) \n\n[Reddit](https://www.reddit.com/search/?q=${link}) \n\n[Top.gg-Bots](https://top.gg/search?q=${link}) \n\n[Top.gg-Servers](https://top.gg/servers/search?q=${link}) \n\n[Github](https://github.com/search?q=${link}) \n\n[Spotify](https://open.spotify.com/search/${link}) \n\n[Twitch](https://www.twitch.tv/search?term=${link})`)
.setColor('RANDOM')
.setFooter(`${link} | Searched by: ` + message.author.username, message.author.avatarURL());
message.channel.send(results);
}