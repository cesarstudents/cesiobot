// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js")
const config = require("./config.json")


// Add the Intents that the Bot will use
// Discord API for the Intents: https://discord.com/developers/docs/topics/gateway#list-of-intents
const myIntents = new Intents()
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES)


// Create a new client instance
const client = new Client({ intents: myIntents})


// When the client is ready, run this code (only once)
client.on('ready', () => {
	console.log('Ready!')
})

const prefix = "//"
client.on("message", (message) =>{
	// Evita que o Bot responda outro Bot, responda o DM ou que ele responda sem ser chamado o prefixo
	if (message.author.bot == true) return
	if (message.channel.type == "dm") return
	if (!message.content.startsWith(prefix)) return

	// Corta o prefixo da mensagem e pega apenas o comando em si
	const argument = message.content.slice(prefix.length)

	switch(argument) {
		case "help": message.channel.send ("Comandos Disponiveis:\n//oi\n//420\n//69\n//gay\n//windows")
		break;

		case "oi": message.channel.send ("Olá :wave:")
		break;

		case "420": message.channel.send ("Smoke Weed Everyday")
		break;

		case "69": message.channel.send ("Eta bixo secso kkkkk")
		break;

		case "gay": message.channel.send ("https://pics.me.me/ur-the-biggest-gay-36954314.png")
		break;
		
		case "windows": message.channel.send ("O cara usa windows mano mt troxa pqp kkkkkk")
		break;

		default: message.channel.send("Ocê é burro carai? Tem esse comando não, digita //help aí.")
		break;
	}
})

// Login to Discord with your client's token
client.login(config.token)