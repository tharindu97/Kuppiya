const { Router } = require('express');
const router = Router();

router.post('/',(req,res) =>{
    const {name, password} = req.body;
    return res.json({name, password});
});

module.exports = router;