const db = require('./');

module.exports = {

  getInfo: (callback) => {
    let queryStr = `SELECT * FROM etsy_ProductDescription;`
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(results)
      }
    })
  },

  getPhotos: (callback) => {
    let qString = `SELECT * FROM etsy_PhotoProductDisplay;`
    db.query(qString, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(results)
      }
    })
  }

}
