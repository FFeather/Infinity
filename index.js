const Discord = require("discord.js");
const { Collection, MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const { sep } = require("path");
const { success, error, warning } = require("log-symbols");
const config = require('./config.json');
client.config = config;
const { fs, readdirSync } = require('fs');
const { readFileSync } = require('fs');
const Enmap = require('enmap');
let db = JSON.parse(fs.readFileSync("./db/database.json", "utf8"));
client.snipes = new Discord.Collection();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

["commands", "aliases"].forEach(x => client[x] = new Collection());

const load = (dir = "./commands/") => {

	readdirSync(dir).forEach(dirs => {
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		for (const file of commands) {
			const pull = require(`${dir}/${dirs}/${file}`);
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (client.commands.get(pull.help.name)) return console.warn(`${warning} Two or more commands have the same name ${pull.help.name}.`);
				client.commands.set(pull.help.name, pull);
				console.log(`${success} Loaded command ${pull.help.name}.`);

			}
			else {
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
				continue;
			}
			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
					if (client.aliases.get(alias)) return console.warn(`${warning} Two commands or more commands have the same aliases ${alias}`);
					client.aliases.set(alias, pull.help.name);
				});
			}
		}

	});
};

load();


client.login(process.env.token)

//leveling
client.on("message", message => {
  const leveled = new MessageEmbed().setDescription('Congrats, you just leveled up!').setColor('RANDOM').setFooter(message.author.username, message.author.avatarURL())
  if (message.author.bot) return;
    if (!db[message.author.id]) db[message.author.id] = {
      xp: 0,
      level: 0
    };
  db[message.author.id].xp++;
  let userInfo = db[message.author.id];
  if(userInfo.xp > 100) {
      userInfo.level++
      userInfo.xp = 0
      message.reply(leveled)
  }
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if(cmd === "level") {
      let userInfo = db[message.author.id];
      let member = message.mentions.members.first();
      let embed = new MessageEmbed()
      .setColor('RANDOM')
      .addField("Level", userInfo.level)
      .addField("XP", userInfo.xp+"/100");
      if(!member) return message.channel.send(embed)
  }
  fs.writeFile("./db/database.json", JSON.stringify(db), (x) => {
      if (x) console.error(x)
    });
  })