const express = require('express');
const Comanda = require('../models/Comanda');
const router = express.Router();

//metodo get
router.get('/', async (req, res) => {
    try {
        const comadas = await Comanda.find();
        return res.status(200).json(comandas)
    } catch (err) {
        return res.status(500).json(err);
    }
});

//metodo post
router.post('/', async (req, res, next) => {
    try {
        // Crearemos una instancia de mascota con los datos enviados
        const newComanda = new Comanda({
            mesa: req.body.mesa,
            comanda: req.body.comanda,
            hora: req.body.hora,
        });

        // Guardamos la comanda en la DB
        const createdComanda = await newComanda.save();
        return res.status(200).json(createdComanda);
    } catch (err) {
        // Lanzamos la función next con el error para que gestione todo Express
        next(err);
    }
});

//metodo delete real
router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await comandas.findByIdAndDelete(id);
        return res.status(200).json('Tu comanda, ha sido borrada!');
    } catch (err) {
        next(err);
    }
});

module.exports = router;