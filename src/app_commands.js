const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = [
  {
    name: "ping",
    description: 'Replies with Pong!'
  },
  {
      name: "play",
      description: "Plays a song!",    
      options: [
          {
              name: "query",
              type: 3,
              description: "The song you want to play. Example: /play in the end",
              required: true,            
          }
      ]
  },
  {
    name: "stop",
    description: "Stop a song!"  
  }
]; 

const rest = new REST({ version: "9" }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
  
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands },
    );

    console.log("-- Load commands with successfully.");
  } catch (error) {
    console.log('-- Error in load commands: ', error);
  }
})();