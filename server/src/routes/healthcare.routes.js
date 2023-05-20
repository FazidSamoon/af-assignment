import Express from 'express';
import {
  getAllHealthcareBlogs,
  getHealthcareBlogsById,
  createHealthcareBlogs,
  updateHealthcareBlogs,
  deleteHealthcareBlogs,
} from '../controllers/healthcare.controller';

import{
  getAllHealthcareWorkshop,
  getHealthcareWorkshopById,
  createHealthcareWorkshop,
  updateHealthcareWorkshop,
  deleteHealthcareWorkshop,
} from '../controllers/healthcare.controller';

const healthcareRouter = Express.Router();

healthcareRouter.get('/blogs', getAllHealthcareBlogs);
healthcareRouter.get('/blogs/:id', getHealthcareBlogsById);
healthcareRouter.post('/blogs', createHealthcareBlogs);
healthcareRouter.patch('/blogs/:id', updateHealthcareBlogs);
healthcareRouter.delete('/blogs/:id', deleteHealthcareBlogs);

healthcareRouter.get('/workshops', getAllHealthcareWorkshop);
healthcareRouter.get('/workshops/:id', getHealthcareWorkshopById);
healthcareRouter.post('/workshops', createHealthcareWorkshop);
healthcareRouter.patch('/workshops/:id', updateHealthcareWorkshop);
healthcareRouter.delete('/workshops/:id', deleteHealthcareWorkshop);

export default healthcareRouter;
