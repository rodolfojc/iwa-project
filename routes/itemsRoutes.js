var express = require('express'),
    router = express.Router();
    itemController = require('../controllers/itemController');

router.post('/item', itemController.createItem);
router.get('/item', itemController.getItem);
router.get('/item/:id', itemController.getItem);
router.delete('/item/:id', itemController.deleteItem);
router.put('/item/:id', itemController.updateItem);

module.exports = router;