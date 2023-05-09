import express from 'express';
import eduRouter from './education.routes';
import authRouter from './auth.routes';
import healthcareRouter from './healthcare.routes';
import emailRouter from './email.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/education', eduRouter);
router.use('/healthcare', healthcareRouter);
router.use('/mail', emailRouter);

export default router;
