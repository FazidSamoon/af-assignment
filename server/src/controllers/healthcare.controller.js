import { badRequest } from '../errors/badRequest';
import healthcareBlogsModel from '../models/healthcareBlogs.models';
import { makeResponse } from '../utils/response';
import healthcareWorkshopModel from '../models/healthcareWorkshop';

//blogs
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

//workshop
export const getAllHealthcareWorkshop = async (req, res, next) => {
  try {
    const response = await healthcareWorkshopModel.find({});
    if (!response)
      makeResponse({ res, status: 500, message: 'No workshops found' });
    makeResponse({ res, status: 200, data: response, message: 'Workshops found' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getHealthcareWorkshopById = async (req, res, next) => {
  try {
    const response = await healthcareWorkshopModel.findById(req.params.id);
    if (!response) makeResponse({ res, status: 500, message: 'No workshops found' });
    makeResponse({ res, status: 200, data: response, message: 'workshops found' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const createHealthcareWorkshop = async (req, res, next) => {
  try {
    const response = await healthcareWorkshopModel.create(req.body);
    if (!response)
      makeResponse({ res, status: 500, message: 'workshops creation failed' });
    makeResponse({ res, status: 200, data: response, message: 'workshops created' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateHealthcareWorkshop = async (req, res, next) => {
  try {
    const response = await healthcareWorkshopModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'workshops updation failed' });
    makeResponse({ res, status: 200, data: response, message: 'workshops updated' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteHealthcareWorkshop = async (req, res, next) => {
  try {
    const response = await healthcareWorkshopModel.findByIdAndDelete(
      req.params.id
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'workshops deletion failed' });
    makeResponse({ res, status: 200, data: response, message: 'workshops deleted' });
  } catch (error) {
    throw new badRequest(error.message);
  }
};
