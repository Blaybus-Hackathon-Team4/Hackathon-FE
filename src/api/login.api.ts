import { AxiosError } from "axios";
import { api } from "./api";

export const GetJwtToken = async (email: string, name: string) => {
  const path = "/auth/google";

  try {
    const response = await api.post(path, {
      email,
      name,
    });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetJwtToken] JWT 토근 발급 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[GetJwtToken] JWT 토근 발급 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};
