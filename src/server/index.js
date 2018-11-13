const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const path = require('path')

const routes = require('./routes')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.use('/api', routes) // this is our actual API

server.use(express.static(path.join(__dirname, '../../dist'))) // server react app assets
server.use((req, res) => res.sendFile(path.join(__dirname, '../../dist/index.html'))) // fallback to the react app

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})
