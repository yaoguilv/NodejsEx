var mysql = require('mysql');

var con = mysql.createConnection({
    hsot: "localhost",
    user: "yourname",
    password: "yourpassword",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    // var sql = "create table customers (name varchar(255), address varchar(255))";
    var sql = "alter table customers add column id int auto_increment primary key";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Table created");
    });
});
