import { Router } from "express";
import { check } from "express-validator";
import bcrypt from 'bcryptjs';
import gravatar from 'gravatar';
import { model } from 'mongoose';

import authBodyValidator from "../../middlewares/auth/authBodyValidator";


const User = model('users');

const router = Router();
const authValidation = [
    check('email','Enter a Valid Email Address').isEmail(),
    check('password','Password must be at least 6 characters').isLength({
        min:6
    })
];



//Register
router.post('/register', authValidation, authBodyValidator ,async (req,res) =>{
    try {
        let { email, password } = req.body;

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                error: [{ msg: 'Email Already Taken, Please Try another Email' }]
            });
        }

        const image = gravatar.url(email, {
            s:'200',
            r:'pg',
            d:'mm'
        });
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const newUser = new User({email,password,image});
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "internal Server Erro" });
    }
});

//Login
router.post('/login', authValidation, authBodyValidator ,async (req,res) =>{
    try {
        let { email, password } = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({ error: [{ msg: 'Invalied Email' }] });
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if(!isPasswordMatched){
            return res.status(400).json({ error: [{ msg: 'Invalied Password' }] });
        }
     } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "internal Server Erro" });
    }
});

export default router;