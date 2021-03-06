//cria um server e joga um HTML no browser, irado!!
const { read, readFile } = require('fs')
const http = require('http')

const hostname = '127.0.0.1'
const port = 3001
const url = `http://${hostname}:${port}/`

let conteudo = ''

readFile('indexj.html',(err, data)=>{
    if(err) throw err
    conteudo = data
})

const server = http.createServer((req, res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(conteudo)
})

server.listen(port, hostname, ()=>{
    console.log(`Servidor rodando em ${url}`)
})
const open = (process.platform == 'darwin'? 'open' : process.platform == 'win32'? 'start' : 'xdg-open')

require('child_process').exec(open + '' + url)
