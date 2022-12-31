// Packages Imports
const express = require('express')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const mongoose = require('mongoose')

// Routes Imports
const usersRoute = require('./routes/users.route')
const authRoute = require('./routes/auth.route')

// Imports Configuration
require('dotenv').config()
const app = express()


// App Configuration
app.use(cookieParser())
app.use(express.json())

// Database Connection
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true, useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.on('error', () => {console.log('Error connecting to database')})
connection.once('open', () => {console.log('Connected to database')})

// Routes
app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)

// Error Handling
app.use((req, res, next) => {
    next(createError(404))
})
app.use((err, req, res, next) => {
    res.locals.message = err.message

    res.status(err.status || 500)
    res.json({
        error: err.status || 500,
        message: res.locals.message
    })
})

app.listen(5000, () => { console.log("Server running on port 5000") })