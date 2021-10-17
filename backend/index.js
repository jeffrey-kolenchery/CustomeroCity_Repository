import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'

import MongoDB from 'mongodb'

import * as dotenv from 'dotenv'
import { customerRouter } from './routes/customerRoutes.js'
import { userRouter } from './routes/userRoutes.js'
import { meetingRouter } from './routes/meetingRouter.js'

import {Customer} from './models/customerModel.js'
import {User} from './models/userModel.js'

// Saves the variables in .env file to process.env.
dotenv.config()
// require("dotenv").config();

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(expressValidator())
app.use(cors())

// connection string -> mongodb+srv://<username>:<password>@comp30022.5hadw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@comp30022.5hadw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const CONNECTION_URL = `mongodb://localhost:27017/testdb`;
const PORT = process.env.PORT || 5000



MongoDB.MongoClient
    .connect(CONNECTION_URL, {
        useUnifiedTopology: true,
    },function (err,db){

        if (err) {
            throw err
        }

        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

        var dbo = db.db('myFirstDatabase')
        app.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', '*')
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            next()
        })

        app.post('/GetData', function (req, res) {
            dbo.collection('meetings').find({}).toArray(function (err, cus) {
                for (var i = 0; i < cus.length; i++) {
                    var sdate = new Date(cus[i].StartTime)
                    var edate = new Date(cus[i].EndTime)
                    cus[i].StartTime = (new Date(+sdate - (sdate.getTimezoneOffset() * 60000)))
                    cus[i].EndTime = (new Date(+edate - (edate.getTimezoneOffset() * 60000)))
                }
                res.send(cus)
            })
        })
        app.post('/BatchData', function (req, res) {
            var eventData = [] 
            if (req.body.action === 'insert' || (req.body.action === 'batch' && req.body.added.length > 0)) {
                (req.body.action === 'insert') ? eventData.push(req.body.value) : eventData = req.body.added
                //console.log(eventData)
                let asdf = 'asdf'
                dbo.collection('customers').find({}).toArray(function (err, cus) {
                    //console.log(eventData)
                    for (var a = 0; a < eventData.length; a++) {
                        eventData[a].StartTime = new Date(eventData[a].StartTime)
                        eventData[a].EndTime = new Date(eventData[a].EndTime)
                        eventData[a].client = 'asdfasdfasdf'
                        dbo.collection('meetings').insertOne(eventData[a])
                    }
                })
                console.log(asdf)
                
                
            }
            if (req.body.action === 'update' || (req.body.action === 'batch' && req.body.changed.length > 0)) {
                (req.body.action === 'update') ? eventData.push(req.body.value) : eventData = req.body.changed
                for (var b = 0; b < eventData.length; b++) {
                    delete eventData[b]._id
                    eventData[b].StartTime = new Date(eventData[b].StartTime)
                    eventData[b].EndTime = new Date(eventData[b].EndTime)
                    dbo.collection('meetings').updateOne({ 'Id': eventData[b].Id }, { $set: eventData[b] })
                }
            }
            if (req.body.action === 'remove' || (req.body.action === 'batch' && req.body.deleted.length > 0)) {
                (req.body.action === 'remove') ? eventData.push({ Id: req.body.key }) : eventData = req.body.deleted
                for (var c = 0; c < eventData.length; c++) {
                    dbo.collection('meetings').deleteOne({ 'Id': eventData[c].Id })
                }
            }
            res.send(req.body)
        })
        
    })

mongoose.set('useFindAndModify', false)

// const userRouter = require("./routes/userRoutes");
// const customerRouter = require("./routes/customerRoutes");
app.use('/api/user', userRouter)
app.use('/api/customer', customerRouter)
app.use('/api/meeting', meetingRouter)

export { app }
