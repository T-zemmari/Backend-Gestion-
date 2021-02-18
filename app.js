const express = require('express');
const app = express();
const Port = 3000;






app.listen(Port, ()=>console.log(`Escuchando en el puerto:${Port}`));
console.log("Estoy Aqui y ahora")