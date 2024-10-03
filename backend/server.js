// bring in express from our server setup
import express from 'express'

//create express app
const app = express()

//choosing a port
const PORT = 8080

//at least one basic route for testing purposes
app.get('/test', (req, res) => {
    res.json('Hello (from Server)!')
})

//setup server to listen to a specific port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})