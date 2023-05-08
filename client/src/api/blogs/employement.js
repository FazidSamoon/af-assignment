import { apiRequest, axiosInstance } from '../axios';

export const getAllBlogs = async (req) => {
  return await apiRequest(() => axiosInstance.get('employement/blogs'));
};

export const createBlog = async (req) => {
  return await apiRequest(() => axiosInstance.post('employement/blogs', req));
};

export const updateBlog = async (id, req) => {
  return await apiRequest(() =>
    axiosInstance.patch(`employement/blogs/${id}`, req)
  );
};

export const getBlogById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`employement/blogs/${id}`));
};

export const deleteBlogById = async (id) => {
  return await apiRequest(() =>
    axiosInstance.delete(`employement/blogs/${id}`)
  );
};
