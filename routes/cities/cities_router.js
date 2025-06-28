import { Router } from 'express';
import { TokenValidationMiddleware } from '../../middlewares/token/index.js';
import { CitiesController } from '../../controllers/cities/index.js';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Cities
 */

/**
 * @swagger
 * /api/cities:
 *  get:
 *      summary: Получить список городов
 *      tags: [Cities]
 *      parameters:
 *        - in: query
 *          name: page
 *          schema:
 *              type: integer
 *          required: false
 *          description: Номер страницы
 *        - in: query
 *          name: per_page
 *          schema:
 *              type: integer
 *          required: false
 *          description: Кол-вол элементов на странице
 *      responses:
 *          200:
 *              description: Возвращает список городов.
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              type: object
 *                              properties:
 *                                  id:
 *                                      type: integer
 *                                      example: 1
 *                                  name:
 *                                      type: string
 *                                      example: Алматы
 *                                  latitude:
 *                                      type: number
 *                                      example: 45.0156
 *                                  longitude:
 *                                      type: number
 *                                      example: 78.3739
 *                                  created_at:
 *                                      type: string
 *                                      example: "2025-06-28T16:57:25.000Z"
 *                                  updated_at:
 *                                      type: string
 *                                      example: "2025-06-28T16:57:25.000Z"
 */
router.get('/', TokenValidationMiddleware, CitiesController);

export default router;