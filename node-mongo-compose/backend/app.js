const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;
const boryParser = require('body-parser');
const cors = require('cors');

// DataBase
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

// Middlewares
server.use(boryParser.urlencoded({extended:true}));
server.use(boryParser.json());
server.use(cors());

// ODM
const Client = restful.model('Client', {
    name:{type: String, required: true}
});

// Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true});

// Routes
Client.register(server, '/clients');


// startar server
server.listen(3000);