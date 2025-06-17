import { axiosInstance } from "../axios/axiosInstance";
import { endPoints } from "../endpoints/endPoints";

export const SignUpApi = async (formData : any) => {
  try {
    const response = await axiosInstance.post('http://localhost:5000'+endPoints.signup, formData)
    return response.data
  } catch (error) {
    return error
  }
}