var Item = require('../models/Items');

exports.createItem = function(req, res) { 
    var newItem = new Item(req.body);
    newItem.save(function (err, user) { 
        if (err) { 
            res.status(400).json(err);
        }
        res.render('index'); 
});
};

exports.getItems = function(req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(items);
  }); 
};

exports.getItem = function(req, res) {
  Item.findOne({_id: req.params.id}, function (err, items) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(items);
  }); 
};

exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};

exports.deleteItem = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};