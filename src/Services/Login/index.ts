import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../Constants";

interface loginResponse {
  message?: string;
  token?: string;
}

interface loginProps {
  number: string;
  password: string;
}

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
  } catch (error) {
    return {};
  }
};
