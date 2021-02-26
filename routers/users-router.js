const routerUser = require('express').Router();
const userController = require('../Controller/users')
const userSchema = require('../models/user-db')
const bcrypt = require('bcryptjs');


routerUser.get('/VideoClub/user', async (req, res) => {
    try {
        res.json(await userController.findAllUser())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
        
    }
});

routerUser.get('/VideoClub/user/:id',async (req, res) => {
    try {
       let id1=req.params.id
       console.log(id1)
        res.json(await userController.findById(id1))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.post('/VideoClub/user',async (req, res) => {
   try{
    
        const id = await userController.addUser(req.body);
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
   }
})
routerUser.post('/VideoClub/user/:id/orders',async (req, res) => {
    try{
       // const userid= req.body.id;
        //const movieID = req.body.id;
         const id = await userController.rentMovie(req.body);
         //const status = 'success';
         res.json({status,id});
     } catch( error ){
         return res.sendStatus(500).json({
             message: 'Internal Server Error'
         });
    }
 })
 



routerUser.put('/VideoClub/user/:id/update',async (req,res) => {
    try{
        const id = req.params.id;
        console.log(id)
        res.json(await userController.updateUser(id,(req.body)));
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerUser.delete('/VideoClub/user/:id/remove', async (req, res) => {
    try{
        const id = req.params.id;
        console.log(id)
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