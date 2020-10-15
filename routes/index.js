var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jeshan\'s World' });
});

router.get('/savi', (req, res, next) => {
  res.render('savi', { title: 'Savi' });
});

router.get('/jeshan', (req, res, next) => {
  res.render('jeshan', { title: 'Jeshan' });
});

router.get('/ranveer', (req, res, next) => {
  res.render('ranveer', { title: 'Ranveer' });
});

router.get('/ayushi', (req, res, next) => {
  res.render('ayushi', { title: "Ayushi" });
});


module.exports = router;
