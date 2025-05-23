const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const authenticated = require("../middlewares/authenticated");
const validarUsers = require("../middlewares/validarUsers");


router.get("/", userController.getUsers );

router.get("/:id",  userController.getUserById);

router.get("/ordenados/fecha", userController.getUserOrden);

router.post("/", authenticated, validarUsers, userController.createUser);

router.put("/:id", authenticated,validarUsers, userController.updateUser);

router.delete("/:id", authenticated, userController.deleteUser);



module.exports = router;