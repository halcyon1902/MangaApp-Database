const TruyenController = require("../controller/TruyenController");
const router = require("express").Router();
//Thêm truyện
router.post("/", TruyenController.AddTruyen);
//Lấy toàn bộ thông tin truyện
router.get("/", TruyenController.GetAllTruyen);
//Lấy thông tin 1 truyện
router.get("/:id", TruyenController.Get1Truyen);
//Cập nhật thông tin truyện
router.put("/:id", TruyenController.Update1Truyen);
//Tìm kiếm theo thể loại và tên
<<<<<<< HEAD
router.get("/SearchTruyen/:key", TruyenController.SearchTruyen);
//Tìm kiếm theo tên tác giả
router.get("/SearchTruyenTheoTacGia/:key", TruyenController.SearchTruyenTheoTacGia);
//Tìm Kiếm truyện theo thể loại
router.get("/SearchTruyenTheoTheLoai/:key", TruyenController.SearchTruyenTheoTheLoai);
=======
router.get("/search/:key", TruyenController.SearchTruyen);
>>>>>>> parent of 2f2b74d (9 search truyện theo tác giả, thể loaijk, tên truyện)
//xuất router
module.exports = router;
