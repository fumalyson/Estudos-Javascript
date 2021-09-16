let valores = [1, 2, 3, 4, 5, 6]

/* console.log(valores)
console.log(valores[0])
console.log(valores[1])
... */




/* 
*versao mais simples que a acima, declarar um posicao(pos)
* enquanto pos for menor que o tamanho do array acrescenta ++

for(let pos = 0; pos < valores.length; pos++){
  console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

/* 
* versao mais simples ainda de fazer posicionamento de array
* 'Para cada posicao(pos) na variavel composta(array, no caso valores)
* ira mostrar o numero da posicao. (${valores[pos]})  
*/

for(let pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}