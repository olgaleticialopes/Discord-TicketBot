//ping de preparo do bot para saber se esta online. 

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {

        console.log(`CyberSafeTicket V1.5`)
    let green = '\x1b[32m',
    colorful = (color, string, reset = '\x1b[0m') => color + string + reset
    console.log(colorful(green,   
`✅ - [BOT] online!|${client.user.username}`))   
    }
}
