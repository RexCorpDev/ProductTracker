'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', require('./routes/index'));

app.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});
