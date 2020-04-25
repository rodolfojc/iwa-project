    
var logger = require("morgan"),
    express = require('express'),
    http = require("http"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    mongoose = require('mongoose'),
    path = require('path');

// ENV VARIABLES
require('dotenv').config();

// SANATAIZER
const expAutoSan = require('express-autosanitizer');

var app = express();
var port = process.env.PORT || 3000;

// BASIC CONFIGURATION
app.use(logger('dev'));
app.use(bodyParser.json({limit: '10kb'})); // PREVENTING DOS ATTACKS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes/itemsRoutes'));
app.use(express.static(path.resolve(__dirname, 'views')));

// MOUNT SANATAIZER
app.use(expAutoSan.all);

// MAIN CALL
app.get('/', (req, res) => {
    res.render('index');
});

// LISTEN PORT
app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});