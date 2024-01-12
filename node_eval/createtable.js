var mysql=require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password:"",
    database: "eventM"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql="CREATE TABLE user (user_id int(5) UNIQUE,username varchar(30),email varchar(50),PRIMARY KEY (user_id))";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table created");
    });

    var sql2="CREATE TABLE event (user_id int(5),event_id int(5) UNIQUE,title varchar(30),content varchar(50),date_event DATE,location varchar(30),PRIMARY KEY (event_id))";
    con.query(sql2,function(err,result){
        if(err) throw err;
        console.log("Table created");
    });
});