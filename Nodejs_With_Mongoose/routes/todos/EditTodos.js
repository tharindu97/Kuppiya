const { Router } = require('express');
const  { model } = require('mongoose');
const Todos  = model('todos');

const router = new Router();

 router.put('/api/edit/:id',async(req,res) =>{
    const body = req.body;
    const id = req.params.id;
     try {
        await Todos.updateOne(
            {_id: id},
            { 
                $set: body
             }
            );
        const todo = await Todos.findById(id);
        return res.status(200).json(todo);

     } catch (error) {
         console.log(error.message);
     }
 });

module.exports = router;