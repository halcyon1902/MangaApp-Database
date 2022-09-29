const TruyenController = require("../controller/TruyenController");

const router = require("express").Router();

//Thêm truyện
router.post("/", TruyenController.AddTruyen);
//lấy toàn bộ truyện
router.get("/", TruyenController.GetAllTruyen);

//xuất router
module.exports = router;
