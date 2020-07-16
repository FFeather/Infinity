const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    function sleep(durationInMs) {
        return new Promise(resolve => {
          setTimeout(resolve, durationInMs);
        });
      }
      
    const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You need to say heads or tails.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

    var what = ["tails", "heads"]
    var which = what[Math.floor(Math.random() * what.length)];
    var usercho = 0;

    if(args == "heads" || args == "h") {
        usercho = "heads"
            } else if(args == "tails" || args == "t") {
                usercho = "tails"
                }
        var winner = 0;
        if(args == "heads" || args=="h"){
            if(which == "heads") {
                winner = "No one. We chose the same thing."
            }
            else if(which == "tails") {
                winner = `You're the winner, ${message.author}!`;
            }
                else if(which == "tails") {
                    winner = "I won!"
                }
                else if(which == "heads") {
                    winner = `You're the winner, ${message.author}!`;
                }
            }
            else if (args=="tails"||args=="t") {
                if(which == "tails") {
                    winner = "No one. We chose the same thing."
                }
                else if(which == "heads") {
                    winner = "I won!"
                }
        }
        else{
            message.channel.send(provide)
            return;
        }
        const ani = new Discord.MessageEmbed().setColor('RANDOM').setImage(`https://media.giphy.com/media/6jqfXikz9yzhS/giphy.gif`)
        const sentMessage = await message.channel.send(ani);    
            const result = {embed: {
                color: 'RANDOM',
                title: "Let's play heads and tails!",
                description: "Starting now!",
                fields:[{
                        name: `@${message.author.username} chose`,
                        value: `${usercho}`
                    },
                    {
                        name: client.user.username+" chose",
                        value: `${which}`
                    }, 
                    {
                        name: ` The winner is: `,
                        value: `${winner}`
                    },],
                    footer: {
                        icon_url: message.author.avatarURL,
                    },
            }}
            await sleep(5000); 
            await Promise.all([
              sentMessage.delete(),
            message.channel.send(result)        
        ]);
}