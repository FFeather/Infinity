const request = require("request");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {

const err = new MessageEmbed().setColor('RANDOM').setDescription(`Country not found.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

var q = args;
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + q + "&APPID=7f4b3f7c110c3e5a77f871002fb55792"; 
request(url, function (e, r, b) {
    var p = JSON.parse(b);
    if (p.main != undefined) {
        
        const weatherem = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`Weather Of **${p.name}** in ${p.sys.country}`)
        .addField(`Temperature:`, Math.round(kelToFar(p.main.temp)) + "°F",true)
        .addField(`High of:`, Math.round(kelToFar(p.main.temp_max)) + "°F",true)
        .addField(`Low of:`, Math.round(kelToFar(p.main.temp_min)) + "°F",true)
        .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());

        message.channel.send(weatherem);
    } else {
        console.log(err);
    }
});
function kelToFar(kel) {
    kel = parseFloat(kel);
    return (kel * (9 / 5) - 459.67).toString();
   }
}