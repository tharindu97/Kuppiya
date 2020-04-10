import { validationResult } from "express-validator";

const authBodyValidator = (req,res,next) =>{
    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({ erros: erros.array() });
    }
    next();
};

export default authBodyValidator;