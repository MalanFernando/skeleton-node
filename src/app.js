//importacion de librerias
const express = require('express');
const db = require('./utils/database')

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

//files
const {port} = require('./config')

//init configs
const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database Synced')
    })
    .catch(err => {
        console.log(err)
    })


app.get('/', (req, res)=>{
    res.status(200).json({
        message: 'ok',
        users: `localhost: ${port}/api/v1/users`
    })
})

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(port, ()=>{
    console.log(`server started at port ${port}`);
})