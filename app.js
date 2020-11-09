const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`${new Date()} - Servidor está ouvindo na porta ${port}.`)
})

app.get('/', (req, res) => {
    res.send("This is a node page.")
    console.log(`${new Date()} - Página principal foi acessada.`)
})