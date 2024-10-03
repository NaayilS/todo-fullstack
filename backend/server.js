// bring in express from our server setup
import express from 'express'
// bring in cors to help us reach routes from frontend
import cors from 'cors'
//dotenv file for mongo connection
import 'dotenv/config'
//bring in the function that will make the connection to the database
import connectDB from './config.js'
//bring in the todo model
import Todo from './models/todoModel.js'

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

//a route that gets all todos and sends it to client
app.get('/todos', async (req, res) => {
    try {
        //used find method on the model to retrieve all documents from the todos collection
       const todos = await Todo.find({})
       console.log('GET /todos')
       res.status(200).json(todos)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
 })
 
//setup server to listen to a specific port
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
    connectDB()
})
