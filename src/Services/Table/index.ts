import axios from "axios";
import { API_URL } from "../../Constants";
import { getToken } from "../../Utils";
interface ProductRequestProps {
  productId: string;
  quantity: number;
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
