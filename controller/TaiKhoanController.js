const { Truyen, TacGia, TaiKhoan } = require("../model/model");
const TaiKhoanController = {
  //Thêm tài khoản
  AddTaiKhoan: async (req, res) => {
    try {
      const taikhoan = new TaiKhoan(req.body);
      const saveTaiKhoan = await taikhoan.save();
      res.status(200).json(saveTaiKhoan);
    } catch (err) {
      res.status(500).json(err);
    }
  }, //Lấy toàn bộ tài khoản
  GetAllTaiKhoan: async (req, res) => {
    try {
      const taikhoan = await TaiKhoan.find();
      res.status(200).json(taikhoan);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Lấy thông tin 1 tài khoản
  Get1TaiKhoan: async (req, res) => {
    try {
      const taikhoan = await TaiKhoan.findById(req.params.id);
      res.status(200).json(taikhoan);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Cập nhật thông tin tài khoản
  Update1TaiKhoan: async (req, res) => {
    try {
      const taikhoan = await TaiKhoan.findById(req.params.id);
      await taikhoan.updateOne({ $set: req.body });
      res.status(200).json("Updated successful");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
// xuất controller
module.exports = TaiKhoanController;
