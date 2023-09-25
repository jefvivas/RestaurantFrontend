import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../Constants";
import { getToken } from "../../Utils";
import { Product } from "../../Interfaces";

export const getAllProducts = async (): Promise<Product[]> => {
  const token = getToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response: AxiosResponse<Product[]> = await axios.get(
      `${API_URL}/product`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    return [] as Product[];
  }
};
