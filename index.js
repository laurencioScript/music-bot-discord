const { Client, MessageAttachment, MessageEmbed  } = require('discord.js');
const { Player } = require("discord-player");

const config = require("./config.json");
const playerMusic = require('./src/player');
const util = require('./src/util');

const client = new Client();
const player = new Player(client);
const prefix = "!";

client.player = player;

client.login(process.env.BOT_TOKEN || config.BOT_TOKEN);

const commands = {
  time: util.displayDevTeam,
  help: util.displayHelpActions,
  niver: util.displayTeamBirthday,
  gbm: util.displayGbmInfo,
  delete: util.deleteMessage,
  pong: util.pong,
  sunset: util.sunset,
  play: playerMusic.playMusic,
  pause: playerMusic.pauseMusic,
  resume: playerMusic.resumeMusic,
  skip: playerMusic.skipMusic,
  stop: client.player.stop
}

client.on("message", message => { 

  console.log('>>> message.content', message.content);
  const command = message.content.replace('!','');

  if(message.author.bot) return;

  if(!commands[command]) return

  commands[command](message);
             
});   

client.on('ready', () => {    
  console.log(`Bot online: ${client.user.tag}!`);
  setInterval(function() {
    util.checkDate();
  },60000);

});

client.player.on('trackStart', (message, track) => {
  message.channel.send(`Now playing ${track.title}...`);
})

client.player.on('trackAdd', (message, queue, track) => {
  message.channel.send(`${track.title} has been added to the queue!`);
})

