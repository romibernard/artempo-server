//CRUD de Obras
//importación del modelo
const Obra = require('./../models/Obras')


//obtener obras
exports.getAllObras = async (req, res) => {
    try {
        const obra = await Obra.find({})
        console.log(obra)
        return res.json({
            data: obra
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            data: null,
            errorMsg: "Se presentó un error interno. Estamos arreglándolo lo más pronto posible."
        })
    }
    res.json({
        data: "Artempo art"
    })
}

//crear obra
exports.createObra = async (req, res) => {
    //Recabar datos formulario
    const {
        name,
        picturesUrl,
        sizeH,
        sizeW,
        sizeP,
        materials,
        availableForSale,
        price
    } = req.body

    try {
        const newObra = await Obra.create({
            name,
            picturesUrl,
            sizeH,
            sizeW,
            sizeP,
            materials,
            availableForSale,
            price
        })
        res.json({
            data: newObra,
            msg: "Creación de obra exitosa."
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            errormsg: "Hubo un error al crear la obra."
        })
    }
}

//actualizar obra
exports.updateObra = async (req, res) => {
    const {
        name,
        sizeH,
        sizeW,
        sizeP,
        materials,
        picturesUrl,
        availableForSale,
        price
    } = req.body

    try {
        const updatedObra = await Obra.findByIdAndUpdate(id, {
            name,
            sizeH,
            sizeW,
            sizeP,
            materials,
            picturesUrl,
            availableForSale,
            price
        }, { new: true }) //regresa formulario actualizado
        return res.json({
            data: updatedObra
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msgError: "Error actualizando la obra."
        })
    }
}

//eliminación de obra
exports.deleteObra = async (req, res) => {
    const { id } = req.body
    try {
        const deletedObra = await Obra.findByIdAndRemove({ _id: id })
        return res.json({
            data: deletedObra,
            msg: "Eliminación de obra exitosa."
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msgError: "Error borrando la obra."
        })
    }
}