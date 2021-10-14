const mongoose = require("mongoose")

const ObrasSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sizeH: {
        type: Number,
        required: true
    },
    sizeW: {
        type: Number,
        required: true
    },
    sizeP: {
        type: Number,
    },
    materials: {
        type: String,
        required: true
    },
    picturesUrl: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String
    },
    availableForSale: {
        type: Boolean,
        defautl: true,
        required: true
    }
})

const Obras = mongoose.model("Obras", ObrasSchema)

module.exports = Obras