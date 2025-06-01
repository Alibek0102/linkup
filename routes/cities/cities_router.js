import { Router } from 'express';
import { TokenValidationMiddleware } from '../../middlewares/token/index.js';
import { CitiesController } from '../../controllers/cities/index.js';

const router = Router();

router.get('/', TokenValidationMiddleware, CitiesController);

export default router;