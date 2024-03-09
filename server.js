require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app =  express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/urlShortener')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(process.env.PORT || 5000)