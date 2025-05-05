const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Ray`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `! Ɱr . RAY#6969`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `CodeX`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://codexdev.tk](https://codexdev.tk/)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

 