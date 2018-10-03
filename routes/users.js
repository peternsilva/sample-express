var express = require('express');
var router = express.Router();


// Responds to http://localhost:3000/users/my/cool/route
router.get('/my/cool/route', function(req, res, next) {
  console.log('req.params', req.params)
  console.log('req.query', req.query)
  res.send('My cool route')
});



module.exports = router;
