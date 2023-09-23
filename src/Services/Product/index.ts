import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../Constants";
import { getToken } from "../../Utils";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

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
