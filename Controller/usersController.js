const mongoose = require('mongoose');
const user = require('../models/usersDb');

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
}

let userController = new User();
module.exports = userController;