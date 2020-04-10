import { Router } from "express";
import { check, validationResult } from "express-validator";

const router = Router();
const authValidation = [
    check('email','Enter a Valid Email Address').isEmail(),
    check('password','Password must be at least 6 characters').isLength({
        min:6
    })
];

//Login
router.post('/login',async (req,res) =>{

});

//Register
router.post('/register', authValidation ,async (req,res) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({ erros: erros.array() });
    }
});

export default router;