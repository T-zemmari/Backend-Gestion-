
const mongoose = require('mongoose');
const Movie = require('../models/moviesDb');


class Film {

    constructor(){

    }



    async findAllFilms(filmCollection){
        return Movie.find(filmCollection);
    };

   

    async findById({id: id}) {
        return Movie.findOne({id: id});
    };

   
    async addFilm(Peli){
       return Movie.create(Peli)
    };

    

    async updateFilm(id, Peli){
        const idFound = Movie.findOne({id: id})
        return idFound.update(Peli)
    };

  

    async deleteFilm({id: id}) {
        const idFound = Movie.findOne({id: id})
        return idFound.remove()
    };
};

let movieController = new Film();
module.exports = movieController;