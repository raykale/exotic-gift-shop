const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')


require('dotenv').config()
require('./config/database')

const app = express()

app.use(logger('dev'))
app.use(express.json())



app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))

const port = process.env.PORT || 3001
// app.use((req, res, next) => {
//     res.locals.date = {}
//     next()   
// })
// app.use('/api/items', require('./routes/api/items'))
app.use('/api/users', require('./routes/api/users'))
 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, function() {
    console.log(`I'm am listening on ${port}. We In the House`)
})