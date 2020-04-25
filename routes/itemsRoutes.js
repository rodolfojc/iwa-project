var express = require('express'),
    router = express.Router(),
    rateLimit = require('express-rate-limit');
    itemController = require('../controllers/itemController');

// SECURITY FOR DOS ATTACKS
const limit = rateLimit({
    max: 100,// MAX REQUEST PER USER
    windowMs: 60 * 60 * 1000, // BLOCK USER AFTER 100 REQUEST BY 1 HOUR
    message: 'Too many requests, please wait an hour' // NOTIFICATION MESSAGE
});


// ROUTES FOR FULL SCRUM - STOCK ITEMS
router.post('/item', limit, itemController.createItem); // TO ADD
router.get('/items', limit, itemController.getItems); // TO GET ALL STOCK ITEMS
router.get('/item/:id', limit, itemController.getItem); // GET ONE STOCK ITEM GIVIG ID
router.delete('/item/:id', limit, itemController.deleteItem); // DELETE ONE STOCK ITEM GIVING ID
router.post('/itemupdate/:id', limit, itemController.updateItem); // POST REQUEST THAT ACT AS A PUT REQUEST FOR UPDATING A STOCK ITEM GIVIG THE ID

module.exports = router;