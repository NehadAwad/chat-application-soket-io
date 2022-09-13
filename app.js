const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('database connection successfully'))
