const express = require("express");
const theloaiController = require("../controllerAdmin/TheLoaiController");
const router = express.Router();

router.get("/create", theloaiController.create);
router.post("/store", theloaiController.store);

//show thong tin 1 object
// router.use("/:id", loginController.show);
module.exports = router;
