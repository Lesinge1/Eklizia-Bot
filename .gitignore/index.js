const Discord = require("discord.js");
	
client.login(process.env.BOT_TOKEN);
const PREFIX = ";";

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setGame("https://eklizia.thost.tk/")
    bot.user.setStatus("online");
    console.log("Ready");
});


bot.on("message", function(message) {
    
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");
