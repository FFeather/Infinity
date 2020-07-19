const fetch = require('node-fetch')
const {MessageEmbed}= require('discord.js')

module.exports.run = async (client, message, args) => {

        const text = args.slice(0).join(" ")
        const provide = new MessageEmbed().setDescription('Please provide some text.').setColor('RANDOM').setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());
        if(!text) return message.channel.send(provide)
        fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            let embed = new MessageEmbed()
            .setImage(body.message)
            .setColor("RANDOM")
            .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
            message.channel.send(embed)
        })
        
    }