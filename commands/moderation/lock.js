const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

    const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_SERVER` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if (!message.guild.me.hasPermission("MANAGE_SERVER")) return message.channel.send(botperms)

    const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if(message.guild == null) return message.channel.send(dm)

        var reason;
reason = args.join(" ");
if (args.length == 0) {
    reason = "No reason Provided"
}
const noperms = new MessageEmbed()
.setTitle(`You don't have enough permissions.`)
.setFooter(`Attempted by: ${message.author.tag}`,message.author.avatarURL())
if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(noperms);
await message.channel.overwritePermissions([{
 id: message.guild.id, 
deny: ['SEND_MESSAGES'] 
}]);
    const sucess = new MessageEmbed()
    .setTitle(`This channel has been locked by ${message.author.username}.`)
    .setDescription(`Reason: \n ${reason}`)
    .setFooter(`Locked by: ${message.author.tag}`,message.author.avatarURL())
    message.channel.send(sucess)
 }