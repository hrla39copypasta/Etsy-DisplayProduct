const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'etsy_MainDisplay'
});

connection.connect();

module.exports = connection;