var express = require('express')
var router = express.Router()

// Responds to http://localhost:3000/movies/year/2008
router.get('/year/:release_year', (req, res, next) => {
  console.log(`BEST MOVIE EVAR in ${req.params.release_year}`)
  res.send(`BEST MOVIE EVAR in ${req.params.release_year}`)
})

module.exports = router