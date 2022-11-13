const AuthController = require("../controller/AuthController");
const router = require("express").Router();
//Đăng nhập tài khoản
router.post("/login", AuthController.loginUser);
module.exports = router;
