const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var rand = ["Yes", "No", "Just stop it..", "What do you think?", "Maybe", "Never", "Yep", "Why not?", "Sure", "Good", "Bad"];
    var randomMessage = rand[Math.floor(Math.random() * rand.length)];
    var result = new Discord.MessageEmbed().setDescription(`:8ball: ${randomMessage} :8ball:`).setFooter(`Question by: ` + message.author.username, message.author.avatarURL())
    message.channel.send(result)
}