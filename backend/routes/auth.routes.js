import { register,login } from '../controllers/auth.controller.js';
import express from 'express';
import { authMiddleWare } from '../middleware/auth.middleware.js';

const router = express.Router();


router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleWare, (req, res) => {
    res.status(200).json({ id: req.userId})
});

export default router;