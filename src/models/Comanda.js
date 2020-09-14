const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Esquema de Comanda
const ComandaSchema = new Schema(
    {
        mesa: {type: Number, required: true},
        comanda: {type: String},
        hora: {type:Date}
    },
    {
        timestamps: true
    }
);

// Creamos y exportamos el modelo Comanda
const Comanda = mongoose.model('Comanda', ComandaSchema);
module.exports = Comanda;