import { apiRequest, axiosInstance } from '../axios';

export const getAllSessions = async (req) => {
  return await apiRequest(() => axiosInstance.get('employement/session'));
};

export const createSession = async (req) => {
  return await apiRequest(() => axiosInstance.post('employement/session', req));
};

export const updateSession = async (id, req) => {
  return await apiRequest(() =>
    axiosInstance.patch(`employement/session/${id}`, req)
  );
};

export const getSessionById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`employement/session/${id}`));
};

export const deleteSessionById = async (id) => {
  return await apiRequest(() =>
    axiosInstance.delete(`employement/session/${id}`)
  );
};
