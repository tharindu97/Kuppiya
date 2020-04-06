const { Router } = require('express');
const  { model } = require('mongoose');
const Todos  = model('todos');

const router = new Router();

router.get('/api/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const todos = await Todos.findById(id);
        if(!todos){
            return res.status(204).json('NOt Found Id');
        }
        return res.status(200).json(todos);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;