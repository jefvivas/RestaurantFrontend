import axios, { AxiosResponse } from "axios";
import { environment } from "../../Constants";
import { getToken } from "../../Utils";
import { ProductRequestItems, ProductRequestProps } from "../../Interfaces";
import { logError } from "../Log";

export const productsRequest = async (cart: ProductRequestProps[]) => {
  const requestPayload = {
    Items: cart.map((product) => ({
      productId: product.productId,
      quantity: product.quantity,
    })),
  };
  const token = getToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    return await axios.post(`${environment.API_URL}/consume`, requestPayload, {
      headers,
    });
  } catch (error: any) {
    await logError({ type: "consume_error", message: error.message });
    console.log(error);
  }
};

export const getTableProducts = async (): Promise<ProductRequestItems> => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response: AxiosResponse<ProductRequestItems> = await axios.get(
      `${environment.API_URL}/consume`,
      { headers }
    );
    return response.data;
  } catch (error: any) {
    await logError({ type: "get_table_error", message: error.message });
    return {} as ProductRequestItems;
  }
};

export const resetTable = async (id: string): Promise<void> => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  try {
    await axios.put(`${environment.API_URL}/table/${id}`, [], { headers });
    return;
  } catch (error: any) {
    await logError({ type: "reset_table_error", message: error.message });
    return;
  }
};
