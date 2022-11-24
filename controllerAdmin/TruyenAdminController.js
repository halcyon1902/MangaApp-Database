const { TaiKhoan, Truyen, TacGia } = require("../model/model");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

class TruyenAdminController {
  //[GET] /truyen/create
  create(req, res, next) {
    res.render("truyenAdmin/create");
  }

  //[POST] /truyen/create
  store(req, res, next) {
    const truyen = new Truyen(req.body);

    var tacgias = truyen.TacGias[0].split(",");
    var theloais = truyen.TheLoais[0].split(",");
    truyen.TacGias = tacgias;
    truyen.TheLoais = theloais;
    req.body.TacGias = tacgias;
    console.log(req.body.TacGias);
    truyen
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
  //[GET] /truyen/:id/edit
  edit(req, res, next) {
    Truyen.findById(req.params.id)
      .then((truyen) => {
        res.render("truyenAdmin/edit", {
          truyen: mongooseToObject(truyen),
        });
      })
      .catch(next);
  }
  //[PUT] /truyen/:id
  update(req, res, next) {
    const truyen = new Truyen(req.body);
    var tacgias = truyen.TacGias[0].split(",");
    var theloais = truyen.TheLoais[0].split(",");

    req.body.TacGias = tacgias;
    req.body.TheLoais = theloais;

    Truyen.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/admin/stored/truyen"))
      .catch(next);
  }

  //[PUT] /truyen/trangthai/:id
  changeStatus = async (req, res, next) => {
    const truyen = await Truyen.findById(req.params.id);
    truyen
      .updateOne({ $set: { TrangThai: !truyen.TrangThai } })
      .then(() => res.redirect("back"))
      .catch(next);
  };
}

module.exports = new TruyenAdminController();
