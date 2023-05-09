import { apiRequest, axiosInstance } from "../axios";

export const getAllFoodBlogs = async () => {
    return await apiRequest(() => axiosInstance.get("food/blogs"));
}