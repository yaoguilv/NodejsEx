var mysql = require('mysql');

var con = mysql.createConnection({
    hsot: "localhost",
    user: "cc",
    password: "comope"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});
