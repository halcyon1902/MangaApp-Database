const { Truyen, TacGia, TheLoai } = require("../model/model");
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
  //tìm kiếm truyện theo tên và thể loại
  SearchTruyen: async (req, res) => {
    try {
        let data = await Truyen.find({
          $or: [
             { TenTruyen: { $regex: req.params.key, $options: 'i'} }, // $option: 'i' => để k phân biệt chữ hoa thư
          ],
        });
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  
  },
//===================tìm kiếm truyện theo tác giả=================
  SearchTruyenTheoTacGia: async (req, res) => {
    try {
      const tacgia = await TacGia.findOne( {TenTacGia :  req.params.key});

      if(tacgia != null){
        let data1 = await Truyen.find({
            TacGias: tacgia.id ,
        });
        if(data1.length ==0) 
         res.status(200).json("tác giả không có truyện");
        else
        res.status(200).json(data1);
      }
      else{
        res.status(200).json("Tên tác giả không tồn tại");
      }
        
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //===================tìm kiếm truyện theo thể loại=================
  SearchTruyenTheoTheLoai: async (req, res) => {
    try {
      // const theloai = await TheLoai.findOne({TenTheLoai : { $regex: req.params.key, $options: 'i'}});
      const theloai = await TheLoai.findOne({TenTheLoai :  req.params.key});

      if(theloai != null){
        let data = await Truyen.find({
          TheLoai:  theloai.id ,
        });
        if(data.length ==0) 
          res.status(200).json("Thể lọakhông có truyện");
        else
         res.status(200).json(data);
      }
      else{
        res.status(200).json("Thể Loại không tồn tại");
      }
        
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

//xuất router
module.exports = TruyenController;
