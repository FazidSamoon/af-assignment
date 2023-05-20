import express from 'express';
import eduRouter from './education.routes';
import authRouter from './auth.routes';
import emailRouter from './email.routes';
import foodRouter from './food.routes';
import paymentRouter from './payment.routes';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/education', eduRouter)
router.use('/mail', emailRouter)
router.use('/food',foodRouter)
router.use('/payment', paymentRouter)

export default router;
