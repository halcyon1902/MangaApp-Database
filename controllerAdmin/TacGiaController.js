const { TaiKhoan, Truyen, TacGia } = require("../model/model");
const { mutipleMongooseToObject } = require("../util/mongoose");

class TacGiaController {
  //[GET] /tacgia/create
  create(req, res, next) {
    res.render("tacgia/create");
  }

  //[POST] /tacgia/create
  store(req, res, next) {
    console.log(req.body);

    const tacgia = new TacGia(req.body);
    tacgia
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new TacGiaController();
