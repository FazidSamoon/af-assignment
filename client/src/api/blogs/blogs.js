import { apiRequest, axiosInstance } from "../axios";

export const getAllBlogs = async (req) => {
  return await apiRequest(() => axiosInstance.get("education/blogs"));
};

export const createBlog = async (req) => {
  return await apiRequest(() => axiosInstance.post("education/blogs", req));
};

export const updateBlog = async (id, req) => {
  return await apiRequest(() => axiosInstance.patch(`education/blogs/${id}`, req));
};

export const getBlogById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`education/blogs/${id}`));
};

export const deleteBlog = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`education/blogs/${id}`));
};


//foodBlogs

