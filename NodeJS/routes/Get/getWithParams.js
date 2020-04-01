const { Router } = require('express');
const router = Router();

router.get('/se/:id', (req,res) =>{
    const _id = req.params.id;
    return res.json(_id);
});

module.exports = router;