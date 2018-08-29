var mysql = require('mysql');

var con = mysql.createConnection({
    hsot: "localhost",
    user: "yourname",
    password: "yourpassword"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query("create database mydb", function(err, result) {
        if(err) throw err;
        console.log("Database created");
    });
});
