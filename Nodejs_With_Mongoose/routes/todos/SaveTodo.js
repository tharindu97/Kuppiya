const { Router } = require('express');
const { check, validationResult } = require('express-validator'); 
const  { model } = require('mongoose');
const Todos  = model('todos');

const router = new Router();

router.post('/api/save',
[
    check('title','Title is Required').not().isEmpty(),
    check('description','Description is Required').not().isEmpty()
],async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() });
    }
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