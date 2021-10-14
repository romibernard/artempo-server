const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
//conjunto de errores/check de la ruta:
const { validationResult } = require("express-validator")
const User = require("./../models/User")

exports.createUser = async (req, res) => {
    // REVISIÓN DE VALIDACIONES
    const errors = validationResult(req) //al momento de hacer mis checks, busca la propiedad de los errores.
    console.log(errors)
    if (!errors.isEmpty) {
        return res.status(400).json({
            msgError: errors.array()
        })
    }

    // PEDIR LOS DATOS DEL FORMULARIO
    const { username, email, password } = req.body

    // ENCRIPTACIÓN
    try {
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const newUser = await User.create({
            username,
            email,
            hashedPassword
        })
        console.log(newUser)
    }

}