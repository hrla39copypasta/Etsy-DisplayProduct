const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'etsy_MainDisplay',
  // port: 8002
});

connection.connect((err)=>{
  if (err) {
    console.log(err)
  } else {
    console.log("Connected to DB")
  }
});

module.exports = connection;