const Discord = require("discord.js");
const fetch = require('node-fetch')

module.exports.run = async (client, message, args) => {

    let imgav = message.author.displayAvatarURL();
    fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${imgav}`)
      .then((res) => res.json())
      .then((body) => {
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.username} got deepfried.`)
          .setImage(body.message)
          .setColor("RANDOM")
          .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
        message.channel.send(embed);
      });
    
  }