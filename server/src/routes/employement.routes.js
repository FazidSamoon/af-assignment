import Express from 'express';
import {
  getAllEmployementBlogs,
  getEmployementBlogsById,
  createEmployementBlogs,
  updateEmployementBlogs,
  deleteEmployementBlogs,
} from '../controllers/employement.controller';

import {
  getAllEmployementSession,
  getEmployementSessionById,
  createEmployementSession,
  updateEmployementSession,
  deleteEmployementSession,
} from '../controllers/employement.controller';

const employementRouter = Express.Router();

employementRouter.get('/blogs', getAllEmployementBlogs);
employementRouter.get('/blogs/:id', getEmployementBlogsById);
employementRouter.post('/blogs', createEmployementBlogs);
employementRouter.patch('/blogs/:id', updateEmployementBlogs);
employementRouter.delete('/blogs/:id', deleteEmployementBlogs);

employementRouter.get('/session', getAllEmployementSession);
employementRouter.get('/session/:id', getEmployementSessionById);
employementRouter.post('/session', createEmployementSession);
employementRouter.patch('/session/:id', updateEmployementSession);
employementRouter.delete('/session/:id', deleteEmployementSession);

export default employementRouter;
