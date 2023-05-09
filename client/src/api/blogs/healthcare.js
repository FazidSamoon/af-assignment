import { apiRequest, axiosInstance } from '../axios';

export const getAllBlogs = async (req) => {
  return await apiRequest(() => axiosInstance.get('healthcare/blogs'));
};

export const createBlog = async (req) => {
  return await apiRequest(() => axiosInstance.post('healthcare/blogs', req));
};

export const updateBlog = async (id, req) => {
  return await apiRequest(() =>
    axiosInstance.patch(`healthcare/blogs/${id}`, req)
  );
};

export const getBlogById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`healthcare/blogs/${id}`));
};

export const deleteBlogById = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`healthcare/blogs/${id}`));
};
