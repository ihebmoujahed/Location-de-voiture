const router = require('express').Router();
const itemController = require("../controllers/item.controller");
//For Student
router.post("/SignUp", itemController.SignUp);
router.post("/Loca_car", itemController.Loca_car);
router.get("/select_Loca_car", itemController.select_Loca_car);
router.get("/select_idloca/:id_location", itemController.select_idloca);
module.exports = router;
