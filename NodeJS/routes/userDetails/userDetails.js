const { Router } = require('express');
const { uuid } = require('uuidv4');

let users = [
    {
        id:uuid(),
        name: 'Tharindu kavishna',
        email: 'tharindukavishna@gmail.com',
        age:22,
        contact: '0719484749'
    },
    {
        id:uuid(),
        name: 'Vihanga Deshan',
        email: 'vihanga@gmail.com',
        age:21,
        contact: '0714585697'
    },
    {
        id:uuid(),
        name: 'Thmira Lakshna',
        email: 'thimira@gmail.com',
        age:22,
        contact: '0715224749'
    },
    {
        id:uuid(),
        name: 'Sjith Lakshan',
        email: 'sajith@gmail.com',
        age:23,
        contact: '0769484749'
    }
];

const router = Router();

//Get All
router.get('/all',(req,res) =>{
    return res.status(200).json(users);
});

//Get by one user
router.get('/all/:id', (req,res) =>{
    const num = req.params.id;
    return res.status(200).json(users[num - 1]);
});


//Get user by id
router.get('/get/:id',(req,res) => {
    const id = req.params.id
    const user = users.filter(user => user.id === id);
    if(user){
        return res.status(200).json(user);
    }
    return res.status(204).json('user id Not Found');
});

//Add user
router.post('/post',(req,res) =>{
    const body = req.body;
    body.id = uuid();
    users = [...users, body];
    return res.status(200).json(users);
});

//User Delete
router.delete('/delete/:id',(req,res) =>{
    const id = req.params.id;
    const isHere = users.some(user => user.id === id);
    if(!isHere){
        return res.status(204).json('user is Not Found');
    }
    const newuser = users.filter(nuser => nuser.id !== id);
    users = newuser;
    return res.status(200).json(users);

});

//User Update

module.exports = router;