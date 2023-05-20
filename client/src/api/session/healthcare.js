import { apiRequest, axiosInstance } from '../axios';

export const getAllWorkshops = async (req) => {
  return await apiRequest(() => axiosInstance.get('healthcare/workshops'));
};

export const createWorkshop = async (req) => {
  return await apiRequest(() =>
    axiosInstance.post('healthcare/workshops', req)
  );
};

export const updateWorkshop = async (id, req) => {
  return await apiRequest(() =>
    axiosInstance.patch(`healthcare/workshops/${id}`, req)
  );
};

export const getWorkshopById = async (id) => {
  return await apiRequest(() =>
    axiosInstance.get(`healthcare/workshops/${id}`)
  );
};

export const deleteWorkshopById = async (id) => {
  return await apiRequest(() =>
    axiosInstance.delete(`healthcare/workshops/${id}`)
  );
};
