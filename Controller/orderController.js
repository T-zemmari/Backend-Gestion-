const mongoose = require('mongoose');
const Order = require('../models/ordersDb');
const User = require('../models/usersDb')
const Movie = require('../models/moviesDb')


class Rental {

    constructor(){

    }

    async rentMovie(ownerId,movieId) {
        const usuario = await User.findById(ownerId);
        const pelicula = await Movie.findById(movieId)
        if(!usuario || !pelicula){
            throw new Error('vaya me pego un tiro mejor')
        }
       
       return await Order.create({
            ownerId: ownerId,
            movieId: movieId
          
        });
    };



    async findAllOrders(orders){
        return Order.find(orders);
    };

   

    async findById(id) {
        
        return Order.findById(id);

    };

   
    
    // addOrder(order){
     //  return Order.create(order)
    //};

    

    async update(id, order) {    
        return Order.findByIdAndUpdate(id,order);
    }

  

    async deleteFilm(id) {
        
        return Order.findByIdAndRemove(id)
    };
};

let orderController = new Rental();
module.exports = orderController;