const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

let botMsg = await message.channel.send("〽️ Pinging")
botMsg.edit("️Ping complete:",new Discord.MessageEmbed()
.setTitle(`Pong!`)
.addField(`Server Ping:`,  (botMsg.createdAt - message.createdAt) + "ms",true)
.addField(`API Ping:`, Math.round(client.ws.ping) + "ms",true)
.setColor('RANDOM')
.setFooter(`Requested by: ` + message.author.username, message.author.avatarURL()))
}
function msToTime(ms){
days = Math.floor(ms / 86400000); // 24*60*60*1000
daysms = ms % 86400000; // 24*60*60*1000
hours = Math.floor(daysms / 3600000); // 60*60*1000
hoursms = ms % 3600000; // 60*60*1000
minutes = Math.floor(hoursms / 60000); // 60*1000
minutesms = ms % 60000; // 60*1000
sec = Math.floor(minutesms / 1000);

let str = "";
if (days) str = str + days + "d, \n";
if (hours) str = str + hours + "h, ";
if (minutes) str = str + minutes + "m, \n";
if (sec) str = str + sec + "s \n";

return str;
}