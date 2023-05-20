import Express  from "express";
import { createFoodEvent, createFoodBlogs, deleteFoodEventById, deleteFoodBlogs, deleteVolunteerById, getAllFoodEvents, getAllFoodBlogs, getAllVolunteers, getFoodEventById, getFoodBlogsById, getVolunteerById, registerVolunteer, requestForVolunteer, updateFoodEventById, updateFoodBlogs, updateVolunteerById } from "../controllers/food.controller";

const foodRouter = Express.Router();

foodRouter.get('/blogs', getAllFoodBlogs);
foodRouter.get('/blogs/:id', getFoodBlogsById);
foodRouter.post('/blogs', createFoodBlogs);
foodRouter.patch('/blogs/:id', updateFoodBlogs);
foodRouter.delete('/blogs/:id', deleteFoodBlogs);
foodRouter.get('/volunteers', getAllVolunteers);
foodRouter.get('/volunteers/:id', getVolunteerById);
foodRouter.post('/volunteers', registerVolunteer);
foodRouter.patch('/volunteers/:id', updateVolunteerById);
foodRouter.delete('/volunteers/:id', deleteVolunteerById);
foodRouter.post('/request/volunteering', requestForVolunteer);
foodRouter.get('/events', getAllFoodEvents);
foodRouter.get('/events/:id', getFoodEventById);
foodRouter.post('/events', createFoodEvent);
foodRouter.patch('/events/:id', updateFoodEventById);
foodRouter.delete('/events/:id', deleteFoodEventById);

export default foodRouter; 