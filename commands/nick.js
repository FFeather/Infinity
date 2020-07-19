const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_NICKNAMES` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
  if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(botperms)
    
    const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if(message.guild == null) return message.channel.send(dm)

    if (message.member.hasPermission("MANAGE_NICKNAME")) {


    let nick = args.join(' ')
    message.member.setNickname(nick)	
    message.channel.send(new Discord.MessageEmbed().setDescription(`Your new nickname is ${nick}`).setColor('RANDOM').setFooter(`Changed by: ` + message.author.username, message.author.avatarURL())) 
    message.reply(new Discord.MessageEmbed().setDescription(`If your nickname isn't set then your perms or roles are higher then mine.`).setColor('RANDOM').setFooter(`Changed by: ` + message.author.username, message.author.avatarURL())).then(m => setTimeout(() => {  m.delete(); message.delete(); }, 5000)); 

} else {
    const noperms = new Discord.MessageEmbed().setDescription('You need `MANAGE_NICKNAME` permissions to change your nickname.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
    message.channel.send(noperms)
  }
}
 