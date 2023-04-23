require('dotenv').config({ path: '../data/tagdb.env'});
module.exports = {
	name: 'tag',
	description: 'Print contents of a tag from the tag database.',
	args: true,
	aliases: [],
	execute(message, args) {
		if(!process.env[args[0]]) {
			message.channel.send('Tag does not exist');
		}
		else {
			message.channel.send(process.env[args[0]]);
		}
	}
}