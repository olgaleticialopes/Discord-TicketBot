//tela que o usuario ve para abrir um ticket

const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Selecione uma opção...')
					.addOptions([
						{
							label: 'Falar com o suporte',
							emoji: '👩‍💻',
							value: 'suporte',
						},
						{
							label: 'Fazer uma denúncia',
							emoji: '🚨',
							value: 'denuncia',
						},
						{
							label: 'Reportar Bug',
							emoji: '🐛',
							value: 'bugs',
						},
						{
							label: 'Tirar dúvidas',
							emoji: '❔',
							value: 'duvidas',
						},

					]),
			);

        message.channel.send({
            embeds: [{
                title: 'CyberSafeZone', 
                description: '> Está precisando de ajuda? abra um ticket! assim poderemos te ajudar!', 
                color: "#ffcbdb", 
				image:  {url: 'https://images-ext-2.discordapp.net/external/3BD3ewBKsvVAs--4JoeaXqsZ5CabEZOtE-m_1T8rCFU/https/whatifgaming.com/wp-content/uploads/2022/03/Living-the-Mountain-Life.jpg'}, //imagem que vai aparecer para a abertura do ticket
				footer: {text: '© CyberSafeZone - Todos os direitos reservados'} //Nome da sua preferência
            }],
            components: [row]            
        })
    }
}