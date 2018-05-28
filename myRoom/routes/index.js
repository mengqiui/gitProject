var express = require('express');
var router = express.Router();

// µ¼ÈëMySQLÄ£¿é
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chatroom'
});

connection.connect();

connection.query('SELECT * from userinfo', function (error, results, fields) {
  if (error) throw error;
  for(var i=0;i<results.length;i++){
    console.log(results);
    //console.log('The results is: '+results[i].uid+' '+results[i].username+' '+results[i].content);
  }
  //console.log(results)
});

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'express' });
  res.sendfile("./views/index.html")
});

module.exports = router;
