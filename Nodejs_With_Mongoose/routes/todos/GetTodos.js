const { Router } = require('express');
const  { model } = require('mongoose');
const Todos  = model('todos');

const router = new Router();

router.get('/api', async(req,res) =>{
    try {
        const todos = await Todos.find();
        if(!todos){
            return res.status(204).json();
        }
        return res.status(200).json(todos);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;