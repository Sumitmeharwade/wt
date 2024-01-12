var http=require('http');
var express=require ('express');
var app=express();
var bodyParser=require('body-parser');
var urlencodedParser=bodyParser.urlencoded({extended:true});
var mysql=require('mysql');
app.use(express.static(__dirname));
var con=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'Hotel_Booking'
})

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
})

app.get('/send',function(req,res){
    var rr="<html>";
    rr=rr+"<head>";
    rr=rr+"<link rel='stylesheet', type='text/css', href='style.css'>";
    rr=rr+"</head>";
    rr=rr+"<body>";
    rr=rr+"<div className='container'>";
    rr=rr+"<h1>Welcome to Hotel Booking System</h1>";
    rr=rr+"<form method='post' action='retrieve'>";
    rr=rr+"<h3><b>Check for the rooms that are not allotted</b></h3></br>";
    rr=rr+"<input type='submit' name='t1' value='not_alloted'></br>";
    rr=rr+"</form>";
    rr=rr+"<form method='post' action='details'>";
    rr=rr+"<h3><b>Check for the Rooms and Customer Details </b></h3></br>";
    rr=rr+"<input type='submit' name='t1' value='Alloted Customer Details'>";
    rr=rr+"</form>";
    rr=rr+"<form method='post' action='book'>";
    rr=rr+"<h3><b>Wanna Book a Room? Go ahead</b></h3></br>";
    rr=rr+"<b>Enter your full name</b></br><input type='text', name='cust_name',value=' '></br></br>";
    rr=rr+"<b>Enter your Address</b> </br><input type='text', name='cust_addr',value=' '></br></br>";
    rr=rr+"<b>Enter your Age</b> </br><input type='text', name='cust_age',value=' '></br></br>";
    rr=rr+"<input type='submit' name='t1' value='Book Room'>";
    rr=rr+"</form>";
    rr=rr+"<form method='post' action='delete'>";
    rr=rr+"<h3><b>Checkout Room :</b> </h3></br>";
    rr=rr+"<b>Enter Room Number for Checkout</b></br>";
    rr=rr+"<input type='number' name='one' value=' '></br>";
    rr=rr+"<input type='submit' name='t1' value='delete'>";
    rr=rr+"</div>";
    rr=rr+"</form>";
    rr=rr+"</body>";
    res.send(rr);

});

app.post('/retrieve', urlencodedParser, function (req, res) {


    var sql = "SELECT room_no, alloted, price FROM hotel where alloted='No'";
    con.query(sql, function (err, result) {
        if (err) throw err;

        // Send the initial HTML content
        res.write("<html><body><h1>List of all the rooms that are not alloted</h1><ul>");

        // Loop through the result and send each book entry
        result.forEach(function (row) {
            res.write("<h3><li>Room Number: " + row.room_no + "| Allotted: " + row.alloted + "| Price: " + row.price + "</li><h3>");
        });

        // Complete the HTML content and send the response
        res.write("</ul></body></html>");

        // Close the database connection
        
        
        // Send the response
        res.end();
    });

});

app.post('/details', urlencodedParser, function (req, res) {
    var sql = "SELECT cname, custId, room_no, alloted, price, addr, age FROM hotel, customer WHERE alloted='Yes' AND custId=custIdd";
    
    con.query(sql, function (err, result) {
        if (err) throw err;

        // Send the initial HTML content
        res.write("<html><body><h1>Rooms Allocated and Customer Details</h1><ul>");

        // Loop through the result and send each book entry
        result.forEach(function (row) {
            res.write("<h3><li>Customer Name: " + row.cname + "    |Customer Id: " + row.custId + "    |Room Number: " + row.room_no + "    |Alloted:" + row.alloted + "    |Age:" + row.age);

            // Display custId if price is 5000
            if (row.price === 5000) {
                res.write("| Customer ID: " + row.custId + "    |Customer Name: " + row.cname);
            }

            res.write("</li><h3>");
        });

        // Calculate and display average room price
        var avgPriceQuery = "SELECT AVG(price) AS avgPrice FROM hotel WHERE alloted='Yes'";
        con.query(avgPriceQuery, function (err, avgResult) {
            if (err) throw err;

            // Display the average price
            res.write("<h3>Average Room Price: " + avgResult[0].avgPrice + "</h3>");

            // Complete the HTML content and send the response
            res.write("</ul></body></html>");

            // Send the response
            res.end();
        });
    });
});






app.post('/book', urlencodedParser, function (req, res) {
    cnname=req.body.cust_name;
    caddr=req.body.cust_addr;
    cage=req.body.cust_age;
    var r='';
    var p='';
    var price='';
    var sql1="SELECT custIdd FROM customer ORDER BY custIdd DESC LIMIT 1";
   
    
    con.query(sql1, function (err, result) {
        if (err) throw err;
        result.forEach(function (row) {
            //res.write("Customer Id: " + row.custIdd );
            r=row.custIdd;
        });
        var sql2 = "INSERT INTO customer (custIdd,cname,addr,age) VALUES ("+(r+1)+",'"+cnname+"','"+caddr+"',"+cage+")";
        con.query(sql2,function (err,result){
            if (err) throw err;
        });
            var sql3 = "SELECT room_no FROM hotel ORDER BY room_no DESC LIMIT 1";
            con.query(sql3, function (err, result) {
                if (err) throw err;
                result.forEach(function (row) {
                    //res.write("Customer Id: " + row.custIdd );
                    p=row.room_no;
                });
                
                if(p>100 && p<150)
                {
                    price=5000;
                }
                else if(p>150 && p<200)
                {
                    price=5500;
                }
                var sql4 = "INSERT INTO hotel (room_no,custId,alloted,price) VALUES ("+(p+1)+","+(r+1)+",'YES',"+price+")";
                con.query(sql4,function(err,result){
                    if (err) throw err;
                });
        res.write("Room " + (p+1) + " Allocated Successfully!");
        res.write("We wish you a Happy Stay!");

        //res.send(p);
        //res.write("Customer Added to Database Successfully!");        
        res.end();


});
});
});

app.post('/delete', urlencodedParser, function (req, res) {
 var room=req.body.one;
 var r='';
    var sql1 = "SELECT custId FROM hotel WHERE room_no="+room;
    con.query(sql1, function (err, result) {
        if (err) throw err;
        result.forEach(function (row) {
            //res.write("Customer Id: " + row.custIdd );
            r=row.custId;
        });
        var sql2 = "DELETE FROM customer WHERE custIdd = "+r;
        con.query(sql2,function(err,result){
            if (err) throw err;
            var sql3 = "DELETE FROM hotel WHERE room_no="+room;
            con.query(sql3,function(err,result){
                if (err) throw err;
            });
        });
        
    });
    //res.send(r);
     res.write("Room De-Allocated Successfully");
        res.end();
});





app.listen(9000);


