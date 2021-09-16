const EventEmitter =  require('events')

class Evento extends EventEmitter {}

const meuEvento = new Evento()

meuEvento.on('Seguranca', (x, y)=>{
    console.log(`Executando o evento 'Seguranca': ${x} ${y}`)

})
meuEvento.emit('Seguranca', 'userAdmin', 'Alterou Salario')