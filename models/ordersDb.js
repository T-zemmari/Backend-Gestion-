const logger = (log)=>{console.log(new Date,log)}
const mongoose= require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const MONGO_HOST = process.env.MONGO_HOST || "localhost";
const MONGO_PORT =process.env.MONGO_PORT || "27017";
const MONGO_DBNAME = process.env.MONGO_DBNAME || "practicas";
const MONGO_USER =process.env.MONGO_USER || null;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || null;
const QUERY_STRING = MONGO_USER ? 
`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@/${MONGO_HOST}/${MONGO_PORT}/${MONGO_DBNAME}`
:`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}`

logger('Estableciendo coneccion');

mongoose.connect(QUERY_STRING, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    logger('connection done');
})


let orderSchema = mongoose.Schema;

  orderSchema={
    user:{
        Type:user.ObjectId

    },
    title:{
           type:String,
     },
    id:{
           Type:ObjectId
    },
    DiaDelAlquiler:{
            Type:String,
            default:new Date
    },
    
    payment:{
        Type: ['cash','paypal','card'],
        default:String
    },
   
    
  }