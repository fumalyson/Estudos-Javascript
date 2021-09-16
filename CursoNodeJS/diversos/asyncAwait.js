function soma(x) {
    return new Promise((res, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('Valor nao numero inserido! Favor inserir um numero para prosseguirmos.')
        }
        setTimeout(()=>{
            res(x + 5000)
        },3000)

    })
    
}
async function principal() {
    try {
        const resultado = await soma('#')
        console.log(`Resultado com Async/Await: ${resultado}`)

    } catch(error){
        console.log(`[ERROR] ${error}`)
    }
}

principal()