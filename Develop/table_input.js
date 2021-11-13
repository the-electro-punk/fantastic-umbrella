const express = require('express');
const routes = require('./routes');
const mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ecommerce_db',
    // port: '3001',
  })

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected');
    let sql = 'CREATE TABLE products(ProductName VARCHAR(255) NOT NULL, Price INT NOT NULL, Stock INT NOT NULL, Category INT PRIMARY KEY NOT NULL)'
    connection.query(sql, function(err) {
        if (err) throw err;
        console.log('table created');
    })
})

// this links to list of products script
let products = require('./seeds/seedProducts.js')

for (let i = 0; i < products.length; i++) {
    connection.query(`INSERT INTO products(Productname, Price, Stock, Category) VALUES( '${productData.product_name}',${productData.price},${productData.stock},${productData.category_id})`)
}
// productData.product_name