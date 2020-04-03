//const express, {Router} = require('express');
const {Router} = require('express');
//const router = express.Router();
const router = Router();

router.post('/:id', (req, res) =>{
    const _id = req.params.id;
    return res.json(_id);
});

module.exports = router;