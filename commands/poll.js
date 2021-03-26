const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
	name: 'poll',
	discription: 'discription',
	execute(message, args) {
		const reactionNumber = args[0];
		const embed = new Discord.MessageEmbed()
			.setColor(0xffffff)
			.setFooter('note: any reactions that are not part of the poll will be removed')
			.setDescription(args.join(' '))
			.setTitle(`Poll created by ${message.author.username}`);
		message.channel.send(embed).then(async function(messages) {
			messages.react('✔');
			messages.react('❌');
		},
		);
		message.delete({
			timeout: 1000,
		});
	},
};