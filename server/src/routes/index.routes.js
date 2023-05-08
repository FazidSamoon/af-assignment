import express from 'express';
import eduRouter from './education.routes';
import authRouter from './auth.routes';
import emailRouter from './email.routes';
import employementRouter from './employement.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/education', eduRouter);
router.use('/mail', emailRouter);
router.use('/employement', employementRouter);

export default router;
