const { Truyen, TacGia } = require("../model/model");
const TruyenController = {
  //Thêm truyện
  AddTruyen: async (req, res) => {
    try {
      const newTruyen = new Truyen(req.body);
      const saveTruyen = await newTruyen.save();
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
      // const là chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.
      const truyen = await Truyen.findById(req.params.id);
      await truyen.updateOne({ $set: req.body });
      res.status(200).json("Updated successful");
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //tìm kiếm truyện theo tên truyện
  SearchTruyen: async (req, res) => {
    try {
<<<<<<< HEAD
      // let cho phép chúng ta cập nhật giá trị của biến chứ không cho phép chúng ta tái khái báo lại biến đó.
      let data = await Truyen.find({
        $or: [
          { TenTruyen: { $regex: req.params.key, $options: "i" } }, // $option: 'i' => để k phân biệt chữ hoa - thường
        ],
      });
      if (data != null) {
        res.status(200).json(data);
      } else {
        res.status(200).json("Không Tìm Thấy Kết Quả!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Tìm kiếm truyện theo tác giả
  SearchTruyenTheoTacGia: async (req, res) => {
    try {
      const tacgia = await TacGia.findOne({ TenTacGia: req.params.key });
      if (tacgia != null) {
        let data = await Truyen.find({ TacGias: tacgia.id });
        if (data.length == 0) {
          res.status(200).json("tác giả không có truyện");
        } else {
          res.status(200).json(data);
        }
      } else {
        res.status(200).json("Tác giả không tồn tại");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Tìm kiếm truyện theo thể loại
  SearchTruyenTheoTheLoai: async (req, res) => {
    try {
      const theloai = await TheLoai.findOne({ TenTheLoai: req.params.key });
      if (theloai != null) {
        let data = await Truyen.find({
          TheLoai: theloai.id,
        });
        if (data.length == 0) res.status(200).json("Thể lọai không có truyện");
        else res.status(200).json(data);
      } else {
        res.status(200).json("Thể Loại không tồn tại");
      }
    } catch (err) {
      res.status(500).json(err);
    }
=======
      let data = await Truyen.find({
        $or: [
          { TheLoai: { $regex: req.params.key } },
          { TenTruyen: { $regex: req.params.key } },
        ],
      });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
>>>>>>> parent of 2f2b74d (9 search truyện theo tác giả, thể loaijk, tên truyện)
  },
};
//xuất router
module.exports = TruyenController;
