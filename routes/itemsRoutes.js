var express = require('express'),
    router = express.Router();
    itemController = require('../controllers/itemController');

// ROUTES FOR FULL SCRUM - STOCK ITEMS
router.post('/item', itemController.createItem); // TO ADD
router.get('/items', itemController.getItems); // TO GET ALL STOCK ITEMS
router.get('/item/:id', itemController.getItem); // GET ONE STOCK ITEM GIVIG ID
router.delete('/item/:id', itemController.deleteItem); // DELETE ONE STOCK ITEM GIVING ID
router.post('/itemupdate/:id', itemController.updateItem); // POST REQUEST THAT ACT AS A PUT REQUEST FOR UPDATING A STOCK ITEM GIVIG THE ID

module.exports = router;