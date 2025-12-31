const express = require('express');
const planetsRouter = require('./routes/planets/planets.router');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));
app.use('/planets',planetsRouter);


module.exports = app