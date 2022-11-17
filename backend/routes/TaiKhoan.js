const middlewareController = require("../controller/middlewareController");
const taikhoanController = require("../controller/taikhoanController");
const router = require("express").Router();
//Thêm tài khoản
router.post("/", taikhoanController.AddTaiKhoan);
//Lấy toàn bộ thông tin tài khoản
router.get("/", middlewareController.verifyTokenAndAdminAuth, taikhoanController.GetAllTaiKhoan);
//Lấy thông tin 1 tài khoản
router.get("/:id", taikhoanController.Get1TaiKhoan);
//Cập nhật thông tin tài khoản
router.put("/:id", taikhoanController.Update1TaiKhoan);
//đăng nhập
router.post("/login", taikhoanController.loginUser);
//đăng xuất
router.post("/logout", middlewareController.verifyToken, taikhoanController.logoutUser);
//làm mới token
router.post("/refresh", taikhoanController.requestRefreshToken);
//xuất router
module.exports = router;
