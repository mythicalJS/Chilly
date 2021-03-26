const Discord = require('discord.js');
const randomAnimal = require('random-animal.js');

module.exports = {
	name: 'dog',
	discription: 'discription',
	execute(message, args) {
		randomAnimal.randomDog().then(Dog => {
			message.channel.send(Dog);
		});
	},
};