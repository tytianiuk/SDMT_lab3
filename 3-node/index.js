'use strict'

const express = require('express')

const app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send('Docker and Node.js: Tytianiuk Artem IM-22')
})

app.listen(PORT, () => {
    console.log(`Сервер запущено на порті ${PORT}`)
})
