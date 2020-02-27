//-----------------------------------
//DEPENDENCIES
//-----------------------------------

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const db = mongoose.connection;
const app = express();
const Item = require('./models/Item.js')

//-----------------------------------
//PORT
//-----------------------------------

const PORT = process.env.PORT;

//-----------------------------------
//DATABASE
//-----------------------------------

const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

//-----------------------------------
//MIDDLEWARE
//-----------------------------------

//Bodyparser Middleware
app.use(express.json())


//-----------------------------------
//CONTROLLER MAPPING
//-----------------------------------

const itemsController = require('./controllers/api/Items.js')
app.use('/items', itemsController)







































//-----------------------------------
//LISTENER
//-----------------------------------

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});
