const Discord = require('discord.js');
const randomAnimal = require('random-animal.js');

module.exports = {
	name: 'cat',
	discription: 'discription',
	execute(message, args) {
		randomAnimal.randomCat().then(cat => {
			message.channel.send(cat);
		});
	},
};