var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "you",
    password: "pswd",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    con.query("select * from customers where address = 'Park Lane 38'", function(err, result) {
        if(err) throw err;
        console.log(result);
    });
});
