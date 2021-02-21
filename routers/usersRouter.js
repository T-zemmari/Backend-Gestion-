const routerUser = require('express').Router();
const userController = require('../Controller/usersController')
const userSchema = require('../models/usersDb')

// API routes
routerUser.get('/VideoClub/user', async (req, res) => {
    try {
        res.json(await userController.findAllFilms())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

routerUser.get('/VideoClub/user:id',async (req, res) => {
    try {
        res.json(await userController.findOne(req))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.post('/VideoClub/add-user',async (req, res) => {
    try{
        const id = await userController.addFilm(new userSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerUser.put('/update-user:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await userController.updateFilm(id,new userSchema(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.delete('/remove-user/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteFilm(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerUser;