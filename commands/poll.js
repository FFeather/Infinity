const Discord = require("discord.js");

exports.run = async (client, message, args) => {

    const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_MESSAGES` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(botperms)

    const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if(message.guild == null) return message.channel.send(dm)

    if (message.member.hasPermission("MANAGE_MESSAGES")) {

        const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Please provide a question.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if(!args[0]) return message.channel.send(provide);

    let question = args.join(" ")

    const Embed = new Discord.MessageEmbed()
      .setTitle(`New poll!`)
      .setDescription(question)
      .setFooter(`Poll by: ` + message.author.username, message.author.avatarURL())
      .setColor(`RANDOM`);
    let msg = await message.channel.send(Embed);
    await msg.react("👍");
    await msg.react("👎");
} else {
    const noperms = new Discord.MessageEmbed().setDescription('You need `MANAGE_MESSAGES` permissions to make create a poll.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    message.channel.send(noperms)
  }
}