const express = require('express')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')

require('dotenv').config()

const usersRoute = require('./routes/users.route')
const authRoute = require('./routes/auth.route')

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use('/api/users', usersRoute)
app.use('/api/auth', authRoute)

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