const Discord = require('discord.js');
const ms = require("ms");

exports.run = async (client, message, args) => {

  const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_MESSAGES` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(botperms)

  if (message.member.hasPermission("MANAGE_MESSAGES")) {

    let channel = message.mentions.channels.first();

    const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const time = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You did not specify your time.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const number = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`That's not a number.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const format = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You did not use the correct formatting for the time.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const prizeembed = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You did not specify a price.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const guild = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`I can't find that channel in the guild.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    const created = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`**Giveaway created in ${channel}**`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

    if(message.guild == null) return message.channel.send(dm)
    if (!args[0]) return message.channel.send(time);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m") &&
      !args[0].endsWith("s")
    )
    message.channel.send(format);
    if (isNaN(args[0][0])) return message.channel.send(number);
    if (!channel)
    message.channel.send(guild);
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(prizeembed);
    message.channel.send(created);
    let Embed = new Discord.MessageEmbed()
      .setTitle(`New giveaway!`)
      .setDescription(
        `
        Host: ${message.author}
        Prize: **${prize}**
        Time: ${args[0]}
        `
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RANDOM`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        m.delete()
        return channel.send( new Discord.MessageEmbed()
        .setDescription(
          `insufficient Ammount of people to draw a Winner.`
          )
         .setColor(`RANDOM`)
        );
      }

      let winner = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
      channel.send(
        `${winner}`
      );
      m.delete()
      channel.send( new Discord.MessageEmbed()
      .setTitle(`Giveaway Ended!`)
      .setDescription(
        `Winner: ${winner}
        Host: ${message.author}
        Prize: **${prize}**
        Time: ${args[0]}
        `
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`RANDOM`))
    }, ms(args[0]));
  }
}