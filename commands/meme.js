const Discord = require("discord.js");
const api = require("imageapi.js");

exports.run = async (client, message, args) => {

    const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `EMBED_LINKS` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if (!message.guild.me.hasPermission("EMBED_LINKS")) return message.channel.send(botperms)

    let subreddits = ["comedyheaven", "dank", "meme", "memes"];
    let subreddit =
      subreddits[Math.floor(Math.random() * subreddits.length)];
    let img = await api(subreddit, false);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`A meme from **r/${subreddit}**`)
      .setURL(`https://reddit.com/r/${subreddit}`)
      .setColor("RANDOM")
      .setImage(img)
      .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
    message.channel.send(Embed);
  }