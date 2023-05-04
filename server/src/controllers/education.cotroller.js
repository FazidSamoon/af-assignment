import { badRequest } from "../errors/badRequest";
import eduBlogsModel from "../models/eduBlogs.models";
import { makeResponse } from "../utils/response";

export const getAllEducationalBlogs = async (req, res, next) => {
    try {
        const response = await eduBlogsModel.find({});
        if (!response) makeResponse({ res, status: 500, message: "No blogs found" });
        makeResponse({ res, status: 200, data: response, message: "Blogs found" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getEducationalBlogsById = async (req, res, next) => {
    try {
        const response = await eduBlogsModel.findById(req.params.id);
        if (!response) makeResponse({ res, status: 500, message: "No blog found" });
        makeResponse({ res, status: 200, data: response, message: "Blog found" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const createEducationalBlogs = async (req, res, next) => {
    try {
        const response = await eduBlogsModel.create(req.body);
        if (!response) makeResponse({ res, status: 500, message: "Blog creation failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog created" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateEducationalBlogs = async (req, res, next) => {
    try {
        const response = await eduBlogsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!response) makeResponse({ res, status: 500, message: "Blog updation failed" });
        makeResponse({ res, status: 200, data: response, message: "Blog updated" });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteEducationalBlogs = async (req, res, next) => {
    try {
        const response = await eduBlogsModel.findByIdAndDelete(req.params.id);
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

export const createEduEvent = async (req, res, next) => {};

export const getAllEduEvents = async (req, res, next) => {};

export const getEduEventById = async (req, res, next) => {};

export const updateEduEventById = async (req, res, next) => {};

export const deleteEduEventById = async (req, res, next) => {};