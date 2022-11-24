const express = require("express");
const truyenAdminController = require("../controllerAdmin/TruyenAdminController");
const router = express.Router();

router.get("/create", truyenAdminController.create);
router.post("/store", truyenAdminController.store);
router.get("/:id/edit", truyenAdminController.edit);
router.put("/:id", truyenAdminController.update);
router.put("/trangthai/:id", truyenAdminController.changeStatus);

//show thong tin 1 object
// router.use("/:id", loginController.show);
module.exports = router;
