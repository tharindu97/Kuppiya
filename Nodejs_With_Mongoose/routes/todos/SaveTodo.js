const { Router } = require('express');
const  { model } = require('mongoose');
const Todos  = model('todos');

const router = new Router();

router.post('/api/save',async(req,res)=>{
    try {
        
        const body = req.body;
        const newTodo = new Todos(body);
        await newTodo.save();
        return res.status(201).json(newTodo);

    } catch (error) {
        console.log(error.message);
    }
});


module.exports = router;