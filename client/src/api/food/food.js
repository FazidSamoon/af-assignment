import { apiRequest, axiosInstance } from "../axios";

export const getAllFoodBlogs = async (req) => {
  return await apiRequest(() => axiosInstance.get("food/blogs"));
};

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

export const makeDonation = async (req) => {
  console.log(req)
  return await apiRequest(() => axiosInstance.post("food/donations", req));
}

export const getAllDonations = async () => {
  return await apiRequest(() => axiosInstance.get("food/donations"));
}

export const createProduct = async (req) => {
  return await apiRequest(() => axiosInstance.post("food/products", req));
}

export const getAllProducts = async () => {
  return await apiRequest(() => axiosInstance.get("food/products"));
}

export const getProductById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`food/products/${id}`));
}

export const updateProductById = async (id, req) => {
  return await apiRequest(() => axiosInstance.patch(`food/products/${id}`, req));
}

export const deleteProductById = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`food/products/${id}`));
}
