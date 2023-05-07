import { badRequest } from "../errors/badRequest";
import foodBlogsModel from "../models/foodBlogs.models";
import foodEventsModel from "../models/foodEvents.models";
import { makeResponse } from "../utils/response";

export const getAllFoodBlogs = async (req, res, next) => {
    try {
        const response = await foodBlogsModel.find({});
        if (!response) makeResponse({ res, status: 500, message: "No blogs found" });
        makeResponse({ res, status: 200, data: response, message: "Blogs found" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getFoodBlogsById = async (req, res, next) => {
    try {
        const response = await foodBlogsModel.findById(req.params.id);
        if (!response) makeResponse({ res, status: 500, message: "No blog found" });
        makeResponse({ res, status: 200, data: response, message: "Blog found" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const createFoodBlogs = async (req, res, next) => {
    try {
        const response = await foodBlogsModel.create(req.body);
        if (!response) makeResponse({ res, status: 500, message: "Blog creation failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog created" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateFoodBlogs = async (req, res, next) => {
    try {
        const response = await foodBlogsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!response) makeResponse({ res, status: 500, message: "Blog updation failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog updated" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteFoodBlogs = async (req, res, next) => {
    console.log(req.params.id);
    try {
        const response = await foodBlogsModel.findByIdAndDelete(req.params.id);
        if (!response) makeResponse({ res, status: 500, message: "Blog deletion failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog deleted" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const registerVolunteer = async (req, res, next) => {};

export const getAllVolunteers = async (req, res, next) => {};

export const getVolunteerById = async (req, res, next) => {};

export const updateVolunteerById = async (req, res, next) => {};

export const deleteVolunteerById = async (req, res, next) => {};

export const requestForVolunteer = async (req, res, next) => {};

export const createFoodEvent = async (req, res, next) => {
    try {
        const response = await eduEventsModel.create(req.body);
        if (!response) makeResponse({ res, status: 500, message: "Event creation failed" });
        makeResponse({ res, status: 200, data: response, message: "Event created" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllFoodEvents = async (req, res, next) => {
    try {
        const response = await foodEventsModel.find({});
        if (!response) makeResponse({ res, status: 500, message: "No events found" });
        makeResponse({ res, status: 200, data: response, message: "Events found" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getFoodEventById = async (req, res, next) => {
    try {
        const response = await foodEventsModel.findById(req.params.id);
        if (!response) makeResponse({ res, status: 500, message: "No event found" });
        makeResponse({ res, status: 200, data: response, message: "Event found" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateFoodEventById = async (req, res, next) => {
    try {
        const response = await foodEventsModel.findByIdAndUpdate(req.params.id, req.body);
        if (!response) makeResponse({ res, status: 500, message: "Blog deletion failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog deleted" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteFoodEventById = async (req, res, next) => {
    try {
        const response = await foodEventsModel.findByIdAndDelete(req.params.id);
        if (!response) makeResponse({ res, status: 500, message: "Blog deletion failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog deleted" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};