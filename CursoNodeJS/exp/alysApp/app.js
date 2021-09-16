const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/users')
const cookieParser = require('cookie-parser')
const { stack } = require('./routes/admin')

app.use('/static', express.static('public'))

app.use(express.json())
app.use(cookieParser())

app.use((req, res, next)=>{
    console.log('Executando Midleware em nivel de aplication')

    return next()
})

app.get('/setcookie', (req, res)=>{
    res.cookie('user','fumalyson', {maxAge: 900000, httpOnly: true})
    return res.send('Cookie foste gravado com sucesso!')
})

app.get('/getcookie',(req, res)=>{
    let user = req.cookies['user']
    if(user){
        return res.send(user)
    }
})

app.get('/',(req, res)=>{
    res.send('Hello World!')

})
app.use('/admin', adminRoutes)

app.use('/user', usuarioRoutes)

app.get('/*',(req, res, next)=>{
    setImmediate(()=>{
        next( new Error('Temos um problema!'))
    })
})

app.use((err, req, res, next)=>{
    console.log(err,stack)
    res.status(500).json({message: err.message})
})


app.listen(3000, ()=>{
    console.log(`Server Running at: http://localhost:3000/`)
})
