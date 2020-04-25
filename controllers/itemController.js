var Item = require('../models/Items');

// ADD FUNCTION HANDLER
exports.createItem = function(req, res) { 
    var newItem = new Item(req.body);
    newItem.save(function (err, item) { 
        if (err) { 
            res.status(400).json(err);
        }
        res.redirect('back');
});
};

// GET ALL FUNCTION HANDLER
exports.getItems = function(req, res) {
  Item.find({}, function (err, items) {
    if (err) {
      res.status(400).json(err); 
    } 
    res.json(items);
  }); 
};

// GET ONE FUNCTION HANDLER
exports.getItem = function(req, res) {
  Item.findOne({_id: req.params.id}, function (err, items) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(items);
  }); 
};

// UPDATE FUNCTION HANDLER
exports.updateItem = function(req, res) {
  Item.findOneAndUpdate({_id: req.params.id}, req.body, {new: true},function (err, item) {
    if (err) {
      res.status(400).json(err);
    }
    res.redirect('back');
  }); 
};

// DELETE FUNCTION HANDLER
exports.deleteItem = function(req, res) {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) {
      res.status(400).json(err);
    } 
    res.json(item);
  }); 
};