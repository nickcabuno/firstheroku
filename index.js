require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 5000

server.get('/api', (req, res) => {
    res.json({ message: `${process.env.WHALE} sucks lmao` })
})

server.use('*', (req, res) => {
    res.send(`<h1>yoooooooo</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

server.listen(PORT, () => {
    console.log(`${process.env.USERNAME} is listening on ${PORT} `)
})