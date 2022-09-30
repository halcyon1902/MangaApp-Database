const { Truyen, TacGia } = require("../model/model");
const TruyenController = {
  //Thêm truyện\
  AddTruyen: async (req, res) => {
    try {
      const newTruyen = new Truyen(req.body);
      const saveTruyen = await newTruyen.save();
      if (req.body.TacGia) {
        const tacgia = TacGia.findById(req.body.TacGia);
        await tacgia.updateMany({ $push: { Truyens: saveTruyen._id } }); // thêm id truyện vào tác giả
      }
      res.status(200).json(saveTruyen);
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
};

//xuất router
module.exports = TruyenController;
