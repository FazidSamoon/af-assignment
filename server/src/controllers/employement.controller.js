import { badRequest } from '../errors/badRequest';
import employementBlogsModel from '../models/employementBlogs.models';
import { makeResponse } from '../utils/response';

export const getAllEmployementBlogs = async (req, res, next) => {
  try {
    const response = await employementBlogsModel.find({});
    if (!response)
      makeResponse({ res, status: 500, message: 'No blogs found' });
    makeResponse({ res, status: 200, data: response, message: 'Blogs found' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getEmployementBlogsById = async (req, res, next) => {
  try {
    const response = await employementBlogsModel.findById(req.params.id);
    if (!response) makeResponse({ res, status: 500, message: 'No blog found' });
    makeResponse({ res, status: 200, data: response, message: 'Blog found' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const createEmployementBlogs = async (req, res, next) => {
  try {
    const response = await employementBlogsModel.create(req.body);
    if (!response)
      makeResponse({ res, status: 500, message: 'Blog creation failed' });
    makeResponse({ res, status: 200, data: response, message: 'Blog created' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateEmployementBlogs = async (req, res, next) => {
  try {
    const response = await employementBlogsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'Blog updation failed' });
    makeResponse({ res, status: 200, data: response, message: 'Blog updated' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteEmployementBlogs = async (req, res, next) => {
  try {
    const response = await employementBlogsModel.findByIdAndDelete(
      req.params.id
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'Blog deletion failed' });
    makeResponse({ res, status: 200, data: response, message: 'Blog deleted' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};
