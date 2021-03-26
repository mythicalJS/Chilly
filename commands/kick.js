// this is the kick command.
module.exports = {
	name: 'kick',
	discription: 'kicks the member that you tagged!',
	execute(message, args) {
		if(!message.member.hasPermission('KICK_MEMBERS')) {
			message.channel.send('You dont have enough permissions to do that!');
			return;
		}
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				member
					.kick('Optional reason that will display in the audit logs')
					.then(() => {
						message.reply(`Successfully kicked ${user.tag}`);
					})
					.catch(err => {
						message.reply(`I was unable to kick ${user.tag}`);
						console.error(err);
					});
			} else {
				message.reply('That user isn\'t in this guild!');
			}
		} else {
			message.reply('You didn\'t mention the user to kick!');
		}
	},
};