    
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
var expAutoSan = require('express-autosanitizer');

//INPUT CLEANER FOR XSS ATTACKS
var xss = require('xss-clean');

// HELMET
var helmet = require('helmet');

// MONGOOSE SANITIZATION AGAIST NOSLQ INJECTION ATTACKS
mongoSanitize = require('express-mongo-sanitize');

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

// MOUNT XSS CLEAN
app.use(xss());

// MOUNT HELMET
app.use(helmet());

// MOUNT MONGOOSE SANITIZER
app.use(mongoSanitize());

// MAIN CALL
app.get('/', (req, res) => {
    res.render('index');
});

// LISTEN PORT
app.listen(port, function(err){
    console.log("Listening on Port: " + port)
});

// MONGOOSE CONNECTION / ERROR HANDLER
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.on('error', (err) => { 
    console.log('Mongodb Error: ', err); 
    process.exit();
});

// CONNECTION NOTIFICATION
mongoose.connection.on('connected', () => { 
    console.log('MongoDB is successfully connected');
});