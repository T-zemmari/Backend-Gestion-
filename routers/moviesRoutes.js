const moviesRoutes = require('express').Router();
const movieController = require('../Controller/moviesController')
const movieSchema = require('../models/moviesDb')

// API routes
moviesRoutes.get('/movies', async (req, res) => {
    try {
        res.json(await movieController.findAllFilms())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

moviesRoutes.get('/movies/:id',async (req, res) => {
    try {
        res.json(await movieController.findOne(req))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

moviesRoutes.post('/movies',async (req, res) => {
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

moviesRoutes.put('/movie:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await movieController.updateFilm(id,new movieSchema(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

moviesRoutes.delete('/remove-movie/:id', async (req, res) => {
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

module.exports = moviesRoutes;