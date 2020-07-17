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

client.general = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/general').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/general/${file}`);

    client.commands.set(command.name, command);
}

client.moderation = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/moderation').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/moderation/${file}`);

    client.commands.set(command.name, command);
}

client.fun = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/fun').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/fun/${file}`);

    client.commands.set(command.name, command);
}

client.social = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/social').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/social/${file}`);

    client.commands.set(command.name, command);
}

client.misc = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/misc').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/misc/${file}`);

    client.commands.set(command.name, command);
}


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