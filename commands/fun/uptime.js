const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

let hours;
let totalSeconds = (client.uptime / 1000);
let weeks = Math.floor(totalSeconds / 604800);
let days = Math.floor(totalSeconds / 86400);
 hours = Math.floor(totalSeconds / 3600);
while (hours >= 24) {
    hours = hours -24;
}
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
                const uptimeem = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Uptime")
                .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
                
                 if (weeks != "0") {
                    uptimeem.addField("Weeks:", weeks)
                }
                if (days != "0") {
                    uptimeem.addField("Days:", days)
                }
                if (hours != "0") {
                    uptimeem.addField("Hours:", hours)
                }
                if (minutes != "") {
                    uptimeem.addField("Minutes:", minutes)
                }    
                if (seconds != "0") {
                    uptimeem.addField("Seconds:", Math.floor(seconds))
                }
                message.channel.send(uptimeem);
}