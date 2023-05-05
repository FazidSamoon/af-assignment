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
export const getAllFoodBlogs = async () => {
    return await apiRequest(() => axiosInstance.get("food/blogs"));
}

export const createFoodBlog = async (req) => {
  return await apiRequest(() => axiosInstance.post("food/blogs", req));
};

export const updateFoodBlog = async (id, req) => {
  return await apiRequest(() => axiosInstance.patch(`food/blogs/${id}`, req));
};

export const getFoodBlogById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`food/blogs/${id}`));
};

export const deleteFoodBlog = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`food/blogs/${id}`));
};