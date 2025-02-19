import { AxiosError } from "axios";
import { api } from "./api";
import { IUserInfo } from "../pages/login/components/LoginButton";

// ✅ 서버에 액세스 토큰 전송하여 사용자 정보 가져오기
export const GetJwtToken = async (userInfo: IUserInfo) => {
  const path = "/auth/google";

  try {
    console.log(userInfo.email);
    const response = await api.post(path, {
      email: userInfo.email,
      name: userInfo.name,
    }); // ✅ `authCode` → `accessToken`으로 변경
    console.log(response);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(
        "[GetJwtToken] jwt 토근 발급 실패: ",
        error.response?.data || "응답 없음"
      );
    } else {
      console.error("[GetUserData] 알 수 없는 에러: ", error);
    }
    throw error;
  }
};
