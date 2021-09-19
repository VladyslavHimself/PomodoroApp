import axios from "axios";

export const getResponseFromServer = async (apiKey: string, authData: {email: string, password: string}) => {
  try {
    return await axios.post(apiKey, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    });
  } catch (e) {
    return 400;
  }
}