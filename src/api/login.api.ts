import { AxiosError } from "axios";
import { api } from "./api";

export const GetJwtToken = async () => {
  const path = `/api/v1/auth/login-success`;

  try {
    const response = await api.get(path);
    const data = response.data;
    console.log(data);
    // TODO: 로컬 스토리지에 토큰 저장하기
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
