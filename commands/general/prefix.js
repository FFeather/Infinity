var prefix_cmd = () => {
    if(!args[0]){
        let msg = new Discord.MessageEmbed()
        .setDescription(`The prefix in this server is ***${prefix}***`)
        .setColor('YELLOW')
        message.channel.send(msg);
    }else if(args[0] == "change"){
        if(!args[1]){
            let msg3 = new Discord.MessageEmbed()
            .setDescription("Please specify a ***prefix***")
            .setColor('YELLOW')
            return message.channel.send(msg3)
        }else{
            db.set(`prefix_${message.guild.id}`, args[1])
            let msg2 = new Discord.MessageEmbed()
            .setDescription(`Set bot prefix to ***${args[1]}***`)
            .setColor('YELLOW')
            message.channel.send(msg2)
        }
    }
}