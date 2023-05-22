import {Request , Response , NextFunction} from 'express';
import { validationResult } from 'express-validator'
export const validateRequest = (req : Request , res : Response , next : NextFunction)=>{
    const error = validationResult(req);

    if(!error.isEmpty()) {
        res.status(400).send({"errors" : error.array()})
    }
    next();
}