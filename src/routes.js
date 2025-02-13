const express = require('express');
const { createBoard } = require('./controllers');
const router = express.Router();

router.post('/boards', createBoard);

module.exports = router;
