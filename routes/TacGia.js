const TacGiaController = require("../controller/TacGiaController");
const router = require("express").Router();

//Them tac gia
router.post("/", TacGiaController.AddTacGia);
//get tac ca tat gia
router.get("/", TacGiaController.GetAllTacGia);
// //get 1 tac gia
// router.get("/:id", TacGiaController.Get1TacGia);
// //update tac gua
// router.put("/:id", TacGiaController.Update1TacGia);
// //delte tac ia
// router.delete("/:id", TacGiaController.DeleteTacGia);

//xuất router
module.exports = router;