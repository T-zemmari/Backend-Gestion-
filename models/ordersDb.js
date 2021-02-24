const mongoose= require('mongoose');
const ObjectId = mongoose.Types.ObjectId
const Schema = mongoose.Schema;
const user = require('./usersDb')
const movie = require('./moviesDb')

let orderSchema = new Schema;

  orderSchema={

    userCostumerID:
        {type: ObjectId,
        required :true
    },
    
    movieID:
    {type: ObjectId,
       requierd:true
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
   
    
  




  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;