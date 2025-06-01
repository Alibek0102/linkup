import { Router } from "express";
import { LoginController, RegistrationController } from '../../controllers/auth/index.js';
import { registerValidationMiddleware, loginValidationMiddleware } from '../../middlewares/auth/index.js';

const router = Router();

router.post('/login', loginValidationMiddleware, LoginController);
router.post('/registration', registerValidationMiddleware, RegistrationController)

export default router;