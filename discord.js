const Discord = require('discord.js');

const client = new Discord.Client();

 

client.once('ready', () => {
     console.log('scott bot is online!') 
});

client.on('message', message =>{
    if(   message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    console.log (args)
    const command = args.shift().toLowerCase()

    if(command === 'hi' || command === "hello" || command === 'hey'){
        message.channel.send('hey all scott here!')
    }

if(command === 'so tell me where it begins'){
    message.channel.send("so it all started at my desk")
}

if(command === "scott what are you"){
    message.channel.send('the anti virgin')
}

if(command === 'my favorite madden is madden 09'){
    message.channel.send('you are a fucking discrase')
}

if(command === 'say it with me'){
    message.channel.send('gay conversion therapy')
}

if(command === 'wii play do you'){
    message.channel.send('is that a threat')
}

if(command == 'do you sell wii play'){
    message.channel.send('oh dont even get me started')
}
});
const key = require("./key.js");
client.login(key);
