const errordb = require('dotenv').config({ path: '../data/errordb.env'});
module.exports = {
	name: 'error',
	description: 'Display information about errors.',
	args: true,
	aliases: ['err'],
	execute(message, args) {
		if(!process.env[args[0]]) {
			message.channel.send('Error is not in the database.\nIf you know about this error, please contribute to the error database.');
		}
		else {
			message.channel.send(process.env[args[0]]);
		}
	}
}