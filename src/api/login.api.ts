import { AxiosError } from "axios";
import { api } from "./api";

export const GetUserData = async (accessToken: string) => {
  const path = "/auth/google";

  try {
    const response = await api.post(path, { authCode: accessToken });
    const data = response.data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetUserData] 사용자 정보 가져오기 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[GetUserData] 사용자 정보 가져오기 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};

export const GetJwtToken = async () => {
  const path = "/auth/login-success";

  try {
    const response = await api.get(path);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetJwtToken] JWT 토큰 가져오기 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error(
        "[GetJwtToken] JWT 토큰 가져오기 실패 - 알 수 없는 에러: ",
        error
      );
    }
    throw error;
  }
};
