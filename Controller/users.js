const mongoose = require('mongoose');
const user = require('../models/user-db');
const Rental = require('../models/order-db')
const Movie = require('../models/movies-db')




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
        user.password = await bcrypt.hash(user.password, 6);
            return user.create(usuario)
        }
       
    async updateUser(id, usuario) {
               
     return user.findByIdAndUpdate(id,usuario)
        }
      
    async deleteUser(id) {
       
        return user.findByIdAndRemove(id)
    }
    async rentMovie(userid,movieID){
      //let dayNumber = moment(Range[0].diff(Range[1].days());
        
       return Rental.create({
        userid : {
            name:ObjectId.name,
            adress: ObjectId.address,
            phone:ObjectId.phone
        },
        movieID : {
          title:ObjectId.title

         },
       //  titulo:Movie.title,
       // RentalDateInit:Range[0],
       // RenatDateEnd:Range[1],
        //precio :Movie.dailyPrice * daysNumber

        })
       
    }

}

let userController = new User();
module.exports = userController;