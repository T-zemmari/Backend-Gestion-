const mongoose = require('mongoose');
const user = require('../models/usersDb');

class User {
    constructor() {

    }

    //GET (return all users from DB)
    async findAllUser(userColecction) {
        return user.find(userColecction)
    };

    //GET (return an user with id)
    async findById(id) {
        return user.findById(id);
    }

    //POST (adding a new user)
    async addUser(usuario) {
            return user.create(usuario)
        }
        //PUT (update an existing user)
    async updateUser(id, usuario) {
               
     return user.findByIdAndUpdate(id,usuario)
        }
        //DELETE (delete a user by id)
    async deleteUser(id) {
       
        return user.findByIdAndRemove(id)
    }
}

let userController = new User();
module.exports = userController;