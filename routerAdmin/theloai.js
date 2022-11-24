const express = require("express");
const theloaiAdminController = require("../controllerAdmin/TheLoaiAdminController");
const router = express.Router();

router.get("/create", theloaiAdminController.create);
router.post("/store", theloaiAdminController.store);
router.get("/:id/edit", theloaiAdminController.edit);
router.put("/:id", theloaiAdminController.update);

//show thong tin 1 object
// router.use("/:id", loginController.show);
module.exports = router;
