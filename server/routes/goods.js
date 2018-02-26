var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//连接db
mongoose.connect('mongodb://127.0.0.1:27017/db_demo');

mongoose.connection.on("connected", function () {
  console.log("connect success");
});

mongoose.connection.on("error", function () {
  console.log("connect error");
});

mongoose.connection.on("disconnected", function () {
  console.log("connect disconnected");
});

// 查询商品
router.get("/", function (req, res, next) {
  // 分页查询，价格排序
  let page = parseInt(req.param("page"));
  let pageSize = parseInt(req.param("pageSize"));
  let sort = req.param("sort");
  let skip = (page - 1) * pageSize;
  let startPrice = parseFloat(req.param("startPrice"));
  let endPrice = parseFloat(req.param("endPrice"));
  let params = {};
  if (endPrice != 0) {
    params = {
      salePrice: {
        $gte: startPrice,
        $lte: endPrice
      }
    }
  }
  let goodsModel = Goods.find(params).skip(skip).limit(pageSize);
  goodsModel.sort({
    'salePrice': sort
  });
  goodsModel.exec(function (err, doc) {
    // 查询所有
    // Goods.find({}, function (err,doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      });
    } else {
      res.json({
        status: '0',
        msg: '',
        result: {
          count: doc.length,
          list: doc
        }
      });
    }
  });
});

// 加入购物车
router.post("/addCart", function (req, res, next) {
  let userId = "100000077";
  let User = require("../models/user");
  // post 取参数
  let productId = req.body.params.productId;

  User.findOne({
    userId: userId
  }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      })
    } else {
      let goodItem = '';
      doc.cartList.forEach(item => {
        if (item.productId == productId) {
          goodItem = item;
          item.productNum++;
        }
      });
      if (goodItem) {
        doc.save(function (err3, doc3) {
          if (err3) {
            res.json({
              status: "1",
              msg: err3.message
            })
          } else {
            res.json({
              status: "0",
              msg : '',
            })
          }
        })
      } else {
        Goods.findOne({
          productId: productId
        }, function (err1, doc1) {
          if (err1) {
            res.json({
              status: "1",
              msg: err1.message
            })
          } else {
            if (doc1) {
              doc1.productNum = 1;
              doc1.checked = 1;
              doc.cartList.push(doc1);
              doc.save(function (err2, doc2) {
                if (err2) {
                  res.json({
                    status: "1",
                    msg: err2.message
                  })
                } else {
                  res.json({
                    status: "0",
                    msg: "success"
                  })
                }
              })
            } else {
              
            }
          }
        })
      }
    }
  });
})

module.exports = router;
