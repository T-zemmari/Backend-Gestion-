
const mongoose = require('mongoose');
const Movie = require('../models/moviesDb');


class Film {

    constructor(){

    }



    async findAllFilms(filmCollection){
        return Movie.find(filmCollection);
    };

   

    async findById(id) {
        return Movie.findById(id);
    };

   
    async addFilm(Peli){
       return Movie.create(Peli)
    };

    

    async update(id, Peli) {    
        return Movie.findByIdAndUpdate(id,Peli);
    }

  

    async deleteFilm(id) {
        
        return Movie.findByIdAndRemove(id)
    };
};

let movieController = new Film();
module.exports = movieController;