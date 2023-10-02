import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../Constants";
import { getToken, getAdminToken } from "../../Utils";
import { Product } from "../../Interfaces";
import { createProductProps } from "../../Interfaces";

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

export const getAllAvailableProducts = async (): Promise<Product[]> => {
  const token = getToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response: AxiosResponse<Product[]> = await axios.get(
      `${API_URL}/availableproduct`,
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

export const createProduct = async (product: createProductProps) => {
  const token = getAdminToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.post(`${API_URL}/product`, product, {
      headers,
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      throw new Error("Invalid data");
    } else {
      console.log(error);
    }
  }
};
