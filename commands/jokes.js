const giveMeAJoke = require('discord-jokes');
const Discord = require('discord.js');
module.exports = {
	name: 'joke',
	discription: 'discription',
	execute(message, args) {
		giveMeAJoke.getRandomDadJoke (function(joke) {
			const Helpembed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle('Joke command')
				.setThumbnail('')
				.addFields(
					{ name: 'Joke right here:', value: `${joke}` },
				)
				.setTimestamp();
			message.channel.send(Helpembed);
		});
	},
};