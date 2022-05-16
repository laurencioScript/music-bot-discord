const commands = {
    ping : async ({ player, interaction }) => {
        return interaction.reply('Pong!');
    },
    play : async ({ player, interaction }) => {

        if (!interaction.member.voice.channelId) {
            return await interaction.reply({ content: "You are not in a voice channel!", ephemeral: true });
        }
        

        if (interaction.guild.me.voice.channelId && interaction.member.voice.channelId !== interaction.guild.me.voice.channelId){
            return await interaction.reply({ content: "You are not in my voice channel!", ephemeral: true });
        }

        const query = interaction.options.get("query").value;
        const queue = player.createQueue(interaction.guild, {
            metadata: {
                channel: interaction.channel
            }
        });
                    
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            queue.destroy();
            return await interaction.reply({ content: "Could not join your voice channel!", ephemeral: true });
        }

        await interaction.deferReply();

        const {tracks} = await player.search(query, {
            requestedBy: interaction.user
        });

        const track = tracks[0];
        
        if (!track) {
            return await interaction.followUp({ content: `❌ | Track **${query}** not found!` });
        }

        queue.play(track);

        return await interaction.followUp({ content: `⏱️ | Loading track **${track.title}**!` });
    },
    stop : async ({ player, interaction }) => {
        let guildQueue = player.getQueue(interaction.guild.id);
        guildQueue.stop();
    }
}

module.exports = function({ player }){
    return {
        handle: async (interaction) => {
            
            if (!interaction.isCommand()) return;

            return commands[interaction.commandName]({ player, interaction })
        }
    }
}