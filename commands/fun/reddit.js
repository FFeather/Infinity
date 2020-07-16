const Discord = require("discord.js");
const api = require("imageapi.js");

exports.run = async (client, message, args) => {

  const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `EMBED_LINKS` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send(botperms)

    const specify = new Discord.MessageEmbed().setDescription('U didn\'t specify a subreddit.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    let Subreddit = message.content.slice(8);
    if (!Subreddit)
      return message.channel.send(specify);
      try {
      let img = await api(Subreddit, false);
      const Embed = new Discord.MessageEmbed()
        .setTitle(`A random image from **r/${Subreddit}**`)
        .setColor("RANDOM")
        .setImage(img)
        .setURL(`https://reddit.com/r/${Subreddit}`)
        .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
      message.channel.send(Embed);
    } catch (err) {
      const errembed = new Discord.MessageEmbed().setColor('RANDOM').setTitle(`Subreddit: **${Subreddit}**`).setDescription('Error, probably due to an invalid subreddit.').setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
      message.channel.send(errembed);
    }
  }