const db = require('./');

module.exports = {

  get: (callback) => {
    let queryStr = `SELECT * FROM etsy_productDescription;`
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(results)
      }
    })
  }


}