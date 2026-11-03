import express from 'express';
import { createApplication } from '../controllers/application.controller.js';
import { authMiddleWare } from '../middleware/auth.middleware.js';

const router = express.Router();


router.post('/', authMiddleWare, createApplication)

export default router;