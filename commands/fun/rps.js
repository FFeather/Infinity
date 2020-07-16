const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    const provide = new Discord.MessageEmbed().setColor('RANDOM').setDescription(`You need to say rock, paper or scissors.`).setFooter(`Attempted by: ` + message.author.username, message.author.avatarURL());

    var what = ["Rock", "Paper", "Scissors"]
    var which = what[Math.floor(Math.random() * what.length)];
    var usercho = 0;
    if(args == "rock" || args == "r") {
usercho = "Rock"
    } else if(args == "paper" || args == "p") {
        usercho = "Paper"
    } else if(args == "scissors" || args == "s") {
        usercho = "Scissors"
        }
var winner = 0;
if(args == "rock" || args=="r"){
    if(which == "Rock") {
        winner = "No one. We chose the same thing."
    }
    else if(which == "Paper") {
        winner = "I won!"
    }
    else if(which == "Scissors") {
        winner = `You're the winner, ${message.author}!`;
    }
    }
    else if(args=="paper"|| args=="p"){
        if(which == "Paper") {
            winner = "No one. We chose the same thing"
        }
        else if(which == "Scissors") {
            winner = "I won!"
        }
        else if(which == "Rock") {
            winner = `You're the winner, ${message.author}!`;
        }
    }
    else if (args=="scissors"||args=="s") {
        if(which == "Scissors") {
            winner = "No one. We chose the same thing."
        }
        else if(which == "Rock") {
            winner = "I won!"
        }
        else if(which == "Paper") {
            winner = `You're the winner, ${message.author}!`;
        }
}
else{
    message.channel.send(provide)
    return;
}
    const rpsem = {embed: {
        color: 'RANDOM',
        title: "Let's play rock, paper, and scissors!",
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
                name: ` The winner is... `,
                value: `${winner}`
            },],
            footer: {
                icon_url: message.author.avatarURL,
            },
    }}
 
    message.channel.send(rpsem)
}
