import axios from "axios";
import { API_URL } from "../../Constants";
import { logErrorProps } from "../../Interfaces";
export const logError = async ({
  type,
  message,
}: logErrorProps): Promise<void> => {
  try {
    await axios.post(`${API_URL}/log`, {
      type,
      message,
    });
  } catch (error) {}
};
