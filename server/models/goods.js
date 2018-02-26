var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productSchema = new Schema({
  "productId": String,
  "productName": String,
  "salePrice": Number,
  "productImage": String,
  "checked":String,
  "productNum":Number
});

//param 表名，schema
//表名会自动匹配数据库里带s的collection
module.exports = mongoose.model('good', productSchema);
