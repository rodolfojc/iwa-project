    
var logger = require("morgan"),
    http = require('http'),
    express = require('express'),
    http = require("http"),
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    path = require('path');

require('dotenv').config();

var app = express();
var port = 3000;
//var mongoInstance = 'mongodb+srv://rodolfojc:rodolfo@cluster0-eyxy6.mongodb.net/test?retryWrites=true&w=majority';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(require('./routes/itemsRoutes'));
app.use(express.static(path.resolve(__dirname, 'views')));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

mongoose.connect(process.env.MONGODB_URL);
//mongoose.connect(mongoInstance);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});