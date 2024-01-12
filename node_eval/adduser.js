var mysql = require ('mysql');

var con=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"eventM"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    var sql1="INSERT INTO user (user_id, username, email) VALUES (1,'riya','riya@kletech.ac.in')";
    con.query(sql1,function (err,result){
        if (err) throw err;
        console.log("1 record inserted");
    });

    var sql2="INSERT INTO user (user_id, username, email) VALUES (2,'rohan','rohan@kletech.ac.in')";
    con.query(sql2,function (err,result){
        if (err) throw err;
        console.log("1 record inserted");
    });

    var sql3="INSERT INTO user (user_id, username, email) VALUES (3,'prachi','prachi@kletech.ac.in')";
    con.query(sql3,function (err,result){
        if (err) throw err;
        console.log("1 record inserted");
    });

    var sql4="INSERT INTO user (user_id, username, email) VALUES (4,'tarun','tarun@kletech.ac.in')";
    con.query(sql4,function (err,result){
        if (err) throw err;
        console.log("1 record inserted");
    });

    var sql5="INSERT INTO user (user_id, username, email) VALUES (5,'praveen','praveen@kletech.ac.in')";
    con.query(sql5,function (err,result){
        if (err) throw err;
        console.log("1 record inserted");
    });
});