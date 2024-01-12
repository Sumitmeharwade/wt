var mysql = require ('mysql');

var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"Hotel_Booking"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql="CREATE TABLE customer (custIdd int(5),cname varchar(50),addr varchar(50),age int(3))";
    con.query(sql,function (err,result){
        if (err) throw err;
        console.log("Table Customer Created");
    });
});



