const db = require('./index.js');
const faker = require('faker');

const createProduct = () => {
  const description = {};
  description.sellerName = faker.name.findName();
  description.sales = faker.random.number();
  description.rating = Math.floor(Math.random() * (5));
  description.productName = faker.commerce.productName();
  description.price = faker.finance.amount();
  description.style = faker.commerce.color();
  description.materials = faker.lorem.sentence();
  description.info = faker.lorem.paragraphs();

  return description;
};

const createProductPic = () => {
  const productPics = {};
  productPics.sellerName = faker.name.findName();
  productPics.img = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  productPics.img1 = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  productPics.img2 = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  productPics.img3 = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  productPics.img4 = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  productPics.img5 = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  productPics.img6 = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  productPics.img7 = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  productPics.img8 = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(37))}`;
  productPics.img9 = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;

  return productPics;
}


const createProducts = () => {
  let productsArr = [];
  for(let i = 0; i < 100; i++){
    productsArr.push(createProduct())
  }
  return productsArr
}

const createProductPics = () => {
  let productPicArr = [];
  for(let i = 0; i < 100; i++){
    productPicArr.push(createProductPic())
  }
  return productPicArr
}


const insertMockData = function() {
  let products = createProducts()
  let photos = createProductPics()

  products.forEach((body) => {

    const queryStr = `INSERT INTO etsy_ProductDescription (sellerName, sales, rating, productName, price, style, materials, info) VALUES ("${body.sellerName}", ${body.sales}, ${body.rating}, "${body.productName}", ${body.price}, "${body.style}", "${body.materials}", "${body.info}");`

    db.query(queryStr , (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('seed description succeeeededdd :D ')
      }
    })
  })

  photos.forEach((body) => {

    const qString = `INSERT INTO etsy_PhotoProductDisplay (sellerName, img, img1, img2, img3, img4, img5, img6, img7, img8, img9) VALUES ("${body.sellerName}", "${body.img}", "${body.img1}", "${body.img2}", "${body.img3}", "${body.img4}", "${body.img5}", "${body.img6}", "${body.img7}", "${body.img8}", "${body.img9}");`

      db.query(qString , (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('seed photos succeeeededdd :D ')
      }
    })

  })


  db.end();

};

insertMockData();
