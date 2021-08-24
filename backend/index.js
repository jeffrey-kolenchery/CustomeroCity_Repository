const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());




//Jeffrey: Putting my personal address in here, later on need to change it to a more general login ie api123 or smth
//update ->> need to use process.env file???
//connection string -> mongodb+srv://<username>:<password>@comp30022.5hadw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const MONGODB_USERNAME = "jeffrey_k";
const MONGODB_PASSWORD = "ndPCUoScKPtC4bju";
const CONNECTION_URL = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@comp30022.5hadw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
// const CONNECTION_URL = "mongodb://localhost:27017/testdb";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

const userRouter = require('./routes/userRoutes');
app.use('/api/user', userRouter);

module.exports = app;