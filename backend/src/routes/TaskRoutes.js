const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskControler')

router.post('/', TaskController.create); 

module.exports = router;