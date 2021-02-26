'use Strict'
const logger=(log)=>{console.log(new Date, log)}
const express = require('express');
const bodyparser = require('body-parser');
const mongoose=require('mongoose');
const routerFilms = require('./routers/movies-router');
const routerUser=require('./routers/users-router');
const routerOrder = require('./routers/order-router');
const conectDbExpress = require('./conect-db-express');

const app = express();
const port =process.env.Port || 3000;



app.use(express.json())

app.use(routerFilms);
app.use(routerUser);
app.use(routerOrder);


// Aqui vamos a lanzar el servidor tanto el express como el mongodb

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT =process.env.MONGO_PORT || "27017";
const MONGO_DBNAME = process.env.MONGO_DBNAME || "practicas";
const MONGO_USER =process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@/${MONGO_HOST}/${MONGO_PORT}/${MONGO_DBNAME}`
:`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

logger('Estableciendo conection');

mongoose.connect(QUERY_STRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    logger('connection done');
    app.listen(port,()=>{console.log(`estoy escuchando el puerto :${port} `)});
})
























