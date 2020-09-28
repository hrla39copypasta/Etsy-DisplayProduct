const db = require('./index.js');
const faker = require('faker');

const createProduct = () => {
  const description = {};
  description.sellerName = faker.name.findName();
  description.sales = faker.random.number();
  description.rating = Math.floor(Math.random() * (5));
  description.productName = faker.commerce.productName();
  description.price = faker.commerce.price();
  description.style = faker.commerce.color();
  description.materials = faker.commerce.productMaterial();
  description.info = faker.commerce.productDescription();

  return description;
};


const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 100; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}


const insertMockData = function() {
  let products = createProducts()
  products.forEach((body) => {

    const queryStr = `INSERT INTO etsy_ProductDescription (sellerName, sales, rating, productName, price, style, materials, info) VALUES ("${body.sellerName}", ${body.sales}, ${body.rating}, "${body.productName}", ${body.price}, "${body.style}", "${body.materials}", "${body.info}");`

    db.query(queryStr , (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('seed succeeeededdd :D ')
      }
    })
  })
  db.end();

};

insertMockData();
