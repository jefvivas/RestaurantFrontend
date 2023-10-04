import axios, { AxiosResponse } from "axios";
import { environment } from "../../Constants";
import { getToken, getAdminToken } from "../../Utils";
import { Product } from "../../Interfaces";
import { createProductProps, getProductsProps } from "../../Interfaces";

export const getProducts = async ({
  onlyAvailable,
}: getProductsProps): Promise<Product[]> => {
  const token = getToken();
  const adminToken = getAdminToken();

  const url = onlyAvailable
    ? `${environment.API_URL}/product?onlyAvailable=true`
    : `${environment.API_URL}/product`;

  const headers = {
    Authorization: `Bearer ${token || adminToken}`,
  };
  console.log(url,headers)

  try {
    const response: AxiosResponse<Product[]> = await axios.get(url, {
      headers,
    });

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
    const response = await axios.post(
      `${environment.API_URL}/product`,
      product,
      {
        headers,
      }
    );
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      throw new Error("Invalid data");
    } else {
      console.log(error);
    }
  }
};
