const binhluanController = require("../controller/binhluanController");
const router = require("express").Router();

//Thêm bình luận
router.post("/", binhluanController.AddBL);
//Chỉnh sửa bình luận
router.put("/:id", binhluanController.Update1BL);
//xuất router
module.exports = router;
