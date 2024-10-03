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

//Setup Cors middleware 
app.use(cors())

//data from client stored in request.body and formatted as json
app.use(express.json())

//choosing a port
const PORT = 8080

//at least one basic route for testing purposes
app.get('/test', (req, res) => {
    res.json('Hello (from Server)!')
})

//a route that gets all todos and sends it to client (READ)
app.get('/todos', async (req, res) => {
    try {
        //used find method on the model to retrieve all documents from the todos collection
       const todos = await Todo.find({})
       console.log('GET /todos')
       //send those documents to the client
       res.status(200).json(todos)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
 })
 
 //a route that creates and adds a todo document to the database
 app.post('/todos', async (req, res) => {
    try{
        console.log(req.body);
        const newTodo = await Todo.create(req.body)
        res.status(201).json(newTodo)
        console.log('POST /todos')
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
