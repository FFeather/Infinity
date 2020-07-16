const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    const botperms = new Discord.MessageEmbed().setColor('RANDOM').setDescription('Sorry, i don\'t have `MANAGE_MESSAGES` perms for that.').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(botperms)

const specify = new Discord.MessageEmbed().setDescription('Please specify a number to purge.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
const number = new Discord.MessageEmbed().setDescription('It must be a number between [1-99].').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
const arg = new Discord.MessageEmbed().setDescription('Please specify one number between [1-99].').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
const api = new Discord.MessageEmbed().setDescription('Due to discord API limitations I cannot delete messages that are more than 14 days old and are in a shorter amount then 100. Sorry!').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
const noperms = new Discord.MessageEmbed().setDescription('U need MANAGE_MESSAGES permissions to use this command.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())

if(message.member.hasPermission('MANAGE_MESSAGES')) {

    const dm = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`Sorry, this command only works in server/guilds.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
    if(message.guild == null) return message.channel.send(dm)
    if (args.length < 1) {
        message.channel.send(specify);
    } else if (args.length > 1) { 
        message.channel.send(arg);
    }else {
        if(isNaN(args[0])) {
            message.channel.send(number); 
        } else {
        message.delete();
        let delete_number = Number(args[0]);
        message.channel.bulkDelete(delete_number+1)
            .then(messages => {
                const sucessem = new Discord.MessageEmbed()
                .setDescription(`Successfully purged ${delete_number} Messages`)
                .setFooter(`Purged by: ${message.author.username}`,message.author.avatarURL())
                .setColor('RANDOM')
                message.channel.send(sucessem).then(m => setTimeout(() => {  m.delete(); }, 5000));
        
        })
            .catch((err) => {
                console.log(err.message);
                console.log('This is just for the embed to work dont worry we will fix it soon')
                message.channel.send(api).then(m => setTimeout(() => {  m.delete(); message.delete(); }, 5000)); 
        } )
        }
    }
} else {
    message.channel.send(noperms).then(m => setTimeout(() => {  m.delete(); message.delete(); }, 5000)); 
}
}