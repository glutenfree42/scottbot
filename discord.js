const Discord = require('discord.js');

const client = new Discord.Client();

 

client.once('ready', () => {
     console.log('scott bot is online!') 
});

client.on('message', message =>{
    if(   message.author.bot) return;

    const args = message.content.split(" ");
    console.log (args)
    const command = args.shift().toLowerCase()

    if(command === 'hi' || command === "hello" || command === 'hey'){
        message.channel.send('hey all scott here!')
    }

if(message.content === 'so tell me where it begins'){
    message.channel.send("so it all started at my desk")
}

if(message.content === "scott what are you"){
    message.channel.send('the anti virgin')
}

if(message.content === 'my favorite madden is madden 09'){
    message.channel.send('you are a fucking discrase')
}

if(message.content === 'say it with me'){
    message.channel.send('gay conversion therapy')
}

if(message.content === 'wii play do you'){
    message.channel.send('is that a threat')
}

if(message.content == 'do you sell wii play'){
    message.channel.send('oh dont even get me started')
}

if(message.content == 'coins are back bitches'){
    message.channel.send('there are no easter eggs here')
}
});
const key = require("./key.js");
client.login(key);
