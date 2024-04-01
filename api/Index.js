import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(
        console.log('connected to MongoDB')
    )

app.listen(5031, () => {
    console.log('Connect to backend!');
})

