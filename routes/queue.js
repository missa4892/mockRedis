var queueService = require("../service/queueService").queueService;

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).send({'id': queueService.getNext()});
});

module.exports = router;
