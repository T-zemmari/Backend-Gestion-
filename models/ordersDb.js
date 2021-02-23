const mongoose= require('mongoose');
const objectId = mongoose.Types.ObjectId
const Schema = mongoose.Schema;

let orderSchema = new Schema;

  orderSchema={

    userID:String,
    
    movieID:String,
      
    PedidoID:objectId,
           
    
    DiaDelAlquiler:{
            Type:Date,
          
    },
    DiaDeLaDevolucion:{
            Type: Date,
         
    }
    
    //payment:{
       // Type: ['cash','paypal','card'],
       // default:String
  }
   
    
  




  const Order = mongoose.model('Order', orderSchema);
  module.exports = Order;