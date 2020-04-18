var express = require('express'),
    router = express.Router();
    itemController = require('../controllers/itemController');

router.post('/iteam', itemController.createItem);
router.get('/iteam', itemController.getItem);
router.get('/iteam/:id', itemController.getItem);
router.delete('/iteam/:id', itemController.deleteItem);
router.put('/iteam/:id', itemController.updateItem);

module.exports = router;