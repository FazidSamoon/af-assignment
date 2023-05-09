import Express from 'express';
import {
  getAllHealthcareBlogs,
  getHealthcareBlogsById,
  createHealthcareBlogs,
  updateHealthcareBlogs,
  deleteHealthcareBlogs,
} from '../controllers/healthcare.controller';

const healthcareRouter = Express.Router();

healthcareRouter.get('/blogs', getAllHealthcareBlogs);
healthcareRouter.get('/blogs/:id', getHealthcareBlogsById);
healthcareRouter.post('/blogs', createHealthcareBlogs);
healthcareRouter.patch('/blogs/:id', updateHealthcareBlogs);
healthcareRouter.delete('/blogs/:id', deleteHealthcareBlogs);

export default healthcareRouter;
