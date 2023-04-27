module.exports = {
	name: 'tag',
	description: 'Display tags or information about errors.',
	args: true,
	aliases: ['error','err','datecode','dc'],
	execute(message, args) {
		if(!process.env[args[0]]) {
			message.channel.send('Error, tag, or datecode is not in the database.\nIf you know about this error or would like to add a datecode/tag with this name, please contribute to the database.');
		}
		else {
			message.channel.send(process.env[args[0]]);
		}
	}
}