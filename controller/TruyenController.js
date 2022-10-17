const { Truyen, TacGia } = require("../model/model");
const TruyenController = {
  //Thêm truyện
  AddTruyen: async (req, res) => {
    try {
      const newTruyen = new Truyen(req.body);
      const saveTruyen = await newTruyen.save();
      // thêm id truyện vào tác giả
      // if (req.body.TacGias) {
      //   const tacgia = TacGia.findById(req.body.TacGias);
      //   await tacgia.updateMany({ $push: { Truyens: saveTruyen._id } });
      // }
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
  Find1TheLoai: async (req, res) => {
    try {
      const truyen = await Truyen.find();
      truyen.where("TheLoai", Action);
      res.status(200).json(truyen);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

//xuất router
module.exports = TruyenController;
