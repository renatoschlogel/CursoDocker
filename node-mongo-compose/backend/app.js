const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// DataBase

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://db/mydb');

// teste

server.get('/', (request, response, next) => response.send('BackEnd'));

// startar server

server.listen(3000);