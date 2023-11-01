const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crud-mern-stack');

const objectdb = mongoose.connection

objectdb.on('connected', () => {
    console.log('conexion correcta con MongoDB')
})

objectdb.on('error', () => {
    console.log('Error al conectarse a la base de datos')
})

module.exports = mongoose
