var express = require('express');
var router = express.Router();
require('./../util/util')
var User = require('./../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  let params = {
    userName: req.body.userName,
    userPwd: req.body.userPwd
  };
  User.findOne(params, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      })
    } else {
      if (doc) {
        res.cookie("userId",doc.userId, {
          path: '/',
          maxAge: 60*60*1000
        });
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 60*60*1000
        });
        res.json({
          status: '0',
          msg: '',
          result: {
            userName: doc.userName
          }
        });
      } else {
        res.json({
          status: "2",
          msg: "username or password incorrect"
        })
      }
    }
  });
});

router.post("/logout", function (req, res, next) {
  res.cookie("userId", "", {
    path: '/',
    maxAge: -1
  });
  res.cookie("userName", "", {
    path: '/',
    maxAge: -1
  });
  res.json({
    status: "0",
    msg: "",
    result: ""
  })
});

router.get("/checkLogin", function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: "0",
      result: req.cookies.userName,
      msg: ''
    });
  } else {
    res.json({
      status: "1",
      result: '',
      msg: '未登录'
    });
  }
});

router.post("/getCartList", function (req, res, next) {
  if (req.cookies.userId) {
    let params = {
      userId: req.cookies.userId
    };
    User.findOne(params, function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message
        })
      } else {
        if (doc) {
          res.json({
            status: '0',
            msg: '',
            result: doc.cartList
          });
        } else {
          res.json({
            status: "4",
            msg: "empty cart",
            result: ""
          })
        }
      }
    });
  }
});

router.post("/deleteProduct", function (req, res, next) {
  let userId = req.cookies.userId;
  let productId = req.body.productId;
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
      doc.cartList.forEach((item, index) => {
        if (item.productId == productId) {
          goodItem = item;
          doc.cartList.splice(index, 1);
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
              result: productId
            });
          }
        })
      } else {
        res.json({
          status: "1",
          msg: "删除错误？"
        });
      }
    }
  });
});

router.post("/getAddressList", function (req, res, next) {
  if (req.cookies.userId) {
    let params = {
      userId: req.cookies.userId
    };
    User.findOne(params, function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message
        })
      } else {
        if (doc) {
          res.json({
            status: '0',
            msg: '',
            result: doc.addressList
          });
        } else {
          res.json({
            status: "4",
            msg: "empty address list",
            result: ""
          });
        }
      }
    });
  }
});

module.exports = router;
