const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

        let countries = args.join(" ");

        const noArgs = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('You are missing some args (ex: &covid all || &covid Netherlands)')
        .setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "all"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Worldwide COVID-19 Stats | 🌎`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setColor('RANDOM')
                .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());

                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`COVID-19 Stats for **${countries}**`)
                .addField('Confirmed Cases', confirmed)
                .addField('Recovered', recovered)
                .addField('Deaths', deaths)
                .setColor('RANDOM')
                .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());

                message.channel.send(embed)
            }).catch(e => {
                const invalid = new Discord.MessageEmbed()
                .setDescription('Invalid country provided')
                .setColor('RANDOM')
                .setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

                message.channel.send(invalid)
            })
        }
    }