const Discord = require('discord.js');
const talkedRecently = new Set();
module.exports.run = async (client, message, args) => {
        const cooldown = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`The cooldown of this command is 10 seconds to prevent spam seems u already used the command.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if (talkedRecently.has(message.author.id)) {
                message.channel.send(cooldown);
                return;
              }
            
              talkedRecently.add(message.author.id);
              setTimeout(() => {
                talkedRecently.delete(message.author.id);
              }, 10000);
        const lowArgEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Please Provide the bug')
        .setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if(args.length < 1) return message.channel.send(lowArgEmbed);
        let d = new Date();
        let cd = d.getTime();
        let cd2 = Math.floor(Math.random()*(9223372036854775807-1+1)+1);
        let cd3 = cd + cd2;
        let reportid = cd3;
        let bugmessage = args.join(" ");
        const successEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Report submitted')
        .setDescription('**Report submitted, report ID:** `' + reportid + "`\n**Bug:** " + bugmessage)
        .setFooter(`Submitted by: ` + message.author.username, message.author.avatarURL());
        const serverBugEmbed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Bug')
        .setDescription('**Report ID:** `' + reportid + "`\n**User ID:** `" + message.author.id + "`\n**Server ID: **`" + message.guild.id + "`\n**Bug:** " + bugmessage)
        .setFooter(`Reported by: ` + message.author.tag, message.author.avatarURL());
                client.channels.cache.get(`716763487736430677`).send(serverBugEmbed)
                message.channel.send(successEmbed);
            }