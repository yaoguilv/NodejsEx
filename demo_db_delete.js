var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "you",
    password: "pswd",
    database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;
    var sql = "delete from customers where address = 'Mountain 21'";
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
   });
});
