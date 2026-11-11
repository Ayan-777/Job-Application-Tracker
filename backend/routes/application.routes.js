import express from 'express';
import { createApplication, getApplications, getApplicationById, updateApplication } from '../controllers/application.controller.js';
import { authMiddleWare } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', authMiddleWare, createApplication);
router.get('/', authMiddleWare, getApplications);
router.get('/:id', authMiddleWare, getApplicationById);
router.put('/:id', authMiddleWare, updateApplication)

export default router;