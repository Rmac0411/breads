//DEPENDENCIES
const express = require('express')

//CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('welcone to bread')
})

//BREADS
const breadsController = require('./controllers/bread_controller')
app.use('/breads', breadsController)


app.listen(PORT, ()=> {
    console.log('listening on port', PORT);
})