const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const movieSchema = new Schema({
    
    creationDate: {
        type: Date,
        default: new Date
    },
     
    id: { 
        type: ObjectId,
        
        
    },
    title: { 
        type: String
       
    },
    poster_path: { 
        type: String 
       
    },

    release_date: { 
        type: String

    },
    country: { 
        type: String 
    },
    description: { 
        type: String 
    },
    vote_average: Number,
    vote_count: Number,
    
    genre: { 
        type: String, 
        enum:
        {
            "Action": 28,
            "Adventure": 12,
            "Animation": 16,
            "Comedy": 35,
            "Crime": 80,
            "Documentary": 99,
            "Drama": 18,
            "Family": 10751,
            "Fantasy": 14,
            "History": 36,
            "Horror": 27,
            "Music": 10402,
            "Mystery": 9648,
            "Romance":10749,
            "Science Fiction":878,
            "Thriller":53,
            "War": 10752,
            "Western": 37
        }
    },
    
    adult: { 
        type: Boolean,
        default: false
    }
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;