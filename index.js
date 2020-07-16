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

client.commands = new Enmap();

fs.readdir("./commands/general", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/general/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/moderation", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/moderation/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/fun", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fun/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/misc", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/misc/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

fs.readdir("./commands/social", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/social/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
  });
});

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
  const args = message.content.slice(config.default_prefix.length).trim().split(/ +/g);
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