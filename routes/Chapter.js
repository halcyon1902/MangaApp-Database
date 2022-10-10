const ChapterController = require("../controller/ChapterController");

const router = require("express").Router();

//thêm chapter
router.post("/", ChapterController.AddChapter);
//Lấy toàn bộ thông tin truyện
router.get("/", ChapterController.GetAllTruyen);
//Lấy thông tin 1 truyện
router.get("/:id", ChapterController.Get1Truyen);
//Cập nhật thông tin truyện
router.put("/:id", ChapterController.Update1Truyen);
//xuất router
module.exports = router;
