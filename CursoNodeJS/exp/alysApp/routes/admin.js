const express = require('express');
const router = express.Router();

function logReq(req, res, next) {
    console.log('Executando a funcao midleware na rota de admin')
    return next()
}

router.get('/', logReq, (req, res)=>{
    res.send('Acessando a Administracao')

})
router.get('/:id',(req, res)=>{
    res.send('Acessando a Administracao com o id:' +req.params.id)

})

router.post('/:id',(req, res)=>{
    const  corpo = `Login: ${req.body.login}\n
    Senha ${req.body.senha}`
    res.send('Acessando a Administracao via POST \n'+corpo)
})

router.put('/:id',(req, res)=>{
    res.send('Acessando a Administracao via PUT')
})

router.patch('/:id',(req, res)=>{
    res.send('Acessando a Administracao via PATCH')

})

router.delete('/:id',(req, res)=>{
    res.send('Acessando a Administracao via DELETE')


})

module.exports = router