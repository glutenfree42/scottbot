const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'h'; 

client.once('ready', () => {
     console.log('scott bot is online!') 
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix)  ||  message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    console.log (args)
    const command = args.shift().toLowerCase()

    if(command === 'i' || command === "ello" || command === 'ey'){
        message.channel.send('hey all scott here!')
    }
});
const key = require("./key.js");
client.login(key);
