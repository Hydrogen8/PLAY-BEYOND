const client = require("discord.js");
module.exports = {
	name: 'argtest',
	description: 'Return info about the arguments passed.',
	args: true,
	guildOnly: true,
	aliases: ['test'],
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');}
		else if (args[0] === 'ping') {
			return message.channel.send(`Ping! Took ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
		};
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};
