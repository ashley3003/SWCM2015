var express = require('express');
var router = express.Router();

/* GET Author. */
router.get('/', function(req, res) {
  res.render('author', { title: 'Pagina de autor' }); 
});
module.exports = router;
