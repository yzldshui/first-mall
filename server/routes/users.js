var express = require('express');
var router = express.Router();
require('./../util/util')
var User = require('./../models/user');

/* GET users listing. */
router.get('/', function (req, res, next) {
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
        res.cookie("userId", doc.userId, {
          path: '/',
          maxAge: 60 * 60 * 1000
        });
        res.cookie("userName", doc.userName, {
          path: '/',
          maxAge: 60 * 60 * 1000
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

router.get("/getCartCount", function (req, res, next) {
  if (req.cookies && req.cookies.userId) {
    console.log("userId:" + req.cookies.userId);
    var userId = req.cookies.userId;
    User.findOne({
      "userId": userId
    }, function (err, doc) {
      if (err) {
        res.json({
          status: "0",
          msg: err.message
        });
      } else {
        let cartList = doc.cartList;
        let cartCount = 0;
        cartList.map(function (item) {
          if (item.checked == "1") {
            cartCount += parseFloat(item.productNum);
          }
        });
        res.json({
          status: "0",
          msg: "",
          result: cartCount
        });
      }
    });
  } else {
    res.json({
      status: "0",
      msg: "当前用户不存在"
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

router.post("/Cart/delete", function (req, res, next) {
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  User.update({
    userId: userId
  }, {
    $pull: {
      "cartList": {
        "productId": productId
      }
    }
  }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      res.json({
        status: "0",
        msg: "success",
        result: ''
      });
    }
  });
});

router.post("/Cart/update", function (req, res, next) {
  let userId = req.cookies.userId;
  let productId = req.body.productId;
  let productNum = req.body.productNum;
  let checked = req.body.checked ? "1" : "0";
  User.update({
    "userId": userId,
    "cartList.productId": productId
  }, {
    "cartList.$.productNum": productNum,
    "cartList.$.checked": checked
  }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ""
      });
    } else {
      res.json({
        status: "0",
        msg: '',
        result: "success"
      });
    }
  });
});

router.post("/Cart/updateAll", function (req, res, next) {
  let userId = req.cookies.userId;
  let checked = req.body.checked;
  User.findOne({
    userId: userId
  }, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message,
        result: ""
      });
    } else {
      if (doc) {
        doc.cartList.forEach(item => {
          item.checked = checked;
        });
        doc.save(function (err1, doc1) {
          if (err1) {
            res.json({
              status: "1",
              msg: err1.message,
              result: ""
            });
          } else {
            res.json({
              status: "0",
              msg: '',
              result: "success"
            });
          }
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

router.post("/createOrder", function (req, res, next) {

});

module.exports = router;
