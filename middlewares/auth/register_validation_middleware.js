import { body } from 'express-validator';
import { AUTH_VALIDATION_ERRORS } from '../../src/constants/error_messages/index.js';

const registerValidationMiddleware = [
    body('email', AUTH_VALIDATION_ERRORS.EMAIL).isEmail(),
    body('username', AUTH_VALIDATION_ERRORS.USERNAME).isLength({ min: 3 }),
    body('password', AUTH_VALIDATION_ERRORS.PASSWORD).isLength({ min: 8 })
];

export default registerValidationMiddleware;