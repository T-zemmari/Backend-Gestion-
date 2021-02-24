const mongoose= require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Schema = mongoose.Schema;
const user = require('./usersDb')
const movie = require('./moviesDb')

let orderSchema = new Schema;

  orderSchema={

        ownerId:
    {type: ObjectId,
        ref:'User',
        required :true
    },
    
    movieId:
    {type: ObjectId,
        ref:'Movie',
       required:true
      },
      
    PedidoID:String,
           
    
    RentalDateInit:{
            Type:Date,
          
    },
    RenatDateEnd:{
            Type: Date,
         
    },
    PrecioPorDia:Number,
    
    //payment:{
       // Type: ['cash','paypal','card'],
       // default:String
  }
   
    
  




  const Order = mongoose.model('Rental', orderSchema);
  module.exports = Order;