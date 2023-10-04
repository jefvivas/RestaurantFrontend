import axios from "axios";
import { environment } from "../../Constants";
import { logErrorProps, logOrderProps } from "../../Interfaces";

export const logError = async ({
  type,
  message,
}: logErrorProps): Promise<void> => {
  try {
    await axios.post(`${environment.API_URL}/errorlog`, {
      type,
      message,
    });
  } catch (error) {}
};

export const logOrder = async ({
  orderedItems,
  total,
}: logOrderProps): Promise<void> => {
  try {
    await axios.post(`${environment.API_URL}/orderlog`, {
      orderedItems,
      total,
    });
  } catch (error) {}
};
