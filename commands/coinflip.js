module.exports = {
	name: 'flip',
	discription: 'discription',
	execute(message, args) {
		function Cflip() {
			const rand = ['HEADS!', 'TAILS!'];

			return rand[Math.floor(Math.random() * rand.length)];
		}

		const embed = {
			'title': 'Here is the winner!',
			'description': Cflip(),
			'color': 7584788,
		};
		message.channel.send({ embed });
	},
};