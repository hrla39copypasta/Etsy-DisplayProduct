const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const models = require('../database/models.js');

const app = express();
const PATH = 8002;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/product-display', (req, res) => {
  models.getInfo((results, err) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(results)
    }
  })
})

app.get('/photo-display', (req, res) => {
  models.getPhotos((results, err) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(results)
    }
  })
})



app.listen(PATH, () => {console.log(`LISTENING ON PORT ${PATH}`)});
