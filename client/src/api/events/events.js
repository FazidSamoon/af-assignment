import { apiRequest, axiosInstance } from "../axios";

export const getAllEvents = async (req) => {
    return await apiRequest(() => axiosInstance.get("education/events"));
  };
  
  export const createEvents = async (req) => {
    return await apiRequest(() => axiosInstance.post("education/events", req));
  };
  
  export const updateEvents = async (id, req) => {
    return await apiRequest(() => axiosInstance.patch(`education/events/${id}`, req));
  };
  
  export const getEventsById = async (id) => {
    return await apiRequest(() => axiosInstance.get(`education/events/${id}`));
  };
  
  export const deleteEvents = async (id) => {
    return await apiRequest(() => axiosInstance.delete(`education/events/${id}`));
  };