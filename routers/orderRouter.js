const routerOrder = require('express').Router();
const orderController = require('../Controller/orderController')
const orderSchema = require('../models/ordersDb')


routerOrder.get('/VideoClub/order', async (req, res) => {
    try {
        res.json(await orderController.findAllOrders())
    }catch (err) {
        return res.sendStatus(500).json({
           message: 'Internal Server Error'
        });
        console.log(err.message)
    }
});

routerOrder.get('/VideoClub/order/:id',async (req, res) => {
    try {
        let id2=req.params.id
        console.log(id2);
        res.json(await orderController.findById(id2))
    }catch (err) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
});

routerOrder.post('/VideoClub/order',async (req, res) => {
    try{
        const id = await orderController.addOrder((req.body));
        const status = 'success';
        res.json({status,id});
    } catch( error ){
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
        });
    }
})

routerOrder.put('/VideoClub/order/:id/update',async (req,res) => {
        try{
           let id= req.params.id;
           console.log(id)
            res.json(await orderController.update(id,(req.body)));
        } catch( error ){
            return res.sendStatus(500).json({
                message: 'Server Error'
            });
        }
    });
    

  
routerOrder.delete('/VideoClub/order/:id', async (req, res) => {
    try{
        const id = req.params.id;
        console.log(id)
        const status = 'deleted'
        await orderController.deleteFilm(id);
        res.json({status,id});
    } catch( error ) {
        return res.sendStatus(500).json({
            message: 'Internal Server Error'
     });   
    }
 
 });

module.exports = routerOrder;