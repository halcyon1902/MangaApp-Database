const { TaiKhoan, Truyen, TacGia, Chapter } = require("../model/model");
const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../util/mongoose");

class ChapterAdminController {
  //[Get] Admin/stored/truyen
  storedChapter(req, res, next) {
    var truyenID = req.params.id;
    Chapter.find({ Truyen: req.params.id })
      .then((chapter) =>
        res.render("chapterAdmin/stored-chapter", {
          truyen: mutipleMongooseToObject(chapter),
          truyenID,
        })
      )
      .catch(next);
  }

  //[GET] /truyen/create
  create(req, res, next) {
    var truyenID = req.params.id;
    res.render("chapterAdmin/create", { truyenID });
  }

  //[POST] /truyen/create
  store = async (req, res) => {
    try {
      const newChapter = new Chapter(req.body);
      var linkAnhs = newChapter.LinkAnhs[0].split(",");
      newChapter.LinkAnhs = linkAnhs;
      const saveChapter = await newChapter.save();
      if (req.body.Truyen) {
        const truyen = Truyen.findById(req.body.Truyen);
        await truyen.updateMany({
          $push: { Chapters: saveChapter._id },
          $set: { NgayCapNhat: saveChapter.NgayNhap },
        }); // thêm id chapter vào truyện
      }

      res.redirect("/chapterAdmin/stored/" + newChapter.Truyen);
    } catch (err) {
      console.log(err);
    }
  };

  //[GET] /truyen/:id/edit
  edit(req, res, next) {
    Chapter.findById(req.params.id)
      .then((chapter) => {
        res.render("chapterAdmin/edit", {
          chapter: mongooseToObject(chapter),
        });
      })
      .catch(next);
  }
  //[PUT] /truyen/:id
  update(req, res, next) {
    const chapter = new Chapter(req.body);

    var linkAnhs = chapter.LinkAnhs[0].split(",");
    console.log(req.body);
    req.body.LinkAnhs = linkAnhs;

    Chapter.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/chapterAdmin/stored/" + chapter.Truyen))
      .catch(next);
  }

  //[PUT] /truyen/trangthai/:id
  changeStatus = async (req, res, next) => {
    const chapter = await Chapter.findById(req.params.id);
    chapter
      .updateOne({ $set: { TrangThai: !chapter.TrangThai } })
      .then(() => res.redirect("back"))
      .catch(next);
  };
}

module.exports = new ChapterAdminController();
