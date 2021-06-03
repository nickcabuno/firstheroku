require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())
server.use(express.static(path.join(__dirname, 'client/build')))

if (process.env.NODE_ENV === 'production') {
    console.log('code is deployed :')
}

const PORT = process.env.PORT || 5000

server.get('/api', (req, res) => {
    res.json({message: `${process.env.COHORT} sucks lmao`})
})

server.use((req, res) => {
    res.status(404).json({message: "idk bruh"})
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT} `)
})