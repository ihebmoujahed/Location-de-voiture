const router = require('express').Router();
const itemController = require("../controllers/item.controller");
//For Student
router.post("/SignUp", itemController.SignUp);






module.exports = router;
