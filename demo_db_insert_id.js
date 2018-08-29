var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "yourname",
    password: "yourpassword",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    var sql = "insert into customers (name, address) values('Jhon', 'Blue Village 2')";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("1 record inserted, ID: " + result.insertId);
    });
});
