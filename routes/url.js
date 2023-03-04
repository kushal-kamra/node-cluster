var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('url route');

  //read from 
});

router.post('/', function(req, res, next) {
  res.send('post url route');

  console.log('query', req.query['url']);

  makeid(req.query['url'], 5);

  //insert in table

  // res.send(makeid(req.params['url']));
});

async function makeid(string, length) {

  console.log('string', string);
  var result           = '';
  // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = string.length;
  
  for ( var i = 0; i < length; i++ ) {
    result += string.charAt(Math.floor(Math.random() * charactersLength));
  }

  console.log('result', result);
  return result;
}

module.exports = router;
