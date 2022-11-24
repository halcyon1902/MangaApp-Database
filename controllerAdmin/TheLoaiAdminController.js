const { TaiKhoan, Truyen, TacGia, TheLoai } = require("../model/model");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

class TheLoaiAdminController {
  //[GET] /theloaiadmin/create
  create(req, res, next) {
    res.render("theloaiAdmin/create");
  }

  //[POST] /theloaiadmin/create
  store(req, res, next) {
    console.log(req.body);

    const theLoai = new TheLoai(req.body);
    theLoai
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }

  //[GET] /tatheloaiadmincgia/:id/edit
  edit(req, res, next) {
    TheLoai.findById(req.params.id)
      .then((theloai) => {
        res.render("theloaiAdmin/edit", {
          theloai: mongooseToObject(theloai),
        });
      })
      .catch(next);
  }
  //[PUT] /theloaiadmin/:id
  update(req, res, next) {
    TheLoai.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/admin/stored/theloai"))
      .catch(next);
  }
}

module.exports = new TheLoaiAdminController();
