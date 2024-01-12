const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var http = require("http");
var urlencodedParser = bodyParser.urlencoded({ extended: true });

const port = 9000;

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "eventM",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

app.get("/createEvent", (req, res) => {
  let rr = `
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: 'Arial', sans-serif;
        text-align: center;
      }
  
      h3 {
        font-size: 24px;
      }
  
      form {
        max-width: 400px;
        margin: 0 auto;
        font-size: 18px;
      }
  
      input {
        width: 100%;
        padding: 8px;
        margin: 5px 0;
        box-sizing: border-box;
      }
  
      input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        cursor: pointer;
      }
  
      input[type="submit"]:hover {
        background-color: #45a049;
      }
    </style>
  </head>
  <body>
    <h3>Create an event</h3>
    <form method='post' action='postEvent'>
      User ID: <input type='number' name='one' value='' min="0"><br><br>
      Event ID: <input type='number' name='two' value='' min="0"><br><br>
      Title: <input type='text' name='three' value=''><br><br>
      Content: <input type='text' name='four' value=''><br><br>
      Date: <input type='date' name='five' value=''><br><br>
      Location: <input type='text' name='six' value=''><br><br>
      <input type='submit' name='t1' value='Create'>
    </form>
  </body>
  </html>`;
  res.send(rr);
});

app.post("/postEvent", urlencodedParser, (req, res) => {
  const user_id = req.body.one;
  const event_id = req.body.two;
  const title = req.body.three;
  const content = req.body.four;
  const date = req.body.five;
  const location = req.body.six;

  const sql = `INSERT INTO event (user_id, event_id, title, content, date_event, location) VALUES (${user_id}, ${event_id}, '${title}', '${content}', '${date}', '${location}')`;

  con.query(sql, (err, result) => {
    if (err) {
      console.error("Error inserting record:", err);
      res.status(500).send("Error inserting record");
      return;
    }
    res.send("Record inserted successfully");
    //   res.json(result);
  });
});

app.get("/latestevents", (req, res) => {
  const query = `SELECT event.user_id, event.event_id, event.title, event.content, event.date_event, event.location, user.username
    FROM event
    INNER JOIN user ON event.user_id = user.user_id
    ORDER BY event.date_event DESC
    LIMIT 5;
    `;

  con.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving events:", error);
      res.status(500).send("Error retrieving events");
      return;
    }

    let rr = `<html>
        <body>
        <style>
        body {
          font-family: 'Arial', sans-serif;
          text-align: center;
          margin: 20px;
        }
        
        h3 {
          font-size: 24px;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        
        th, td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }
        
        th {
          background-color: #4CAF50;
          color: white;
        }
        
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

      </style>
          <h3>Latest events (5)</h3>
          <table>
            <tr>
              <th>User ID</th>
              <th>Event ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
              <th>Location</th>
              <th>Username</th>
            </tr>`;

    for (let i = 0; i < results.length; i++) {
      rr =
        rr +
        `
          <tr>
            <td>${results[i].user_id}</td>
            <td>${results[i].event_id}</td>
            <td>${results[i].title}</td>
            <td>${results[i].content}</td>
            <td>${results[i].date_event}</td>
            <td>${results[i].location}</td>
            <td>${results[i].username}</td>
          </tr>`;
    }

    rr =
      rr +
      `</table>
                    </body>
                    </html>`;

    res.send(rr);
  });
});

// app.get("/locationevents", (req, res) => {
//   let htmlinput = `<html>
//     <body>
//      <form #f>
//        Enter location: <input type='text' name='loc' value=''>
//        <input type='submit' value='Get Details'>
//      </form>
//     </body>`;
//   const location = htmlinput.loc;
//   // const location = req.params.location;

//   const query = `SELECT event.user_id, event.event_id, event.title, event.content, event.date_event, event.location, user.username
//       FROM event
//       INNER JOIN user ON event.user_id = user.user_id
//       WHERE event.location = '${location}'
//       ORDER BY event.date_event`;

//   con.query(query, (error, results) => {
//     if (error) {
//       console.error("Error retrieving events:", error);
//       res.status(500).send("Error retrieving events");
//       return;
//     }

//     let rr = `<html>
//         <body>
//           <h3>Events at ${location}</h3>
//           <table >
//             <tr>
//               <th>Event ID</th>
//               <th>Title</th>
//               <th>Content</th>
//               <th>Date</th>
//               <th>Location</th>
//               <th>Username</th>
//             </tr>`;

