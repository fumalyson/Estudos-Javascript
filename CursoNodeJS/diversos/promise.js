//new Promise declara uma intencao, se der deu se nao der foi mal
//passando 2 parametros res(resolve) e reject(rejeitado, error)
// nao precisa ser necessariamente esses 2
// dentro da function dps de esperar os 3s, vc declara o res para executar

function soma(x) {
    return new Promise((res, reject)=>{
        setTimeout(()=>{
            //res(x + 5000)
            reject("error")
        },3000)

    })
    
}

soma(200)
//chama o resultado do promise
.then((resultado)=>{
    console.log(resultado)
    console.log('Abacaxi')
})
.catch((error)=>{
    console.log(error)
})
