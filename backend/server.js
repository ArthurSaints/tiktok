import express from "express";
import mongoose from "mongoose";

import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeaders('Access-Control-Allow-Origin', '*'),
        res.setHeaders('Access-Control-Allow-Origin', '*'),
        next()
});

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
app.get("/v2/posts", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post("/v2/posts", (req, res) => {
    // POST request is to ADD DATA to the database
    // It will let us ADD a video DOCUMENTO to the videos COLLECTION
    const dbVideos = req.body;

    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));

