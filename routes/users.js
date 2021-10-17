const express = require("express")
const router = express.Router()
const { check } = require("express-validator")

const usersController = require("./../controllers/usersController")


// Creación de usuario
router.post("/create",
    //es un array porque debe hacer varias validaciones
    [                                               //.not  corrobora que una casilla no esté vacía
        check("email", "Agrega un email válido").isEmail().not().isEmpty(),
        check("password", "El password debe ser mínimo de 6 caracteres").isLength({ min: 6 })
    ]
    , usersController.createUser)


module.exports = router