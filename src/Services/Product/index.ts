import axios, { AxiosResponse } from "axios";
import { environment } from "../../Constants";
import { getToken, getAdminToken } from "../../Utils";
import { Product } from "../../Interfaces";
import {
  createProductProps,
  getProductsProps,
  deleteProductProps,
  editProductProps,
} from "../../Interfaces";

export const getProducts = async ({
  onlyAvailable,
}: getProductsProps): Promise<Product[]> => {
  const token = getToken();
  const adminToken = getAdminToken();

  const url = onlyAvailable
    ? `${environment.API_URL}/product`
    : `${environment.API_URL}/product?onlyAvailable=false`;

  const headers = {
    Authorization: `Bearer ${token || adminToken}`,
  };

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

export const deleteProduct = async (product: deleteProductProps) => {
  const token = getAdminToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.delete(
      `${environment.API_URL}/product/${product.id}`,

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

export const editProduct = async (product: editProductProps) => {
  const token = getAdminToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    const response = await axios.put(
      `${environment.API_URL}/product/${product.id}`,
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
