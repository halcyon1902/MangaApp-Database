const BinhLuanController = require("../controller/BinhLuanController");
const router = require("express").Router();

//Thêm bình luận
router.post("/", BinhLuanController.AddBL);
//Chỉnh sửa bình luận
router.put("/:id", BinhLuanController.Update1BL);
//xuất router
module.exports = router;
