const express = require('express');
const router = express.Router();
const { create, fetchAll, fetchOne, update, deletefruitData } = require('../controller/fruit.controller');

router.post('/v2/fruit', create);
router.get('/v2/fruit', fetchAll);
router.get('/v2/fruit/:fruitId', fetchOne);
router.put('/v2/fruit/:fruitId', update);
router.delete('/v2/fruit/:fruitId', deletefruitData);

module.exports = router;