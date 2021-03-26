const Discord = require('discord.js');
const client = new Discord.Client();
const randomanime = require('random-anime');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'hug',
	discription: 'discription',
	execute(message, args) {

		const hug1Gif = ainasepics.hug();
		console.log(hug1Gif);

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			message.channel.send(`${message.author} gave ${member} a hug!`);
			message.channel.send(hug1Gif);
		}
	},
};