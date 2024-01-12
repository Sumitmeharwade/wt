var mysql = require('mysql');

var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'Hotel_Booking'
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected to Hotel_Booking Database!");
    var values=[
        [101, 201,'Yes',5000],
        [102,, 'No',3000],
        [103,203,'Yes',5500],
        [104,,'No',3200],
        [105, 205,'Yes',5100]
    ];
    con.query("INSERT INTO hotel (room_no, custId, alloted, price) values ?" , [values],function(err,result){
        if (err) throw err;
        console.log("Records inserted in Hotel Table");
    });
});

