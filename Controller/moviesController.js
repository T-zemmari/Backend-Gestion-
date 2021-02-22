
const mongoose = require('mongoose');
const Movie = require('../models/moviesDb');


class Film {

    constructor(){

    }



    async findAllFilms(filmCollection){
        return Movie.find(filmCollection);
    };

   

    async findById({id=_id}) {
        return Movie.findById({id});
    };

   
    async addFilm(Peli){
       return Movie.create(Peli)
    };

    

    async updateFilm(id, Peli){
        const idFound = Movie.findOne({id: id})
        return idFound.update(Peli)
    };

  

    async deleteFilm({_id}) {
        const idFound = Movie.findOne({_id})
        return idFound.remove()
    };
};

let movieController = new Film();
module.exports = movieController;