import axios from "axios";
import { baseUrl}  from "../constant";

export const fetchUserData = async (userName, password) => {
  try {
    const apiKey = "YOUR_KEY"; // Replace with your API key
    const response = await axios.get(
        baseUrl+`/getUserData/userName/password`,
      {
        params: {
          key: apiKey,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error
  }
};

export const logout = async() =>{
    return true;
}