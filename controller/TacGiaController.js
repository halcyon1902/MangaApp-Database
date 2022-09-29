const {Truyen,TacGia} = require("../model/model");
const TacGiaController = {
  // thêm tác giả
  AddTacGia: async (req, res) => {
    try {
      const tacgiamoi = new TacGia(req.body);
      const saveTacGia = await tacgiamoi.save();
      res.status(200).json(saveTacGia);
    } catch (err) {
      res.status(500).json(err); // http request code nếu muốn biết code nghĩa là gì
    }
  },
  //lấy toàn bộ tác giả
  GetAllTacGia: async (req, res) => {
    try {
      const allTacGia = await TacGia.find();
      res.status(200).json(allTacGia);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
// xuất controller
module.exports = TacGiaController;