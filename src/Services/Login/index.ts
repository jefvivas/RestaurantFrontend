import axios, { AxiosResponse } from "axios";
import { environment } from "../../Constants";
import {
  tableLoginProps,
  loginResponse,
  adminLoginProps,
} from "../../Interfaces";
import { logError } from "../Log";

export const tableLogin = async ({
  number,
  password,
}: tableLoginProps): Promise<loginResponse> => {
  try {
    const response: AxiosResponse<loginResponse> = await axios.post(
      `${environment.API_URL}/login`,
      { number, password }
    );

    return response.data;
  } catch (error: any) {
    await logError({ type: "login_error", message: error.message });
    return {};
  }
};

export const adminLogin = async ({
  username,
  password,
}: adminLoginProps): Promise<loginResponse> => {
  try {
    const response: AxiosResponse<loginResponse> = await axios.post(
      `${environment.API_URL}/admin/login`,
      { username, password }
    );

    return response.data;
  } catch (error: any) {
    await logError({ type: "login_error", message: error.message });
    return {};
  }
};
