const mongoose = require('mongoose');
const Order = require('../models/ordersDb');


class Peticion {

    constructor(){

    }



    async findAllOrders(orders){
        return Order.find(orders);
    };

   

    async findById(id) {
        
        return Order.findById(id);

    };

   
    
     addOrder(order){
       return Order.create(order)
    };

    

    async update(id, order) {    
        return Order.findByIdAndUpdate(id,order);
    }

  

    async deleteFilm(id) {
        
        return Order.findByIdAndRemove(id)
    };
};

let orderController = new Peticion();
module.exports = orderController;