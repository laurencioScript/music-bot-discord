const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const commands = [{
    name: "play",
    description: "Plays a song!",    
    options: [
        {
            name: "query",
            type: 3,
            description: "The song you want to play",
            required: true,            
        }
    ]
}]; 

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