
module.exports = {
	name: 'help',
	description: 'List all commands (`.help list`) or info about specific commands.',
	args: true,
	aliases: [],
	execute(message, args) {
		if (args[0] != 'list') {
			try {helpcommand = require(`./${args[0]}.js`);}
			catch(error) {console.error(error); message.channel.send('Command not found'); return;}
			message.channel.send(helpcommand.description + ' Aliases: ' + helpcommand.aliases);}
		else if (args[0] === 'list' || args[0] === '') {
			message.channel.send('Commands: \n    `argtest` (aliases: `test`)\n    `help`\n    `tag` (aliases: `error`, `err`)')
		}
	}
}