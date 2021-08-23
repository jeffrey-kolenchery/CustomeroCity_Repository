import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();


app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());

//Jeffrey: Putting my personal address in here, later on need to change it to a more general login ie api123 or smth
const CONNECTION_URL = "mongodb+srv://jeffrey_k:lyoZVWj23yn8fleN@comp30022.5hadw.mongodb.net/test?authSource=admin&replicaSet=atlas-eu6xvh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

