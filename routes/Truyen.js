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
//xuất router
module.exports = router;
