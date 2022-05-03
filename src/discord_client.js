const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });
const { Player } = require("discord-player");

const player = new Player(client);

player.on("trackStart", (queue, track) => queue.metadata.channel.send(`🎶 | Now playing **${track.title}**!`))

client.once("ready", () => {
    console.log("-- Server online.");
});

const { handle } = require('./music_service.js')({ player });

client.on("interactionCreate", handle);

client.login(process.env.DISCORD_TOKEN);