const express = require("express")
const router = express.Router()
const { check } = require("express-validator")

const usersController = require("./../controllers/usersController")


// CRUD DE USUARIOS
// GET - USERS - OBTENER TODOS LOS USUARIOS PARA LOS ADMINS
/*
  1. SOLO LOS ADMINS PUEDEN ACCEDER A TODOS LOS USUARIOS
  2. PEDIR AUTENTICACIÓN DE ADMIN
 */


// Creacicón de usuario
router.post("/create",
    //es un array porque debe hacer varias validaciones
    [                                               //.not  corrobora que una casilla no esté vacía
        check("email", "Agrega un email válido").isEmail().not().isEmpty(),
        check("password", "El password debe ser mínimo de 6 caracteres").isLength({ min: 6 })
    ]
    , usersController.createUser)


//por corroborar si se anexará por cuestión de tiempo:

// PUT - USER - ACTUALIZAR UN USUARIO
//SOLO LOS MISMOS USUARIOS PUEDEN ACTUALIZAR SUS DATOS


// DELETE - USER - BORRAR UN USUARIO
//SOLO ADMINS PUEDEN BORRAR AL USUARIO


module.exports = router