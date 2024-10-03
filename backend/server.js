// bring in express from our server setup
import express from 'express'
// bring in cors to help us reach routes from frontend
import cors from 'cors'
//dotenv file for mongo connection
import 'dotenv/config'
//bring in the function that will make the connection to the database
import connectDB from './config.js'
//create express app
const app = express()

//choosing a port
const PORT = 8080

//Setup Cors middleware from express application
app.use(cors())

//at least one basic route for testing purposes
app.get('/test', (req, res) => {
    res.json('Hello (from Server)!')
})
 
//setup server to listen to a specific port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    connectDB()
})
