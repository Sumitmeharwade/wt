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
        [201,'Anushika','Hubli,Karnataka',23],
        // [202,'Shreya','Mysore,Karnataka',21],
        [203,'Nandan','Bengaluru,Karnataka',19],
        // [204,'Ritesh','Ooty,Karnataka',25],
        [205,'Shreepad','Shivamoga,Karnataka',27]
    ];
    con.query("INSERT INTO customer (custIdd,cname,addr,age) values ?" , [values],function(err,result){
        if (err) throw err;
        console.log("Records inserted in Customer Table");
    });
});

