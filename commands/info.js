const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

  const userID = "709441303351394314"
  if(!message.author === userID)
  message.delete()
  const info = new Discord.MessageEmbed().setDescription('**Infinity Support Server - Information** \nThis is the Official Support Server of Infinity here you can use/play with infinity and of course we give support for the bot here. \n\nInfinity is a multi-purpose bot ready to boost up your Discord server Also features auto-moderation, administration, fun and much more! \n\n``` ``` \n**Infinity Support Server - Rules** \nBy joining this discord server you automatically accept all of the rules listed below. We as staff preserve the right to punish you for your behavior even if a rule is not listed below. \n\n``` ``` \n- No cursing. \n- Only speak English in chat or voice channels. \n- Remain respectful to everyone at all times. \n- Keep channels on topic. \n- Do not harass other members of this server. \n- Do not spam or use to much caps. \n- Do not advertise your server/website/discord wether in the discord server or in direct messages. \n\n``` ``` \n**Infinity Support Server - Further info** \n\nPrefix: `&` \nWebsite: https://www.infinitybot.ml/ \nSupport: https://discord.gg/haDAWQa \nInvite: [click here to invite infinity](https://discord.com/oauth2/authorize?client_id=728986900161101846&permissions=0&redirect_uri=http%3A%2F%2Finfinitybot.ml%2F&scope=bot) \n\n``` ```').setImage(`https://cdn.discordapp.com/attachments/731935979618959462/731938817908408321/infinity.png`).setColor('#7289DA')
  message.channel.send(info);
}