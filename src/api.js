require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// route our app
app.get('/', function (_, res) {
	res.send('hello world!');
});

app.post('/', function (req, res) {
	res.send(req.body);
});

module.export = app;
