const { Client, MessageAttachment, MessageEmbed  } = require('discord.js');
const config = require("./config.json");
const client = new Client();

// https://www.youtube.com/watch?v=VBj_UlaG_Ig

const prefix = "!";

client.login(config.BOT_TOKEN);

client.on("message", message => { 
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  
  // console.log("message", message);

  if(message.content.startsWith(`${prefix}delete`)) {
    message.channel.bulkDelete(50);
  }

  if(message.content.startsWith(`${prefix}ping`)) {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! Essa mensagem tem a latência de ${timeTaken}ms.`);
  }

  if(message.content.startsWith(`${prefix}time`)) {
    displayDevTeam(message);
  }

  if(message.content.startsWith(`${prefix}help`)) {
    displayHelpActions(message);
  }

  if(message.content.startsWith(`${prefix}niver`)) {
    displayTeamBirthday(message);
  }

  if(message.content.startsWith(`${prefix}gbm`)) {
    displayGbmInfo(message);
  }

  if(message.content.startsWith(`${prefix}play`)) {
    testeplay(message);
  }

  if(message.content.startsWith(`${prefix}sunset`)) {
    const attachment = new MessageAttachment('https://media-cdn.tripadvisor.com/media/photo-s/01/17/7d/c6/sunset-praia-de-santos.jpg');
    message.channel.send(attachment);
  }            
});   

client.on('ready', () => {    
  console.log(`Bot online: ${client.user.tag}!`);

  // setTimeout(() => { // in dailyTime() milliseconds run this:
  //   sendMessage();
  //   var dayMillseconds = 1000 * 60 * 60 * 24;
  //   setInterval(() => { // repeat this every 24 hours
  //     sendMessage();
  //   }, dayMillseconds)
  // }, dailyTime()) 

});

function dailyTime(){
  var d = new Date();
  return (-d + d.setHours(15,0,0,0));
}

function sendMessage(){
  const channel = client.channels.cache.find(channel => channel.name === 'teste-do-bot')
  channel.send('@here Daily Time!!!')
}

function displayDevTeam(message){
  const embed = new MessageEmbed()
  .setTitle('Time')
  .setColor('#0CFF86')
  .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7qXHYjno3E1hIyBdME6CxrNd1HKRbZ7j6g&usqp=CAU')
  .addFields(
    { name: 'Aléxia Queiroz', value: 'QA/Gestão', inline: true },
    { name: 'Andrew Dias', value: 'Desenvolvedor', inline: true },
    { name: 'Antonio Junior', value: 'Estagiário', inline: true },
    { name: 'Claudio Oliveira', value: 'Desenvolvedor', inline: true },
    { name: 'Danillo Santos', value: 'Boss', inline: true },
    { name: 'Danilo Affonso', value: 'QA', inline: true },
    { name: 'Eder Fonseca', value: 'Menor aprendiz', inline: true },
    { name: 'Gabriel Fonseca', value: 'Boss', inline: true },
    { name: 'Gabriel Laurêncio', value: 'Desenvolvedor', inline: true },
    { name: 'Gabriel Reis', value: 'Desenvolvedor', inline: true },
    { name: 'Guilherme Rabelo', value: 'Desenvolvedor', inline: true },
    { name: 'Isnack Souza', value: 'Estagiário', inline: true },
    { name: 'Juan Lima', value: 'Estagiário', inline: true },
    { name: 'Kauê Livio', value: 'Estagiário', inline: true },
    { name: 'Leandro Pereira', value: 'Desenvolvedor', inline: true },
    { name: 'Luiz Reis', value: 'Desenvolvedor/UX', inline: true },
    { name: 'Ryan Lopes', value: 'Estagiário', inline: true },
    { name: 'Victor Moreno', value: 'Desenvolvedor', inline: true },
    { name: 'Yasmin Thomaz', value: 'UX/UI', inline: true },
  )
  .setTimestamp()
  .setFooter('Devmagic Team\u200B', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7qXHYjno3E1hIyBdME6CxrNd1HKRbZ7j6g&usqp=CAU');
  message.channel.send(embed);
}

function displayHelpActions(message) {
  const embed = new MessageEmbed()
      .setTitle('Comandos')
      .setColor('#0099ff')
      .setDescription('Aqui estão os comandos disponíveis\n\n')
      .addFields(
        { name: '!time', value: 'Desenvolvedores' },
        { name: '!niver', value: 'Aniversários da equipe' },
        { name: '!delete', value: 'Deleta as últimas 100 mensagens' },
        { name: '!gbm', value: 'Links GBM'},
        { name: '!ping', value: 'Some value here'},
      )
    message.channel.send(embed);
}

function displayGbmInfo(message) {
  const args = message.content.split(' ');
  const embed = new MessageEmbed()
  switch(args[1]) {
    case 'dashboard':
      embed
      .setTitle('GBM - DASHBOARD')
      .setColor('#0099ff')
      .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/9c/ea/9f/9cea9f9c-5129-2003-00b4-25eb9c437ab3/source/512x512bb.jpg')
      .addFields(
        { name: 'DASHBOARD RODO E MARÍTIMO - Staging: https://staging-dashboard.gbm-logistica.devmagic.com.br/dashboard', value: 'Login: gbm/gbm'},
        { name: `DASHBOARD RODO E MARÍTIMO - Aceite: https://aceite-dashboard.gbm-logistica.devmagic.com.br/dashboard`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `DASHBOARD RODO E MARÍTIMO - Prod:  https://dashboard.gbm-logistica.devmagic.com.br/dashboard`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: '\u200B', value: '\u200B' },
        { name: 'DASHBOARD ESTATÍSTICA - Staging: https://staging-statistics-dashboard.gbm-logistica.devmagic.com.br/dashboard', value: 'Login: gbm/gbm'},
        { name: `DASHBOARD ESTATÍSTICA - Aceite: https://aceite-statistics-dashboard.gbm-logistica.devmagic.com.br/dashboard`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `DASHBOARD ESTATÍSTICA - Prod: https://statistics-dashboard.gbm-logistica.devmagic.com.br/dashboard`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: '\u200B', value: '\u200B' },
        { name: 'DASHBOARD RUMO - Staging: https://staging-rumo-dashboard.gbm-logistica.devmagic.com.br', value: 'Login: gbm/gbm'},
        { name: `DASHBOARD RUMO - Aceite: https://aceite-rumo-dashboard.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `DASHBOARD RUMO - Prod: https://rumo-dashboard.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
      )
    message.channel.send(embed);
    break;
    case 'tot':
      embed
      .setTitle('GBM - TOT')
      .setColor('#0099ff')
      .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/9c/ea/9f/9cea9f9c-5129-2003-00b4-25eb9c437ab3/source/512x512bb.jpg')
      .addFields(
        { name: 'TOT BACKOFFICE - Staging: https://staging-backoffice.gbm-logistica.devmagic.com.br', value: 'Login: gbm/gbm'},
        { name: `TOT BACKOFFICE - Aceite: https://aceite-backoffice.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `TOT BACKOFFICE - Prod: https://backoffice.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: '\u200B', value: '\u200B' },
        { name: 'TOT CLIENTE WEB - Staging: https://staging-web.gbm-logistica.devmagic.com.br', value: 'Login: gbm/gbm'},
        { name: `TOT CLIENTE WEB - Aceite: https://aceite-web.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `TOT CLIENTE WEB - Prod: https://web.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: '\u200B', value: '\u200B' },
        { name: 'TOT COLETOR WEB - Staging: https://staging-collector.gbm-logistica.devmagic.com.br', value: 'Login: admin/admin'},
        { name: `TOT COLETOR WEB - Aceite: https://aceite-collector.gbm-logistica.devmagic.com.br`, value: 'Login: TESTE.DEVMAGIC/dev' },
        { name: `TOT COLETOR WEB - Prod:  https://collector.gbm-logistica.devmagic.com.br`, value: 'Login: TESTE.DEVMAGIC/dev' },
        { name: '\u200B', value: '\u200B' },
        { name: 'TOT PLANEJAMENTO - Staging: https://staging-planning.gbm-logistica.devmagic.com.br', value: 'Login: gbm/gbm'},
        { name: `TOT PLANEJAMENTO - Aceite: https://aceite-planning.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `TOT PLANEJAMENTO - Prod:  https://planning.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: '\u200B', value: '\u200B' },
        { name: 'PAINEL NAVIOS - Staging: https://staging-ship-panel.gbm-logistica.devmagic.com.br', value: 'Login: gbm/gbm'},
        { name: `PAINEL NAVIOS - Aceite: https://aceite-ship-panel.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
        { name: `PAINEL NAVIOS - Prod: https://ship-panel.gbm-logistica.devmagic.com.br`, value: 'Login: gbm/2Xnx#eQjl%IB' },
      )
    message.channel.send(embed);
    break;
    case 'smartlog':
      embed
      .setTitle('GBM - SMARTLOG')
      .setColor('#0099ff')
      .setThumbnail('https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/9c/ea/9f/9cea9f9c-5129-2003-00b4-25eb9c437ab3/source/512x512bb.jpg')
      .addFields(
        { name: 'BACKOFFICE SMARTLOG - Staging: https://staging-backoffice.smartlog.gbm-logistica.devmagic.com.br', value: 'Login: root@root/D3vM4g1C, gabriel@gabriel/gabriel'},
        { name: `BACKOFFICE SMARTLOG - Aceite: https://aceite-backoffice.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: root/D3vM4g1C' },
        { name: `BACKOFFICE SMARTLOG - Prod: https://backoffice.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: root/D3vM4g1C' },
        { name: '\u200B', value: '\u200B' },
        { name: 'LIGHT BACKOFFICE SMARTLOG - Staging: https://staging-light-backoffice.smartlog.gbm-logistica.devmagic.com.br', value: 'Login: gbm@gbm/gbm, gabriel@gabriel/gabriel'},
        { name: `LIGHT BACKOFFICE SMARTLOG - Aceite: https://aceite-light-backoffice.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: gbm@bridge/gbm' },
        { name: `LIGHT BACKOFFICE SMARTLOG - Prod: https://light-backoffice.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: gbm@bridge/gbm' },
        { name: '\u200B', value: '\u200B' },
        { name: 'WEB SMARTLOG - Staging: https://staging-web.smartlog.gbm-logistica.devmagic.com.br', value: 'Login: gbm@gbm/gbm, gabriel@gabriel/gabriel'},
        { name: `WEB SMARTLOG - Aceite: https://aceite-web.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: gbm@bridge/gbm' },
        { name: `WEB SMARTLOG - Prod: https://web.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: gbm@bridge/gbm' },
        { name: '\u200B', value: '\u200B' },
        { name: 'LIGHT WEB SMARTLOG - Staging: https://staging-light-web.smartlog.gbm-logistica.devmagic.com.br', value: 'Login: gbm@gbm/gbm, gabriel@gabriel/gabriel'},
        { name: `LIGHT WEB SMARTLOG - Aceite: https://aceite-light-web.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: gbm@bridge/gbm' },
        { name: `LIGHT WEB SMARTLOG - Prod: https://light-web.smartlog.gbm-logistica.devmagic.com.br`, value: 'Login: gbm@bridge/gbm' },
      )
    message.channel.send(embed);
    break;
    default:
      message.reply(`escolha algum ambiente: dashboard, tot, smartlog`);
      break;
  }
}

function displayTeamBirthday(message){
  // const attachment = new MessageAttachment('./assets/niver.png', 'sample.png')
  const embed = new MessageEmbed()
  .setTitle('Aniversários')
  .setColor('#0099ff')
  // .attachFiles(attachment)
  // .setImage('attachment://sample.png')
  .addFields(
    { name: 'Janeiro', value: 'Andrew Dias - 06/01\nGabriel Reis - 24/01\nAléxia Queiroz - 30/01' },
    { name: 'Fevereiro', value: 'Eder Fonseca - 01/02\nDanilo Affonso - 17/02' },
    { name: 'Março', value: 'Leandro Pereira - 03/03' },
    { name: 'Abril', value: 'Gabriel Fonseca - 21/04' },
    { name: 'Maio', value: 'Gabriel Laurencio - 14/05' },
    { name: 'Junho', value: '-' },
    { name: 'Julho', value: 'Claudio Oliveira - 08/07' },
    { name: 'Agosto', value: 'Danillo Santos - 29/08' },
    { name: 'Setembro', value: 'Guilherme Rabelo - 30/09' },
    { name: 'Outubro', value: 'Luiz Reis - 04/10\nKauê Livio - 18/10' },
    { name: 'Novembro', value: '-' },
    { name: 'Dezembrbo', value: 'Victor Moreno - 21/12' },
    // { name: '\u200B', value: '\u200B' },
    // { name: 'Antonio Junior', value: 'Estagiário', inline: true },
    // { name: 'Isnack Souza', value: 'Estagiário', inline: true },
    // { name: 'Juan Lima', value: 'Estagiário', inline: true },
    // { name: 'Ryan Lopes', value: 'Estagiário', inline: true },
    // { name: 'Yasmin Thomaz', value: 'UX/UI', inline: true },
  )
  message.channel.send(embed);
}

async function testeplay(message){
  const args = message.content.split(" ");
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) return message.reply("você precisa estar em um canal de voz para tocar música!");


}

