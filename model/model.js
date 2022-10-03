const mongoose = require("mongoose");

const TacGiaSchema = new mongoose.Schema({
  TenTacGia: {
    type: String,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
  Truyens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truyen",
    },
  ],
});
const TruyenSchema = new mongoose.Schema({
  TenTruyen: {
    type: String,
    required: true,
  },
  TheLoai: {
    type: [String],
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
  TinhTrang: {
    type: Boolean,
    required: true,
  },
  GioiThieu: {
    type: String,
  },
  AnhBia: {
    type: String,
    required: true,
  },
  LuotThich: {
    type: Number,
  },
  LuotXem: {
    type: Number,
  },
  LuotTheoDoi: {
    type: Number,
  },
  TacGias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TacGia",
      required: true,
    },
  ],
});
const TaiKhoanSchema = new mongoose.Schema({
  TaiKhoan: {
    type: String,
    required: true,
  },
  MatKhau: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  PhanQuyen: {
    type: Boolean,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
});
//tạo model
let TacGia = mongoose.model("TacGia", TacGiaSchema);
let Truyen = mongoose.model("Truyen", TruyenSchema);
let TaiKhoan = mongoose.model("TaiKhoan", TaiKhoanSchema);

module.exports = { Truyen, TacGia, TaiKhoan };
