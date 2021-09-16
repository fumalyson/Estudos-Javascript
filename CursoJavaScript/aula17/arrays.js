let num = [5, 8, 2, 4, 0]
num.push(3) // adiciona um elemento no array
num.sort() // coloca os arrays em ordem!!
console.log(num)
console.log(`O Array tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor e ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor nao foi encontrado')

}else{
console.log(`O valor 8 esta na posicao ${pos}`)
}
