const Discord = require('discord.js');
const client = new Discord.Client();
const randomanime = require('random-anime');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'slap',
	discription: 'discription',
	execute(message, args) {

		const slapGif = ainasepics.slap();
		console.log(slapGif);

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setTitle('SLAP!')
				.setDescription(`${message.author.username} slapped ${member}`)
				.setColor(0x00AE86)
				.setImage(`${slapGif}`);

			message.channel.send(embed);
		}
	},
};