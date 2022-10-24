const mongoose = require("mongoose");
//tạo schema Tác giả
const TacGiaSchema = new mongoose.Schema({
  TenTacGia: {
    type: String,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
  // Truyens: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Truyen",
  //   },
  // ],
});
//tạo schema Thể loại
const TheLoaiSchema = new mongoose.Schema({
  TenTheLoai: {
    type: String,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
});
//tạo schema Truyện
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
      type: String,
      required: true,
    },
  ],
  Chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
    },
  ],
});
//tạo schema Tài khoản
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
  NgayTao: {
    type: Date,
    default: Date.now,
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
  BinhLuans: {
    type: [String],
  },
});
//tạo schema Chapter
const ChapterSchema = new mongoose.Schema({
  TenChapter: {
    type: String,
    required: true,
  },
  NgayNhap: {
    type: Date,
    default: Date.now,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
  Truyen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truyen",
  },
  LinkAnh: {
    type: [String],
    required: true,
  },
  BinhLuans: {
    type: [String],
    required: true,
  },
});
//tạo schema Bình luận
const BinhLuanSchema = new mongoose.Schema({
  NoiDungBL: {
    type: String,
    required: true,
  },
  TrangThai: {
    type: Boolean,
    required: true,
  },
  NgayNhap: {
    type: Date,
    default: Date.now,
    required: true,
  },
  //thêm vào chapter
  Chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
  },
  TaiKhoan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TaiKhoan",
  },
});

//tạo model
let TacGia = mongoose.model("TacGia", TacGiaSchema);
let Truyen = mongoose.model("Truyen", TruyenSchema);
let TaiKhoan = mongoose.model("TaiKhoan", TaiKhoanSchema);
let Chapter = mongoose.model("Chapter", ChapterSchema);
let BinhLuan = mongoose.model("BinhLuan", BinhLuanSchema);
let TheLoai = mongoose.model("TheLoai", TheLoaiSchema);
module.exports = { Truyen, TacGia, TaiKhoan, Chapter, BinhLuan, TheLoai };
