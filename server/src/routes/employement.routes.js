import Express from 'express';
import {
  getAllEmployementBlogs,
  getEmployementBlogsById,
  createEmployementBlogs,
  updateEmployementBlogs,
  deleteEmployementBlogs,
} from '../controllers/employement.controller';

const employementRouter = Express.Router();

employementRouter.get('/blogs', getAllEmployementBlogs);
employementRouter.get('/blogs/:id', getEmployementBlogsById);
employementRouter.post('/blogs', createEmployementBlogs);
employementRouter.patch('/blogs/:id', updateEmployementBlogs);
employementRouter.delete('/blogs/:id', deleteEmployementBlogs);

export default employementRouter;
