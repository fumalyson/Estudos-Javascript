const {writeFile} = require('fs')

writeFile("z-arquivo.txt", 'Criando um Textao com WriteFile',(err)=>{
    if(err) throw err
    console.log('Arquivo criado com sucesso!')
})