//CRUD de Obras

const Obras = require('./../models/Obras')
//obtener obras
exports.getAllObras = async (req, res) => {
    try {
        const obras = await Obras.find({})
        console.log(obras)
        return res.json({
            data: obras
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
        sizeH,
        sizeW,
        sizeP,
        materials,
        pictureUrl,
        videoUrl,
        availableForSale
    } = req.body

    try {
        const newObra = await Obras.create({
            name,
            sizeH,
            sizeW,
            sizeP,
            materials,
            pictureUrl,
            videoUrl,
            availableForSale
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
        pictureUrl,
        videoUrl,
        availableForSale
    } = req.body

    try {
        const updatedObra = await Obras.findByIdAndUpdate(id, {
            name,
            sizeH,
            sizeW,
            sizeP,
            materials,
            pictureUrl,
            videoUrl,
            availableForSale
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
        const deletedObra = await Obras.findByIdAndRemove({ _id: id })
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