//     for (let i = 0; i < results.length; i++) {
//       rr =
//         rr +
//         `
//           <tr>
//             <td>${results[i].event_id}</td>
//             <td>${results[i].title}</td>
//             <td>${results[i].content}</td>
//             <td>${results[i].date_event}</td>
//             <td>${results[i].location}</td>
//             <td>${results[i].username}</td>
//           </tr>`;
//     }

//     rr =
//       rr +
//       `</table>
//                     </body>
//                     </html>`;

//     res.send(rr);
//   });
// });

app.get("/locationevents", (req, res) => {
    let htmlInput = `<html>
      <body>
        <form action="/locationevents" method="get">
          Enter location: <input type='text' name='loc' value=''>
          <input type='submit' value='Get Details'>
        </form>
      </body>
    </html>`;
  
    if (!req.query.loc) {
      res.send(htmlInput);
      return;
    }
  
    const location = req.query.loc;
  
    const query = `SELECT event.event_id, event.title, event.content, event.date_event, event.location, user.username
      FROM event
      INNER JOIN user ON event.user_id = user.user_id
      WHERE event.location = '${location}'
      ORDER BY event.date_event`;
  
    con.query(query, (error, results) => {
      if (error) {
        console.error("Error retrieving events:", error);
        res.status(500).send("Error retrieving events");
        return;
      }
  
      let rr = `<html>
          <body>
            <h3>Events at ${location}</h3>
            <table>
              <tr>
                <th>Event ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
                <th>Location</th>
                <th>Username</th>
              </tr>`;
  
      for (let i = 0; i < results.length; i++) {
        rr +=
          `<tr>
            <td>${results[i].event_id}</td>
            <td>${results[i].title}</td>
            <td>${results[i].content}</td>
            <td>${results[i].date_event}</td>
            <td>${results[i].location}</td>
            <td>${results[i].username}</td>
          </tr>`;
      }
  
      rr += `</table></body></html>`;
  
      res.send(rr);
    });
  });
  

app.get("/getUsers", (req, res) => {
  const query = `SELECT *
      FROM user
`;

  con.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving events:", error);
      res.status(500).send("Error retrieving events");
      return;
    }

    let rr = `<html>
        <body>
          <h3>All Users</h3>
          <table >
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
            </tr>`;

    for (let i = 0; i < results.length; i++) {
      rr += `
          <tr>
            <td>${results[i].user_id}</td>
            <td>${results[i].username}</td>
            <td>${results[i].email}</td>
          </tr>`;
    }

    rr += `</table>
                    </body>
                    </html>`;

    res.send(rr);
  });
});

app.get("/getEvents", (req, res) => {
  const query = `SELECT *
      FROM event`;

  con.query(query, (error, results) => {
    if (error) {
      console.error("Error retrieving events:", error);
      res.status(500).send("Error retrieving events");
      return;
    }

    let rr = `<html>
        <body>
          <table >
            <tr>
              <th>User ID</th>
              <th>Event ID</th>
              <th>Title</th>
              <th>Content</th>
              <th>Date</th>
              <th>Location</th>
            </tr>`;

    for (let i = 0; i < results.length; i++) {
      rr += `
          <tr>
            <td>${results[i].user_id}</td>
            <td>${results[i].event_id}</td>
            <td>${results[i].title}</td>
            <td>${results[i].content}</td>
            <td>${results[i].date_event}</td>
            <td>${results[i].location}</td>
          </tr>`;
    }

    rr += `</table>
                    </body>
                    </html>`;

    res.send(rr);
  });
});


app.get('/deletevents/:event_id', (req, res) => {

    const eventId = req.params.event_id;
    const sql = `DELETE FROM event WHERE event_id = ${eventId}`;
  
    con.query(sql, (error, result) => {
      if (error) {
        console.error('Error deleting event:', error);
        res.status(500).send('Error deleting event');
        return;
      }
  
      if (result.affectedRows === 0) {
        res.status(404).send('Event not found');
        return;
      }
  
      res.status(200).send(`Event with ID ${eventId} has been deleted successfully`);
    });
  });
  

app.listen(port, () => {
  console.log("Server is running on port 9000");
});
