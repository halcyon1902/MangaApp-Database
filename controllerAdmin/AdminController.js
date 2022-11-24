const { TaiKhoan, Truyen, TacGia, TheLoai } = require("../model/model");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

class AdminController {
  //[Get] Admin/stored/tacgia
  storedTacGia(req, res, next) {
    TacGia.find({})
      .then((tacgia) =>
        res.render("admin/stored-TacGia", {
          tacgia: mutipleMongooseToObject(tacgia),
        })
      )
      .catch(next);
  }

  //[Get] Admin/stored/theloai
  storedTheLoai(req, res, next) {
    TheLoai.find({})
      .then((theloai) =>
        res.render("admin/stored-TheLoai", {
          theloai: mutipleMongooseToObject(theloai),
        })
      )
      .catch(next);
  }

  //[Get] Admin/stored/theloai
  storedTaiKhoan(req, res, next) {
    TaiKhoan.find({})
      .then((taikhoan) =>
        res.render("admin/stored-TaiKhoan", {
          taikhoan: mutipleMongooseToObject(taikhoan),
        })
      )
      .catch(next);
  }

  //[Get] Admin/stored/truyen
  storedTruyen(req, res, next) {
    Truyen.find({})
      .then((truyen) =>
        res.render("admin/stored-Truyen", {
          truyen: mutipleMongooseToObject(truyen),
        })
      )
      .catch(next);
  }
}

module.exports = new AdminController();
