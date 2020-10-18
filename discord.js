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

if(message.content === 'do you sell wii play'){
    message.channel.send('oh dont even get me started')
}

if(message.content === 'oh my god this room is crazy,fuck my arteries'){
    message.channel.send('there are no easter eggs here')
}

if(message.content === 'is that pose mii'){
    message.channel.send('SH*T')
}

if(message.content === 'say have you ever been in a pickle like this'){
    message.channel.send('fellas fellas im so horny')
}

if(message.content === 'your apparent in the walmart video game section and you only have 1 thing on you mind'){
    message.channel.send('I have 20$ and i need a wii game for my kid')
}

if(message.content === 'so dr usb huh you mean like one of these'){
    message.channel.send('what are you doing')
}

if(message.content === 'speaking of cartridge shaped garbage, take a look at chibi robo ziplash'){
    message.channel.send('this game blows')
}
});
const key = require("./key.js");
client.login(key);
