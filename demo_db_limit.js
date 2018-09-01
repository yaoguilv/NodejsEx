var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "you",
    password: "pswd",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    // var sql = "select * from customers limit 5";
    var sql = "select * from customers limit 5 offset 2";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});
