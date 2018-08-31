var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "you",
    password: "psw",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    con.query("select * from customers order by name desc", function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});
