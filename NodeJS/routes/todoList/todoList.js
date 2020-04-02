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

router.get('/todo',(req,res) =>{
    return res.json(toDos);
});
router.get('/todo/:num',(req,res) =>{
    const number = req.params.num;
    return res.json(toDos[number - 1]);
});
module.exports = router;