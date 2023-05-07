import { Express } from "express";
import { createFoodEvent, createFoodBlogs, deleteFoodEventById, deleteFoodBlogs, deleteVolunteerById, getAllFoodEvents, getAllFoodBlogs, getAllVolunteers, getFoodEventById, getFoodBlogsById, getVolunteerById, registerVolunteer, requestForVolunteer, updateFoodEventById, updateFoodBlogs, updateVolunteerById } from "../controllers/food.controller";

const foodRouter = Express.Router();

eduRouter.get('/blogs', getAllFoodBlogs);
eduRouter.get('/blogs/:id', getFoodBlogsById);
eduRouter.post('/blogs', createFoodBlogs);
eduRouter.patch('/blogs/:id', updateFoodBlogs);
eduRouter.delete('/blogs/:id', deleteFoodBlogs);
eduRouter.get('/volunteers', getAllVolunteers);
eduRouter.get('/volunteers/:id', getVolunteerById);
eduRouter.post('/volunteers', registerVolunteer);
eduRouter.patch('/volunteers/:id', updateVolunteerById);
eduRouter.delete('/volunteers/:id', deleteVolunteerById);
eduRouter.post('/request/volunteering', requestForVolunteer);
eduRouter.get('/events', getAllFoodEvents);
eduRouter.get('/events/:id', getFoodEventById);
eduRouter.post('/events', createFoodEvent);
eduRouter.patch('/events/:id', updateFoodEventById);
eduRouter.delete('/events/:id', deleteFoodEventById);

export default foodRouter; 