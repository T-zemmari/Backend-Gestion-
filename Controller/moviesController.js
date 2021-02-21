
const mongoose = require('mongoose');
const movie = require('../models/moviesDb');


class Film {

    constructor(){

    }

    //GET - Return all Films in the DB

    async findAllFilms(filmCollection){
        return movie.find(filmCollection);
    };

    //GET - Return a Film with specified ID

    async findById({id: id}) {
        return movie.findOne({id: id});
    };

    //POST - Insert a new Film in the DB

    async addFilm(film){
       return movie.create(film)
    };

    //PUT - Update a register already exists

    async updateFilm(id, film){
        const idFound = movie.findOne({id: id})
        return idFound.update(film)
    };

    //DELETE - Delete a TVShow with specified ID

    async deleteFilm({id: id}) {
        const idFound = movie.findOne({id: id})
        return idFound.remove()
    };
};

let movieController = new Film();
module.exports = movieController;