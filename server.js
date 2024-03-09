require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');
const app =  express();

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/urlShortener')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false })); // tell express we are working with urls as parameters

app.get('/', async (req, res) => {
    const shortUrls = await ShortUrl.find()
    res.render('index', { shortUrls: shortUrls });
})

app.post('/shortUrls', async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl })
    res.redirect('/')
})

app.listen(process.env.PORT || 5000)