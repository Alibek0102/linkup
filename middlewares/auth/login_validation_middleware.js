import { body } from 'express-validator';
import { AUTH_VALIDATION_ERRORS } from '../../src/constants/error_messages/index.js';

const loginValidator = [
    body('email', AUTH_VALIDATION_ERRORS.EMAIL).isEmail(),
    body('password', AUTH_VALIDATION_ERRORS.PASSWORD).isLength({ min: 8 }),
]

export default loginValidator;