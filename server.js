import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// app config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// db connect
const db = process.env.MONGO_URI;
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log(err));

// middleware
app.use(express.json());

// routes
// ...

app.listen(PORT, () => console.log(`Running on port ${PORT}...`));
