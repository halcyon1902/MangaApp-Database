const { TaiKhoan, Truyen } = require("../model/model");
const { mutipleMongooseToObject } = require("../util/mongoose");

class SiteController {
  //[Get] /home
  home(req, res, next) {
    Truyen.find({})
      .then((truyens) => {
        res.render("home", {
          truyens: mutipleMongooseToObject(truyens),
        });
      })
      .catch(next);
  }

  // show thong tin 1 object
  //   show(req, res) {
  //     res.send("tai khoang detail");
  //   }
}

module.exports = new SiteController();
