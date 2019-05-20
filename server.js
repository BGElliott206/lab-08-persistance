'use strict';

//Application Dependencies
require('dotenv').config();
const superagent = require('superagent');
const express = require('express');
const cors = require('cors');

//Application setup
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

//API Routes 
app.get('/', (request, response) => {
  response.send('homepage');
})

app.listen(PORT, () => console.log(`App is listening on ${PORT}`) );