const { TaiKhoan, Truyen, TacGia, TheLoai } = require("../model/model");
const { mutipleMongooseToObject } = require("../util/mongoose");

class TheLoaiController {
  //[GET] /theloai/create
  create(req, res, next) {
    res.render("theloai/create");
  }

  //[POST] /theloai/create
  store(req, res, next) {
    console.log(req.body);

    const theLoai = new TheLoai(req.body);
    theLoai
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new TheLoaiController();
