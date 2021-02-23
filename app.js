'use Strict'
const logger=(log)=>{console.log(new Date, log)}
const express = require('express');
const bodyparser = require('body-parser');
const mongoose=require('mongoose');
const routerFilms = require('./routers/moviesRouter')
const routerUser=require('./routers/usersRouter')
const routerOrder = require('./routers/orderRouter')


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










/*
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
//app.get('/',(req,res)=>{res.send("Hola De ///momento estoy aqui !!!!!!") });
app.use(express.json());


app.get('/api/user/',(req,res)=>{
     usuario.find({},(err,users)=>{
         if(err) return  res.status(500).send({mensaje : 'se ha producido un error del servidor lo sentimos'})
         res.status(200).send({users:users})
     })
   
})
app.get('/api/user/:id',(req,res)=>{
    
    
})




app.post('/api/user/',(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body);

    let usuario = new User();
    
    //user.date=req.body.date
    usuario.name=req.body.name
    usuario.lastName=req.body.lastName
    usuario.surName=req.body.surName
    usuario.email=req.body.email
    usuario.address=req.body.address
    usuario.birthday=req.body.birthday
    usuario.phone=req.body.phone
    

   usuario.save((error,usuarioStored)=>{
       if(error){
           res.status(500).send({mensaje:'error al salvar'});
       }
       res.status(200).send({usuario:usuarioStored});
   })
})


app.put('/api/user/:id',(req,res)=>{
    res.status(200).send('id modificado')
})

app.delete('/api/user/:id',(req,res)=>{
    res.status(200).send('id eliminado')
})

*/













