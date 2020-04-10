import { Router } from "express";
import { check } from "express-validator";
import authBodyValidator from "../../middlewares/auth/authBodyValidator";

const router = Router();
const authValidation = [
    check('email','Enter a Valid Email Address').isEmail(),
    check('password','Password must be at least 6 characters').isLength({
        min:6
    })
];

//Login
router.post('/login', authValidation, authBodyValidator ,async (req,res) =>{

});

//Register
router.post('/register', authValidation, authBodyValidator ,async (req,res) =>{
    
});

export default router;