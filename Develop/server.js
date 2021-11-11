const express = require('express');
const routes = require('./routes');

let products = require('./seeds/product-seeds.js')

// this connects the JS code to the database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'ecommerce_db',
  port: '3001',
})

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

// be able to connect to a database, download seed data, then input data???