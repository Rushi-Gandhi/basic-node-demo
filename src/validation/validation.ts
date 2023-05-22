import { body } from "express-validator";

export class Validation {
    static myValidation = [
        body('email').isEmail().withMessage('email must be valid'),
    ];
}