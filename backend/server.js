import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = 9000;

// middlewares

// db config 
const connection_url = "mongodb+srv://admin:stxW368cWdOwlC81@cluster0.ovkrl.mongodb.net/tiktok-clone-db?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World!"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));

