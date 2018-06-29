import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
import routes from './routes'
import jobs from './jobs'

const app = express()
// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar")
var rollbar = new Rollbar("449a6a4c3d4a4f689f2af4d8ce68cd6c")

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(cors())

let db = mongoose.connect('mongodb://localhost:27017/loja_api', { useMongoClient: true })

routes(app)
//jobs()

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");

app.listen(3000, () => {
    console.log('Express server has been started')
})