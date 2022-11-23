const express = require("express");
const tacgiaController = require("../controllerAdmin/TacGiaController");
const router = express.Router();

router.get("/create", tacgiaController.create);
router.post("/store", tacgiaController.store);

//show thong tin 1 object
// router.use("/:id", loginController.show);
module.exports = router;
