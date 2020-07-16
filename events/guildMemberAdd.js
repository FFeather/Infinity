const Discord = module.require("discord.js");

module.exports = async (client, member) => {

const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
	if (!channel) return;

  const embed = new Discord.MessageEmbed().setTitle('**:wave: | Welcome!**').setDescription(`Welcome ${member} to **__${member.guild.name}__**. \nEnjoy your stay!`).setColor('RANDOM').setThumbnail(member.user.displayAvatarURL())
	channel.send(embed);
}
