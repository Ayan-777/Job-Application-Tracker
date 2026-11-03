import express from 'express';
import { createApplication,getApplications } from '../controllers/application.controller.js';
import { authMiddleWare } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleWare, createApplication);
router.get('/', authMiddleWare, getApplications);

export default router;