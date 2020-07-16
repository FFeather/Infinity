const Discord = module.require("discord.js");

module.exports = async (client, member) => {

const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

  const embed = new Discord.MessageEmbed().setTitle('**:rocket: | Bye!**').setDescription(`${member.user.tag} left. \nWere sad to see you go.`).setColor('RANDOM').setThumbnail(member.user.displayAvatarURL())
	channel.send(embed);
}
