const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if (!args.length) {
    const help = new Discord.MessageEmbed()
    .setAuthor('| Help menu', 'https://cdn.discordapp.com/avatars/728986900161101846/d2628b0abb81c343e12441f001b659d2.png?size=4096', 'https://jectaunscripted.gitbook.io/infinity/commands')
    .setDescription('To see commands in a category use: `&help [category]`.')
    .addField(`📖 | general`, `Infinity's standard bot commands.`,true)
    .addField(`🚨 | moderation`,`Moderation commands to keep your server safe.`,true)
    .addField(`🎮 | fun`,`Memes, games and much more fun commands.`,true)
    .addField(`👥 | social`, `Interact with people in a fun way.`,true)
    .addField(`🔰 | misc`, `Other useful commands.`,true)
    .addField(`🚀 | all`, `All commands of Infinity.`,true)
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL());
    message.channel.send(help);
  }

  if (args[0] === 'general') {
    const gen = new Discord.MessageEmbed()
    .setTitle('**📖 | General help**')
    .setDescription('Everything in [] is required | Everything in <> is optional. \n\n**help <category>** \nShows the help menu. \n\n**level** \nShows your level. \n\n**advertise [message]** \nAdvertise your guild. \n\n**serverinfo** \nShows info about the guild. \n\n**botinfo** \nShows info about infinity. \n\n**userinfo <mention>** \nShows info about the user.')
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    return message.channel.send(gen);
  }
  else if (args[0] === 'moderation') {
    const mod = new Discord.MessageEmbed()
    .setTitle('**🚨 | Moderation help**')
    .setDescription('Everything in [] is required | Everything in <> is optional. \n\n**ann [message]** \nMake an announcement @every1 ping. \n\n**poll [question]** \nStart a poll. \n\n**ban [mention]** \nBan the mentioned user. \n\n**kick [mention]** \nKick the mentioned user. \n\n**lock <reason>** \nLocks the channel. \n\n**unlock** \nUnlocks the channel. \n\n**purge [1-99]** \nBulks messages in the channel. \n\n**slowmode [seconds]** \nChange the slowmode of the channel.')
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    return message.channel.send(mod);
  }
  else if (args[0] === 'fun') {
    const fun = new Discord.MessageEmbed()
    .setTitle('**🎮 | Fun help**')
    .setDescription('Everything in [] is required | Everything in <> is optional. \n\n**meme** \nSends a random meme from reddit. \n\n**ascii [message]** \nSends your message in ascii. \n\n**avatar <mention>** \nShows avatar. \n\n**search [message]** \nSearch something on multiple platforms. \n\n**ping** \nShows latency. \n\n**uptime** \nShows the uptime of infinity. \n\n**weather [country]** \nDisplay\'s the weather. \n\n**nick [message]** \nSet your nickname. \n\n**rps [r, p, s]** \nPlay rock, paper and scissors. \n\n**flipcoin [h, t]** \nPlay heads or tails. \n\n**8ball [question]** \nAsk a question. \n\n**say [message]** \nLet the bot say something. \n\n**reddit [subreddit]** \nShows a random image from the subreddit. \n\n**snipe** \nSnipes the latest message. \n\n**achi [message]** \nGenerates a minecraft achievement. \n\n**clyde [message]** \nLet clyde say something. \n\n**deepfry** \nDeepfry your avatar.')
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    return message.channel.send(fun);
  }
  else if (args[0] === 'misc') {
    const misc = new Discord.MessageEmbed()
    .setTitle('**🔰 | Misc help**')
    .setDescription('Everything in [] is required | Everything in <> is optional. \n\n**botinvite** \nInvite infinity. \n\n**support** \nSends an invite for our discord server. \n\n**bug [bug]** \nReport a bug. \n\n**suggest [suggestion]** \nSuggest something. \n\n**covid [country/all]** \nShows covid stats.')
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    return message.channel.send(misc);
  }
  else if (args[0] === 'social') {
    const social = new Discord.MessageEmbed()
    .setTitle('**👥 | Social help**')
    .setDescription('Everything in [] is required | Everything in <> is optional. \n\n**hug [mention]** \nHug someone. \n\n**kiss [mention]** \nKiss someone. \n\n**poke [mention]** \nPoke someone. \n\n**punch [mention]** \nPunch someone \n\n**slap [mention]** \nSlap someone. \n\n**tickle [mention]** \nTickle someone. \n\n**wave [mention]** \nWave to someone.')
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    return message.channel.send(social);
  }
  else if (args[0] === 'all') {
    const all = new Discord.MessageEmbed()
    .setTitle('**🚀 | All commands**')
    .setDescription('We moved our all commands help to our documentation to prevent clutter in the chat. \n\n[click here](https://jectaunscripted.gitbook.io/infinity/commands).')
    .setColor('RANDOM')
    .setFooter(`Requested by: ` + message.author.username, message.author.avatarURL())
    return message.channel.send(all);
  }

};