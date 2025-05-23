const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
//const authenticated = require("../middlewares/authenticated");
const validarUsers = require("../middlewares/validarUsers");


router.get("/", userController.getUsers );

router.get("/:id",  userController.getUserById);

router.get("/ordenados/fecha", userController.getUserOrden);

router.post("/", validarUsers, userController.createUser); //se le puede poner el middleware authenticated o no 

router.put("/:id", validarUsers, userController.updateUser);//se le puede poner el middleware authenticated o no 

router.delete("/:id", userController.deleteUser);//se le puede poner el middleware authenticated o no 



module.exports = router;