import express from 'express';
import eduRouter from './education.routes';
import authRouter from './auth.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/education', eduRouter)

export default router;
