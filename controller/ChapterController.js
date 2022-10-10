const { Truyen, Chapter } = require("../model/model");
const ChapterController = {
  //Thêm Chapter
  AddChapter: async (req, res) => {
    try {
      const newChapter = new Chapter(req.body);
      const saveChapter = await newChapter.save();
      if (req.body.Truyens) {
        const truyen = Truyen.findById(req.body.Truyens);
        await truyen.updateMany({ $push: { Chapters: saveChapter._id } }); // thêm id chapter vào truyện
      }
      res.status(200).json(saveChapter);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //lấy toàn bộ truyện
  GetAllTruyen: async (req, res) => {
    try {
      const allTruyen = await Truyen.find();
      res.status(200).json(allTruyen);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //lấy thông tin 1 truyện
  Get1Truyen: async (req, res) => {
    try {
      const truyen = await Truyen.findById(req.params.id).populate("TacGias");
      res.status(200).json(truyen);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //cập nhật thông tin truyện
  Update1Truyen: async (req, res) => {
    try {
      const truyen = await Truyen.findById(req.params.id);
      await truyen.updateOne({ $set: req.body });
      res.status(200).json("Updated successful");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

//xuất router
module.exports = TruyenController;
