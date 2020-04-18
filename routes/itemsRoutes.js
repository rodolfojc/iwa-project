var express = require('express'),
    router = express.Router();
    //userCtrl = require('./user-controller');

router.post('/iteam', itemController.createItem);
router.get('/iteam', itemController.getItem);
router.get('/iteam/:id', itemController.getItem);
router.delete('/iteam/:id', itemController.deleteItem);
router.put('/iteam/:id', itemController.updateItem);

module.exports = router;