console.log('exibe msg no console')

console.error(new Error('Exibe uma mensagem de Error'));

const carros = ['GM', 'Civic', 'Ford', 'VW', 'Renault', 'Audi']

console.table(carros) //coloca as innfo numa tabela

const dados = {name: 'Alyson Fernando', empresa: 'Paliari Eng'}

console.table(dados) // tambem faz isso com objetos


console.count('Processo') // adiciona uma contagem ao processo
console.count('Processo')
console.count('Processo')
console.count('Processo')

console.countReset('Resetando Processo')

console.count('Processo')

console.time('Contador')
for (let index = 0; index < 10; index++) {
    console.log('Hello')
    
}
console.timeEnd('Contador') // ve o tempo que demora para executar um codigo.

console.assert(true, 'faca alguma coisa')

console.assert(false, ' Vish $s, que pena', 'Nao funcionou')
