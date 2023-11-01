const express = require('express')
const app = express()

//confifurar server basico
app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend node.js en ejecucion')
})


app.listen(5000, () => {
    console.log('el servidor está corriendo correctamente')
})