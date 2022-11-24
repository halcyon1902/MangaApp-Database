const { TaiKhoan, Truyen, TacGia } = require("../model/model");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

class TacGiaAdminController {
  //[GET] /tacgia/create
  create(req, res, next) {
    res.render("tacgiaAdmin/create");
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
  //[GET] /tacgia/:id/edit
  edit(req, res, next) {
    TacGia.findById(req.params.id)
      .then((tacgia) => {
        res.render("tacgiaAdmin/edit", {
          tacgia: mongooseToObject(tacgia),
        });
      })
      .catch(next);
  }
  //[PUT] /tacgia/:id
  update(req, res, next) {
    TacGia.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/admin/stored/tacgia"))
      .catch(next);
  }
}

module.exports = new TacGiaAdminController();
