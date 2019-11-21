    // REQUEST 
var http = require('http'),
    // ROUTING
    express = require('express'),
    // FILE SYSTEM
    fs = require('fs'),
    // XML PARSE
    xmlParse = require('xslt-processor').xmlParse,
    // XML PARSE PROCESSOR
    xsltProcess = require('xslt-processor').xsltProcess;

// CREATING SERVER
var router = express();
var server = http.createServer(router);

router.get('/', function(req, res) {
    res.render('index');
});

router.use(express.static(path.resolve(__dirname, 'views')));

router.get('/get/stockitems', function(req, res) {

    res.writeHead(200, {'Content-Type':'text/html'});

    // READING FILES - FILE SYSTEM
    var xml = fs.readFileSync('StockInventory.xml', 'utf8');
    var xsl = fs.readFileSync('StockInventory.xsl', 'utf8');

    // PARSING XML AND XSL
    var doc = xmlParse(xml);
    var stylesheet = xmlParse(xsl);

    // EXECUTING
    var result = xsltProcess(doc, stylesheet);

    // SERVING THE RESULT (HTML)
    res.end(result.toString());

});

server.listen(process.env.PORT || 3000, process.env.IP, function(){
    var addr = server.address();
    console.log('Server is listening to ', addr.address + ':' + addr.port );
});