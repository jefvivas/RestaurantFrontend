import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../Constants";
import { loginProps, loginResponse } from "../../Interfaces";
import { logError } from "../Log";

export const tableLogin = async ({
  number,
  password,
}: loginProps): Promise<loginResponse> => {
  try {
    const response: AxiosResponse<loginResponse> = await axios.post(
      `${API_URL}/login`,
      { number, password }
    );

    return response.data;
  } catch (error: any) {
    await logError({ type: "login_error", message: error.message });
    return {};
  }
};
