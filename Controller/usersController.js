const mongoose = require('mongoose');
const user = require('../models/usersDb');
const Rental = require('../models/ordersDb')
class User {
    constructor() {

    }

    
    async findAllUser(userColecction) {
        return user.find(userColecction)
    };

    
    async findById(id) {
        return user.findById(id);
    }

    
    async addUser(usuario) {
            return user.create(usuario)
        }
       
    async updateUser(id, usuario) {
               
     return user.findByIdAndUpdate(id,usuario)
        }
      
    async deleteUser(id) {
       
        return user.findByIdAndRemove(id)
    }
    async rentMovie(userId,movieId){
      //let dayNumber = moment(Range[0].diff(Range[1].days());
        return Rental.create({
        userCostumerID : userid,
        movieID : Movie.id,
        RentalDateInit:Range[0],
        RenatDateEnd:Range[1],
          //  precio :Movie.dailyPrice * daysNumber

        })
    }
}

let userController = new User();
module.exports = userController;