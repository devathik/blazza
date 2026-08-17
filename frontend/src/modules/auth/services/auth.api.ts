import { apiClient } from "@/lib/apiClient";

export const loginWithGoogleApi = async (googleToken: string) => {
  const response = await apiClient.post("/users/login", { googleToken });
  return response.data;
};
