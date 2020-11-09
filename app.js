const express = require('express')
const app = express()

app.set('view engine', 'ejs')

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`${new Date()} - Servidor está ouvindo na porta ${port}.`)
})

app.get('/', (req, res) => {
    res.render('index', {
        msg: "This is a NodeJS application with automatic deploy"
    })
})