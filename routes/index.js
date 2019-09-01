var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/get', function(req, res, next) {
  db = new sqlite3.Database('./db/ag.db');
 
  sql = 'SELECT * FROM test';
 
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.send(rows);
  });
});

router.post('/', function(req, res, next) {
  db = new sqlite3.Database('./db/ag.db');

  notiContract.methods.callEvent().send({ from: coinbase, gas : 1500000 }).then((tx) => {
  db.run('INSERT INTO test(name) VALUES(?)', [tx.events.notification.returnValues.who], function(err) {
    console.log("hai")  
    if (err) {
        return console.log(err.message);
      }
    })
  })
});

router.post('/create', function(req, res, next) {
  let db = new sqlite3.Database('./db/ag.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
    }
    db.run('CREATE TABLE test(name text)'); 
    // db.close();
  })
  res.send("done");
});


module.exports = router;
