import axios from "axios";
import { NextApiResponse } from "next";
import { createResponse } from "../types/response";

export const handleApiError = (res: NextApiResponse, error: unknown) => {
  if (axios.isAxiosError(error)) {
    res
      .status(error.response?.status as number)
      .send(createResponse(false, error.response?.statusText as string, {}));
  }
  else {
    res
      .status(500)
      .send(createResponse(false, error as string, {}));
  }
};
