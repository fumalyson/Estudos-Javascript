const {writeFile} = require('fs')

function creatArquive(name, content) {
    return new Promise((resolve, reject)=>{

        writeFile(name, content, err=>{
            if(err) throw err
            resolve()
        })
    })
    
}

creatArquive('promisezArquivo.txt', 'Criando um arquivo utilizando promises')
    .then(()=> console.log('Arquivo promisezArquivo.txt criado com sucesso'))
    .catch(err => console.log(err))