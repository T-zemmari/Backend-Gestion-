const routerFilms = require('express').Router();
const movieController = require('../Controller/movies')
const movieSchema = require('../models/movies-db')



routerFilms.post('/VideoClub/movie/search',async (req, res) => {
    try {
        const {  title } = req.body;
       // console.log(titulo);
        const findAllFilms =await movieController.searchByTitle(title);
        res.json(findAllFilms);
      }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});







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

routerFilms.get('/VideoClub/movie/:id',async (req, res) => {
    try {
        let id2=req.params.id
        console.log(id2);
        res.json(await movieController.findById(id2))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});



routerFilms.post('/VideoClub/movie',async (req, res) => {
    try{
        const id = await movieController.addFilm((req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerFilms.put('/VideoClub/movie/:id/update',async (req,res) => {
        try{
           let id= req.params.id;
           console.log(id)
            res.json(await movieController.update(id,(req.body)));
        } catch( error ){
            return res.sendStatus(500).json({
                message: 'Server Error'
            });
        }
    });
    

  
routerFilms.delete('/VideoClub/movie/:id', async (req, res) => {
    try{
        const id = req.params.id;
        console.log(id)
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