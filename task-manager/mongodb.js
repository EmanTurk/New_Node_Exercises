// const mongodb = require('mongodb')

// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL,  (error, client)=>{
// if (error){
//    return console.log('unable to connect to database')
// }
// console.log('connected correctly')
// })



import connectDB from "./db.js";
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);



async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Add your database operations here
    } finally {
        await client.close();
    }
}

// connect().catch(console.error);

import userRouter from './userRouter.js'

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json())
app.use('/api/v1/users', userRouter)
const CONNECTION_URI = 'mongodb+srv://emanturk:i7MN7hLwt3oNewcy@cluster0.wbteikr.mongodb.net/Angels?retryWrites=true&w=majority'

connectDB().then(()=>{
    app.listen('6000', ()=>{
        console.log('listening on port 6000')
    })
})

