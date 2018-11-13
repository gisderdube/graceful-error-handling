const express = require('express')
const bodyParser = require('body-parser')
const server = express()

const routes = require('./routes')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api', routes) // this is our actual API

server.use((req, res) => {
    // TODO add react app here
    res.send('APP')
})

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})
