const Discord = require('discord.js'); 
const client = new Discord.Client();
const config = require('./config.json');
client.config = config;
const fs = require('fs');
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

// Creating command and aliases collection.
["commands", "aliases"].forEach(x => bot[x] = new Collection());

// A function to load all the commands.
const load = (dir = "./commands/") => {

	readdirSync(dir).forEach(dirs => {
	// we read the commands directory for sub folders and filter the files with name with extension .js
		const commands = readdirSync(`${dir}${sep}${dirs}${sep}`).filter(files => files.endsWith(".js"));

		// we use for loop in order to get all the commands in sub directory
		for (const file of commands) {
		// We make a pull to that file so we can add it the bot.commands collection
			const pull = require(`${dir}/${dirs}/${file}`);
			// we check here if the command name or command category is a string or not or check if they exist
			if (pull.help && typeof (pull.help.name) === "string" && typeof (pull.help.category) === "string") {
				if (bot.commands.get(pull.help.name)) return console.warn(`${warning} Two or more commands have the same name ${pull.help.name}.`);
				// we add the the comamnd to the collection, Map.prototype.set() for more info
				bot.commands.set(pull.help.name, pull);
				// we log if the command was loaded.
				console.log(`${success} Loaded command ${pull.help.name}.`);

			}
			else {
			// we check if the command is loaded else throw a error saying there was command it didn't load
				console.log(`${error} Error loading command in ${dir}${dirs}. you have a missing help.name or help.name is not a string. or you have a missing help.category or help.category is not a string`);
				// we use continue to load other commands or else it will stop here
				continue;
			}
			// we check if the command has aliases, is so we add it to the collection
			if (pull.help.aliases && typeof (pull.help.aliases) === "object") {
				pull.help.aliases.forEach(alias => {
					// we check if there is a conflict with any other aliases which have same name
					if (bot.aliases.get(alias)) return console.warn(`${warning} Two commands or more commands have the same aliases ${alias}`);
					bot.aliases.set(alias, pull.help.name);
				});
			}
		}

	});
};

load();


client.login(process.env.token)

//leveling
client.on("message", message => {
  const leveled = new Discord.MessageEmbed().setDescription('Congrats, you just leveled up!').setColor('RANDOM').setFooter(message.author.username, message.author.avatarURL())
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
      let embed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .addField("Level", userInfo.level)
      .addField("XP", userInfo.xp+"/100");
      if(!member) return message.channel.send(embed)
  }
  fs.writeFile("./db/database.json", JSON.stringify(db), (x) => {
      if (x) console.error(x)
    });
  })