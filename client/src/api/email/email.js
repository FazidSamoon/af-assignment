import { apiRequest, axiosInstance } from "../axios";

export const sendEmail = async (req) => {
  return await apiRequest(() => axiosInstance.post("mail/send", req));
};
