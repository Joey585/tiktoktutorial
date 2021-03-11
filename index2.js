const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
});

client.login('ODE5NDc2MTQwMDYyMDE1NTE4.YEnKoA.u9dXMmyrB0B8xUPT96AqAvIcwXQ');
