const name = module.exports.name

module.exports = {
	name: 'help',
	description: 'Commands help message.',
	args: true,
	aliases: ['h'], 
	execute(message, args) {
		message.channel.send(`Resource tags:\n${process.env.tags}`);
	},
};