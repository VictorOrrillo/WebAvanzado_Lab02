const express = require('express')

const app = express()

app.get('/',(req,res) => {
    res.sendFile('./static/inicio.html',{
        root: __dirname
    })
})

app.get('/formulario',(req,res) => {
    res.sendFile('./static/formulario.html',{
        root: __dirname
    })
})

app.get('/nosotros',(req,res) => {
    res.sendFile('./static/nosotros.html',{
        root: __dirname
    })
})

app.get('/n_servicios',(req,res) => {
    res.sendFile('./static/n_servicios.html',{
        root: __dirname
    })
})

app.get('/c_clientes',(req,res) => {
    res.sendFile('./static/c_clientes.html',{
        root: __dirname
    })
})

app.use((req, res) => {
    //res.status(404).send('No se encontro tu pagina ...!!!')
    res.end('No se encontro la pagina')
})

app.listen(3001)
console.log(`Server on port ${3001}`)