//MÓDULO: arquivo de código separado que guarda funções, variáveis ou classes



//Exemplo:
//Módulo nativo https do Node.js para criar servidores locais:

const http = require('http')

const hostname =  '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Oi, eu sou node.js')
})

server.listen(port, hostname, () => {
    console.log('Server running at http://'+ hostname + ':' + port + '/')
})