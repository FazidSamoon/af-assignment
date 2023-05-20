import { badRequest } from '../errors/badRequest';
import employementBlogsModel from '../models/employementBlogs.models';
import employementSessionModel from '../models/employementSession.models';
import { makeResponse } from '../utils/response';

/*  Blog  */
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

/*  Session */
export const getAllEmployementSession = async (req, res, next) => {
  try {
    const response = await employementSessionModel.find({});
    if (!response)
      makeResponse({ res, status: 500, message: 'No session found' });
    makeResponse({
      res,
      status: 200,
      data: response,
      message: 'Session found',
    });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getEmployementSessionById = async (req, res, next) => {
  try {
    const response = await employementSessionModel.findById(req.params.id);
    if (!response)
      makeResponse({ res, status: 500, message: 'No Session found' });
    makeResponse({
      res,
      status: 200,
      data: response,
      message: 'Session found',
    });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const createEmployementSession = async (req, res, next) => {
  try {
    const response = await employementSessionModel.create(req.body);
    if (!response)
      makeResponse({ res, status: 500, message: 'Session creation failed' });
    makeResponse({
      res,
      status: 200,
      data: response,
      message: 'Session created',
    });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateEmployementSession = async (req, res, next) => {
  try {
    const response = await employementSessionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'Session updation failed' });
    makeResponse({
      res,
      status: 200,
      data: response,
      message: 'Session updated',
    });
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteEmployementSession = async (req, res, next) => {
  try {
    const response = await employementSessionModel.findByIdAndDelete(
      req.params.id
    );
    if (!response)
      makeResponse({ res, status: 500, message: 'Session deletion failed' });
    makeResponse({
      res,
      status: 200,
      data: response,
      message: 'Session deleted',
    });
  } catch (error) {
    throw new badRequest(error.message);
  }
};
