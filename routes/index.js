var express = require('express');
var router = express.Router();
const decode = require('../controllers/decode')

/* GET home page. */
router.get('/api', decode.conect );
router.get('/', (req,res) => {
  res.render('index')
});

module.exports = router;
