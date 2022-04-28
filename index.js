require ("dotenv").config() // "require" é usado para carregar modules. Incorpora funções que estão em arquivos externos (módulos)

const Discord = require("discord.js") // Accessa a biblioteca através da variável Discord

const client = new Discord.Client({ // Client necessário para receber a API do discord 
    intents: [ // Interações Privilegiadas
        "GUILDS", // Guilds são grupos de canais para o usuário pode se reunir pra conversar 
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
}) 

// First Event:
client.on("ready", () => { // ()=> "Anonymous Function" == quando um evento do cliente estiver pronto ele executa a função
    // ´´ "backtick" ou acento grave != de "" e pode vir acompanhada de placeholders ({expressao}). Texto multi-linhas/Interpolação
    console.log(`Logged in as ${client.user.tag}`)// Imprime o nome do usuario do bot quando efetua o login
})

// Logar com o bot criado -> node index.js (estar dentro da pasta) seguido de ctrl + C para sair da execução

// First command:
client.on("messageCreate", (message) => { // Evento que reconhece a mensagem entrada e responde com outra.
    if(message.content == "hi"){
        message.reply("Hello World!")
    }
})

const welcomeChannelId = "969052725461528636"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`) // Guild é o objeto
})
client.login(process.env.TOKEN)