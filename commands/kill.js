const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'kill',
	discription: 'discription',
	execute(message, args) {
		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			message.channel.send(`${message.author.username} has killed ${member} Get REKT kid.`);

			const images = ['https://cdn.weeb.sh/images/BJO2j1Fv-.gif', 'https://cdn.weeb.sh/images/HyXTiyKw-.gif', 'https://cdn.weeb.sh/images/B1qosktwb.gif', 'https://tenor.com/view/manga-japanese-manga-japanese-anime-anime-kill-la-kill-gif-5492835' ];
			const image = Math.floor(Math.random() * images.length);

			message.channel.send(String([images[image]]));
		}
	},
};