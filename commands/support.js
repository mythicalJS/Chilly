const Discord = require('discord.js');

module.exports = {
	name: 'support',
	discription: 'discription',
	execute(message, args) {
		const Helpembed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('emumiro support invite link.')
			.setDescription('[click me to go to emumiro suppoprt!](https://discord.gg/PBzY9YVuxf)')
			.setThumbnail('')
			.setTimestamp();
		message.channel.send(Helpembed);
	},
};