var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "you",
    password: "pswd",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    con.query("select name, address from customers", function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
});
