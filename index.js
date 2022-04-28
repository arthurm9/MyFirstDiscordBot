const Discord = require("discord.js") // Accessa a biblioteca através da variável Discord

require ("dotenv").config() // "require" é usado para carregar modules. Incorpora funções que estão em arquivos externos (módulos)

const TOKEN = "OTY4OTk0MTQ2OTY4ODIxNzYw.Ymm8Hw.9fWuU2ZwaU2jmcbLefCACp0tTYQ" // TOKEN fornecida no discord developer portal

const client = new Discord.Client({ // Client necessário para receber a API do discord 
    intents: [ // Interações Privilegiadas
        "GUILDS", // Guilds são grupos de canais para o usuário pode se reunir pra conversar 
        "GUILD_MESSAGES"
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

client.login(process.env.TOKEN)