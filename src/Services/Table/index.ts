import axios, { AxiosResponse } from "axios";
import { API_URL } from "../../Constants";
import { getToken } from "../../Utils";

interface ProductRequestProps {
  productId: string;
  quantity: number;
}
interface ProductRequestItems {
  items: ProductRequestProps[];
}

export const productsRequest = async ({
  productId,
  quantity,
}: ProductRequestProps) => {
  const requestPayload = {
    Items: [
      {
        productId,
        quantity,
      },
    ],
  };
  const token = getToken();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    return await axios.post(`${API_URL}/consume`, requestPayload, { headers });
  } catch (error) {
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
      `${API_URL}/consume`,
      { headers }
    );
    return response.data;
  } catch (error) {
    return {} as ProductRequestItems;
  }
};
