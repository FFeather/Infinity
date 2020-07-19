const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const flags = {
    DISCORD_EMPLOYEE: 'Discord Employee',
    DISCORD_PARTNER: 'Discord Partner',
    BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
    BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
    HYPESQUAD_EVENTS: 'HypeSquad Events',
    HOUSE_BRAVERY: 'House of Bravery',
    HOUSE_BRILLIANCE: 'House of Brilliance',
    HOUSE_BALANCE: 'House of Balance',
    EARLY_SUPPORTER: 'Early Supporter',
    TEAM_USER: 'Team User',
    SYSTEM: 'System',
    VERIFIED_BOT: 'Verified Bot',
    VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

exports.run = async (client, message, args) => {
try {
var member;
 member = message.mentions.members.first() ||message.guild.members.cache.filter(member => member.user.username === args.join(" ")).array()[0]||message.guild.members.cache.filter(member => member.displayName === args.join(" ")).array()[0];
if (!member && args.length >=1){ 
return;
    
} if (args.length == 0 || member == message.member) {
member = message.member;
}
const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
const userFlags = await member.user.fetchFlags().then(userFlags_ => Object.entries(flags).filter(([flag]) => userFlags_.has(flag)).map(([_, flagName]) => flagName));		
const embed = new MessageEmbed()
.setDescription(`Info about <@${member.user.id}>`)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(member.displayHexColor || 'RANDOM')
			.addField('User', [
				`**• Username:** ${member.user.username}`,
				`**• Discriminator:** ${member.user.discriminator}`,
				`**• In-Server Name:** ${member.displayName}`,
				`**• ID:** ${member.id}`,
				`**• Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
				`**• Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**• Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**• Status:** ${member.user.presence.status}`,
				`**• Game:** ${member.user.presence.game || 'Not playing a game.'}`,
				`\u200b`
			])
		 message.channel.send(embed);
        } catch (err) {
                const errEm = new MessageEmbed()
                .setTitle(`An Unknown error occured`)
                .setDescription(`Please run hx!bugreport <error message> to report this. Replace <error message> with the error down below`)
                .addField(`Error:`, "```"+client.clean(err)+"```")
                message.channel.send(errEm)
            }
}