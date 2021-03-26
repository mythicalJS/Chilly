const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'cookie',
	discription: 'discription',
	execute(message, args) {
		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			message.channel.send(`${message.author.username} gave ${member} a Cookie yum!`);

			const images = ['https://tenor.com/view/seseren-cute-anime-cookies-sweets-gif-17829691', 'https://tenor.com/view/cerberus-star-anime-cookie-food-gif-12381623', 'https://tenor.com/view/cookies-spongebob-cookies-and-milk-all-the-cookies-gif-13530485', 'https://tenor.com/view/manga-japanese-manga-japanese-anime-anime-kill-la-kill-gif-5492835' ];
			const image = Math.floor(Math.random() * images.length);

			message.channel.send(String([images[image]]));
		}
	},
};