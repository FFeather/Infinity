const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message, args) => {

		const member = message.client 
		const embed = new MessageEmbed()
			.setTitle('Infinity V1.0.6')
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor('RANDOM')
			.addField('General', [
				`**• Prefix:** &`,
				`\u200b`
			])
			.addField('User', [
				`**• Username:** ${member.user.username}`,
				`**• Discriminator:** ${member.user.discriminator}`,
				`**• ID:** ${member.user.id}`,
				`**• Time Created:** ${moment(member.user.createdTimestamp).format('LT')} on ${moment(member.user.createdTimestamp).format('LL')} (${moment(member.user.createdTimestamp).fromNow()})`,
				`\u200b`
            ])
            .addField('Statistics', [
				`**• Users:** ${member.users.cache.size}`,
				`**• Guilds:** ${member.guilds.cache.size}`,
				`**• Channels:** ${member.channels.cache.size}`,
                `\u200b`	
		])	
		.addField('Links', [
			`**• Website:** https://www.infinitybot.ml/`,
			`**• Support:** https://discord.com/invite/XzjcFGg`,
			`\u200b`	
	])	

            .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());	
		  message.channel.send(embed); 
    }
