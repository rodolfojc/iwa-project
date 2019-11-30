    // REQUEST 
var http = require('http'),
    // ROUTING
    express = require('express'),
    // PATH DEPENDENCY
    path = require('path'),
    // FILE SYSTEM
    fs = require('fs'),
    // XML PARSE
    xmlParse = require('xslt-processor').xmlParse,
    // XML PARSE PROCESSOR
    xsltProcess = require('xslt-processor').xsltProcess;
    // XML TO JSON MODULE
    xml2js = require('xml2js');

// CREATING SERVER
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'views')));
router.use(express.urlencoded({extended: true}));
router.use(express.json());

// Function to read in XML file and convert it to JSON
function xmlFileToJs(filename, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  fs.readFile(filepath, 'utf8', function(err, xmlStr) {
    if (err) throw (err);
    xml2js.parseString(xmlStr, {}, cb);
  });
}

// Function to convert JSON to XML and save it
function jsToXmlFile(filename, obj, cb) {
  var filepath = path.normalize(path.join(__dirname, filename));
  var builder = new xml2js.Builder();
  var xml = builder.buildObject(obj);
  fs.writeFile(filepath, xml, cb);
}

router.get('/', function(req, res) {
    res.render('index');
});

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

// POST request to add to JSON & XML files
router.post('/post/json', function(req, res) {

  // Function to read in a JSON file, add to it & convert to XML
  function appendJSON(obj) {
    console.log(obj);
    // Function to read in XML file, convert it to JSON, add a new object and write back to XML file
    xmlFileToJs('StockInventory.xml', function(err, result) {
      if (err) throw (err);
      console.log(result);
      console.log(result.stockitems.section[obj.section_n]);
      result.stockitems.section[obj.section_n].item.push({'name': obj.name, 'type': obj.type, 'description' : obj.description,
      'vendor' : obj.vendor, 'quantity' : obj.quantity, 'cost' : obj.cost});
      console.log(result);
      jsToXmlFile('StockInventory.xml', result, function(err) {
        if (err) console.log(err);
      })
    })
  }

  // Call appendJSON function and pass in body of the current POST request
  appendJSON(req.body);

  // Re-direct the browser back to the page, where the POST request came from
  res.redirect('back');

});

server.listen(process.env.PORT || 3000, process.env.IP, function(){
    var addr = server.address();
    console.log('Server is listening to ', addr.address + ':' + addr.port );
});