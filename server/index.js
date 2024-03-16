import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv"
import EmailRoute from "./Route/EmailRoute.js"
import cors from "cors"

// configration
const app = express();
const port = 5500;
dotenv.config()
app.use(express.jason())
app.use(cors())


// db connection
const connect = () => {
    mongoose.connect(process.env.MONGO_URL,).then(() => {
        console.log("connected to Db")
    })
}

// homeroute


app.listen(port, () => {
    connect()
    console.log(`app is listening at port ${port}`)
})


// routes
app.use("/api", EmailRoute)