const { Router } = require('express');
const { uuid } = require('uuidv4');

let toDos =[
    {
        id: uuid(),
        title:'Learn Nodejs',
        description:'Learn Nodejs With Express'
    },
    {
        id: uuid(),
        title:'Learn Reactjs',
        description:'Learn Reactjs With Redux'
    }
];

const router = Router();
//Get all Todo
router.get('/todo',(req,res) =>{
    return res.json(toDos);
});

//Get One Todo By index
router.get('/todo/:num',(req,res) =>{
    const number = req.params.num;
    return res.json(toDos[number - 1]);
});

//Get todo by id
router.get('/getId/:id',(req,res) =>{
    const id = req.params.id;
    const todo = toDos.filter(todo => todo.id === id);
    return res.json(todo);
});

module.exports = router;