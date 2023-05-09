import { badRequest } from '../errors/badRequest';
import healthcareBlogsModel from '../models/healthcareBlogs.models';
import { makeResponse } from '../utils/response';

export const getAllHealthcareBlogs = async (req, res, next) => {
  try {
    const response = await healthcareBlogsModel.find({});
    if (!response)
      makeResponse({ res, status: 500, message: 'No blogs found' });
    makeResponse({ res, status: 200, data: response, message: 'Blogs found' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getHealthcareBlogsById = async (req, res, next) => {
  try {
    const response = await healthcareBlogsModel.findById(req.params.id);
    if (!response) makeResponse({ res, status: 500, message: 'No blog found' });
    makeResponse({ res, status: 200, data: response, message: 'Blog found' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const createHealthcareBlogs = async (req, res, next) => {
  try {
    const response = await healthcareBlogsModel.create(req.body);
    if (!response)
      makeResponse({ res, status: 500, message: 'Blog creation failed' });
    makeResponse({ res, status: 200, data: response, message: 'Blog created' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateHealthcareBlogs = async (req, res, next) => {
  try {
    const response = await healthcareBlogsModel.findByIdAndUpdate(
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

export const deleteHealthcareBlogs = async (req, res, next) => {
  try {
    const response = await healthcareBlogsModel.findByIdAndDelete(
      req.params.id
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'Blog deletion failed' });
    makeResponse({ res, status: 200, data: response, message: 'Blog deleted' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};
