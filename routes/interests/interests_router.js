import { Router } from 'express';
import { TokenValidationMiddleware } from '../../middlewares/token/index.js';
import { InterestsController } from "../../controllers/interests/index.js";

const router = Router();

router.get('/', TokenValidationMiddleware, InterestsController);

export default router;