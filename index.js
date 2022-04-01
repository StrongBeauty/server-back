const {getUsers, addUser} = require("./repo");
const express = require('express');
const users = require('./usersRouter');
const cors = require('cors')
const bodyParser = require('body-parser')

//creation express-app
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send('tasks')
})

//addition middleware (interceptor)
app.use((req, res) => {
    res.send(404)
})

app.listen(7542, function () {
    console.log('listening')
} )

/*process.on('unhandledRejection', function(reason, p){
    console.log(reason, p)
})*/

/*const cors = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', '*')
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
    res.setHeader('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.writeHead(200)
        res.end()
        return true
    } else {
        return false
    }
}*/


