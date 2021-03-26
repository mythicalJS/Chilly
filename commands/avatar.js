/* eslint-disable no-undef */
module.exports = {
	name: 'avatar',
	discription: 'sends a picture of the user you tagged!',
	execute(message, args) {
		const avatarEmbed = require('discord.js-avatar');
		avatarEmbed(message, language = 'english');
	},
};