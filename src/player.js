exports.playMusic = async (message) => {
  const args = message.content.split("!play ");
  console.log('>>> args', args);
  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel) return message.reply("você precisa estar em um canal de voz para tocar música!");
  if(!args[1]) return message.reply("vou dar play no que amigão?");
  await client.player.play(message, args[1], true);

}

exports.pauseMusic = (message) => {
  client.player.pause(message);
}

exports.skipMusic = (message) => {
  client.player.skip(message);
}

exports.resumeMusic = (message) => {
  client.player.resume(message);
}

