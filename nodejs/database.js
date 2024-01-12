var mysql = require('mysql');

var con=mysql.createConnection({
    host:"127.0.0.1", //if error then write host:"127.0.0.1"
    user:"root",
    password:"",
    port:3306
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE  Hotel_Booking", function (err,result){
        if(err) throw err;
        console.log("Database created");
    });
});



