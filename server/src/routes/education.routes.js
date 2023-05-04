import Express from "express";
import { createEduEvent, createEducationalBlogs, deleteEduEventById, deleteEducationalBlogs, deleteVolunteerById, getAllEduEvents, getAllEducationalBlogs, getAllVolunteers, getEduEventById, getEducationalBlogsById, getVolunteerById, registerVolunteer, requestForVolunteer, updateEduEventById, updateEducationalBlogs, updateVolunteerById } from "../controllers/education.cotroller";

const eduRouter = Express.Router();

eduRouter.get('/blogs', getAllEducationalBlogs);
eduRouter.get('/blogs/:id', getEducationalBlogsById);
eduRouter.post('/blogs', createEducationalBlogs);
eduRouter.patch('/blogs/:id', updateEducationalBlogs);
eduRouter.delete('/blogs/:id', deleteEducationalBlogs);
eduRouter.get('/volunteers', getAllVolunteers);
eduRouter.get('/volunteers/:id', getVolunteerById);
eduRouter.post('/volunteers', registerVolunteer);
eduRouter.patch('/volunteers/:id', updateVolunteerById);
eduRouter.delete('/volunteers/:id', deleteVolunteerById);
eduRouter.post('/request/volunteering', requestForVolunteer);
eduRouter.get('/events', getAllEduEvents);
eduRouter.get('/events/:id', getEduEventById);
eduRouter.post('/events', createEduEvent);
eduRouter.patch('/events/:id', updateEduEventById);
eduRouter.delete('/events/:id', deleteEduEventById);

export default eduRouter; 