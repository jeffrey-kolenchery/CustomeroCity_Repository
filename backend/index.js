import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
import path from 'path'

import * as dotenv from 'dotenv'
import { customerRouter } from './routes/customerRoutes.js'
import { userRouter } from './routes/userRoutes.js'
import { meetingRouter } from './routes/meetingRouter.js'
import { Meeting } from './models/meetingModel.js'
import { Customer } from './models/customerModel.js'

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

// serve static folders if in production

if (process.env.NODE_ENV === 'production') {
    //set static folder

    app.use(express.static('../frontend/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 5000

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)

// /* Enable CORS */
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:5000', 'https://customerocity.herokuapp.com'],
//     credentials: true,
//     optionsSuccessStatus: 200
// }))

// const userRouter = require("./routes/userRoutes");
// const customerRouter = require("./routes/customerRoutes");
app.use('/api/user', userRouter)
app.use('/api/customer', customerRouter)
app.use('/api/meeting', meetingRouter)




export { app }
