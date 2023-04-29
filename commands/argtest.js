module.exports = {
	name: 'argtest',
	description: 'Return info about the arguments passed.',
	args: true,
	aliases: ['test'],
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');}
		else if (args[0] === 'ping') {
			return message.channel.send(`Ping! Took ${Date.now() - message.createdTimestamp}ms.`);
		};
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
