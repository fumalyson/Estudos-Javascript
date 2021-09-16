const fs = require('fs')
const assets = ['css','js','images','fonts','lib']


function make(diretorio){
    diretorio.forEach((item) => {
        fs.mkdir(`projeto/asset/${item}`,{recursive:true},(err)=>{
            if(err) throw err
            console.log('Pasta criada e dale!', item)
        })
    })
}

make(assets)