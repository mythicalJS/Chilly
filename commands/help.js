const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	name: 'help',
	discription: 'discription',
	execute(message, args) {
		const Helpembed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('emumiro bot commands:')
			.setDescription('Commands for emumiro bot!')
			.setThumbnail('')
			.addFields(
				{ name: 'Mod comamnds:', value: '**`e.ban` (bans the tagged user!)\n`e.kick` (kicks the mentioned user!)\n `e.purge` (purges an amount of messages!)**' },
				{ name: 'general comamnds', value: '**`e.avatar` (sends the avatar of the user you mentioned)\n `e.memes` (sends a meme)\n `e.joke` (sends a joke!)\n `e.ping` (sends the ping of the bot!)\n `e.say` (says a message!)\n `e.dog` (sends and image of a dog)\n `e.cat`(sends an image of a cat)\n `e.poll` (makes a poll)\n `e.flip` (flips a coin)\n `e.invite` (sends the bot invite link)\n `e.support` (sends the support link!)\n `e.hug` (hugs the person you mentioned.)\n `e.sanime` (prints the info of the anime you searched for.)\n `e.cookie` (gives a cookie to a member.)\n `e.slap` (slaps a member)\n `e.kill` (kills a member)**' },
				{ name: 'HELP', value: 'If you have any suggestions for **comamnds** and for any **bugs** to fix please contact __Midnight#9334__ for help thanks!' },
			)
			.setTimestamp();
		message.author.send(Helpembed);
		message.react('✅');
	},
};
