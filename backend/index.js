// const cors = require("cors");
import cors from "cors";
import express from "express"
// const express = require("express");
import mongoose  from "mongoose";
// const mongoose = require("mongoose");
import bodyParser from "body-parser";
// const bodyParser = require("body-parser");
import expressValidator from "express-validator";
// const expressValidator = require("express-validator");

// const customerRouter = import("./routes/customerRoutes");
import {customerRouter} from "./routes/customerRoutes.js";
// const userRouter = require("./routes/userRoutes");
import {userRouter} from "./routes/userRoutes.js";


// Saves the variables in .env file to process.env.
import * as dotenv from "dotenv";
dotenv.config();
// require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(expressValidator());
app.use(cors());


//connection string -> mongodb+srv://<username>:<password>@comp30022.5hadw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@comp30022.5hadw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
//const CONNECTION_URL = `mongodb://localhost:27017/testdb`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

// const userRouter = require("./routes/userRoutes");
// const customerRouter = require("./routes/customerRoutes");
app.use("/api/user", userRouter);
app.use("/api/customer", customerRouter);

export {
  app
};
