const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    id: { 
        type: ObjectId 
    },
    name: { 
        type: String,
        
        
    },
    lastName:{
        type:String
    },

    creationDate: {
        type: Date,
        default: new Date,
        
    },
    birthDate: { 
        type: String   
    },
    email: {
        type: String,
        required:true
        
    },

    password:{String,
    
    },

    phone: { 
        type: String,
        
    },
    address: { 
        type: String,
        
    },

    genre: { 
        type: String, 
        
    },
    payment: {
        type: Number, 
        enum: ['card' ,'paypal', 'cash'],
        
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;