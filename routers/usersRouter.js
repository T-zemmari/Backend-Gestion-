const routerUser = require('express').Router();
const userController = require('../Controller/usersController')
const userSchema = require('../models/usersDb')

// API routes
routerUser.get('/VideoClub/user', async (req, res) => {
    try {
        res.json(await userController.findAllUser())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
        
    }
});

routerUser.get('/VideoClub/user:id',async (req, res) => {
    try {
        res.json(await userController.findById(req))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.post('/VideoClub/user',async (req, res) => {
   try{
        const id = await userController.addUser(new userSchema(req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
   }
})

routerUser.put('/VideoClub/update-user:id',async (req,res) => {
    try{
        const id = req.params.id;
        res.json(await userController.updateUser(id,new userSchema(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.delete('/VideoClub/remove-user/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const status = 'deleted'
        await userController.deleteUser(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerUser;