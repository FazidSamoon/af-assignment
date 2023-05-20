import { apiRequest, axiosInstance } from "../axios";

export const sendEmail = async (req) => {
  return await apiRequest(() => axiosInstance.post("mail/send", req));
};

export const getAllEmails = async () => {
  return await apiRequest(() => axiosInstance.get("mail/get"));
};
