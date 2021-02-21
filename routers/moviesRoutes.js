const routerFilms = require('express').Router();
const movieController = require('../Controller/moviesController')
const movieSchema = require('../models/moviesDb')

// API routes
routerFilms.get('/VideoClub/movie', async (req, res) => {
    try {
        res.json(await movieController.findAllFilms())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

routerFilms.get('/VideoClub/movie:id',async (req, res) => {
    try {
        res.json(await movieController.findOne(req))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerFilms.post('/VideoClub/movie',async (req, res) => {
    try{
        const id = await movieController.addFilm(new movieSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerFilms.put('/VideoClub/update-movie:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await movieController.updateFilm(id,new movieSchema(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerFilms.delete('/VideoClub/remove-movie/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await movieController.deleteFilm(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerFilms;