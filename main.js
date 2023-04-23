const { PREFIX, TOKEN } = require('./config.json');
const fs = require('fs');
const discord = require('discord.js');
const client = new discord.Client();
client.commands = new discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);}
client.once('ready', () => {

	console.log('logged in');
	client.user.setActivity('Lumines Supernova', { type: 'PLAYING' });
});

client.on('message', (message) => {

	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if(!message.content.startsWith(PREFIX) || message.author.bot) return;

	if(command.guildOnly && message.channel.type === 'dm') {
		return message.reply('Error: command not executable outside guilds');}

	if(command.args && !args.length) {
		return message.channel.send('Error: too many or not enough arguments');}

	if(!command) return;

	try {
		command.execute(message, args);}
		catch(error) {
		console.error(error);
		message.channel.send('An unknown error occoured');}
});

client.login(TOKEN);
