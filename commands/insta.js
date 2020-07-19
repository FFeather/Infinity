const axios = require('axios')
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
        if (!args[0]) {
            const one = new MessageEmbed().setDescription(`Please enter a account name.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
            return message.channel.send(one)
        }
        let url, response, account, details;
        try {
            let link = args.join(" ");
            url = `https://www.instagram.com/${link}/?__a=1`;
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            const two = new MessageEmbed().setDescription(`Please enter a real account name.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL())
            return message.channel.send(two)
        }

        const embed = new MessageEmbed()
            .setTitle(`${details.is_verified ? `${details.username} <a:verified:727820439497211994>` : ` ${details.username}`} ${details.is_private ? '🔒' : ''} `)
            .setDescription(details.biography)
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "Total Posts:",
                    value: details.edge_owner_to_timeline_media.count,
                    inline: true
                },
                {
                    name: "Followers:",
                    value: details.edge_followed_by.count,
                    inline: true
                },
                {
                    name: "Following:",
                    value: details.edge_follow.count,
                    inline: true
                }
            )
            .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
        message.channel.send(embed)

    }

