const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	discription: 'discription',
	execute(message, args) {
		const Helpembed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('emumiro invite link.')
			.setDescription('[click me to get emumiro on your own server!](https://discord.com/api/oauth2/authorize?client_id=813326246434832394&permissions=8&scope=bot)')
			.setThumbnail('')
			.setTimestamp();
		message.channel.send(Helpembed);
	},
};