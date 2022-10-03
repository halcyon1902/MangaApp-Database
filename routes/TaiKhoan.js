const TaiKhoanController = require("../controller/TaiKhoanController");
const router = require("express").Router();
//Thêm tài khoản
router.post("/", TaiKhoanController.AddTaiKhoan);
//Lấy toàn bộ thông tin tài khoản
router.get("/", TaiKhoanController.GetAllTaiKhoan);
//Lấy thông tin 1 tài khoản
router.get("/:id", TaiKhoanController.Get1TaiKhoan);
//Cập nhật thông tin tài khoản
router.put("/:id", TaiKhoanController.Update1TaiKhoan);
//xuất router
module.exports = router;
