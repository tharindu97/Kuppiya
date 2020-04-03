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
    return res.status(200).json(toDos);
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
    if(!todo){
        return res.status(204).json('Todo Not Found');
    }
    return res.status(200).json(todo);
});

//Add todo
router.post('/add',(req,res)=>{
    const body = req.body;
    body.id = uuid();
    toDos = [...toDos, body]
    return res.status(201).json(toDos);
});

//Deleted todo
router.delete('/delete/:id',(req,res) =>{
    const id = req.params.id;
    const isHere = toDos.some(todo => todo.id === id);
    if(!isHere){
        return res.status(204).json('Todo Not Found');
    }
    const newTodo = toDos.filter(toDo => toDo.id !== id);
    toDos = newTodo;
    return res.status(200).json(toDos);
});

//Edite todo
router.put('/edit/:id', (req,res) =>{
    /*const id = req.params.id;
    const body = req.body;
    const isHere = toDos.some(todo => todo.id === id);
    if(!isHere){
        return res.json('Todo Not Found');
    }
    const newTodo = toDos.filter(toDo => toDo.id !== id);
    toDos = newTodo;

    let newTodos = {id, ...body};
    toDos = [newTodos , ...toDos]
    return res.json(toDos);*/

    const id = req.params.id;
    const { title, description } = req.body;

    const index = toDos.findIndex(todo => todo.id === id);
    if(index<0){
        return res.status(204).json('Todo Not Found');
    }
    toDos[index].title = title;
    toDos[index].description = description;

    return res.status(200).json(toDos);
}); 

module.exports = router;