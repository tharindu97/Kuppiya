const { Router } = require('express');
const  { model } = require('mongoose');
const Todos  = model('todos');

const router = new Router();

router.delete('/api/delete/:id', async(req,res) =>{
    try {
        const id = req.params.id;
        const todos = await Todos.findByIdAndDelete(id);
        if(!todos){
            return res.status(400).json('Not Found Id');
        }
        return res.status(200).json('Delete By User');
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;