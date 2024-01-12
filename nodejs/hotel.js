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
    var sql="CREATE TABLE hotel (room_no int(4), custId int(5), alloted varchar (3), price int(6))";
    con.query(sql,function (err,result){
        if (err) throw err;
        console.log("Table Hotel Created");
    });
});



